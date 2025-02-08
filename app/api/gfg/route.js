// export async function GET() {
//   try {
//     const gfgRes = await fetch(
//       "https://gfg-backend-api-by-vinay-patel.vercel.app/nitianvinaypatel"
//     );
//     const gfgData = await gfgRes.json();

//     if (!gfgRes.ok || !gfgData.info) {
//       return Response.json({ error: "GFG API failed" }, { status: 500 });
//     }

//     return Response.json(gfgData.info);
//   } catch (error) {
//     return Response.json(
//       { error: "Server error", details: error.message },
//       { status: 500 }
//     );
//   }
// }

export async function GET() {
  try {
    const gfgRes = await fetch(
      "https://gfg-backend-api-by-vinay-patel.vercel.app/nitianvinaypatel",
      { cache: "no-store" }
    );

    const gfgData = await gfgRes.json();

    if (!gfgRes.ok || !gfgData.info || !gfgData.solvedStats) {
      return Response.json({ error: "GFG API failed" }, { status: 500 });
    }

    return new Response(
      JSON.stringify({
        ...gfgData.info, // Basic profile info
        basic: gfgData.solvedStats.basic.count || 0,
        easy: gfgData.solvedStats.easy.count || 0,
        medium: gfgData.solvedStats.medium.count || 0,
        hard: gfgData.solvedStats.hard.count || 0,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0, must-revalidate",
        },
      }
    );
  } catch (error) {
    return Response.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
