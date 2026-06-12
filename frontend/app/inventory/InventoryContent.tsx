"use client";

import { ethers } from "ethers";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { countries, imageUrl } from "../lib/countries";
import { COLLECTION_ADDRESS, ERC1155_ABI, RONIN_RPC } from "../lib/contracts";

type Owned = { tokenId: number; country: string; balance: bigint };

export default function InventoryContent() {
  const [address, setAddress] = useState("");
  const [owned, setOwned] = useState<Owned[]>([]);
  const [status, setStatus] = useState("");

  const searchParams = useSearchParams();

  const queryInventory = useCallback(
    async (forcedAddress?: string) => {
      try {
        if (!COLLECTION_ADDRESS) {
          throw new Error("Missing NEXT_PUBLIC_COLLECTION_ADDRESS");
        }

        const targetAddress = forcedAddress || address;

        if (!ethers.isAddress(targetAddress)) {
          throw new Error("Invalid address");
        }

        setStatus("Querying balances...");

        const provider = new ethers.JsonRpcProvider(RONIN_RPC);
        const collection = new ethers.Contract(
          COLLECTION_ADDRESS,
          ERC1155_ABI,
          provider
        );

        const accounts = countries.map(() => targetAddress);
        const ids = countries.map((_, i) => BigInt(i + 1));
        const balances: bigint[] = await collection.balanceOfBatch(
          accounts,
          ids
        );

        const next = balances
          .map((balance, i) => ({
            tokenId: i + 1,
            country: countries[i],
            balance,
          }))
          .filter((item) => item.balance > 0n);

        setOwned(next);
        setStatus(
          next.length
            ? `Found ${next.length} country token type(s).`
            : "No country NFTs found for this address."
        );
      } catch (err: any) {
        setOwned([]);
        setStatus(err?.message || "Query failed");
      }
    },
    [address]
  );

  useEffect(() => {
    const addr = searchParams.get("address");

    if (addr && ethers.isAddress(addr)) {
      setAddress(addr);
      queryInventory(addr);
    }
  }, [searchParams, queryInventory]);

  return (
    <main>
      <section className="hero">
        <h1>Inventory</h1>
        <p>
          Enter any Ronin/EVM address to query the 48 ERC-1155 country balances
          directly from the contract.
        </p>
      </section>

      <section className="section">
        <div className="panel">
          <div className="inputRow">
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="0x wallet address"
            />

            <button className="button" onClick={() => queryInventory()}>
              Query NFTs
            </button>
          </div>

          {status && <div className="status">{status}</div>}
        </div>

        <div className="inventoryGrid">
          {countries.map((country, index) => {
            const tokenId = index + 1;
            const item = owned.find((x) => x.tokenId === tokenId);
            const isOwned = Boolean(item);

            return (
              <div
                className={`card inventoryCard ${
                  isOwned ? "owned" : "locked"
                }`}
                key={tokenId}
              >
                <img
                  src={imageUrl(tokenId)}
                  alt={`${country} Axie`}
                  className="inventoryImage"
                />

                {!isOwned && <div className="lockOverlay">?</div>}

                <div className="id">
                  #{tokenId}
                  {item ? ` · Balance ${item.balance.toString()}` : ""}
                </div>

                <div className="name">{country}</div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}