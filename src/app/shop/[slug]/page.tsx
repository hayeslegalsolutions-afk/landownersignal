import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/container";
import { TrackTag } from "@/components/ui/track-tag";
import { ProductCover } from "@/components/shop/product-cover";
import { ProductActions } from "@/components/shop/product-actions";
import { getProductBySlug, products, type ProductType } from "@/lib/products";

const FORMAT_LABELS: Record<ProductType, { label: string; detail: string }> = {
  book: { label: "Physical Book", detail: "Ships within 3–5 business days." },
  "pdf-checklist": { label: "Instant PDF Download", detail: "Delivered immediately after purchase." },
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return { title: product.title, description: product.shortDescription };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const format = FORMAT_LABELS[product.type];

  return (
    <Container className="py-12">
      <Link href="/shop" className="text-sm font-semibold text-brand hover:underline">
        ← Shop
      </Link>

      <div className="mt-6 grid gap-10 sm:grid-cols-[280px_1fr] sm:gap-12">
        <ProductCover
          product={product}
          className="w-full max-w-xs overflow-hidden rounded-lg border border-line sm:max-w-none"
        />

        <div>
          <div className="flex flex-wrap gap-1.5">
            {product.tracks.map((t) => (
              <TrackTag key={t} track={t} />
            ))}
          </div>

          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {product.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-ink-muted">{product.shortDescription}</p>

          <p className="mt-6 text-2xl font-bold text-ink">${product.price}</p>

          <p className="mt-2 text-sm text-ink-muted">
            <span className="font-semibold text-ink">{format.label}</span> — {format.detail}
          </p>

          <div className="mt-6">
            <ProductActions product={product} />
          </div>
        </div>
      </div>

      <div className="mt-12 max-w-2xl border-t border-line pt-10">
        <h2 className="font-serif text-2xl font-semibold text-ink">
          About this {product.type === "book" ? "book" : "checklist"}
        </h2>
        {product.longDescription.map((paragraph, i) => (
          <p key={i} className="mt-4 leading-7 text-ink-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </Container>
  );
}
