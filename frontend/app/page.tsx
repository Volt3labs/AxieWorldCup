"use client";

import { ethers } from "ethers";
import Link from "next/link";
import { useState } from "react";
import { countries, imageUrl } from "./lib/countries";
import { AXIE_ABI, AXIE_CONTRACT, CHAIN_ID, COLLECTION_ADDRESS } from "./lib/contracts";

declare global {
  interface Window { ethereum?: any }
}

export default function HomePage() {
  const [axieId, setAxieId] = useState("");
  const [status, setStatus] = useState("");

  async function giftAxie() {
    try {
      if (!window.ethereum) throw new Error("Wallet not found");
      if (!COLLECTION_ADDRESS) throw new Error("Missing NEXT_PUBLIC_COLLECTION_ADDRESS");
      if (!axieId) throw new Error("Enter an Axie token ID");

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const network = await provider.getNetwork();
      if (Number(network.chainId) !== CHAIN_ID) {
        setStatus(`Switch your wallet to Ronin chain ID ${CHAIN_ID}.`);
        return;
      }

      const signer = await provider.getSigner();
      const from = await signer.getAddress();
      const axie = new ethers.Contract(AXIE_CONTRACT, AXIE_ABI, signer);
      setStatus("Submitting Axie transfer...");
      const tx = await axie.safeTransferFrom(from, COLLECTION_ADDRESS, BigInt(axieId));
      setStatus(`Transaction sent: ${tx.hash}`);
      await tx.wait();
      setStatus("Axie gifted. VRF will mint your random country NFT after callback.");
    } catch (err: any) {
      setStatus(err?.message || "Transaction failed");
    }
  }

  return (
    <main>
      <section className="hero">
        <h1>Gift an Axie. Draw a country.</h1>
        <p>
          Send one Axie to the World Cup contract. The contract forwards it to the release wallet, then Ronin VRF mints one random ERC-1155 country NFT to your wallet.
        </p>
        <div className="actions">
          <Link className="button" href="/inventory">Check inventory</Link>
          <a className="button secondary" href="#gift">Gift Axie</a>
        </div>
      </section>

      <section className="section">
        <h2>48 country Axies</h2>
        <div className="slider" aria-label="Country Axie horizontal slider">
          {countries.map((country, index) => {
            const tokenId = index + 1;
            return (
              <div className="card" key={country}>
                <img src={imageUrl(tokenId)} alt={`${country} Axie`} />
                <div className="id">#{tokenId}</div>
                <div className="name">{country}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <h2>The process</h2>
        <div className="grid">
          <div className="step"><b>1.</b><br />Connect wallet on Ronin.</div>
          <div className="step"><b>2.</b><br />Enter your Axie token ID.</div>
          <div className="step"><b>3.</b><br />Call Axie <code>safeTransferFrom</code> to the collection contract.</div>
          <div className="step"><b>4.</b><br />Your Axie is forwarded to the release address.</div>
          <div className="step"><b>5.</b><br />Ronin VRF selects 1 of 48 countries.</div>
          <div className="step"><b>6.</b><br />You receive the ERC-1155 country NFT.</div>
        </div>
      </section>

      <section className="section" id="gift">
        <h2>Gift Axie to contract</h2>
        <div className="panel">
          <p className="muted">Contract: {COLLECTION_ADDRESS || "Set NEXT_PUBLIC_COLLECTION_ADDRESS"}</p>
          <div className="inputRow">
            <input value={axieId} onChange={(e) => setAxieId(e.target.value)} placeholder="Axie token ID" />
            <button className="button" onClick={giftAxie}>Gift Axie</button>
          </div>
          {status && <div className="status">{status}</div>}
        </div>
      </section>
    </main>
  );
}
