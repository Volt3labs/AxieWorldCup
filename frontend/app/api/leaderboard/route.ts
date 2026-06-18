export const dynamic = "force-dynamic";

import { buildCollectors, updateIndex } from "../../lib/indexer";

export async function GET() {
  try {
    const { state, chainCurrentBlock, isFullySynced } = await updateIndex();

    return Response.json({
      lastIndexedBlock: state.lastIndexedBlock,
      chainCurrentBlock,
      isFullySynced,
      collectors: buildCollectors(state),
      latestMints: state.latestMints,
    });
  } catch (err: any) {
    return Response.json(
      { error: err?.message || "Failed to load leaderboard" },
      { status: 500 }
    );
  }
}