import fs from "node:fs";
import path from "node:path";
import { countries } from "./countries.js";

const imagesCid = process.argv[2];
if (!imagesCid) {
  throw new Error("Usage: node scripts/build-metadata.js <images-folder-CID>");
}

const outDir = path.join(process.cwd(), "metadata");
fs.mkdirSync(outDir, { recursive: true });

countries.forEach((country, index) => {
  const tokenId = index + 1;
  const metadata = {
    name: `World Cup Axie - ${country}`,
    description: "World Cup Axie country collection.",
    image: `ipfs://${imagesCid}/${tokenId}.png`,
    attributes: [
      { trait_type: "Country", value: country },
      { trait_type: "Edition", value: "World Cup 2026" }
    ]
  };

  fs.writeFileSync(
    path.join(outDir, `${tokenId}.json`),
    JSON.stringify(metadata, null, 2)
  );
});

console.log(`Wrote ${countries.length} metadata files to ${outDir}`);
