import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { Resend } from "resend";
import { stripe } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";
import { buildDownloadEmail, buildOrderNotificationEmail, type FulfillmentItem } from "@/lib/shop/email-template";

const DEFAULT_ORDER_EMAIL = "hayeslegalsolutions@hayeslegalsolutions.com";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    console.error("[stripe webhook] missing signature header or STRIPE_WEBHOOK_SECRET");
    return NextResponse.json({ error: "Webhook not configured." }, { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error("[stripe webhook] signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    if (session.payment_status === "paid") {
      const origin = new URL(request.url).origin;
      // Acknowledge the webhook promptly regardless of whether fulfillment
      // (email sending) succeeds — a downstream email hiccup shouldn't make
      // Stripe think the event delivery itself failed and retry it.
      try {
        await fulfillOrder(session.id, origin);
      } catch (err) {
        console.error("[stripe webhook] order fulfillment failed", { sessionId: session.id, err });
      }
    }
  }

  return NextResponse.json({ received: true });
}

async function fulfillOrder(sessionId: string, origin: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items.data.price.product"],
  });

  const items: FulfillmentItem[] = (session.line_items?.data ?? [])
    .map((lineItem) => {
      const productData = lineItem.price?.product;
      const slug =
        productData && typeof productData !== "string" && !productData.deleted
          ? productData.metadata?.slug
          : undefined;
      const product = slug ? getProductBySlug(slug) : undefined;
      return product ? { product, quantity: lineItem.quantity ?? 1 } : null;
    })
    .filter((i): i is FulfillmentItem => i !== null);

  if (items.length === 0) {
    console.error("[stripe webhook] no recognizable items on session", { sessionId });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[stripe webhook] RESEND_API_KEY is not set — order was not emailed", {
      sessionId,
      items: items.map((i) => `${i.product.slug} x${i.quantity}`),
    });
    return;
  }

  const resend = new Resend(apiKey);
  const fromAddress = process.env.RESEND_FROM_EMAIL || "Landownersignal <onboarding@resend.dev>";

  const notification = buildOrderNotificationEmail({ session, items });
  await resend.emails.send({
    from: fromAddress,
    to: process.env.ORDER_NOTIFICATION_EMAIL || DEFAULT_ORDER_EMAIL,
    subject: notification.subject,
    html: notification.html,
    text: notification.text,
  });

  const pdfItems = items.filter((i) => i.product.type === "pdf-checklist");
  const buyerEmail = session.customer_details?.email;

  if (pdfItems.length > 0 && buyerEmail) {
    const download = buildDownloadEmail({ items: pdfItems, origin });
    await resend.emails.send({
      from: fromAddress,
      to: buyerEmail,
      subject: download.subject,
      html: download.html,
      text: download.text,
    });
  }
}
