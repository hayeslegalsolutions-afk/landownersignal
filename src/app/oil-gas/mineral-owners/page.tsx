import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { CtaLink } from "@/components/cta-link";

export const metadata: Metadata = {
  title: "Mineral Owners",
  description:
    "Guidance for mineral rights owners in Texas and Oklahoma reviewing lease offers, division orders, and landman communications.",
};

export default function OilGasMineralOwnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Oil & Gas"
        title="Mineral Owners"
        description="Understand your lease or offer before you respond to a landman."
      >
        <CtaLink href="/intake/oil-gas-mineral-owner">Start My Intake</CtaLink>
      </PageHero>
      <Container className="pb-16">
        <PlaceholderNotice note="This page will be expanded with mineral-owner content, FAQs, and examples." />
      </Container>
    </>
  );
}
