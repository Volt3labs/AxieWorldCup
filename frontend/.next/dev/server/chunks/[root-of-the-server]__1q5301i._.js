module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
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
"[project]/ronin-worldcup-axie/frontend/app/lib/contracts.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
const RONIN_RPC = "https://ronin-mainnet.g.alchemy.com/v2/Eueiz9Tl-1dLjyHfhi6qy";
const CHAIN_ID = Number(("TURBOPACK compile-time value", "2020") || "2020");
}),
"[project]/ronin-worldcup-axie/frontend/app/lib/countries.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/ronin-worldcup-axie/frontend/app/api/leaderboard/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/ethers/lib.esm/ethers.js [app-route] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/app/lib/contracts.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/app/lib/countries.ts [app-route] (ecmascript)");
const dynamic = "force-dynamic";
;
;
;
const COUNTRY_COUNT = 48;
const DEPLOYMENT_BLOCK = 56865900;
const CHUNK_SIZE = 10;
const MAX_BLOCKS_PER_CALL = 100;
const DELAY_BETWEEN_REQUESTS_MS = 250;
const TRANSFER_SINGLE_TOPIC = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].id("TransferSingle(address,address,address,uint256,uint256)");
const TRANSFER_BATCH_TOPIC = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].id("TransferBatch(address,address,address,uint256[],uint256[])");
const globalForLeaderboard = globalThis;
function emptyState() {
    return {
        lastIndexedBlock: DEPLOYMENT_BLOCK - 1,
        balances: {},
        latestMints: []
    };
}
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
function topicToAddress(topic) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(`0x${topic.slice(26)}`);
}
async function getLogsChunked(provider, filter, fromBlock, toBlock) {
    const logs = [];
    for(let start = fromBlock; start <= toBlock; start += CHUNK_SIZE){
        const end = Math.min(start + CHUNK_SIZE - 1, toBlock);
        try {
            const chunkLogs = await provider.getLogs({
                ...filter,
                fromBlock: start,
                toBlock: end
            });
            logs.push(...chunkLogs);
            await sleep(DELAY_BETWEEN_REQUESTS_MS);
        } catch (err) {
            const isRateLimit = err?.error?.code === 429 || err?.code === 429 || String(err?.message || "").includes("429") || String(err?.message || "").toLowerCase().includes("rate");
            if (isRateLimit) {
                await sleep(2500);
                const retryLogs = await provider.getLogs({
                    ...filter,
                    fromBlock: start,
                    toBlock: end
                });
                logs.push(...retryLogs);
                await sleep(DELAY_BETWEEN_REQUESTS_MS);
                continue;
            }
            throw err;
        }
    }
    return logs;
}
function addBalance(state, owner, tokenId, amount) {
    if (owner === __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress) return;
    if (tokenId < 1 || tokenId > COUNTRY_COUNT) return;
    const user = owner.toLowerCase();
    const id = String(tokenId);
    state.balances[user] ??= {};
    state.balances[user][id] = (BigInt(state.balances[user][id] || "0") + amount).toString();
}
function subBalance(state, owner, tokenId, amount) {
    if (owner === __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress) return;
    if (tokenId < 1 || tokenId > COUNTRY_COUNT) return;
    const user = owner.toLowerCase();
    const id = String(tokenId);
    state.balances[user] ??= {};
    state.balances[user][id] = (BigInt(state.balances[user][id] || "0") - amount).toString();
}
function addLatestMint(state, minter, tokenId, txHash, blockNumber) {
    if (tokenId < 1 || tokenId > COUNTRY_COUNT) return;
    state.latestMints.unshift({
        minter,
        countryId: tokenId,
        country: __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countries"][tokenId - 1] || `Country #${tokenId}`,
        txHash,
        blockNumber
    });
    const seen = new Set();
    state.latestMints = state.latestMints.filter((mint)=>{
        const key = `${mint.txHash}-${mint.countryId}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    }).sort((a, b)=>b.blockNumber - a.blockNumber).slice(0, 5);
}
function applyLog(state, log) {
    if (log.topics[0] === TRANSFER_SINGLE_TOPIC) {
        const from = topicToAddress(log.topics[2]);
        const to = topicToAddress(log.topics[3]);
        const [id, value] = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].AbiCoder.defaultAbiCoder().decode([
            "uint256",
            "uint256"
        ], log.data);
        const tokenId = Number(id);
        const amount = BigInt(value.toString());
        subBalance(state, from, tokenId, amount);
        addBalance(state, to, tokenId, amount);
        if (from === __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress) {
            addLatestMint(state, to, tokenId, log.transactionHash, log.blockNumber);
        }
    }
    if (log.topics[0] === TRANSFER_BATCH_TOPIC) {
        const from = topicToAddress(log.topics[2]);
        const to = topicToAddress(log.topics[3]);
        const [ids, values] = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].AbiCoder.defaultAbiCoder().decode([
            "uint256[]",
            "uint256[]"
        ], log.data);
        ids.forEach((id, index)=>{
            const tokenId = Number(id);
            const amount = BigInt(values[index].toString());
            subBalance(state, from, tokenId, amount);
            addBalance(state, to, tokenId, amount);
            if (from === __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress) {
                addLatestMint(state, to, tokenId, log.transactionHash, log.blockNumber);
            }
        });
    }
}
function buildCollectors(state) {
    return Object.entries(state.balances).map(([address, tokenBalances])=>{
        const positiveBalances = Object.entries(tokenBalances).filter(([tokenId, balance])=>{
            const id = Number(tokenId);
            return id >= 1 && id <= COUNTRY_COUNT && BigInt(balance) > 0n;
        }).map(([, balance])=>BigInt(balance));
        return {
            address,
            uniqueCountries: positiveBalances.length,
            totalBalance: positiveBalances.reduce((sum, balance)=>sum + balance, 0n).toString()
        };
    }).filter((item)=>item.uniqueCountries > 0).sort((a, b)=>{
        if (b.uniqueCountries !== a.uniqueCountries) {
            return b.uniqueCountries - a.uniqueCountries;
        }
        return Number(BigInt(b.totalBalance) - BigInt(a.totalBalance));
    }).slice(0, 20);
}
async function updateIndex() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COLLECTION_ADDRESS"]) {
        throw new Error("Missing NEXT_PUBLIC_COLLECTION_ADDRESS");
    }
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider("https://ronin-mainnet.g.alchemy.com/v2/Eueiz9Tl-1dLjyHfhi6qy");
    const chainCurrentBlock = await provider.getBlockNumber();
    const state = globalForLeaderboard.leaderboardState ?? emptyState();
    const fromBlock = Math.max(DEPLOYMENT_BLOCK, state.lastIndexedBlock + 1);
    const toBlock = Math.min(chainCurrentBlock, fromBlock + MAX_BLOCKS_PER_CALL - 1);
    if (fromBlock <= toBlock) {
        const logs = await getLogsChunked(provider, {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COLLECTION_ADDRESS"],
            topics: [
                [
                    TRANSFER_SINGLE_TOPIC,
                    TRANSFER_BATCH_TOPIC
                ]
            ]
        }, fromBlock, toBlock);
        for (const log of logs){
            applyLog(state, log);
        }
        state.lastIndexedBlock = toBlock;
    }
    globalForLeaderboard.leaderboardState = state;
    return {
        state,
        chainCurrentBlock
    };
}
async function GET(req) {
    try {
        const url = new URL(req.url);
        if (url.searchParams.get("reset") === "1") {
            globalForLeaderboard.leaderboardState = undefined;
            globalForLeaderboard.leaderboardIndexing = undefined;
        }
        if (!globalForLeaderboard.leaderboardIndexing) {
            globalForLeaderboard.leaderboardIndexing = updateIndex();
        }
        const { state, chainCurrentBlock } = await globalForLeaderboard.leaderboardIndexing;
        globalForLeaderboard.leaderboardIndexing = undefined;
        return Response.json({
            lastIndexedBlock: state.lastIndexedBlock,
            chainCurrentBlock,
            isFullySynced: state.lastIndexedBlock >= chainCurrentBlock,
            balancesCount: Object.keys(state.balances).length,
            collectorsCount: buildCollectors(state).length,
            latestMintsCount: state.latestMints.length,
            collectors: buildCollectors(state),
            latestMints: state.latestMints
        });
    } catch (err) {
        globalForLeaderboard.leaderboardIndexing = undefined;
        return Response.json({
            error: err?.message || "Failed to load leaderboard",
            code: err?.code,
            data: err?.data,
            shortMessage: err?.shortMessage
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1q5301i._.js.map