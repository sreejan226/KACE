import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const res = await fetch("https://sheetdb.io/api/v1/m1hjdvv7rerbm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [data] }),
    });

    const result = await res.json();
    return NextResponse.json(result);
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
