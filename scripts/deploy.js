import hre from "hardhat";

function required(name) {
  const value = process.env[name];
  if (!value || value === "") throw new Error(`Missing env var: ${name}`);
  return value;
}

const JUNE_11_2026_19_GMT = 1781204400;
const JULY_19_2026_19_GMT = 1784487600;

async function main() {
  const { ethers } = await hre.network.connect();
  const [deployer] = await ethers.getSigners();

  const args = [
    deployer.address,
    process.env.COLLECTION_NAME || "World Cup Axie Countries",
    process.env.COLLECTION_SYMBOL || "WCAXIE",
    process.env.AXIE_CONTRACT || "0x32950db2a7164aE833121501C797D79E7B79d74C",
    process.env.RELEASE_ADDRESS || "0x27263b825BaB7Ef905718185342905FBd248D1Ed",
    required("BASE_URI"),
    required("VRF_COORDINATOR"),
    Number(process.env.VRF_CALLBACK_GAS_LIMIT || "500000"),
    JUNE_11_2026_19_GMT,
    JULY_19_2026_19_GMT
  ];

  console.log("Deploying with:", deployer.address);
  console.log(args);

  const WorldCupAxie = await ethers.getContractFactory("WorldCupAxie");
  const contract = await WorldCupAxie.deploy(...args);

  await contract.waitForDeployment();

  console.log("WorldCupAxie deployed:", await contract.getAddress());
  console.log("Constructor args:");
  console.log(JSON.stringify(args.map(String), null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});