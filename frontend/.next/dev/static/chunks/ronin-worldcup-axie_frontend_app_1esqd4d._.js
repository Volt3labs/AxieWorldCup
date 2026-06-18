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
"[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeaderboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/app/lib/countries.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const REWARDS = [
    {
        title: "Winning Country",
        amount: "50 AXS",
        description: "Shared between holders of the country that wins the World Cup.",
        snapshot: "Snapshot: 19 Jul 2026, 19:00 GMT"
    },
    {
        title: "Top Scoring Country",
        amount: "25 AXS",
        description: "Shared between holders of the country that scores the most goals.",
        snapshot: "Snapshot: 19 Jul 2026, 19:00 GMT"
    },
    {
        title: "Knockout Stage",
        amount: "25 AXS",
        description: "Shared between holders of countries that reach the Round of 32.",
        snapshot: "Snapshot: 28 Jun 2026, ~04:00 GMT"
    },
    {
        title: "Full Collection",
        amount: "50 AXS",
        description: "Shared between wallets holding all 48 country NFTs. Respect!",
        snapshot: "Snapshot: 20 Jul 2026, 19:00 GMT"
    }
];
function shortAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
function LeaderboardPage() {
    _s();
    const [collectors, setCollectors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [latestMints, setLatestMints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    async function loadLeaderboard() {
        try {
            setStatus("Loading leaderboard...");
            const res = await fetch("/api/leaderboard", {
                cache: "no-store"
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Failed to load leaderboard");
            }
            setCollectors(Array.isArray(data.collectors) ? data.collectors : []);
            setLatestMints(Array.isArray(data.latestMints) ? data.latestMints : []);
            const lastIndexedBlock = Number(data.lastIndexedBlock ?? 0);
            const chainCurrentBlock = Number(data.chainCurrentBlock ?? lastIndexedBlock);
            const isFullySynced = data.isFullySynced === true;
            setStatus(isFullySynced ? `Fully synced at block ${lastIndexedBlock.toLocaleString()}` : `Indexed ${lastIndexedBlock.toLocaleString()} / ${chainCurrentBlock.toLocaleString()}`);
        } catch (err) {
            setStatus(err?.message || "Failed to load leaderboard");
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeaderboardPage.useEffect": ()=>{
            loadLeaderboard();
        }
    }["LeaderboardPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Leaderboard"
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Top collectors by unique countries owned, plus the 5 latest country mints."
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Reward Pools"
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rewardGrid",
                        children: REWARDS.map((reward)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rewardCard",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rewardAmount",
                                        children: reward.amount
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: reward.title
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: reward.description
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rewardSnapshot",
                                        children: reward.snapshot
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, reward.title, true, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rewardFootnote",
                        children: "* 1 NFT = 1 share. Rewards are distributed proportionally based on the number of eligible NFTs held at the snapshot time."
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "button",
                            onClick: loadLeaderboard,
                            children: "Refresh leaderboard"
                        }, void 0, false, {
                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "status",
                            children: status
                        }, void 0, false, {
                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                            lineNumber: 128,
                            columnNumber: 22
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Top collectors"
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "leaderboardTable",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "leaderboardRow header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Rank"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Wallet"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Countries"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Total NFTs"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            collectors.map((collector, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "leaderboardRow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "#",
                                                index + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/inventory?address=${collector.address}`,
                                                style: {
                                                    color: "inherit",
                                                    textDecoration: "underline"
                                                },
                                                children: shortAddress(collector.address)
                                            }, void 0, false, {
                                                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                collector.uniqueCountries,
                                                " / 48"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: collector.totalBalance
                                        }, void 0, false, {
                                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, collector.address, true, {
                                    fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)),
                            collectors.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "leaderboardRow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "No collectors found yet"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Latest mints"
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inventoryGrid",
                        children: [
                            latestMints.map((mint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageUrl"])(mint.countryId),
                                            alt: `${mint.country} Axie`
                                        }, void 0, false, {
                                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "id",
                                            children: [
                                                "#",
                                                mint.countryId
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "name",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"][mint.countryId - 1] || mint.country
                                        }, void 0, false, {
                                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                opacity: 0.7,
                                                fontSize: ".85rem"
                                            },
                                            children: [
                                                "Minted to ",
                                                shortAddress(mint.minter)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, mint.txHash, true, {
                                    fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)),
                            latestMints.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "name",
                                    children: "No mints found yet"
                                }, void 0, false, {
                                    fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(LeaderboardPage, "4VAnILCkiXxmJUAzHIdYucBQYX0=");
_c = LeaderboardPage;
var _c;
__turbopack_context__.k.register(_c, "LeaderboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ronin-worldcup-axie_frontend_app_1esqd4d._.js.map