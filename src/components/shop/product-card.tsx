import { Card } from "@/components/ui/card";
import { TrackTag } from "@/components/ui/track-tag";
import { ProductCover } from "@/components/shop/product-cover";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card href={`/shop/${product.slug}`} padded={false} className="flex flex-col">
      <ProductCover product={product} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-1.5">
          {product.tracks.map((t) => (
            <TrackTag key={t} track={t} />
          ))}
        </div>
        <h3 className="mt-3 font-semibold text-ink">{product.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-ink-muted">{product.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink">${product.price}</span>
          <span className="text-sm font-semibold text-brand">View details →</span>
        </div>
      </div>
    </Card>
  );
}
