import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { getProductBySlug, products } from "@/lib/products";

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
  return { title: product.title, description: product.description };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <PageHero
        eyebrow={product.type === "book" ? "Book" : "PDF Checklist"}
        title={product.title}
        description={product.description}
      />
      <Container className="pb-16">
        <PlaceholderNotice note="Product detail layout, cover image, and checkout are not yet built." />
        <p className="mt-6 text-2xl font-bold">${product.price}</p>
        <button
          type="button"
          disabled
          className="mt-6 inline-flex items-center justify-center rounded bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white opacity-60"
        >
          Add to Cart (coming soon)
        </button>
      </Container>
    </>
  );
}
