import { neon } from "@neondatabase/serverless";
import { ethers } from "ethers";
import { countries } from "./countries";

const COUNTRY_COUNT = 48;
const DEPLOYMENT_BLOCK = 56865900;

const CHUNK_SIZE = 10;
const MAX_BLOCKS_PER_CALL = 100;
const DELAY_MS = 100;

const TRANSFER_SINGLE_TOPIC = ethers.id(
  "TransferSingle(address,address,address,uint256,uint256)"
);

const TRANSFER_BATCH_TOPIC = ethers.id(
  "TransferBatch(address,address,address,uint256[],uint256[])"
);

const sql = neon(process.env.DATABASE_URL!);

export type IndexState = {
  lastIndexedBlock: number;
  minted: Record<string, string>;
  balances: Record<string, Record<string, string>>;
  latestMints: {
    minter: string;
    countryId: number;
    country: string;
    txHash: string;
    blockNumber: number;
  }[];
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function emptyState(): IndexState {
  const minted: Record<string, string> = {};

  for (let i = 1; i <= COUNTRY_COUNT; i++) {
    minted[String(i)] = "0";
  }

  return {
    lastIndexedBlock: DEPLOYMENT_BLOCK - 1,
    minted,
    balances: {},
    latestMints: [],
  };
}

function topicToAddress(topic: string) {
  return ethers.getAddress(`0x${topic.slice(26)}`);
}

async function loadState(): Promise<IndexState> {
  const rows = await sql`
    SELECT value FROM app_state WHERE key = 'worldcup_index'
  `;

  return (rows[0]?.value as IndexState) ?? emptyState();
}

async function saveState(state: IndexState) {
  await sql`
    INSERT INTO app_state (key, value, updated_at)
    VALUES ('worldcup_index', ${JSON.stringify(state)}, now())
    ON CONFLICT (key)
    DO UPDATE SET value = EXCLUDED.value, updated_at = now()
  `;
}

async function getLogsChunked(
  provider: ethers.JsonRpcProvider,
  filter: ethers.Filter,
  fromBlock: number,
  toBlock: number
) {
  const logs: ethers.Log[] = [];

  for (let start = fromBlock; start <= toBlock; start += CHUNK_SIZE) {
    const end = Math.min(start + CHUNK_SIZE - 1, toBlock);

    const chunkLogs = await provider.getLogs({
      ...filter,
      fromBlock: start,
      toBlock: end,
    });

    logs.push(...chunkLogs);
    await sleep(DELAY_MS);
  }

  return logs;
}

function addBalance(state: IndexState, owner: string, tokenId: number, amount: bigint) {
  if (owner === ethers.ZeroAddress) return;
  if (tokenId < 1 || tokenId > COUNTRY_COUNT) return;

  const user = owner.toLowerCase();
  const id = String(tokenId);

  state.balances[user] ??= {};
  state.balances[user][id] = (
    BigInt(state.balances[user][id] || "0") + amount
  ).toString();
}

function subBalance(state: IndexState, owner: string, tokenId: number, amount: bigint) {
  if (owner === ethers.ZeroAddress) return;
  if (tokenId < 1 || tokenId > COUNTRY_COUNT) return;

  const user = owner.toLowerCase();
  const id = String(tokenId);

  state.balances[user] ??= {};
  state.balances[user][id] = (
    BigInt(state.balances[user][id] || "0") - amount
  ).toString();
}

function addLatestMint(
  state: IndexState,
  minter: string,
  tokenId: number,
  txHash: string,
  blockNumber: number
) {
  if (tokenId < 1 || tokenId > COUNTRY_COUNT) return;

  state.latestMints.unshift({
    minter,
    countryId: tokenId,
    country: countries[tokenId - 1] || `Country #${tokenId}`,
    txHash,
    blockNumber,
  });

  const seen = new Set<string>();

  state.latestMints = state.latestMints
    .filter((mint) => {
      const key = `${mint.txHash}-${mint.countryId}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => b.blockNumber - a.blockNumber)
    .slice(0, 5);
}

function applyLog(state: IndexState, log: ethers.Log) {
  const from = topicToAddress(log.topics[2]);
  const to = topicToAddress(log.topics[3]);

  if (log.topics[0] === TRANSFER_SINGLE_TOPIC) {
    const [id, value] = ethers.AbiCoder.defaultAbiCoder().decode(
      ["uint256", "uint256"],
      log.data
    );

    const tokenId = Number(id);
    const amount = BigInt(value.toString());

    if (from === ethers.ZeroAddress && tokenId >= 1 && tokenId <= COUNTRY_COUNT) {
      state.minted[String(tokenId)] = (
        BigInt(state.minted[String(tokenId)] || "0") + amount
      ).toString();

      addLatestMint(state, to, tokenId, log.transactionHash, log.blockNumber);
    }

    subBalance(state, from, tokenId, amount);
    addBalance(state, to, tokenId, amount);
  }

  if (log.topics[0] === TRANSFER_BATCH_TOPIC) {
    const [ids, values] = ethers.AbiCoder.defaultAbiCoder().decode(
      ["uint256[]", "uint256[]"],
      log.data
    );

    ids.forEach((id: bigint, index: number) => {
      const tokenId = Number(id);
      const amount = BigInt(values[index].toString());

      if (from === ethers.ZeroAddress && tokenId >= 1 && tokenId <= COUNTRY_COUNT) {
        state.minted[String(tokenId)] = (
          BigInt(state.minted[String(tokenId)] || "0") + amount
        ).toString();

        addLatestMint(state, to, tokenId, log.transactionHash, log.blockNumber);
      }

      subBalance(state, from, tokenId, amount);
      addBalance(state, to, tokenId, amount);
    });
  }
}

export async function updateIndex(maxBlocks = MAX_BLOCKS_PER_CALL) {
  const collection = process.env.NEXT_PUBLIC_COLLECTION_ADDRESS;
  const rpc = process.env.RONIN_RPC_URL;

  if (!collection) throw new Error("Missing NEXT_PUBLIC_COLLECTION_ADDRESS");
  if (!rpc) throw new Error("Missing RONIN_RPC_URL");
  if (!process.env.DATABASE_URL) throw new Error("Missing DATABASE_URL");

  const provider = new ethers.JsonRpcProvider(rpc);
  const chainCurrentBlock = await provider.getBlockNumber();

  const state = await loadState();

  const fromBlock = Math.max(DEPLOYMENT_BLOCK, state.lastIndexedBlock + 1);
  const toBlock = Math.min(chainCurrentBlock, fromBlock + maxBlocks - 1);

  if (fromBlock <= toBlock) {
    const logs = await getLogsChunked(
      provider,
      {
        address: collection,
        topics: [[TRANSFER_SINGLE_TOPIC, TRANSFER_BATCH_TOPIC]],
      },
      fromBlock,
      toBlock
    );

    for (const log of logs) {
      applyLog(state, log);
    }

    state.lastIndexedBlock = toBlock;
    await saveState(state);
  }

  return {
    state,
    chainCurrentBlock,
    isFullySynced: state.lastIndexedBlock >= chainCurrentBlock,
  };
}

export function buildStats(state: IndexState) {
  const stats: Record<number, { minted: number; owners: number }> = {};

  for (let tokenId = 1; tokenId <= COUNTRY_COUNT; tokenId++) {
    let owners = 0;

    for (const balances of Object.values(state.balances)) {
      if (BigInt(balances[String(tokenId)] || "0") > 0n) {
        owners++;
      }
    }

    stats[tokenId] = {
      minted: Number(state.minted[String(tokenId)] || "0"),
      owners,
    };
  }

  return stats;
}

export function buildCollectors(state: IndexState) {
  return Object.entries(state.balances)
    .map(([address, tokenBalances]) => {
      const positiveBalances = Object.entries(tokenBalances)
        .filter(([tokenId, balance]) => {
          const id = Number(tokenId);
          return id >= 1 && id <= COUNTRY_COUNT && BigInt(balance) > 0n;
        })
        .map(([, balance]) => BigInt(balance));

      return {
        address,
        uniqueCountries: positiveBalances.length,
        totalBalance: positiveBalances.reduce((sum, b) => sum + b, 0n).toString(),
      };
    })
    .filter((item) => item.uniqueCountries > 0)
    .sort((a, b) => {
      if (b.uniqueCountries !== a.uniqueCountries) {
        return b.uniqueCountries - a.uniqueCountries;
      }

      return Number(BigInt(b.totalBalance) - BigInt(a.totalBalance));
    })
    .slice(0, 20);
}