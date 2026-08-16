import type Stripe from "stripe";
import type { FulfillmentItem } from "@/lib/shop/types";

export type { FulfillmentItem };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function money(cents: number | null | undefined): string {
  return `$${((cents ?? 0) / 100).toFixed(2)}`;
}

function itemRows(items: FulfillmentItem[]): string {
  return items
    .map(
      (i) => `
        <tr>
          <td style="padding:8px 16px 8px 0; border-bottom:1px solid #DDD5C7; color:#101E2B;">${escapeHtml(i.product.title)}</td>
          <td style="padding:8px 16px 8px 0; border-bottom:1px solid #DDD5C7; color:#5B6B7A;">${i.product.type === "book" ? "Book" : "PDF Checklist"}</td>
          <td style="padding:8px 0; border-bottom:1px solid #DDD5C7; color:#101E2B;">×${i.quantity}</td>
        </tr>`
    )
    .join("");
}

/** Sent to the business inbox for every completed order, confirmed server-side by the webhook. */
export function buildOrderNotificationEmail({
  session,
  items,
}: {
  session: Stripe.Checkout.Session;
  items: FulfillmentItem[];
}): { subject: string; html: string; text: string } {
  const buyerEmail = session.customer_details?.email ?? "unknown";
  const shipping = session.collected_information?.shipping_details;
  const total = money(session.amount_total);
  const subject = `New Shop Order — ${buyerEmail} (${total})`;

  const shippingHtml = shipping
    ? `
      <p style="margin-top:20px; font-size:14px; color:#101E2B;"><strong>Ships to:</strong><br />
        ${escapeHtml(shipping.name)}<br />
        ${escapeHtml(shipping.address.line1 ?? "")}${shipping.address.line2 ? `, ${escapeHtml(shipping.address.line2)}` : ""}<br />
        ${escapeHtml(shipping.address.city ?? "")}, ${escapeHtml(shipping.address.state ?? "")} ${escapeHtml(shipping.address.postal_code ?? "")}
      </p>`
    : "";

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width:600px; margin:0 auto;">
      <div style="background:#101E2B; padding:20px 24px;">
        <span style="display:inline-block; background:#B4502A; color:#ffffff; font-size:12px; font-weight:600; padding:4px 10px; border-radius:999px; text-transform:uppercase; letter-spacing:0.03em;">Shop Order</span>
        <h1 style="color:#ffffff; font-size:20px; margin:12px 0 0;">New order — ${escapeHtml(total)}</h1>
      </div>
      <div style="padding:24px; background:#F7F5F0;">
        <p style="margin:0 0 16px; font-size:14px; color:#101E2B;"><strong>Buyer:</strong> ${escapeHtml(buyerEmail)}</p>
        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          <tr>
            <th style="text-align:left; padding-bottom:8px; border-bottom:2px solid #101E2B; color:#101E2B;">Item</th>
            <th style="text-align:left; padding-bottom:8px; border-bottom:2px solid #101E2B; color:#101E2B;">Type</th>
            <th style="text-align:left; padding-bottom:8px; border-bottom:2px solid #101E2B; color:#101E2B;">Qty</th>
          </tr>
          ${itemRows(items)}
        </table>
        ${shippingHtml}
        <p style="margin-top:20px; font-size:13px; color:#5B6B7A;">Stripe session: ${escapeHtml(session.id)}</p>
      </div>
    </div>
  `;

  const text = [
    `New shop order — ${total}`,
    `Buyer: ${buyerEmail}`,
    "",
    ...items.map((i) => `${i.product.title} (${i.product.type}) ×${i.quantity}`),
    shipping
      ? `\nShips to: ${shipping.name}, ${shipping.address.line1 ?? ""} ${shipping.address.city ?? ""}, ${shipping.address.state ?? ""} ${shipping.address.postal_code ?? ""}`
      : "",
    `\nStripe session: ${session.id}`,
  ].join("\n");

  return { subject, html, text };
}

/** Sent to the buyer as a backup to the on-page download link — one bundled PDF for every checklist in the order. */
export function buildDownloadEmail({
  items,
  bundleUrl,
}: {
  items: FulfillmentItem[];
  bundleUrl: string;
}): { subject: string; html: string; text: string } {
  const subject =
    items.length === 1
      ? `Your download: ${items[0].product.title}`
      : "Your checklist bundle is ready";

  const itemsListHtml = items
    .map((i) => `<li style="margin-bottom:4px;">${escapeHtml(i.product.title)}</li>`)
    .join("");

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width:600px; margin:0 auto;">
      <div style="background:#101E2B; padding:20px 24px;">
        <h1 style="color:#ffffff; font-size:20px; margin:0;">Thanks for your order</h1>
      </div>
      <div style="padding:24px; background:#F7F5F0;">
        <p style="margin:0 0 12px; font-size:14px; color:#101E2B;">Here's a backup copy of your download link, in case you need it again later. Your checklist${items.length > 1 ? "s are" : " is"} bundled into one PDF:</p>
        <ul style="padding-left:18px; margin:0 0 16px; color:#101E2B; font-size:14px;">${itemsListHtml}</ul>
        <p style="margin:0 0 16px;"><a href="${bundleUrl}" style="color:#B4502A; font-weight:600;">Download your checklist bundle →</a></p>
        <p style="margin-top:20px; font-size:13px; color:#5B6B7A;">Questions about your order? Just reply to this email.</p>
      </div>
    </div>
  `;

  const text = [
    "Thanks for your order.",
    "",
    `Your checklist${items.length > 1 ? "s" : ""}:`,
    ...items.map((i) => `- ${i.product.title}`),
    "",
    `Download your bundle: ${bundleUrl}`,
  ].join("\n");

  return { subject, html, text };
}
