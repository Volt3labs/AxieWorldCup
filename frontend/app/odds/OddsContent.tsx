"use client";

import { useEffect, useState } from "react";
import { countries, imageUrl } from "../lib/countries";
import { ethers } from "ethers";
import { COLLECTION_ADDRESS, ERC1155_ABI, RONIN_RPC } from "../lib/contracts";
import { useSearchParams } from "next/navigation";

type CountryOdd = {
  country: string;
  probability: number;
};

const COUNTRY_ALIASES: Record<string, string> = {
  "Cape Verde": "Cabo Verde",
  "Bosnia-Herzegovina": "Bosnia and Herzegovina",
  "Bosnia-Herz.": "Bosnia and Herzegovina",
  "Turkiye": "Türkiye",
  "USA": "United States",
  "Curacao": "Curaçao",
  "DR Congo": "Congo DR",
  "Ivory Coast":"Côte d'Ivoire"
};

const EVENT_LINKS = {
  winner:
    "https://polymarket.com/event/world-cup-winner",
  topScorer:
    "https://polymarket.com/event/world-cup-nation-of-top-goalscorer",
  topScoringNation:
    "https://polymarket.com/event/world-cup-top-scorer-nation",
};



function normalizeCountryName(country: string) {
  return COUNTRY_ALIASES[country] || country;
}

function getCountryTokenId(country: string) {
  const normalizedCountry = normalizeCountryName(country);

  const index = countries.findIndex(
    (c) =>
      c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") ===
      normalizedCountry
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
  );

  return index >= 0 ? index + 1 : null;
}

