import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const payload: Record<string, string> = {};
  const files: { field: string; name: string; size: number; type: string }[] = [];

  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      files.push({ field: key, name: value.name, size: value.size, type: value.type });
    } else {
      payload[key] = value;
    }
  }

  // Placeholder handling — real email delivery and storage get wired up in a later step.
  console.log("[intake] submission received", { track: payload.track, payload, files });

  return NextResponse.json({ ok: true });
}
