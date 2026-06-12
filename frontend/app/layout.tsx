import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Cup Axie Countries",
  description: "Gift an Axie, receive a random World Cup country NFT.",
  icons: {
    icon: "/icons/AxieWorldCup.jpg",
    shortcut: "/icons/AxieWorldCup.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <Link href="/"><strong>AXIE WORLD CUP 🏆</strong></Link>
          <div>
            <Link href="/">Home</Link>
            <Link href="/inventory">Inventory</Link>
            <Link href="/leaderboard">Leaderboard</Link>
          </div>
        </nav>
        {children}
        <footer>48 countries · ERC-1155 · <a href="https://volt3labs.com">Volt3 Labs</a></footer>
      </body>
    </html>
  );
}
