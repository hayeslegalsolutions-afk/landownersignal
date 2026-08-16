import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";

export const metadata: Metadata = {
  title: "Cart",
  description: "Your shopping cart.",
};

export default function CartPage() {
  return (
    <>
      <PageHero eyebrow="Shop" title="Your cart" />
      <Container className="pb-16">
        <PlaceholderNotice note="Cart state is not yet implemented. This is a structural placeholder." />
        <p className="mt-6 text-slate-600">Your cart is empty.</p>
        <Link href="/shop" className="mt-4 inline-block text-sm font-semibold underline">
          &larr; Continue browsing the shop
        </Link>
      </Container>
    </>
  );
}
