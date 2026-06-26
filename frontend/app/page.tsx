"use client";

import { ethers } from "ethers";
import Image from "next/image";
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
const GIFT_ADDRESS = "0x9F0ba160473aB48027CB1B6C0fc166cc66F9F9FB";

export default function HomePage() {
  const [axieId, setAxieId] = useState("");
  const [status, setStatus] = useState("");
  const [timeLeft, setTimeLeft] = useState("");

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    function updateTimer() {
      const distance = MINT_CLOSE_TIME - Date.now();

      if (distance <= 0) {
        setTimeLeft("Mint closed");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    }

    updateTimer();
    const interval = setInterval(updateTimer, 60_000);
    return () => clearInterval(interval);
  }, []);

  function scrollSlider(amount: number) {
    sliderRef.current?.scrollBy({ left: amount, behavior: "smooth" });
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
    sliderRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
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
          padding: "4.25rem 1.5rem 3rem",
          textAlign: "center",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: ".5rem",
            padding: ".45rem .8rem",
            border: "1px solid rgba(255,255,255,.12)",
            borderRadius: "999px",
            background: "rgba(255,255,255,.05)",
            fontSize: ".85rem",
            opacity: 0.9,
            marginBottom: "1.25rem",
          }}
        >
          Ronin VRF-powered country draw
        </div>

        <h1
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4.6rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.045em",
            marginBottom: "1.25rem",
          }}
        >
          Gift an Axie.
          <br />
          Draw a Country.
        </h1>

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            lineHeight: 1.75,
            opacity: 0.82,
          }}
        >
          Every gifted Axie is released, and every country draw is powered by
          Ronin VRF. Collect the world&apos;s best teams, complete the
          48-country set, and get access to 150 AXS in tournament rewards.
          <br />
          
          Open-source, non-profit, community-built. Independent from Sky Mavis.
        </p>

        <div
          style={{
            marginTop: "1.75rem",
            display: "flex",
            flexWrap: "wrap",
            gap: ".9rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            className="button secondary"
            onClick={() => navigator.clipboard.writeText(GIFT_ADDRESS)}
          >
            Copy Gift Address
          </button>

          
        </div>

        <div
          style={{
            marginTop: "1.25rem",
            padding: ".85rem 1rem",
            borderRadius: "14px",
            background: "rgba(255,255,255,.045)",
            display: "inline-block",
            maxWidth: "100%",
          }}
        >
          <code style={{ fontSize: ".82rem", wordBreak: "break-all" }}>
            {GIFT_ADDRESS}
          </code>
        </div>

        <div className="mintTimer">
          Mint closes in <strong>{timeLeft} · 19th July 19:00 GMT</strong>
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
          <Link
            className="button"
            href="https://marketplace.roninchain.com/collections/axieworldcup"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".6rem",
              textDecoration: "none",
              marginLeft:"10px"
            }}
          >
            <Image
              src="/icons/ron-logo.png"
              alt="Ronin"
              width={22}
              height={22}
              style={{ borderRadius: "50%" }}
            />
            Complete your collection on Ronin Marketplace
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