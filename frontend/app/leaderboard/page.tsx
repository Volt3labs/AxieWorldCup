"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { countries, imageUrl } from "../lib/countries";

type Collector = {
  address: string;
  uniqueCountries: number;
  totalBalance: string;
};

type LatestMint = {
  minter: string;
  countryId: number;
  country: string;
  txHash: string;
};

const REWARDS = [
  {
    title: "Winning Country",
    amount: "50 AXS",
    description: "Shared between holders of the country that wins the World Cup.",
    snapshot: "Snapshot: 19 Jul 2026, 19:00 GMT",
  },
  {
    title: "Top Scoring Country",
    amount: "25 AXS",
    description: "Shared between holders of the country that scores the most goals.",
    snapshot: "Snapshot: 19 Jul 2026, 19:00 GMT",
  },
  {
    title: "Knockout Stage",
    amount: "25 AXS",
    description: "Shared between holders of countries that reach the Round of 32.",
    snapshot: "Snapshot: 28 Jun 2026, ~04:00 GMT",
  },
  {
    title: "Full Collection",
    amount: "50 AXS",
    description: "Shared between wallets holding all 48 country NFTs. Respect!",
    snapshot: "Snapshot: 20 Jul 2026, 19:00 GMT",
  },
];

function shortAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function LeaderboardPage() {
  const [collectors, setCollectors] = useState<Collector[]>([]);
  const [latestMints, setLatestMints] = useState<LatestMint[]>([]);
  const [status, setStatus] = useState("");
  const [syncing, setSyncing] = useState(false);

  async function fetchLeaderboard() {
    const res = await fetch("/api/leaderboard", {
      cache: "no-store",
    });

    const text = await res.text();

    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error(text || "API returned no JSON");
    }

    if (!res.ok) {
      throw new Error(data.error || "Failed to load leaderboard");
    }

    return data;
  }

  async function loadLeaderboard() {
    try {
      setStatus("Loading leaderboard...");

      const data = await fetchLeaderboard();

      setCollectors(Array.isArray(data.collectors) ? data.collectors : []);
      setLatestMints(Array.isArray(data.latestMints) ? data.latestMints : []);

      const lastIndexedBlock = Number(data.lastIndexedBlock ?? 0);
      const chainCurrentBlock = Number(data.chainCurrentBlock ?? lastIndexedBlock);

      setStatus(
        `Indexed ${lastIndexedBlock.toLocaleString()} / ${chainCurrentBlock.toLocaleString()} · collectors: ${
          data.collectors?.length || 0
        } · mints: ${data.latestMints?.length || 0}`
      );
    } catch (err: any) {
      setStatus(err?.message || "Failed to load leaderboard");
    }
  }

  async function syncUntilDone() {
    if (syncing) return;

    setSyncing(true);

    try {
      while (true) {
        const data = await fetchLeaderboard();

        setCollectors(Array.isArray(data.collectors) ? data.collectors : []);
        setLatestMints(Array.isArray(data.latestMints) ? data.latestMints : []);

        const lastIndexedBlock = Number(data.lastIndexedBlock ?? 0);
        const chainCurrentBlock = Number(data.chainCurrentBlock ?? lastIndexedBlock);

        setStatus(
          `Indexed ${lastIndexedBlock.toLocaleString()} / ${chainCurrentBlock.toLocaleString()} · collectors: ${
            data.collectors?.length || 0
          } · mints: ${data.latestMints?.length || 0}`
        );

        if (data.isFullySynced === true) break;

        await sleep(1500);
      }
    } catch (err: any) {
      setStatus(err?.message || "Failed to sync leaderboard");
    } finally {
      setSyncing(false);
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
              <div className="rewardSnapshot">{reward.snapshot}</div>
            </div>
          ))}
        </div>

        <div className="rewardFootnote">
          * 1 NFT = 1 share. Rewards are distributed proportionally based on the
          number of eligible NFTs held at the snapshot time.
        </div>
      </section>

      <section className="section">
        <div className="panel">
          <button className="button" onClick={loadLeaderboard}>
            Refresh leaderboard
          </button>

          <button className="button" onClick={syncUntilDone} disabled={syncing}>
            {syncing ? "Syncing..." : "Sync until fully indexed"}
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
              <div>{collector.totalBalance}</div>
            </div>
          ))}

          {collectors.length === 0 && (
            <div className="leaderboardRow">
              <div>-</div>
              <div>No collectors found yet</div>
              <div>-</div>
              <div>-</div>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <h2>Latest mints</h2>

        <div className="inventoryGrid">
          {latestMints.map((mint) => (
            <div className="card" key={mint.txHash}>
              <img src={imageUrl(mint.countryId)} alt={`${mint.country} Axie`} />

              <div className="id">#{mint.countryId}</div>
              <div className="name">
                {countries[mint.countryId - 1] || mint.country}
              </div>

              <p style={{ opacity: 0.7, fontSize: ".85rem" }}>
                Minted to {shortAddress(mint.minter)}
              </p>
            </div>
          ))}

          {latestMints.length === 0 && (
            <div className="card">
              <div className="name">No mints found yet</div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}