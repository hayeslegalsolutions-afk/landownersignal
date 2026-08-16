import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Container } from "@/components/container";
import { CartView } from "@/components/shop/cart-view";

export const metadata: Metadata = {
  title: "Cart",
  description: "Your shopping cart.",
};

export default function CartPage() {
  return (
    <>
      <Hero eyebrow="Shop" title="Your cart" />
      <Container className="max-w-2xl pb-16">
        <CartView />
      </Container>
    </>
  );
}
