import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { CtaLink } from "@/components/cta-link";

export const metadata: Metadata = {
  title: "Surface Owners",
  description:
    "Guidance for surface owners in Texas and Oklahoma negotiating surface use agreements, access, and damages with oil & gas operators.",
};

export default function OilGasSurfaceOwnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Oil & Gas"
        title="Surface Owners"
        description="Protect your land when an operator wants access."
      >
        <CtaLink href="/intake/oil-gas-surface-owner">Start My Intake</CtaLink>
      </PageHero>
      <Container className="pb-16">
        <PlaceholderNotice note="This page will be expanded with surface-owner content, FAQs, and examples." />
      </Container>
    </>
  );
}
