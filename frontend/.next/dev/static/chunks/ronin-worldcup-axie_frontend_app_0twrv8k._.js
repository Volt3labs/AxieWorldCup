(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ronin-worldcup-axie/frontend/app/lib/countries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countries",
    ()=>countries,
    "imageUrl",
    ()=>imageUrl
]);
const countries = [
    "Algeria",
    "Argentina",
    "Australia",
    "Austria",
    "Belgium",
    "Bosnia and Herzegovina",
    "Brazil",
    "Cabo Verde",
    "Canada",
    "Colombia",
    "Congo DR",
    "Côte d'Ivoire",
    "Croatia",
    "Curaçao",
    "Czechia",
    "Ecuador",
    "Egypt",
    "England",
    "France",
    "Germany",
    "Ghana",
    "Haiti",
    "Iran",
    "Iraq",
    "Japan",
    "Jordan",
    "South Korea",
    "Mexico",
    "Morocco",
    "Netherlands",
    "New Zealand",
    "Norway",
    "Panama",
    "Paraguay",
    "Portugal",
    "Qatar",
    "Saudi Arabia",
    "Scotland",
    "Senegal",
    "South Africa",
    "Spain",
    "Sweden",
    "Switzerland",
    "Tunisia",
    "Türkiye",
    "United States",
    "Uruguay",
    "Uzbekistan"
];
function imageUrl(tokenId) {
    const base = "/images";
    return `${base.replace(/\/$/, "")}/${tokenId}.png`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ronin-worldcup-axie/frontend/app/lib/contracts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AXIE_ABI",
    ()=>AXIE_ABI,
    "AXIE_CONTRACT",
    ()=>AXIE_CONTRACT,
    "CHAIN_ID",
    ()=>CHAIN_ID,
    "COLLECTION_ADDRESS",
    ()=>COLLECTION_ADDRESS,
    "ERC1155_ABI",
    ()=>ERC1155_ABI,
    "RONIN_RPC",
    ()=>RONIN_RPC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const ERC1155_ABI = [
    "function balanceOf(address account, uint256 id) view returns (uint256)",
    "function balanceOfBatch(address[] accounts, uint256[] ids) view returns (uint256[])",
    "function name() view returns (string)",
    "function symbol() view returns (string)"
];
const AXIE_ABI = [
    "function safeTransferFrom(address from, address to, uint256 tokenId)"
];
const COLLECTION_ADDRESS = ("TURBOPACK compile-time value", "0x9f0ba160473ab48027cb1b6c0fc166cc66f9f9fb") || "";
const AXIE_CONTRACT = ("TURBOPACK compile-time value", "0x32950db2a7164aE833121501C797D79E7B79d74C") || "0x32950db2a7164aE833121501C797D79E7B79d74C";
const RONIN_RPC = "https://ronin-mainnet.g.alchemy.com/v2/Eueiz9Tl-1dLjyHfhi6qy";
const CHAIN_ID = Number(("TURBOPACK compile-time value", "2020") || "2020");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OddsContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/app/lib/countries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/app/lib/contracts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const COUNTRY_ALIASES = {
    "Cape Verde": "Cabo Verde",
    "Bosnia-Herzegovina": "Bosnia and Herzegovina",
    "Bosnia-Herz.": "Bosnia and Herzegovina",
    "Turkiye": "Türkiye",
    "USA": "United States",
    "Curacao": "Curaçao",
    "DR Congo": "Congo DR",
    "Ivory Coast": "Côte d'Ivoire"
};
const EVENT_LINKS = {
    winner: "https://polymarket.com/event/world-cup-winner",
    topScorer: "https://polymarket.com/event/world-cup-nation-of-top-goalscorer",
    topScoringNation: "https://polymarket.com/event/world-cup-top-scorer-nation"
};
function normalizeCountry(country) {
    return (COUNTRY_ALIASES[country] || country).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}
function getCountryTokenId(country) {
    const normalizedCountry = normalizeCountry(country);
    const index = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"].findIndex((c)=>normalizeCountry(c) === normalizedCountry);
    return index >= 0 ? index + 1 : null;
}
function OddsContent() {
    _s();
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Loading odds...");
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("winner");
    const [topScorerRows, setTopScorerRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [topScoringNationRows, setTopScoringNationRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const activeRows = tab === "winner" ? rows : tab === "topScorer" ? topScorerRows : topScoringNationRows;
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ownedBalances, setOwnedBalances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [inventoryStatus, setInventoryStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tokenStats, setTokenStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OddsContent.useEffect": ()=>{
            const addr = searchParams.get("address");
            if (addr && __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(addr)) {
                setAddress(addr);
                queryOwnedOdds(addr);
            }
        }
    }["OddsContent.useEffect"], [
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OddsContent.useEffect": ()=>{
            fetch("/api/stats").then({
                "OddsContent.useEffect": (r)=>r.json()
            }["OddsContent.useEffect"]).then(setTokenStats);
        }
    }["OddsContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OddsContent.useEffect": ()=>{
            async function loadWinnerOdds() {
                try {
                    const res = await fetch("/api/world-cup-winner", {
                        cache: "no-store"
                    });
                    const event = await res.json();
                    const rows = (event.markets || []).map({
                        "OddsContent.useEffect.loadWinnerOdds.rows": (market)=>{
                            if (!market.outcomes || !market.outcomePrices) {
                                return null;
                            }
                            const outcomes = JSON.parse(market.outcomes);
                            const prices = JSON.parse(market.outcomePrices);
                            const yesIndex = outcomes.findIndex({
                                "OddsContent.useEffect.loadWinnerOdds.rows.yesIndex": (o)=>o === "Yes"
                            }["OddsContent.useEffect.loadWinnerOdds.rows.yesIndex"]);
                            if (yesIndex === -1) {
                                return null;
                            }
                            return {
                                country: market.groupItemTitle,
                                probability: Number((Number(prices[yesIndex]) * 100).toFixed(2))
                            };
                        }
                    }["OddsContent.useEffect.loadWinnerOdds.rows"]).filter(Boolean).sort({
                        "OddsContent.useEffect.loadWinnerOdds.rows": (a, b)=>b.probability - a.probability
                    }["OddsContent.useEffect.loadWinnerOdds.rows"]);
                    setRows(rows);
                    setStatus("");
                } catch (err) {
                    setStatus(err?.message || "Failed to load odds");
                }
            }
            loadWinnerOdds();
        }
    }["OddsContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OddsContent.useEffect": ()=>{
            async function loadTopScorerCountry() {
                try {
                    const res = await fetch("/api/knockout-stages", {
                        cache: "no-store"
                    });
                    const event = await res.json();
                    const rows = (event.markets || []).map({
                        "OddsContent.useEffect.loadTopScorerCountry.rows": (market)=>{
                            if (!market.outcomes || !market.outcomePrices) {
                                return null;
                            }
                            let outcomes;
                            let prices;
                            try {
                                outcomes = JSON.parse(market.outcomes);
                                prices = JSON.parse(market.outcomePrices);
                            } catch  {
                                return null;
                            }
                            const yesIndex = outcomes.findIndex({
                                "OddsContent.useEffect.loadTopScorerCountry.rows.yesIndex": (o)=>o === "Yes"
                            }["OddsContent.useEffect.loadTopScorerCountry.rows.yesIndex"]);
                            if (yesIndex === -1) {
                                return null;
                            }
                            return {
                                country: market.groupItemTitle,
                                probability: Number(prices[yesIndex]) * 100
                            };
                        }
                    }["OddsContent.useEffect.loadTopScorerCountry.rows"]).filter({
                        "OddsContent.useEffect.loadTopScorerCountry.rows": (row)=>row && row.country && !Number.isNaN(row.probability)
                    }["OddsContent.useEffect.loadTopScorerCountry.rows"]).sort({
                        "OddsContent.useEffect.loadTopScorerCountry.rows": (a, b)=>b.probability - a.probability
                    }["OddsContent.useEffect.loadTopScorerCountry.rows"]);
                    setTopScorerRows(rows);
                } catch (err) {
                    console.error(err);
                }
            }
            loadTopScorerCountry();
        }
    }["OddsContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OddsContent.useEffect": ()=>{
            async function loadTopScoringNation() {
                try {
                    const res = await fetch("/api/top-scoring-nation", {
                        cache: "no-store"
                    });
                    const markets = await res.json();
                    const rows = markets.map({
                        "OddsContent.useEffect.loadTopScoringNation.rows": (market)=>{
                            if (!market.outcomes || !market.outcomePrices) {
                                return null;
                            }
                            const outcomes = JSON.parse(market.outcomes);
                            const prices = JSON.parse(market.outcomePrices);
                            const yesIndex = outcomes.findIndex({
                                "OddsContent.useEffect.loadTopScoringNation.rows.yesIndex": (o)=>o === "Yes"
                            }["OddsContent.useEffect.loadTopScoringNation.rows.yesIndex"]);
                            if (yesIndex === -1) return null;
                            return {
                                country: market.groupItemTitle,
                                probability: Number((Number(prices[yesIndex]) * 100).toFixed(2))
                            };
                        }
                    }["OddsContent.useEffect.loadTopScoringNation.rows"]).filter(Boolean).sort({
                        "OddsContent.useEffect.loadTopScoringNation.rows": (a, b)=>b.probability - a.probability
                    }["OddsContent.useEffect.loadTopScoringNation.rows"]);
                    setTopScoringNationRows(rows);
                } catch (err) {
                    console.error(err);
                }
            }
            loadTopScoringNation();
        }
    }["OddsContent.useEffect"], []);
    async function queryOwnedOdds(forcedAddress) {
        try {
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTION_ADDRESS"]) {
                throw new Error("Missing NEXT_PUBLIC_COLLECTION_ADDRESS");
            }
            const targetAddress = forcedAddress || address;
            if (!targetAddress) {
                throw new Error("Enter a wallet address");
            }
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(targetAddress)) {
                throw new Error("Invalid address");
            }
            setInventoryStatus("Querying owned Axies...");
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RONIN_RPC"]);
            const collection = new __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTION_ADDRESS"], __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERC1155_ABI"], provider);
            const accounts = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"].map(()=>targetAddress);
            const ids = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"].map((_, i)=>BigInt(i + 1));
            const balances = await collection.balanceOfBatch(accounts, ids);
            const next = {};
            balances.forEach((balance, index)=>{
                if (balance > 0n) {
                    next[index + 1] = balance;
                }
            });
            setAddress(targetAddress);
            setOwnedBalances(next);
            const ownedCount = Object.keys(next).length;
            setInventoryStatus(ownedCount ? `Highlighting ${ownedCount} owned country token type(s).` : "No owned countries found for this address.");
        } catch (err) {
            setOwnedBalances({});
            setInventoryStatus(err?.message || "Failed to query owned Axies");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "World Cup Live Odds"
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Live probabilities from Polymarket."
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: [
                    status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "status",
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                        lineNumber: 313,
                        columnNumber: 20
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel",
                        style: {
                            marginBottom: "2rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inputRow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: address,
                                        onChange: (e)=>setAddress(e.target.value),
                                        placeholder: "0x wallet address"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                        lineNumber: 317,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button",
                                        onClick: ()=>queryOwnedOdds(),
                                        children: "Highlight owned"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                        lineNumber: 323,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                lineNumber: 316,
                                columnNumber: 3
                            }, this),
                            inventoryStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "status",
                                children: inventoryStatus
                            }, void 0, false, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                lineNumber: 332,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "oddsTabs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `button ${tab === "winner" ? "" : "secondary"}`,
                                onClick: ()=>setTab("winner"),
                                children: "Win World Cup"
                            }, void 0, false, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `button ${tab === "topScorer" ? "" : "secondary"}`,
                                onClick: ()=>setTab("topScorer"),
                                children: "Knockout stages"
                            }, void 0, false, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `button ${tab === "topScoringNation" ? "" : "secondary"}`,
                                onClick: ()=>setTab("topScoringNation"),
                                children: "Most Goals Scored"
                            }, void 0, false, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                lineNumber: 352,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "marketBanner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "marketTitle",
                                        children: "Prediction Market"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                        lineNumber: 363,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "marketDescription",
                                        children: "Odds are sourced from Polymarket and update as traders buy and sell positions."
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                        lineNumber: 367,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                lineNumber: 362,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "button",
                                href: EVENT_LINKS[tab],
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Open Polymarket ↗"
                            }, void 0, false, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                lineNumber: 373,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                        lineNumber: 361,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "oddsGrid",
                        children: activeRows.filter((row)=>getCountryTokenId(row.country) !== null).map((row, index)=>{
                            const tokenId = getCountryTokenId(row.country);
                            const ownedBalance = ownedBalances[tokenId] ?? 0n;
                            const isOwned = ownedBalance > 0n;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `oddsCard ${isOwned ? "ownedOddsCard" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "oddsRank",
                                        children: [
                                            "#",
                                            index + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                        lineNumber: 396,
                                        columnNumber: 17
                                    }, this),
                                    tokenId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "oddsImage",
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageUrl"])(tokenId),
                                        alt: row.country
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                        lineNumber: 401,
                                        columnNumber: 19
                                    }, this),
                                    tokenId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tokenStats",
                                        children: [
                                            "Minted ",
                                            tokenStats[tokenId]?.minted ?? "-",
                                            " |",
                                            " ",
                                            "Owners ",
                                            tokenStats[tokenId]?.owners ?? "-"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                        lineNumber: 409,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "oddsCountry",
                                        children: row.country
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                        lineNumber: 416,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "oddsProbability",
                                        children: [
                                            row.probability.toFixed(2),
                                            "% chances"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                        lineNumber: 420,
                                        columnNumber: 17
                                    }, this),
                                    isOwned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ownedRibbon",
                                        children: [
                                            "×",
                                            ownedBalance.toString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                        lineNumber: 425,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "oddsBar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "oddsBarFill",
                                            style: {
                                                width: `${Math.min(row.probability, 100)}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                            lineNumber: 432,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                        lineNumber: 431,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, row.country, true, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                                lineNumber: 392,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx",
        lineNumber: 303,
        columnNumber: 5
    }, this);
}
_s(OddsContent, "yJqYbVIuYDEwU5nKGZgQMuegrS0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = OddsContent;
var _c;
__turbopack_context__.k.register(_c, "OddsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OddsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$odds$2f$OddsContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/app/odds/OddsContent.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function OddsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "status",
            children: "Loading odds..."
        }, void 0, false, {
            fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
            lineNumber: 8,
            columnNumber: 25
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$odds$2f$OddsContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = OddsPage;
var _c;
__turbopack_context__.k.register(_c, "OddsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ronin-worldcup-axie_frontend_app_0twrv8k._.js.map