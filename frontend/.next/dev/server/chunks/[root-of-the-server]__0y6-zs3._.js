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
"[project]/ronin-worldcup-axie/frontend/app/api/stats/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/node_modules/ethers/lib.esm/ethers.js [app-route] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ronin-worldcup-axie/frontend/app/lib/contracts.ts [app-route] (ecmascript)");
const dynamic = "force-dynamic";
;
;
const COUNTRY_COUNT = 48;
const DEPLOYMENT_BLOCK = 56865900;
const CHUNK_SIZE = 10;
const MAX_BLOCKS_PER_CALL = 1_000;
const TRANSFER_SINGLE_TOPIC = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].id("TransferSingle(address,address,address,uint256,uint256)");
const TRANSFER_BATCH_TOPIC = __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].id("TransferBatch(address,address,address,uint256[],uint256[])");
const globalForStats = globalThis;
function emptyState() {
    const minted = {};
    for(let tokenId = 1; tokenId <= COUNTRY_COUNT; tokenId++){
        minted[String(tokenId)] = "0";
    }
    return {
        lastIndexedBlock: DEPLOYMENT_BLOCK - 1,
        minted,
        balances: {}
    };
}
function topicToAddress(topic) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].getAddress(`0x${topic.slice(26)}`);
}
async function getLogsChunked(provider, filter, fromBlock, toBlock) {
    const logs = [];
    for(let start = fromBlock; start <= toBlock; start += CHUNK_SIZE){
        const end = Math.min(start + CHUNK_SIZE - 1, toBlock);
        const chunkLogs = await provider.getLogs({
            ...filter,
            fromBlock: start,
            toBlock: end
        });
        logs.push(...chunkLogs);
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
        if (from === __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress && tokenId >= 1 && tokenId <= COUNTRY_COUNT) {
            state.minted[String(tokenId)] = (BigInt(state.minted[String(tokenId)] || "0") + amount).toString();
        }
        subBalance(state, from, tokenId, amount);
        addBalance(state, to, tokenId, amount);
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
            if (from === __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress && tokenId >= 1 && tokenId <= COUNTRY_COUNT) {
                state.minted[String(tokenId)] = (BigInt(state.minted[String(tokenId)] || "0") + amount).toString();
            }
            subBalance(state, from, tokenId, amount);
            addBalance(state, to, tokenId, amount);
        });
    }
}
function buildStats(state) {
    const stats = {};
    for(let tokenId = 1; tokenId <= COUNTRY_COUNT; tokenId++){
        let owners = 0;
        for (const userBalances of Object.values(state.balances)){
            if (BigInt(userBalances[String(tokenId)] || "0") > 0n) {
                owners++;
            }
        }
        stats[tokenId] = {
            minted: Number(state.minted[String(tokenId)] || "0"),
            owners
        };
    }
    return stats;
}
async function updateIndex() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$app$2f$lib$2f$contracts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COLLECTION_ADDRESS"]) {
        throw new Error("Missing NEXT_PUBLIC_COLLECTION_ADDRESS");
    }
    if (!process.env.RONIN_RPC_URL) {
        throw new Error("Missing RONIN_RPC_URL");
    }
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(process.env.RONIN_RPC_URL);
    const chainCurrentBlock = await provider.getBlockNumber();
    const state = globalForStats.statsState ?? emptyState();
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
    globalForStats.statsState = state;
    return {
        state,
        chainCurrentBlock
    };
}
async function GET(req) {
    try {
        const url = new URL(req.url);
        if (url.searchParams.get("reset") === "1") {
            globalForStats.statsState = undefined;
            globalForStats.statsIndexing = undefined;
        }
        if (!globalForStats.statsIndexing) {
            globalForStats.statsIndexing = updateIndex().then((result)=>result.state);
        }
        const state = await globalForStats.statsIndexing;
        globalForStats.statsIndexing = undefined;
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$ronin$2d$worldcup$2d$axie$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(process.env.RONIN_RPC_URL);
        const chainCurrentBlock = await provider.getBlockNumber();
        return Response.json({
            lastIndexedBlock: state.lastIndexedBlock,
            chainCurrentBlock,
            isFullySynced: state.lastIndexedBlock >= chainCurrentBlock,
            balancesCount: Object.keys(state.balances).length,
            stats: buildStats(state)
        });
    } catch (err) {
        globalForStats.statsIndexing = undefined;
        return Response.json({
            error: err?.message || "Failed to load stats",
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0y6-zs3._.js.map