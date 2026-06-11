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
      <section
  className="hero"
  style={{
    padding: "8rem 1.5rem 6rem",
    textAlign: "center",
    maxWidth: "1000px",
    margin: "0 auto"
  }}
>
  <p
    style={{
      marginBottom: "1rem",
      fontSize: ".85rem",
      fontWeight: 700,
      letterSpacing: ".15em",
      textTransform: "uppercase",
      opacity: 0.7
    }}
  >
    Axie World Cup
  </p>

  <h1
    style={{
      fontSize: "clamp(3rem, 8vw, 6rem)",
      lineHeight: 0.95,
      letterSpacing: "-0.05em",
      marginBottom: "2rem"
    }}
  >
    Gift an Axie.
    <br />
    Draw a Country.
  </h1>

  <p
    style={{
      maxWidth: "820px",
      margin: "0 auto",
      fontSize: "1.25rem",
      lineHeight: 1.9,
      opacity: 0.85
    }}
  >
    Send any Axie to the Axie World Cup contract and receive a randomly
    assigned World Cup Country NFT. Your Axie is permanently forwarded to the
    release wallet, while Ronin VRF ensures every country draw is provably fair
    and completely random.
  </p>

  

  <div
    style={{
      marginTop: "1.5rem",
      padding: "1rem 1.25rem",
      borderRadius: "16px",
      background: "rgba(255,255,255,.05)",
      display: "inline-block",
      maxWidth: "100%"
    }}
  >
    <code
      style={{
        fontSize: ".9rem",
        wordBreak: "break-all"
      }}
    >
      0x9F0ba160473aB48027CB1B6C0fc166cc66F9F9FB
    </code>
  </div>

  <div
    style={{
      marginTop: "3rem",
      display: "flex",
      justifyContent: "center"
    }}
  >
    <button
      className="button secondary"
      onClick={() =>
        navigator.clipboard.writeText(
          "0x9F0ba160473aB48027CB1B6C0fc166cc66F9F9FB"
        )
      }
    >
      Copy Gift Address
    </button>

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
              
    <div
    style={{
      marginTop: "3rem",
      display: "flex",
      justifyContent: "center"
    }}
  >
  <Link className="button" href="/inventory">
        Check inventory
      </Link>

  </div>
      </section>

      <section className="section">
  <h2>How it works</h2>

  <div className="grid">
    <div className="step">
      <b>Gift an Axie</b>
      <p>Your Axie is sent to the AxieWorldCup contract and released.</p>
    </div>

    <div className="step">
      <b>Receive a Country</b>
      <p>Ronin VRF randomly draws 1 of 48 World Cup country NFTs.</p>
    </div>

    <div className="step">
      <b>Build Your Collection</b>
      <p>Track your countries in Inventory. Marketplace support coming soon.</p>
    </div>
  </div>
</section>

    </main>
  );
}
