import { ethers } from "ethers";
import {
  COLLECTION_ADDRESS,
  RONIN_RPC,
} from "../../lib/contracts";

const COUNTRY_COUNT = 48;

const TRANSFER_SINGLE_TOPIC = ethers.id(
  "TransferSingle(address,address,address,uint256,uint256)"
);

const TRANSFER_BATCH_TOPIC = ethers.id(
  "TransferBatch(address,address,address,uint256[],uint256[])"
);

type TokenStats = {
  minted: number;
  owners: number;
};

function topicToAddress(topic: string) {
  return ethers.getAddress(`0x${topic.slice(26)}`);
}

export async function GET() {
  try {
    if (!COLLECTION_ADDRESS) {
      return Response.json(
        { error: "Missing NEXT_PUBLIC_COLLECTION_ADDRESS" },
        { status: 500 }
      );
    }

    const provider = new ethers.JsonRpcProvider(RONIN_RPC);
    const currentBlock = await provider.getBlockNumber();

    /**
     * Best: replace this with your collection deployment block.
     */
    const fromBlock = Math.max(0, currentBlock - 500_000);

    const logs = await provider.getLogs({
      address: COLLECTION_ADDRESS,
      fromBlock,
      toBlock: currentBlock,
      topics: [[TRANSFER_SINGLE_TOPIC, TRANSFER_BATCH_TOPIC]],
    });

    const minted: Record<number, bigint> = {};
    const balances: Record<number, Map<string, bigint>> = {};

    for (let tokenId = 1; tokenId <= COUNTRY_COUNT; tokenId++) {
      minted[tokenId] = 0n;
      balances[tokenId] = new Map();
    }

    function addBalance(owner: string, tokenId: number, amount: bigint) {
      if (tokenId < 1 || tokenId > COUNTRY_COUNT) return;
      if (owner === ethers.ZeroAddress) return;

      const key = owner.toLowerCase();
      const current = balances[tokenId].get(key) || 0n;

      balances[tokenId].set(key, current + amount);
    }

    function subBalance(owner: string, tokenId: number, amount: bigint) {
      if (tokenId < 1 || tokenId > COUNTRY_COUNT) return;
      if (owner === ethers.ZeroAddress) return;

      const key = owner.toLowerCase();
      const current = balances[tokenId].get(key) || 0n;

      balances[tokenId].set(key, current - amount);
    }

    for (const log of logs) {
      if (log.topics[0] === TRANSFER_SINGLE_TOPIC) {
        const from = topicToAddress(log.topics[2]);
        const to = topicToAddress(log.topics[3]);

        const [id, value] = ethers.AbiCoder.defaultAbiCoder().decode(
          ["uint256", "uint256"],
          log.data
        );

        const tokenId = Number(id);
        const amount = BigInt(value.toString());

        if (from === ethers.ZeroAddress) {
          minted[tokenId] = (minted[tokenId] || 0n) + amount;
        }

        subBalance(from, tokenId, amount);
        addBalance(to, tokenId, amount);
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

          if (from === ethers.ZeroAddress) {
            minted[tokenId] = (minted[tokenId] || 0n) + amount;
          }

          subBalance(from, tokenId, amount);
          addBalance(to, tokenId, amount);
        });
      }
    }

    const stats: Record<number, TokenStats> = {};

    for (let tokenId = 1; tokenId <= COUNTRY_COUNT; tokenId++) {
      const ownerCount = Array.from(balances[tokenId].values()).filter(
        (balance) => balance > 0n
      ).length;

      stats[tokenId] = {
        minted: Number(minted[tokenId] || 0n),
        owners: ownerCount,
      };
    }

    return Response.json(stats, {
      headers: {
        "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (err: any) {
    return Response.json(
      { error: err?.message || "Failed to load stats" },
      { status: 500 }
    );
  }
}