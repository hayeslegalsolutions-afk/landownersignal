import type { ProductType } from "@/lib/products";

/**
 * Stripe Tax product tax codes, used so Stripe calculates the right sales
 * tax treatment for physical books vs. digital downloads (many states tax
 * these differently).
 *
 * VERIFY THESE before launch: txcd_99999999 ("General - Tangible Goods") is
 * Stripe's well-documented generic fallback for physical goods and is a safe
 * default for books. The digital-goods code below is a reasonable starting
 * point, not a verified value — confirm the best match for PDF checklists
 * (e.g. "digital products" vs. "downloadable software" vs. a general
 * electronically-supplied-services category) using Stripe's live tax code
 * list and lookup tool: https://docs.stripe.com/tax/tax-codes
 */
export const TAX_CODES: Record<ProductType, string> = {
  book: "txcd_99999999",
  "pdf-checklist": "txcd_10000000",
};
