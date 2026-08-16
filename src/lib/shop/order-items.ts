import type Stripe from "stripe";
import { getProductBySlug } from "@/lib/products";
import type { FulfillmentItem } from "@/lib/shop/types";

/** Reconstructs the purchased catalog items from an expanded Checkout Session's line items. */
export function getOrderItems(session: Stripe.Checkout.Session): FulfillmentItem[] {
  return (session.line_items?.data ?? [])
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
}
