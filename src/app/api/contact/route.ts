export async function POST(req: Request) {
  const data = await req.json();
  console.log({ data });
  return new Response(JSON.stringify({ data, error: null }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}