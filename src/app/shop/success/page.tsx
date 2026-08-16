import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";

export const metadata: Metadata = {
  title: "Order Confirmed",
  description: "Your order confirmation and download page.",
};

export default function ShopSuccessPage() {
  return (
    <>
      <PageHero eyebrow="Shop" title="Thank you for your order" />
      <Container className="pb-16">
        <PlaceholderNotice note="Post-purchase confirmation and download links will be wired up once checkout exists." />
        <p className="mt-6 text-slate-600">
          Your download links and receipt will appear here after checkout is connected.
        </p>
        <Link href="/shop" className="mt-4 inline-block text-sm font-semibold underline">
          &larr; Back to shop
        </Link>
      </Container>
    </>
  );
}
