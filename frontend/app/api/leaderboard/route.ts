export const dynamic = "force-dynamic";

import { ethers } from "ethers";
import { COLLECTION_ADDRESS, RONIN_RPC } from "../../lib/contracts";
import { countries } from "../../lib/countries";

const COUNTRY_COUNT = 48;
const DEPLOYMENT_BLOCK = 56865900;
const CHUNK_SIZE = 10;
const MAX_BLOCKS_PER_CALL = 1_000;


const TRANSFER_SINGLE_TOPIC = ethers.id(
  "TransferSingle(address,address,address,uint256,uint256)"
);

const TRANSFER_BATCH_TOPIC = ethers.id(
  "TransferBatch(address,address,address,uint256[],uint256[])"
);

type CachedState = {
  lastIndexedBlock: number;
  balances: Record<string, Record<string, string>>;
  latestMints: {
    minter: string;
    countryId: number;
    country: string;
    txHash: string;
    blockNumber: number;
  }[];
};

const globalForLeaderboard = globalThis as unknown as {
  leaderboardState?: CachedState;
  leaderboardIndexing?: Promise<CachedState>;
};

function emptyState(): CachedState {
  return {
    lastIndexedBlock: DEPLOYMENT_BLOCK - 1,
    balances: {},
    latestMints: [],
  };
}

function topicToAddress(topic: string) {
  return ethers.getAddress(`0x${topic.slice(26)}`);
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
  }

  return logs;
}

function addBalance(
  state: CachedState,
  owner: string,
  tokenId: number,
  amount: bigint
) {
  if (owner === ethers.ZeroAddress) return;
  if (tokenId < 1 || tokenId > COUNTRY_COUNT) return;

  const user = owner.toLowerCase();
  const id = String(tokenId);

  state.balances[user] ??= {};
  state.balances[user][id] = (
    BigInt(state.balances[user][id] || "0") + amount
  ).toString();
}

function subBalance(
  state: CachedState,
  owner: string,
  tokenId: number,
  amount: bigint
) {
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
  state: CachedState,
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
      if (seen.has(mint.txHash)) return false;
      seen.add(mint.txHash);
      return true;
    })
    .sort((a, b) => b.blockNumber - a.blockNumber)
    .slice(0, 5);
}

function applyLog(state: CachedState, log: ethers.Log) {
  if (log.topics[0] === TRANSFER_SINGLE_TOPIC) {
    const from = topicToAddress(log.topics[2]);
    const to = topicToAddress(log.topics[3]);

    const [id, value] = ethers.AbiCoder.defaultAbiCoder().decode(
      ["uint256", "uint256"],
      log.data
    );

    const tokenId = Number(id);
    const amount = BigInt(value.toString());

    subBalance(state, from, tokenId, amount);
    addBalance(state, to, tokenId, amount);

    if (from === ethers.ZeroAddress) {
      addLatestMint(state, to, tokenId, log.transactionHash, log.blockNumber);
    }
  }

  if (log.topics[0] === TRANSFER_BATCH_TOPIC) {
    const from = topicToAddress(log.topics[2]);
    const to = topicToAddress(log.topics[3]);

    const [ids, values] = ethers.AbiCoder.defaultAbiCoder().decode(
      ["uint256[]", "uint256[]"],
      log.data
    );

    ids.forEach((id: bigint, index: number) => {
      const tokenId = Number(id);
      const amount = BigInt(values[index].toString());

      subBalance(state, from, tokenId, amount);
      addBalance(state, to, tokenId, amount);

      if (from === ethers.ZeroAddress) {
        addLatestMint(state, to, tokenId, log.transactionHash, log.blockNumber);
      }
    });
  }
}

function buildCollectors(state: CachedState) {
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
        totalBalance: positiveBalances
          .reduce((sum, balance) => sum + balance, 0n)
          .toString(),
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

async function updateIndex() {
  if (!COLLECTION_ADDRESS) {
    throw new Error("Missing NEXT_PUBLIC_COLLECTION_ADDRESS");
  }

  const provider = new ethers.JsonRpcProvider(RONIN_RPC);
  const chainCurrentBlock = await provider.getBlockNumber();
  const state = globalForLeaderboard.leaderboardState ?? emptyState();

    const fromBlock = Math.max(
    DEPLOYMENT_BLOCK,
    state.lastIndexedBlock + 1
    );

    const currentBlock = Math.min(
    chainCurrentBlock,
    fromBlock + MAX_BLOCKS_PER_CALL - 1
    );

  if (fromBlock <= currentBlock) {
    const logs = await getLogsChunked(
      provider,
      {
        address: COLLECTION_ADDRESS,
        topics: [[TRANSFER_SINGLE_TOPIC, TRANSFER_BATCH_TOPIC]],
      },
      fromBlock,
      currentBlock
    );

    for (const log of logs) {
      applyLog(state, log);
    }

    state.lastIndexedBlock = currentBlock;
  }

  globalForLeaderboard.leaderboardState = state;

  return state;
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);

    if (url.searchParams.get("reset") === "1") {
      globalForLeaderboard.leaderboardState = undefined;
      globalForLeaderboard.leaderboardIndexing = undefined;
    }

    if (!globalForLeaderboard.leaderboardIndexing) {
      globalForLeaderboard.leaderboardIndexing = updateIndex();
    }

    const state = await globalForLeaderboard.leaderboardIndexing;

    globalForLeaderboard.leaderboardIndexing = undefined;

    return Response.json({
      lastIndexedBlock: state.lastIndexedBlock,
      balancesCount: Object.keys(state.balances).length,
      latestMintsCount: state.latestMints.length,
      collectorsCount: buildCollectors(state).length,
      collectors: buildCollectors(state),
      latestMints: state.latestMints,
    });
  } catch (err: any) {
    globalForLeaderboard.leaderboardIndexing = undefined;

    return Response.json(
      { error: err?.message || "Failed to load leaderboard" },
      { status: 500 }
    );
  }
}