import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { ProductFilter } from "@/components/shop/product-filter";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Books and PDF checklists for oil & gas, data center, and solar landowners.",
};

export default function ShopPage() {
  return (
    <>
      <Hero
        eyebrow="Shop"
        title="Books & PDF checklists"
        description="Self-serve resources for negotiating oil & gas, data center, and solar offers — filter by track, or browse everything below."
      />
      <Section tone="paper">
        <ProductFilter products={products} />
      </Section>
    </>
  );
}
