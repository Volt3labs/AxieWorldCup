export const dynamic = "force-dynamic";

import { buildStats, updateIndex } from "../../lib/indexer";

export async function GET() {
  try {
    const { state, chainCurrentBlock, isFullySynced } = await updateIndex();

    return Response.json({
      lastIndexedBlock: state.lastIndexedBlock,
      chainCurrentBlock,
      isFullySynced,
      stats: buildStats(state),
    });
  } catch (err: any) {
    return Response.json(
      { error: err?.message || "Failed to load stats" },
      { status: 500 }
    );
  }
}