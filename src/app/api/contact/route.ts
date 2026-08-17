import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateField } from "@/lib/intake/schema";
import { contactFields } from "@/lib/contact/fields";
import { buildContactEmail } from "@/lib/contact/email-template";

const DEFAULT_NOTIFICATION_EMAIL = "hayeslegalsolutions@hayeslegalsolutions.com";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const honeypot = String(body.company ?? "");

  // Same honeypot pattern as the intake forms: real visitors never see or
  // fill this field, so any value here means spam. Report success anyway so
  // bots get no signal that they were caught.
  if (honeypot.trim()) {
    console.warn("[contact] honeypot triggered, discarding submission");
    return NextResponse.json({ ok: true });
  }

  const data: Record<string, string> = {};
  for (const field of contactFields) {
    data[field.name] = String(body[field.name] ?? "");
  }

  const errors: Record<string, string> = {};
  for (const field of contactFields) {
    const error = validateField(field, data[field.name]);
    if (error) errors[field.name] = error;
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set — message was not delivered", { data });
    return NextResponse.json(
      { ok: false, message: "Email delivery isn't configured yet." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const { subject, html, text } = buildContactEmail({ data });

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Landownersignal <onboarding@resend.dev>",
      to: process.env.CONTACT_NOTIFICATION_EMAIL || DEFAULT_NOTIFICATION_EMAIL,
      replyTo: data.email || undefined,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("[contact] Resend API returned an error", error);
      return NextResponse.json(
        { ok: false, message: "We couldn't send your message." },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("[contact] failed to send notification email", err);
    return NextResponse.json(
      { ok: false, message: "We couldn't send your message." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
