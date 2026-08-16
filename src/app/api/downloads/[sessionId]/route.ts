import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getOrderItems } from "@/lib/shop/order-items";
import { buildChecklistBundle } from "@/lib/shop/pdf-bundle";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  const { sessionId } = await params;

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price.product"],
    });
  } catch (err) {
    console.error("[downloads] failed to retrieve checkout session", { sessionId, err });
    return NextResponse.json({ error: "Order not found." }, { status: 404 });
  }

  // The bundle is only ever generated for a session Stripe confirms was
  // actually paid — this is the real access control, not the URL itself.
  if (session.payment_status !== "paid") {
    return NextResponse.json({ error: "This order has not been paid yet." }, { status: 403 });
  }

  const pdfItems = getOrderItems(session).filter((i) => i.product.type === "pdf-checklist");

  if (pdfItems.length === 0) {
    return NextResponse.json({ error: "No downloadable items on this order." }, { status: 404 });
  }

  try {
    const bundle = await buildChecklistBundle(pdfItems);
    return new NextResponse(Buffer.from(bundle), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="landownersignal-checklists-${sessionId.slice(-8)}.pdf"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch (err) {
    console.error("[downloads] failed to build checklist bundle", { sessionId, err });
    return NextResponse.json({ error: "We couldn't build your download." }, { status: 500 });
  }
}
