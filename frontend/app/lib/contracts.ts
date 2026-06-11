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
export const RONIN_RPC = process.env.NEXT_PUBLIC_RONIN_RPC || "https://api.roninchain.com/rpc";
export const CHAIN_ID = Number(process.env.NEXT_PUBLIC_CHAIN_ID || "2020");
