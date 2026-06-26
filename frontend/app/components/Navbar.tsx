"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <Link className="nav-brand" href="/">
        <strong>AXIE WORLD CUP 🏆</strong>
      </Link>

      <button
        className="nav-toggle"
        type="button"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div className={`nav-menu ${open ? "is-open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/inventory" onClick={() => setOpen(false)}>Inventory</Link>
        <Link href="/odds" onClick={() => setOpen(false)}>Live odds</Link>
        <Link href="/leaderboard" onClick={() => setOpen(false)}>Leaderboard</Link>
        <Link href="https://github.com/Volt3labs/AxieWorldCup/blob/main/whitepaper.md" onClick={() => setOpen(false)}>Whitepaper</Link>
      </div>
    </nav>
  );
}