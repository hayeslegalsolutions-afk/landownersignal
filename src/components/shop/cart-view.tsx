"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCover } from "@/components/shop/product-cover";
import { useCart, type CartItem } from "@/lib/cart/cart-context";
import { getProductBySlug, type Product } from "@/lib/products";

const FALLBACK_CONTACT_EMAIL = "hayeslegalsolutions@hayeslegalsolutions.com";

type CartLine = { item: CartItem; product: Product };

export function CartView() {
  const { items, hydrated, removeItem, setQuantity } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [error, setError] = useState("");

  if (!hydrated) {
    return <p className="text-sm text-ink-muted">Loading your cart…</p>;
  }

  const lines: CartLine[] = items
    .map((item) => {
      const product = getProductBySlug(item.slug);
      return product ? { item, product } : null;
    })
    .filter((l): l is CartLine => l !== null);

  if (lines.length === 0) {
    return (
      <div>
        <p className="text-ink-muted">Your cart is empty.</p>
        <Link href="/shop" className="mt-4 inline-block text-sm font-semibold text-brand hover:underline">
          ← Continue browsing the shop
        </Link>
      </div>
    );
  }

  const subtotal = lines.reduce((sum, { item, product }) => sum + product.price * item.quantity, 0);

  async function handleCheckout() {
    setCheckingOut(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: lines.map(({ item }) => item) }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.url) throw new Error(body.error);
      window.location.assign(body.url);
    } catch (err) {
      setCheckingOut(false);
      setError(
        err instanceof Error && err.message ? err.message : "Something went wrong starting checkout."
      );
    }
  }

  return (
    <div>
      <div className="space-y-4">
        {lines.map(({ item, product }) => (
          <div
            key={item.slug}
            className="flex items-start gap-4 rounded-lg border border-line bg-white p-4"
          >
            <Link href={`/shop/${product.slug}`} className="w-20 shrink-0">
              <ProductCover product={product} className="overflow-hidden rounded border border-line" />
            </Link>

            <div className="flex flex-1 flex-col justify-between">
              <div>
                <Link
                  href={`/shop/${product.slug}`}
                  className="font-semibold text-ink hover:text-brand"
                >
                  {product.title}
                </Link>
                <p className="mt-1 text-sm text-ink-muted">${product.price} each</p>
              </div>

              <div className="mt-2 flex items-center justify-between">
                {product.type === "book" ? (
                  <div className="inline-flex items-center rounded-md border border-line">
                    <button
                      type="button"
                      onClick={() => setQuantity(item.slug, item.quantity - 1)}
                      className="px-2.5 py-1 text-ink hover:bg-paper-tint"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-semibold text-ink">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(item.slug, item.quantity + 1)}
                      className="px-2.5 py-1 text-ink hover:bg-paper-tint"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <p className="text-xs text-ink-muted">Digital item — no shipping needed</p>
                )}

                <button
                  type="button"
                  onClick={() => removeItem(item.slug)}
                  className="text-sm font-medium text-ink-muted hover:text-signal-dark"
                >
                  Remove
                </button>
              </div>
            </div>

            <p className="shrink-0 font-semibold text-ink">
              ${(product.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-end gap-1 border-t border-line pt-6">
        <p className="text-sm text-ink-muted">
          Shipping and tax, if any, are calculated at checkout.
        </p>
        <p className="text-xl font-bold text-ink">Subtotal: ${subtotal.toFixed(2)}</p>
      </div>

      <div className="mt-6 flex justify-end">
        <Button onClick={handleCheckout} disabled={checkingOut}>
          {checkingOut ? "Redirecting…" : "Checkout"}
        </Button>
      </div>

      {error && (
        <p className="mt-3 text-right text-sm font-medium text-signal-dark">
          {error} Please try again, or email{" "}
          <a href={`mailto:${FALLBACK_CONTACT_EMAIL}`} className="underline">
            {FALLBACK_CONTACT_EMAIL}
          </a>
          .
        </p>
      )}
    </div>
  );
}
