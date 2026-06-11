import hardhatEthers from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import "dotenv/config";

const PRIVATE_KEY = process.env.PRIVATE_KEY ?? "";
const accounts = PRIVATE_KEY ? [PRIVATE_KEY] : [];

export default {
  plugins: [hardhatEthers],

  solidity: {
    version: "0.8.28",
    settings: {
      viaIR: true,
      optimizer: { enabled: true, runs: 200 },
      metadata: { bytecodeHash: "ipfs" }
    }
  },

  networks: {
    ronin: {
      type: "http",
      chainType: "l1",
      url: process.env.RONIN_RPC_URL || "https://api.roninchain.com/rpc",
      chainId: 2020,
      accounts
    }
  },

  sourcify: { enabled: true }
};