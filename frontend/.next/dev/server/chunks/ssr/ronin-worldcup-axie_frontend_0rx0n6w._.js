module.exports = [
"[project]/ronin-worldcup-axie/frontend/app/lib/countries.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OddsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/app/lib/countries.ts [app-ssr] (ecmascript)");
"use client";
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
function parseCSV(csv) {
    const lines = csv.trim().split(/\r?\n/).filter(Boolean);
    const headerLineIndex = lines.findIndex((line)=>line.includes("Team Full") && line.includes("Win WC"));
    if (headerLineIndex === -1) {
        console.error("Could not find odds header");
        return [];
    }
    const headers = lines[headerLineIndex].split(/\t|,/).map((header)=>header.trim());
    const countryIndex = headers.indexOf("Team Full");
    const probabilityIndex = headers.indexOf("Win WC");
    return lines.slice(headerLineIndex + 1).map((line)=>{
        const cols = line.split(/\t|,/).map((col)=>col.trim());
        return {
            country: cols[countryIndex],
            probability: Number(cols[probabilityIndex])
        };
    }).filter((row)=>row.country && !Number.isNaN(row.probability)).sort((a, b)=>b.probability - a.probability);
}
function normalizeCountryName(country) {
    return COUNTRY_ALIASES[country] || country;
}
function getCountryTokenId(country) {
    const normalizedCountry = normalizeCountryName(country);
    const index = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countries"].findIndex((c)=>c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === normalizedCountry.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    return index >= 0 ? index + 1 : null;
}
function OddsPage() {
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Loading odds...");
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("winner");
    const [topScorerRows, setTopScorerRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [topScoringNationRows, setTopScoringNationRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const activeRows = tab === "winner" ? rows : tab === "topScorer" ? topScorerRows : topScoringNationRows;
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [ownedBalances, setOwnedBalances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [inventoryStatus, setInventoryStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function load() {
            try {
                const res = await fetch("/api/odds", {
                    cache: "no-store"
                });
                const csv = await res.text();
                const parsed = parseCSV(csv);
                setRows(parsed);
                setStatus("");
            } catch (err) {
                setStatus(err?.message || "Failed to load odds");
            }
        }
        load();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadTopScorerCountry() {
            try {
                const res = await fetch("/api/top-goalscorer-country", {
                    cache: "no-store"
                });
                const event = await res.json();
                const rows = (event.markets || []).map((market)=>{
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
                    const yesIndex = outcomes.findIndex((o)=>o === "Yes");
                    if (yesIndex === -1) {
                        return null;
                    }
                    return {
                        country: market.groupItemTitle,
                        probability: Number(prices[yesIndex]) * 100
                    };
                }).filter((row)=>row && row.country && !Number.isNaN(row.probability)).sort((a, b)=>b.probability - a.probability);
                setTopScorerRows(rows);
            } catch (err) {
                console.error(err);
            }
        }
        loadTopScorerCountry();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadTopScoringNation() {
            try {
                const res = await fetch("/api/top-scoring-nation", {
                    cache: "no-store"
                });
                const markets = await res.json();
                const rows = markets.map((market)=>{
                    if (!market.outcomes || !market.outcomePrices) {
                        return null;
                    }
                    const outcomes = JSON.parse(market.outcomes);
                    const prices = JSON.parse(market.outcomePrices);
                    const yesIndex = outcomes.findIndex((o)=>o === "Yes");
                    if (yesIndex === -1) return null;
                    return {
                        country: market.groupItemTitle,
                        probability: Number((Number(prices[yesIndex]) * 100).toFixed(2))
                    };
                }).filter(Boolean).sort((a, b)=>b.probability - a.probability);
                setTopScoringNationRows(rows);
            } catch (err) {
                console.error(err);
            }
        }
        loadTopScoringNation();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "World Cup Odds"
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Live probabilities from the prediction market."
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: [
                    status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "status",
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                        lineNumber: 233,
                        columnNumber: 20
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "oddsTabs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `button ${tab === "winner" ? "" : "secondary"}`,
                                onClick: ()=>setTab("winner"),
                                children: "Win World Cup"
                            }, void 0, false, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `button ${tab === "topScorer" ? "" : "secondary"}`,
                                onClick: ()=>setTab("topScorer"),
                                children: "Top Scorer Country"
                            }, void 0, false, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `button ${tab === "topScoringNation" ? "" : "secondary"}`,
                                onClick: ()=>setTab("topScoringNation"),
                                children: "Most Goals Scored"
                            }, void 0, false, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "oddsGrid",
                        children: activeRows.map((row, index)=>{
                            const tokenId = getCountryTokenId(row.country);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "oddsCard",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "oddsRank",
                                        children: [
                                            "#",
                                            index + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                                        lineNumber: 265,
                                        columnNumber: 17
                                    }, this),
                                    tokenId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "oddsImage",
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageUrl"])(tokenId),
                                        alt: row.country
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "oddsCountry",
                                        children: row.country
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "oddsProbability",
                                        children: [
                                            row.probability.toFixed(2),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "oddsBar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "oddsBarFill",
                                            style: {
                                                width: `${Math.min(row.probability, 100)}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, row.country, true, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ronin-worldcup-axie/frontend/app/odds/page.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
}),
"[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=ronin-worldcup-axie_frontend_0rx0n6w._.js.map