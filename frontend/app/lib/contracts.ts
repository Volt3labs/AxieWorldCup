export const ERC1155_ABI = [
  "function balanceOf(address account, uint256 id) view returns (uint256)",
  "function balanceOfBatch(address[] accounts, uint256[] ids) view returns (uint256[])",
  "function name() view returns (string)",
  "function symbol() view returns (string)"
];

export const AXIE_ABI = [
  "function safeTransferFrom(address from, address to, uint256 tokenId)"
];

export const COLLECTION_ADDRESS = process.env.NEXT_PUBLIC_COLLECTION_ADDRESS || "";
export const AXIE_CONTRACT = process.env.NEXT_PUBLIC_AXIE_CONTRACT || "0x32950db2a7164aE833121501C797D79E7B79d74C";
export const RONIN_RPC = "https://ronin-mainnet.g.alchemy.com/v2/Eueiz9Tl-1dLjyHfhi6qy";
export const CHAIN_ID = Number(process.env.NEXT_PUBLIC_CHAIN_ID || "2020");
