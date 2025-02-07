export async function GET() {
  try {
    const leetRes = await fetch(
      "https://leetcode-stats-api.herokuapp.com/vinaypatel_nitmz"
    );
    const leetData = await leetRes.json();

    if (!leetRes.ok || leetData.status !== "success") {
      return Response.json({ error: "LeetCode API failed" }, { status: 500 });
    }

    return Response.json(leetData);
  } catch (error) {
    return Response.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
