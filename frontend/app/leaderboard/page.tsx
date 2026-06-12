"use client";

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { countries, imageUrl } from "../lib/countries";
import { COLLECTION_ADDRESS, RONIN_RPC } from "../lib/contracts";
import Link from "next/link";

type Collector = {
  address: string;
  uniqueCountries: number;
  totalBalance: bigint;
};

type LatestMint = {
  minter: string;
  countryId: number;
  country: string;
  axieTokenId: string;
  requestId: string;
  txHash: string;
};

const COUNTRY_COUNT = 48;

const TRANSFER_SINGLE_TOPIC = ethers.id(
  "TransferSingle(address,address,address,uint256,uint256)"
);

const TRANSFER_BATCH_TOPIC = ethers.id(
  "TransferBatch(address,address,address,uint256[],uint256[])"
);

const COUNTRY_MINTED_TOPIC = ethers.id(
  "CountryMinted(address,uint256,uint256,uint256)"
);

const COLLECTION_EVENTS_ABI = [
  "event CountryMinted(address indexed minter, uint256 indexed countryId, uint256 indexed axieTokenId, uint256 requestId)",
];

const REWARDS = [
  {
    title: "Winning Country",
    amount: "50 AXS",
    description: "Shared between holders of the country that wins the World Cup.",
  },
  {
    title: "Top Scoring Country",
    amount: "25 AXS",
    description: "Shared between holders of the country that scores the most goals.",
  },
  {
    title: "Golden Ball Country",
    amount: "25 AXS",
    description: "Shared between holders of the Golden Ball winner's country.",
  },
  {
    title: "Full Collection",
    amount: "50 AXS",
    description: "Shared between wallets holding all 48 country NFTs.",
  },
];

const collectionInterface = new ethers.Interface(COLLECTION_EVENTS_ABI);

function shortAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function LeaderboardPage() {
  const [collectors, setCollectors] = useState<Collector[]>([]);
  const [latestMints, setLatestMints] = useState<LatestMint[]>([]);
  const [status, setStatus] = useState("");

  async function loadLeaderboard() {
    try {
      if (!COLLECTION_ADDRESS) {
        throw new Error("Missing NEXT_PUBLIC_COLLECTION_ADDRESS");
      }

      setStatus("Loading leaderboard...");

      const provider = new ethers.JsonRpcProvider(RONIN_RPC);
      const currentBlock = await provider.getBlockNumber();

      /**
       * Adjust this if your RPC limits logs.
       * Smaller = safer but may miss older collectors.
       */
      const fromBlock = Math.max(0, currentBlock - 250_000);

      const transferLogs = await provider.getLogs({
        address: COLLECTION_ADDRESS,
        fromBlock,
        toBlock: currentBlock,
        topics: [[TRANSFER_SINGLE_TOPIC, TRANSFER_BATCH_TOPIC]],
      });

      const balances = new Map<string, Map<number, bigint>>();

      function addBalance(owner: string, tokenId: number, amount: bigint) {
        if (tokenId < 1 || tokenId > COUNTRY_COUNT) return;
        if (owner === ethers.ZeroAddress) return;

        const key = owner.toLowerCase();

        if (!balances.has(key)) {
          balances.set(key, new Map());
        }

        const userBalances = balances.get(key)!;
        userBalances.set(tokenId, (userBalances.get(tokenId) || 0n) + amount);
      }

      function subtractBalance(owner: string, tokenId: number, amount: bigint) {
        if (tokenId < 1 || tokenId > COUNTRY_COUNT) return;
        if (owner === ethers.ZeroAddress) return;

        const key = owner.toLowerCase();

        if (!balances.has(key)) {
          balances.set(key, new Map());
        }

        const userBalances = balances.get(key)!;
        userBalances.set(tokenId, (userBalances.get(tokenId) || 0n) - amount);
      }

      for (const log of transferLogs) {
        if (log.topics[0] === TRANSFER_SINGLE_TOPIC) {
          const decoded = ethers.AbiCoder.defaultAbiCoder().decode(
            ["uint256", "uint256"],
            log.data
          );

          const from = ethers.getAddress(`0x${log.topics[2].slice(26)}`);
          const to = ethers.getAddress(`0x${log.topics[3].slice(26)}`);
          const tokenId = Number(decoded[0]);
          const amount = BigInt(decoded[1].toString());

          subtractBalance(from, tokenId, amount);
          addBalance(to, tokenId, amount);
        }

        if (log.topics[0] === TRANSFER_BATCH_TOPIC) {
          const decoded = ethers.AbiCoder.defaultAbiCoder().decode(
            ["uint256[]", "uint256[]"],
            log.data
          );

          const from = ethers.getAddress(`0x${log.topics[2].slice(26)}`);
          const to = ethers.getAddress(`0x${log.topics[3].slice(26)}`);
          const ids = decoded[0] as bigint[];
          const amounts = decoded[1] as bigint[];

          ids.forEach((id, index) => {
            const tokenId = Number(id);
            const amount = amounts[index];

            subtractBalance(from, tokenId, amount);
            addBalance(to, tokenId, amount);
          });
        }
      }

      const ranked = Array.from(balances.entries())
        .map(([address, tokenBalances]) => {
          const positiveBalances = Array.from(tokenBalances.values()).filter(
            (balance) => balance > 0n
          );

          return {
            address,
            uniqueCountries: positiveBalances.length,
            totalBalance: positiveBalances.reduce(
              (sum, balance) => sum + balance,
              0n
            ),
          };
        })
        .filter((item) => item.uniqueCountries > 0)
        .sort((a, b) => {
          if (b.uniqueCountries !== a.uniqueCountries) {
            return b.uniqueCountries - a.uniqueCountries;
          }

          return Number(b.totalBalance - a.totalBalance);
        })
        .slice(0, 20);

      setCollectors(ranked);

      const mintLogs = await provider.getLogs({
  address: COLLECTION_ADDRESS,
  fromBlock,
  toBlock: currentBlock,
  topics: [
    TRANSFER_SINGLE_TOPIC,
    null,
    ethers.zeroPadValue(ethers.ZeroAddress, 32),
  ],
});

const parsedMints: LatestMint[] = mintLogs
  .slice(-5)
  .reverse()
  .map((log) => {
    const decoded = ethers.AbiCoder.defaultAbiCoder().decode(
      ["uint256", "uint256"],
      log.data
    );

    const to = ethers.getAddress(`0x${log.topics[3].slice(26)}`);
    const countryId = Number(decoded[0]);

    return {
      minter: to,
      countryId,
      country: countries[countryId - 1] || `Country #${countryId}`,
      axieTokenId: "Unknown",
      requestId: "Unknown",
      txHash: log.transactionHash,
    };
  });

            setLatestMints(parsedMints);

      setStatus(
        `Loaded from block ${fromBlock.toLocaleString()} to ${currentBlock.toLocaleString()}.`
      );
    } catch (err: any) {
      setStatus(err?.message || "Failed to load leaderboard");
    }
  }

  useEffect(() => {
    loadLeaderboard();
  }, []);

  return (
    <main>
      <section className="hero">
        <h1>Leaderboard</h1>
        <p>
          Top collectors by unique countries owned, plus the 5 latest country
          mints.
        </p>
      </section>
      <section className="section">
  <h2>Reward Pools</h2>

  <div className="rewardGrid">
    {REWARDS.map((reward) => (
      <div className="rewardCard" key={reward.title}>
        <div className="rewardAmount">{reward.amount}</div>
        <h3>{reward.title}</h3>
        <p>{reward.description}</p>
      </div>
    ))}
  </div>
</section>

      <section className="section">
        <div className="panel">
          <button className="button" onClick={loadLeaderboard}>
            Refresh leaderboard
          </button>

          {status && <div className="status">{status}</div>}
        </div>
      </section>

      <section className="section">
        <h2>Top collectors</h2>

        <div className="leaderboardTable">
          <div className="leaderboardRow header">
            <div>Rank</div>
            <div>Wallet</div>
            <div>Countries</div>
            <div>Total NFTs</div>
          </div>

          {collectors.map((collector, index) => (
            <div className="leaderboardRow" key={collector.address}>
              <div>#{index + 1}</div>
              <div>
                <Link
                    href={`/inventory?address=${collector.address}`}
                    style={{
                    color: "inherit",
                    textDecoration: "underline",
                    }}
                >
                    {shortAddress(collector.address)}
                </Link>
                </div>
              <div>{collector.uniqueCountries} / 48</div>
              <div>{collector.totalBalance.toString()}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Latest mints</h2>

        <div className="inventoryGrid">
          {latestMints.map((mint) => (
            <div className="card" key={mint.txHash}>
              <img
                src={imageUrl(mint.countryId)}
                alt={`${mint.country} Axie`}
              />

              <div className="id">
                #{mint.countryId} · Axie #{mint.axieTokenId}
              </div>

              <div className="id">#{mint.countryId}</div>
                <div className="name">{mint.country}</div>
                <p style={{ opacity: 0.7, fontSize: ".85rem" }}>
                Minted to {shortAddress(mint.minter)}
                </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}