"use client";

import { ethers } from "ethers";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { countries, imageUrl } from "./lib/countries";
import {
  AXIE_ABI,
  AXIE_CONTRACT,
  CHAIN_ID,
  COLLECTION_ADDRESS,
} from "./lib/contracts";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const MINT_CLOSE_TIME = new Date("2026-07-19T19:00:00Z").getTime();

export default function HomePage() {
  const [axieId, setAxieId] = useState("");
  const [status, setStatus] = useState("");

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    function updateTimer() {
      const now = Date.now();
      const distance = MINT_CLOSE_TIME - now;

      if (distance <= 0) {
        setTimeLeft("Mint closed");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
      );
      const minutes = Math.floor((distance / (1000 * 60)) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    }

    updateTimer();

    const interval = setInterval(updateTimer, 60_000);

    return () => clearInterval(interval);
  }, []);

  function scrollSlider(amount: number) {
    sliderRef.current?.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (!sliderRef.current) return;

    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;

    sliderRef.current.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging.current || !sliderRef.current) return;

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX.current;

    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  }

  function stopDragging(e?: React.PointerEvent<HTMLDivElement>) {
    isDragging.current = false;

    if (e && sliderRef.current?.hasPointerCapture(e.pointerId)) {
      sliderRef.current.releasePointerCapture(e.pointerId);
    }
  }

  async function giftAxie() {
    try {
      if (!window.ethereum) throw new Error("Wallet not found");
      if (!COLLECTION_ADDRESS)
        throw new Error("Missing NEXT_PUBLIC_COLLECTION_ADDRESS");
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
      const tx = await axie.safeTransferFrom(
        from,
        COLLECTION_ADDRESS,
        BigInt(axieId)
      );

      setStatus(`Transaction sent: ${tx.hash}`);
      await tx.wait();

      setStatus(
        "Axie gifted. VRF will mint your random country NFT after callback."
      );
    } catch (err: any) {
      setStatus(err?.message || "Transaction failed");
    }
  }

  return (
    <main>
      <section
        className="hero"
        style={{
          padding: "6rem 1.5rem 4rem",
          textAlign: "center",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        

        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.05em",
            marginBottom: "2rem",
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
            opacity: 0.85,
          }}
        >

Every gifted Axie is released, and every country draw is powered by Ronin VRF. Collect the world's best teams, complete the 48-country set, and get access to 150 AXS in tournament rewards.

Open-source, non-profit, community-built. Independent from Sky Mavis.
        </p>

        

        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem 1.25rem",
            borderRadius: "16px",
            background: "rgba(255,255,255,.05)",
            display: "inline-block",
            maxWidth: "100%",
          }}
        >
          <code
            style={{
              fontSize: ".9rem",
              wordBreak: "break-all",
            }}
          >
            0x9F0ba160473aB48027CB1B6C0fc166cc66F9F9FB
          </code>
        </div>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
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
        <div className="mintTimer">
          Mint closes in <strong>{timeLeft} - 19th July 19:00 GMT</strong>
        </div>
      </section>

      <section className="section">
        <h2>48 country Axies</h2>

        <div className="sliderWrap">
          <button
            className="sliderArrow left"
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollSlider(-340)}
          >
            ‹
          </button>

          <div
            ref={sliderRef}
            className="slider"
            aria-label="Country Axie horizontal slider"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
            onPointerLeave={() => {
              isDragging.current = false;
            }}
          >
            {countries.map((country, index) => {
              const tokenId = index + 1;

              return (
                <div className="card" key={country}>
                  <img
                    src={imageUrl(tokenId)}
                    alt={`${country} Axie`}
                    draggable={false}
                  />
                  <div className="id">#{tokenId}</div>
                  <div className="name">{country}</div>
                </div>
              );
            })}
          </div>

          <button
            className="sliderArrow right"
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollSlider(340)}
          >
            ›
          </button>
        </div>

        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
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
            <p>
              Track your countries in Inventory. Marketplace support coming
              soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}