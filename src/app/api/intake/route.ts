import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateSubmission } from "@/lib/intake/schema";
import { isTrackKey, trackSteps } from "@/lib/intake/track-fields";
import { buildIntakeEmail } from "@/lib/intake/email-template";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_FILE_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);
const DEFAULT_NOTIFICATION_EMAIL = "hayeslegalsolutions@hayeslegalsolutions.com";

export async function POST(request: Request) {
  const formData = await request.formData();

  const track = String(formData.get("track") ?? "");
  const honeypot = String(formData.get("company") ?? "");

  // Basic spam protection: bots tend to fill every field, including hidden
  // ones. Real users never see this field, so any value here means spam.
  // Respond with the same success shape a real submission gets, so bots get
  // no signal that they were caught.
  if (honeypot.trim()) {
    console.warn("[intake] honeypot triggered, discarding submission", { track });
    return NextResponse.json({ ok: true });
  }

  if (!isTrackKey(track)) {
    return NextResponse.json({ ok: false, message: "Unknown intake form." }, { status: 400 });
  }

  if (formData.get("agreed") !== "true") {
    return NextResponse.json(
      { ok: false, errors: { agreed: "You must agree to the Terms of Use and Privacy Policy." } },
      { status: 400 }
    );
  }

  const steps = trackSteps[track];

  const data: Record<string, string> = {};
  let file: File | null = null;
  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      if (value.size > 0) file = value;
    } else if (key !== "track" && key !== "company" && key !== "agreed") {
      data[key] = value;
    }
  }

  // Server-side validation mirrors the client's rules exactly, since both
  // pull from the same shared step/field config — never trust the client.
  const errors = validateSubmission(steps, data);

  if (file) {
    if (!ALLOWED_FILE_TYPES.has(file.type)) {
      errors.document = "Please upload a PDF, JPG, or PNG file.";
    } else if (file.size > MAX_FILE_SIZE) {
      errors.document = "That file is too large — please keep it under 10MB.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[intake] RESEND_API_KEY is not set — submission was not delivered", {
      track,
      data,
    });
    return NextResponse.json(
      { ok: false, message: "Email delivery isn't configured yet." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const { subject, html, text } = buildIntakeEmail({
    track,
    steps,
    data,
    attachmentName: file?.name ?? null,
  });

  try {
    const attachments = file
      ? [{ filename: file.name, content: Buffer.from(await file.arrayBuffer()) }]
      : undefined;

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Landownersignal <onboarding@resend.dev>",
      to: process.env.INTAKE_NOTIFICATION_EMAIL || DEFAULT_NOTIFICATION_EMAIL,
      replyTo: data.email || undefined,
      subject,
      html,
      text,
      attachments,
    });

    if (error) {
      console.error("[intake] Resend API returned an error", error);
      return NextResponse.json(
        { ok: false, message: "We couldn't send your submission." },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("[intake] failed to send notification email", err);
    return NextResponse.json(
      { ok: false, message: "We couldn't send your submission." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
