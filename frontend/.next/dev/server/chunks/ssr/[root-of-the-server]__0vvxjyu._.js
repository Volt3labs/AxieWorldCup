module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
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
"[project]/ronin-worldcup-axie/frontend/app/lib/contracts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const ERC1155_ABI = [
    "function balanceOf(address account, uint256 id) view returns (uint256)",
    "function balanceOfBatch(address[] accounts, uint256[] ids) view returns (uint256[])",
    "function name() view returns (string)",
    "function symbol() view returns (string)"
];
const AXIE_ABI = [
    "function safeTransferFrom(address from, address to, uint256 tokenId)"
];
const COLLECTION_ADDRESS = ("TURBOPACK compile-time value", "0x9F0ba160473aB48027CB1B6C0fc166cc66F9F9FB") || "";
const AXIE_CONTRACT = ("TURBOPACK compile-time value", "0x32950db2a7164aE833121501C797D79E7B79d74C") || "0x32950db2a7164aE833121501C797D79E7B79d74C";
const RONIN_RPC = ("TURBOPACK compile-time value", "https://api.roninchain.com/rpc") || "https://api.roninchain.com/rpc";
const CHAIN_ID = Number(("TURBOPACK compile-time value", "2020") || "2020");
}),
"[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeaderboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/app/lib/countries.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/app/lib/contracts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const COUNTRY_COUNT = 48;
const TRANSFER_SINGLE_TOPIC = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].id("TransferSingle(address,address,address,uint256,uint256)");
const TRANSFER_BATCH_TOPIC = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].id("TransferBatch(address,address,address,uint256[],uint256[])");
const REWARDS = [
    {
        title: "Winning Country",
        amount: "50 AXS",
        description: "Shared between holders of the country that wins the World Cup."
    },
    {
        title: "Top Scoring Country",
        amount: "25 AXS",
        description: "Shared between holders of the country that scores the most goals."
    },
    {
        title: "Knockout Stage",
        amount: "25 AXS",
        description: "Shared between holders of countries that reach the knockout stage (Round of 32)."
    },
    {
        title: "Full Collection",
        amount: "50 AXS",
        description: "Shared between wallets holding all 48 country NFTs."
    }
];
function shortAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
async function getLogsChunked(provider, filter, fromBlock, toBlock, chunkSize = 90_000) {
    const logs = [];
    for(let start = fromBlock; start <= toBlock; start += chunkSize){
        const end = Math.min(start + chunkSize - 1, toBlock);
        const chunkLogs = await provider.getLogs({
            ...filter,
            fromBlock: start,
            toBlock: end
        });
        logs.push(...chunkLogs);
    }
    return logs;
}
function LeaderboardPage() {
    const [collectors, setCollectors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [latestMints, setLatestMints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    async function loadLeaderboard() {
        try {
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTION_ADDRESS"]) {
                throw new Error("Missing NEXT_PUBLIC_COLLECTION_ADDRESS");
            }
            setStatus("Loading leaderboard...");
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RONIN_RPC"]);
            const currentBlock = await provider.getBlockNumber();
            /**
       * Adjust this if your RPC limits logs.
       * Smaller = safer but may miss older collectors.
       */ const fromBlock = Math.max(0, currentBlock - 250_000);
            const transferLogs = await getLogsChunked(provider, {
                address: __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTION_ADDRESS"],
                topics: [
                    [
                        TRANSFER_SINGLE_TOPIC,
                        TRANSFER_BATCH_TOPIC
                    ]
                ]
            }, fromBlock, currentBlock);
            const balances = new Map();
            function addBalance(owner, tokenId, amount) {
                if (tokenId < 1 || tokenId > COUNTRY_COUNT) return;
                if (owner === __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress) return;
                const key = owner.toLowerCase();
                if (!balances.has(key)) {
                    balances.set(key, new Map());
                }
                const userBalances = balances.get(key);
                userBalances.set(tokenId, (userBalances.get(tokenId) || 0n) + amount);
            }
            function subtractBalance(owner, tokenId, amount) {
                if (tokenId < 1 || tokenId > COUNTRY_COUNT) return;
                if (owner === __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress) return;
                const key = owner.toLowerCase();
                if (!balances.has(key)) {
                    balances.set(key, new Map());
                }
                const userBalances = balances.get(key);
                userBalances.set(tokenId, (userBalances.get(tokenId) || 0n) - amount);
            }
            for (const log of transferLogs){
                if (log.topics[0] === TRANSFER_SINGLE_TOPIC) {
                    const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].AbiCoder.defaultAbiCoder().decode([
                        "uint256",
                        "uint256"
                    ], log.data);
                    const from = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(`0x${log.topics[2].slice(26)}`);
                    const to = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(`0x${log.topics[3].slice(26)}`);
                    const tokenId = Number(decoded[0]);
                    const amount = BigInt(decoded[1].toString());
                    subtractBalance(from, tokenId, amount);
                    addBalance(to, tokenId, amount);
                }
                if (log.topics[0] === TRANSFER_BATCH_TOPIC) {
                    const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].AbiCoder.defaultAbiCoder().decode([
                        "uint256[]",
                        "uint256[]"
                    ], log.data);
                    const from = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(`0x${log.topics[2].slice(26)}`);
                    const to = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(`0x${log.topics[3].slice(26)}`);
                    const ids = decoded[0];
                    const amounts = decoded[1];
                    ids.forEach((id, index)=>{
                        const tokenId = Number(id);
                        const amount = amounts[index];
                        subtractBalance(from, tokenId, amount);
                        addBalance(to, tokenId, amount);
                    });
                }
            }
            const ranked = Array.from(balances.entries()).map(([address, tokenBalances])=>{
                const positiveBalances = Array.from(tokenBalances.values()).filter((balance)=>balance > 0n);
                return {
                    address,
                    uniqueCountries: positiveBalances.length,
                    totalBalance: positiveBalances.reduce((sum, balance)=>sum + balance, 0n)
                };
            }).filter((item)=>item.uniqueCountries > 0).sort((a, b)=>{
                if (b.uniqueCountries !== a.uniqueCountries) {
                    return b.uniqueCountries - a.uniqueCountries;
                }
                return Number(b.totalBalance - a.totalBalance);
            }).slice(0, 20);
            setCollectors(ranked);
            const mintLogs = await getLogsChunked(provider, {
                address: __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTION_ADDRESS"],
                topics: [
                    TRANSFER_SINGLE_TOPIC,
                    null,
                    __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].zeroPadValue(__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress, 32)
                ]
            }, fromBlock, currentBlock);
            const parsedMints = mintLogs.slice(-5).reverse().map((log)=>{
                const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].AbiCoder.defaultAbiCoder().decode([
                    "uint256",
                    "uint256"
                ], log.data);
                const to = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(`0x${log.topics[3].slice(26)}`);
                const countryId = Number(decoded[0]);
                return {
                    minter: to,
                    countryId,
                    country: __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countries"][countryId - 1] || `Country #${countryId}`,
                    axieTokenId: "Unknown",
                    requestId: "Unknown",
                    txHash: log.transactionHash
                };
            });
            setLatestMints(parsedMints);
            setStatus(`Loaded from block ${fromBlock.toLocaleString()} to ${currentBlock.toLocaleString()}.`);
        } catch (err) {
            setStatus(err?.message || "Failed to load leaderboard");
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadLeaderboard();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Leaderboard"
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Top collectors by unique countries owned, plus the 5 latest country mints."
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Reward Pools"
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 275,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rewardGrid",
                        children: REWARDS.map((reward)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rewardCard",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rewardAmount",
                                        children: reward.amount
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: reward.title
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: reward.description
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, reward.title, true, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                lineNumber: 279,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 277,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "button",
                            onClick: loadLeaderboard,
                            children: "Refresh leaderboard"
                        }, void 0, false, {
                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this),
                        status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "status",
                            children: status
                        }, void 0, false, {
                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                            lineNumber: 294,
                            columnNumber: 22
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Top collectors"
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "leaderboardTable",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "leaderboardRow header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Rank"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Wallet"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Countries"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Total NFTs"
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            collectors.map((collector, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "leaderboardRow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "#",
                                                index + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/inventory?address=${collector.address}`,
                                                style: {
                                                    color: "inherit",
                                                    textDecoration: "underline"
                                                },
                                                children: shortAddress(collector.address)
                                            }, void 0, false, {
                                                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                collector.uniqueCountries,
                                                " / 48"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: collector.totalBalance.toString()
                                        }, void 0, false, {
                                            fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, collector.address, true, {
                                    fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Latest mints"
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inventoryGrid",
                        children: latestMints.map((mint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageUrl"])(mint.countryId),
                                        alt: `${mint.country} Axie`
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "id",
                                        children: [
                                            "#",
                                            mint.countryId
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "name",
                                        children: mint.country
                                    }, void 0, false, {
                                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                        lineNumber: 342,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        lineNumber: 343,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, mint.txHash, true, {
                                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ronin-worldcup-axie/frontend/app/leaderboard/page.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0vvxjyu._.js.map