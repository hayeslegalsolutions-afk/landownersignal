import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";

type CartPayloadItem = { slug?: unknown; quantity?: unknown };

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const rawItems: unknown = body?.items;

  if (!Array.isArray(rawItems) || rawItems.length === 0) {
    return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
  }

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  let hasBook = false;

  for (const raw of rawItems as CartPayloadItem[]) {
    const slug = typeof raw.slug === "string" ? raw.slug : null;
    const product = slug ? getProductBySlug(slug) : undefined;

    if (!product) {
      return NextResponse.json(
        { error: "One of the items in your cart is no longer available." },
        { status: 400 }
      );
    }

    // Price and product identity always come from our own catalog, never
    // from the client — the request only tells us which slugs and how many.
    const quantity =
      product.type === "pdf-checklist"
        ? 1
        : Math.max(1, Math.min(20, Math.round(Number(raw.quantity)) || 1));

    if (product.type === "book") hasBook = true;

    lineItems.push({
      quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(product.price * 100),
        product_data: {
          name: product.title,
          description: product.shortDescription,
          metadata: { slug: product.slug, type: product.type },
        },
      },
    });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("[checkout] STRIPE_SECRET_KEY is not set — cannot create a checkout session");
    return NextResponse.json(
      { error: "Checkout isn't configured yet." },
      { status: 500 }
    );
  }

  const origin = new URL(request.url).origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${origin}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop/cart`,
      // Tax: enable once Stripe Tax is configured in the dashboard
      // (Settings > Tax > add an origin address and registrations), otherwise
      // this will error or calculate $0 tax everywhere.
      // automatic_tax: { enabled: true },
      ...(hasBook
        ? {
            shipping_address_collection: { allowed_countries: ["US"] },
            shipping_options: [
              {
                shipping_rate_data: {
                  type: "fixed_amount",
                  fixed_amount: { amount: 499, currency: "usd" },
                  display_name: "Standard Shipping",
                  delivery_estimate: {
                    minimum: { unit: "business_day", value: 3 },
                    maximum: { unit: "business_day", value: 7 },
                  },
                },
              },
            ],
          }
        : {}),
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] failed to create Stripe checkout session", err);
    return NextResponse.json(
      { error: "We couldn't start checkout." },
      { status: 500 }
    );
  }
}
