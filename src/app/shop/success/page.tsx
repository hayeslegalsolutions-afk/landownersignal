import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Hero } from "@/components/ui/hero";
import { Callout } from "@/components/ui/callout";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import { getOrderItems } from "@/lib/shop/order-items";
import type { FulfillmentItem } from "@/lib/shop/types";

export const metadata: Metadata = {
  title: "Order Confirmed",
  description: "Your order confirmation and download page.",
};

const FALLBACK_CONTACT_EMAIL = "hayeslegalsolutions@hayeslegalsolutions.com";

async function loadOrder(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items.data.price.product"],
  });

  return { session, items: getOrderItems(session) };
}

export default async function ShopSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    return (
      <>
        <Hero eyebrow="Shop" title="No order found" />
        <Container className="max-w-2xl pb-16">
          <p className="text-ink-muted">
            We don&apos;t see an order to confirm here. If you just completed a purchase,
            check your email for a receipt.
          </p>
          <div className="mt-6">
            <Button href="/shop">Back to Shop</Button>
          </div>
        </Container>
      </>
    );
  }

  let session: Awaited<ReturnType<typeof loadOrder>>["session"] | null = null;
  let items: FulfillmentItem[] = [];

  try {
    const result = await loadOrder(sessionId);
    session = result.session;
    items = result.items;
  } catch (err) {
    console.error("[shop success] failed to retrieve checkout session", err);
  }

  if (!session || session.payment_status !== "paid") {
    return (
      <>
        <Hero eyebrow="Shop" title="We're still confirming your order" />
        <Container className="max-w-2xl pb-16">
          <Callout tone="info" title="Hang tight">
            If you just paid, this can take a moment to confirm. Refresh this page in a
            minute, or check your email for a receipt.
          </Callout>
          <p className="mt-6 text-sm text-ink-muted">
            Still not showing up? Email us at{" "}
            <a href={`mailto:${FALLBACK_CONTACT_EMAIL}`} className="underline">
              {FALLBACK_CONTACT_EMAIL}
            </a>{" "}
            and we&apos;ll sort it out.
          </p>
        </Container>
      </>
    );
  }

  const pdfItems = items.filter((i) => i.product.type === "pdf-checklist");
  const bookItems = items.filter((i) => i.product.type === "book");
  const buyerEmail = session.customer_details?.email;
  const shipping = session.collected_information?.shipping_details;

  return (
    <>
      <Hero eyebrow="Shop" title="Thank you for your order" />
      <Container className="max-w-2xl pb-16">
        {pdfItems.length > 0 && (
          <div className="mb-8">
            <h2 className="font-serif text-xl font-semibold text-ink">
              {pdfItems.length > 1 ? "Your checklist bundle" : "Your download"}
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              {pdfItems.length > 1
                ? "All the checklists in your order are combined into one PDF:"
                : "Your checklist is ready:"}
            </p>
            <ul className="mt-3 space-y-1">
              {pdfItems.map((i) => (
                <li key={i.product.slug} className="text-sm text-ink">
                  {i.product.title}
                </li>
              ))}
            </ul>
            <a
              href={`/api/downloads/${session.id}`}
              className="mt-4 flex items-center justify-between rounded-lg border border-line bg-white px-4 py-3 text-sm font-semibold text-brand hover:border-brand"
            >
              Download your checklist bundle
              <span>Download →</span>
            </a>
            {buyerEmail && (
              <p className="mt-3 text-sm text-ink-muted">
                We&apos;ve also emailed this link to {buyerEmail} as a backup.
              </p>
            )}
          </div>
        )}

        {bookItems.length > 0 && (
          <div className="mb-8">
            <h2 className="font-serif text-xl font-semibold text-ink">Shipping</h2>
            <div className="mt-4 space-y-2">
              {bookItems.map((i) => (
                <p key={i.product.slug} className="text-sm text-ink">
                  {i.product.title} × {i.quantity}
                </p>
              ))}
            </div>
            {shipping ? (
              <p className="mt-3 text-sm text-ink-muted">
                Shipping to {shipping.name} — {shipping.address.line1}
                {shipping.address.line2 ? `, ${shipping.address.line2}` : ""},{" "}
                {shipping.address.city}, {shipping.address.state}{" "}
                {shipping.address.postal_code}. Expect it within 3–5 business days of us
                shipping it out.
              </p>
            ) : (
              <p className="mt-3 text-sm text-ink-muted">
                We&apos;ll confirm shipping details by email shortly.
              </p>
            )}
          </div>
        )}

        <Callout tone="info" title="What happens next">
          Your order has been received{buyerEmail ? ` and a receipt was sent to ${buyerEmail}` : ""}.
          {bookItems.length > 0
            ? " We fulfill book orders by hand right now, so it may take a day or two to ship."
            : ""}
        </Callout>

        <Link href="/shop" className="mt-6 inline-block text-sm font-semibold text-brand hover:underline">
          ← Back to Shop
        </Link>
      </Container>
    </>
  );
}
