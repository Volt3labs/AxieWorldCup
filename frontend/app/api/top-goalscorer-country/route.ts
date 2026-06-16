export async function GET() {
  const response = await fetch(
    "https://gamma-api.polymarket.com/events/slug/world-cup-nation-of-top-goalscorer",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return Response.json(
      { error: "Failed to fetch Polymarket data" },
      { status: 500 }
    );
  }

  const event = await response.json();

  return Response.json(event, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}