import "dotenv/config";
import { updateIndex } from "../lib/indexer";

async function main() {
  console.log("Starting bootstrap...");

  while (true) {
    const { state, chainCurrentBlock, isFullySynced } = await updateIndex(100);

    console.log(
      `Indexed ${state.lastIndexedBlock.toLocaleString()} / ${chainCurrentBlock.toLocaleString()}`
    );

    if (isFullySynced) break;
  }

  console.log("Bootstrap complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});