export default function OddsContent() {
  const [rows, setRows] = useState<CountryOdd[]>([]);
  const searchParams = useSearchParams();
  const [status, setStatus] = useState("Loading odds...");
    const [tab, setTab] = useState<
    "winner" | "topScorer" | "topScoringNation"
    >("winner");
    const [topScorerRows, setTopScorerRows] = useState<CountryOdd[]>([]);
    const [topScoringNationRows, setTopScoringNationRows] = useState<CountryOdd[]>([]);
    const activeRows =
    tab === "winner"
        ? rows
        : tab === "topScorer"
        ? topScorerRows
        : topScoringNationRows;
    const [address, setAddress] = useState("");
    const [ownedBalances, setOwnedBalances] = useState<Record<number, bigint>>({});
    const [inventoryStatus, setInventoryStatus] = useState("");

    useEffect(() => {
  const addr = searchParams.get("address");

  if (addr && ethers.isAddress(addr)) {
    setAddress(addr);
    queryOwnedOdds(addr);
  }
}, [searchParams]);

useEffect(() => {
  async function loadWinnerOdds() {
    try {
      const res = await fetch("/api/world-cup-winner", {
        cache: "no-store",
      });

      const event = await res.json();

      const rows = (event.markets || [])
        .map((market: any) => {
          if (!market.outcomes || !market.outcomePrices) {
            return null;
          }

          const outcomes = JSON.parse(market.outcomes);
          const prices = JSON.parse(market.outcomePrices);

          const yesIndex = outcomes.findIndex(
            (o: string) => o === "Yes"
          );

          if (yesIndex === -1) {
            return null;
          }

          return {
            country: market.groupItemTitle,
            probability: Number(
              (Number(prices[yesIndex]) * 100).toFixed(2)
            ),
          };
        })
        .filter(Boolean)
        .sort(
          (a: any, b: any) =>
            b.probability - a.probability
        );

      setRows(rows);
      setStatus("");
    } catch (err: any) {
      setStatus(err?.message || "Failed to load odds");
    }
  }

  loadWinnerOdds();
}, []);

useEffect(() => {
  async function loadTopScorerCountry() {
    try {
      const res = await fetch("/api/top-goalscorer-country", {
        cache: "no-store",
      });

      const event = await res.json();

      const rows = (event.markets || [])
        .map((market: any) => {
          if (!market.outcomes || !market.outcomePrices) {
            return null;
          }

          let outcomes: string[];
          let prices: string[];

          try {
            outcomes = JSON.parse(market.outcomes);
            prices = JSON.parse(market.outcomePrices);
          } catch {
            return null;
          }

          const yesIndex = outcomes.findIndex(
            (o: string) => o === "Yes"
          );

          if (yesIndex === -1) {
            return null;
          }

          return {
            country: market.groupItemTitle,
            probability: Number(prices[yesIndex]) * 100,
          };
        })
        .filter(
          (row: any) =>
            row &&
            row.country &&
            !Number.isNaN(row.probability)
        )
        .sort(
          (a: any, b: any) =>
            b.probability - a.probability
        );

      setTopScorerRows(rows);
    } catch (err) {
      console.error(err);
    }
  }

  loadTopScorerCountry();
}, []);

useEffect(() => {
  async function loadTopScoringNation() {
    try {
      const res = await fetch("/api/top-scoring-nation", {
        cache: "no-store",
      });

      const markets = await res.json();

      const rows = markets
        .map((market: any) => {
          if (!market.outcomes || !market.outcomePrices) {
            return null;
          }

          const outcomes = JSON.parse(market.outcomes);
          const prices = JSON.parse(market.outcomePrices);

          const yesIndex = outcomes.findIndex(
            (o: string) => o === "Yes"
          );

          if (yesIndex === -1) return null;

          return {
            country: market.groupItemTitle,
            probability: Number(
              (Number(prices[yesIndex]) * 100).toFixed(2)
            ),
          };
        })
        .filter(Boolean)
        .sort(
          (a: any, b: any) =>
            b.probability - a.probability
        );

      setTopScoringNationRows(rows);
    } catch (err) {
      console.error(err);
    }
  }

  loadTopScoringNation();
}, []);

async function queryOwnedOdds(forcedAddress?: string) {
  try {
    if (!COLLECTION_ADDRESS) {
      throw new Error("Missing NEXT_PUBLIC_COLLECTION_ADDRESS");
    }

    const targetAddress = forcedAddress || address;

    if (!targetAddress) {
      throw new Error("Enter a wallet address");
    }

    if (!ethers.isAddress(targetAddress)) {
      throw new Error("Invalid address");
    }

    setInventoryStatus("Querying owned Axies...");

    const provider = new ethers.JsonRpcProvider(RONIN_RPC);
    const collection = new ethers.Contract(
      COLLECTION_ADDRESS,
      ERC1155_ABI,
      provider
    );

    const accounts = countries.map(() => targetAddress);
    const ids = countries.map((_, i) => BigInt(i + 1));

    const balances: bigint[] = await collection.balanceOfBatch(accounts, ids);

    const next: Record<number, bigint> = {};

    balances.forEach((balance, index) => {
      if (balance > 0n) {
        next[index + 1] = balance;
      }
    });

    setAddress(targetAddress);
    setOwnedBalances(next);

    const ownedCount = Object.keys(next).length;

    setInventoryStatus(
      ownedCount
        ? `Highlighting ${ownedCount} owned country token type(s).`
        : "No owned countries found for this address."
    );
  } catch (err: any) {
    setOwnedBalances({});
    setInventoryStatus(err?.message || "Failed to query owned Axies");
  }
}

  return (
    <main>
      <section className="hero">
        <h1>World Cup Live Odds</h1>

        <p>
          Live probabilities from Polymarket.
        </p>
      </section>

      <section className="section">
        {status && <div className="status">{status}</div>}

        <div className="panel" style={{ marginBottom: "2rem" }}>
  <div className="inputRow">
    <input
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      placeholder="0x wallet address"
    />

    <button
  className="button"
  onClick={() => queryOwnedOdds()}
>
  Highlight owned
</button>
  </div>

  {inventoryStatus && (
    <div className="status">
      {inventoryStatus}
    </div>
  )}
</div>

        <div className="oddsTabs">
            <button
                className={`button ${tab === "winner" ? "" : "secondary"}`}
                onClick={() => setTab("winner")}
            >
                Win World Cup
            </button>

            <button
                className={`button ${tab === "topScorer" ? "" : "secondary"}`}
                onClick={() => setTab("topScorer")}
            >
                Top Scorer Country
            </button>
            <button
  className={`button ${
    tab === "topScoringNation" ? "" : "secondary"
  }`}
  onClick={() => setTab("topScoringNation")}
>
  Most Goals Scored
</button>
            </div>
<div className="marketBanner">
  <div>
    <div className="marketTitle">
      Prediction Market
    </div>

    <div className="marketDescription">
      Odds are sourced from Polymarket and update as traders
      buy and sell positions.
    </div>
  </div>

  <a
    className="button"
    href={EVENT_LINKS[tab]}
    target="_blank"
    rel="noopener noreferrer"
  >
    Open Polymarket ↗
  </a>
</div>

        <div className="oddsGrid">
          {activeRows.map((row, index) => {
                const tokenId = getCountryTokenId(row.country);
                const ownedBalance = tokenId ? ownedBalances[tokenId] : undefined;
                const isOwned = Boolean(ownedBalance);

            return (
              <div
                className={`oddsCard ${isOwned ? "ownedOddsCard" : ""}`}
                key={row.country}
                >
                <div className="oddsRank">
                  #{index + 1}
                </div>

                {tokenId && (
                  <img
                    className="oddsImage"
                    src={imageUrl(tokenId)}
                    alt={row.country}
                  />
                )}

                <div className="oddsCountry">
                  {row.country}
                </div>

                <div className="oddsProbability">
                {row.probability.toFixed(2)}%
                </div>

                {isOwned && (
                <div className="ownedRibbon">
                    ×{ownedBalance!.toString()}
                </div>
                )}


                <div className="oddsBar">
                  <div
                    className="oddsBarFill"
                    style={{
                      width: `${Math.min(
                        row.probability,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}