export async function GET() {
  try {
    const gfgRes = await fetch(
      "https://gfg-backend-api-by-vinay-patel.vercel.app/nitianvinaypatel"
    );
    const gfgData = await gfgRes.json();

    if (!gfgRes.ok || !gfgData.info) {
      return Response.json({ error: "GFG API failed" }, { status: 500 });
    }

    return Response.json(gfgData.info);
  } catch (error) {
    return Response.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
