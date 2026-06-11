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
    "South Korea",
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
const COLLECTION_ADDRESS = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_COLLECTION_ADDRESS || "";
const AXIE_CONTRACT = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_AXIE_CONTRACT || "0x32950db2a7164aE833121501C797D79E7B79d74C";
const RONIN_RPC = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_RONIN_RPC || "https://api.roninchain.com/rpc";
const CHAIN_ID = Number(__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CHAIN_ID || "2020");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InventoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/app/lib/countries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/app/lib/contracts.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function InventoryPage() {
    _s();
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [owned, setOwned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    async function queryInventory() {
        try {
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTION_ADDRESS"]) throw new Error("Missing NEXT_PUBLIC_COLLECTION_ADDRESS");
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(address)) throw new Error("Invalid address");
            setStatus("Querying balances...");
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RONIN_RPC"]);
            const collection = new __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTION_ADDRESS"], __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERC1155_ABI"], provider);
            const accounts = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"].map(()=>address);
            const ids = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"].map((_, i)=>BigInt(i + 1));
            const balances = await collection.balanceOfBatch(accounts, ids);
            const next = balances.map((balance, i)=>({
                    tokenId: i + 1,
                    country: __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"][i],
                    balance
                })).filter((item)=>item.balance > 0n);
            setOwned(next);
            setStatus(next.length ? `Found ${next.length} country token type(s).` : "No country NFTs found for this address.");
        } catch (err) {
            setOwned([]);
            setStatus(err?.message || "Query failed");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Inventory"
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Enter any Ronin/EVM address to query the 48 ERC-1155 country balances directly from the contract."
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inputRow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: address,
                                        onChange: (e)=>setAddress(e.target.value),
                                        placeholder: "0x wallet address"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button",
                                        onClick: queryInventory,
                                        children: "Query NFTs"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "status",
                                children: status
                            }, void 0, false, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
                                lineNumber: 53,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inventoryGrid",
                        children: owned.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageUrl"])(item.tokenId),
                                        alt: `${item.country} Axie`
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "id",
                                        children: [
                                            "#",
                                            item.tokenId,
                                            " · Balance ",
                                            item.balance.toString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "name",
                                        children: item.country
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.tokenId, true, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ronin-worldcup-axie/frontend/app/inventory/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(InventoryPage, "ec9gEVUNms6gOjbClO4TAgH/6Vs=");
_c = InventoryPage;
var _c;
__turbopack_context__.k.register(_c, "InventoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ronin-worldcup-axie_frontend_app_124fn0-._.js.map