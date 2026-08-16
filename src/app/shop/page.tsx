import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Books and PDF checklists for oil & gas, data center, and solar landowners.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Books & PDF checklists"
        description="Self-serve resources for negotiating oil & gas, data center, and solar offers."
      />
      <Container className="pb-16">
        <PlaceholderNotice note="Product catalog, pricing, and checkout will be finalized in a later step." />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/shop/${p.slug}`}
              className="rounded border border-slate-300 p-5 hover:border-slate-900"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {p.type === "book" ? "Book" : "PDF Checklist"}
              </p>
              <h3 className="mt-1 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <p className="mt-3 text-sm font-semibold">${p.price}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/shop/cart" className="text-sm font-semibold underline">
            View cart &rarr;
          </Link>
        </div>
      </Container>
    </>
  );
}
