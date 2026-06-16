export async function GET() {
  const response = await fetch(
    "https://gamma-api.polymarket.com/events/slug/world-cup-top-scorer-nation",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return Response.json(
      { error: "Failed to fetch top scoring nation data" },
      { status: 500 }
    );
  }

  const event = await response.json();

  return Response.json(event.markets || [], {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}