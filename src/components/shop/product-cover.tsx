import type { Track } from "@/lib/track";
import type { Product } from "@/lib/products";
import { BookIcon, ChecklistIcon } from "@/components/shop/product-icons";

const COVER_STYLES: Record<Track, { bg: string; text: string }> = {
  "oil-gas": { bg: "bg-track-oil", text: "text-track-oil-tint" },
  "data-centers": { bg: "bg-track-data", text: "text-track-data-tint" },
  solar: { bg: "bg-track-solar", text: "text-track-solar-tint" },
  general: { bg: "bg-brand", text: "text-white" },
};

/**
 * Generated placeholder cover (track-colored panel + type icon + title) used
 * until real cover art exists. Ships with no border/rounding baked in so
 * callers can compose those without needing to override conflicting
 * utilities — see product-card.tsx vs. the product detail page.
 */
export function ProductCover({ product, className = "" }: { product: Product; className?: string }) {
  if (product.coverImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- placeholder covers are generated; a real cover would be a static asset, not worth next/image's optimizer here.
      <img
        src={product.coverImage}
        alt=""
        className={`aspect-[3/4] w-full object-cover ${className}`}
      />
    );
  }

  const primaryTrack = product.tracks[0] ?? "general";
  const style = COVER_STYLES[primaryTrack];
  const Icon = product.type === "book" ? BookIcon : ChecklistIcon;

  return (
    <div className={`flex aspect-[3/4] flex-col justify-between p-6 ${style.bg} ${className}`}>
      <span className={`text-xs font-semibold uppercase tracking-wide ${style.text}`}>
        {product.type === "book" ? "Book" : "PDF Checklist"}
      </span>
      <Icon className={`mx-auto h-16 w-16 ${style.text} opacity-90`} />
      <span className="font-serif text-lg font-semibold leading-snug text-white">
        {product.title}
      </span>
    </div>
  );
}
