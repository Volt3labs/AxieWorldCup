export async function GET() {
  const response = await fetch(
    "https://gamma-api.polymarket.com/events/slug/world-cup-winner",
    {
      cache: "no-store",
    }
  );

  const event = await response.json();

  return Response.json(event, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}