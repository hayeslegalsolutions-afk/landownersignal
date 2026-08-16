"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart/cart-context";
import type { Product } from "@/lib/products";

const FALLBACK_CONTACT_EMAIL = "hayeslegalsolutions@hayeslegalsolutions.com";

export function ProductActions({ product }: { product: Product }) {
  const router = useRouter();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [buying, setBuying] = useState(false);
  const [error, setError] = useState("");

  const isBook = product.type === "book";

  function handleAddToCart() {
    addItem(product.slug, isBook ? quantity : 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  async function handleBuyNow() {
    setBuying(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: [{ slug: product.slug, quantity: isBook ? quantity : 1 }],
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.url) throw new Error(body.error);
      window.location.assign(body.url);
    } catch (err) {
      setBuying(false);
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong starting checkout."
      );
    }
  }

  return (
    <div>
      {isBook && (
        <div className="mb-4">
          <p className="text-sm font-medium text-ink">Quantity</p>
          <div className="mt-1.5 inline-flex items-center rounded-md border border-line">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-2 text-ink hover:bg-paper-tint"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-10 text-center text-sm font-semibold text-ink">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.min(20, q + 1))}
              className="px-3 py-2 text-ink hover:bg-paper-tint"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={handleBuyNow} disabled={buying} variant="primary">
          {buying ? "Redirecting…" : "Buy Now"}
        </Button>
        <Button onClick={handleAddToCart} variant="secondary">
          {added ? "Added ✓" : "Add to Cart"}
        </Button>
        {added && (
          <button
            type="button"
            onClick={() => router.push("/shop/cart")}
            className="text-sm font-semibold text-brand hover:underline"
          >
            View cart →
          </button>
        )}
      </div>

      {error && (
        <p className="mt-3 text-sm font-medium text-signal-dark">
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
