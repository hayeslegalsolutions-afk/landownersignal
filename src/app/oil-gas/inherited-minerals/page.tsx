import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { CtaLink } from "@/components/cta-link";

export const metadata: Metadata = {
  title: "Inherited Mineral Rights",
  description:
    "Just inherited mineral rights in Texas or Oklahoma? Learn what you own, what documents you need, and what to do next.",
};

export default function OilGasInheritedMineralsPage() {
  return (
    <>
      <PageHero
        eyebrow="Oil & Gas"
        title="Inherited Mineral Rights"
        description="Inherited mineral rights and don't know where to start?"
      >
        <CtaLink href="/intake/oil-gas-mineral-owner">Start My Intake</CtaLink>
      </PageHero>
      <Container className="pb-16">
        <PlaceholderNotice note="This page will be expanded with a step-by-step guide for heirs." />
      </Container>
    </>
  );
}
