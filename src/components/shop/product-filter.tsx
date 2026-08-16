"use client";

import { useState } from "react";
import { ProductCard } from "@/components/shop/product-card";
import type { Product } from "@/lib/products";
import type { Track } from "@/lib/track";

const FILTERS: { value: Track | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "oil-gas", label: "Oil & Gas" },
  { value: "data-centers", label: "Data Centers" },
  { value: "solar", label: "Solar" },
  { value: "general", label: "General" },
];

export function ProductFilter({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<Track | "all">("all");

  const visible =
    filter === "all" ? products : products.filter((p) => p.tracks.includes(filter));

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              aria-pressed={active}
              className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "border-brand bg-brand text-white"
                  : "border-line text-ink hover:border-brand"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-8 text-sm text-ink-muted">No products in this category yet.</p>
      )}
    </div>
  );
}
