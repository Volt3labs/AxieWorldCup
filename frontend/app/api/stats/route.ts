export const dynamic = "force-dynamic";

import { ethers } from "ethers";
import { COLLECTION_ADDRESS } from "../../lib/contracts";

const COUNTRY_COUNT = 48;
const DEPLOYMENT_BLOCK = 56865900;

const CHUNK_SIZE = 10;
const MAX_BLOCKS_PER_CALL = 100;
const DELAY_BETWEEN_REQUESTS_MS = 250;

const TRANSFER_SINGLE_TOPIC = ethers.id(
  "TransferSingle(address,address,address,uint256,uint256)"
);

const TRANSFER_BATCH_TOPIC = ethers.id(
  "TransferBatch(address,address,address,uint256[],uint256[])"
);

type CachedState = {
  lastIndexedBlock: number;
  minted: Record<string, string>;
  balances: Record<string, Record<string, string>>;
};

const globalForStats = globalThis as unknown as {
  statsState?: CachedState;
  statsIndexing?: Promise<CachedState>;
};
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function emptyState(): CachedState {
  const minted: Record<string, string> = {};

  for (let tokenId = 1; tokenId <= COUNTRY_COUNT; tokenId++) {
    minted[String(tokenId)] = "0";
  }

  return {
    lastIndexedBlock: DEPLOYMENT_BLOCK - 1,
    minted,
    balances: {},
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

    try {
      const chunkLogs = await provider.getLogs({
        ...filter,
        fromBlock: start,
        toBlock: end,
      });

      logs.push(...chunkLogs);

      await sleep(DELAY_BETWEEN_REQUESTS_MS);
    } catch (err: any) {
      if (err?.code === "UNKNOWN_ERROR" || err?.error?.code === 429) {
        await sleep(2000);

        const retryLogs = await provider.getLogs({
          ...filter,
          fromBlock: start,
          toBlock: end,
        });

        logs.push(...retryLogs);
        await sleep(DELAY_BETWEEN_REQUESTS_MS);
        continue;
      }

      throw err;
    }
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

    if (
      from === ethers.ZeroAddress &&
      tokenId >= 1 &&
      tokenId <= COUNTRY_COUNT
    ) {
      state.minted[String(tokenId)] = (
        BigInt(state.minted[String(tokenId)] || "0") + amount
      ).toString();
    }

    subBalance(state, from, tokenId, amount);
    addBalance(state, to, tokenId, amount);
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

      if (
        from === ethers.ZeroAddress &&
        tokenId >= 1 &&
        tokenId <= COUNTRY_COUNT
      ) {
        state.minted[String(tokenId)] = (
          BigInt(state.minted[String(tokenId)] || "0") + amount
        ).toString();
      }

      subBalance(state, from, tokenId, amount);
      addBalance(state, to, tokenId, amount);
    });
  }
}

function buildStats(state: CachedState) {
  const stats: Record<number, { minted: number; owners: number }> = {};

  for (let tokenId = 1; tokenId <= COUNTRY_COUNT; tokenId++) {
    let owners = 0;

    for (const userBalances of Object.values(state.balances)) {
      if (BigInt(userBalances[String(tokenId)] || "0") > 0n) {
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

async function updateIndex() {
  if (!COLLECTION_ADDRESS) {
    throw new Error("Missing NEXT_PUBLIC_COLLECTION_ADDRESS");
  }

  if (!process.env.RONIN_RPC_URL) {
    throw new Error("Missing RONIN_RPC_URL");
  }

  const provider = new ethers.JsonRpcProvider(process.env.RONIN_RPC_URL);
  const chainCurrentBlock = await provider.getBlockNumber();

  const state = globalForStats.statsState ?? emptyState();

  const fromBlock = Math.max(
    DEPLOYMENT_BLOCK,
    state.lastIndexedBlock + 1
  );

  const toBlock = Math.min(
    chainCurrentBlock,
    fromBlock + MAX_BLOCKS_PER_CALL - 1
  );

  if (fromBlock <= toBlock) {
    const logs = await getLogsChunked(
      provider,
      {
        address: COLLECTION_ADDRESS,
        topics: [[TRANSFER_SINGLE_TOPIC, TRANSFER_BATCH_TOPIC]],
      },
      fromBlock,
      toBlock
    );

    for (const log of logs) {
      applyLog(state, log);
    }

    state.lastIndexedBlock = toBlock;
  }

  globalForStats.statsState = state;

  return {
    state,
    chainCurrentBlock,
  };
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);

    if (url.searchParams.get("reset") === "1") {
      globalForStats.statsState = undefined;
      globalForStats.statsIndexing = undefined;
    }

    if (!globalForStats.statsIndexing) {
      globalForStats.statsIndexing = updateIndex().then((result) => result.state);
    }

    const state = await globalForStats.statsIndexing;
    globalForStats.statsIndexing = undefined;

    const provider = new ethers.JsonRpcProvider(process.env.RONIN_RPC_URL);
    const chainCurrentBlock = await provider.getBlockNumber();

    return Response.json({
      lastIndexedBlock: state.lastIndexedBlock,
      chainCurrentBlock,
      isFullySynced: state.lastIndexedBlock >= chainCurrentBlock,
      balancesCount: Object.keys(state.balances).length,
      stats: buildStats(state),
    });
  } catch (err: any) {
    globalForStats.statsIndexing = undefined;

    return Response.json(
      {
        error: err?.message || "Failed to load stats",
        code: err?.code,
        data: err?.data,
        shortMessage: err?.shortMessage,
      },
      { status: 500 }
    );
  }
}