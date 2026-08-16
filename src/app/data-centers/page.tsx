import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { CtaLink } from "@/components/cta-link";
import { tracks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data Centers",
  description:
    "Guidance for landowners in Texas and Oklahoma approached about large land leases or easements for data center development.",
};

const track = tracks.find((t) => t.key === "data-centers")!;

export default function DataCentersPage() {
  return (
    <>
      <PageHero eyebrow="Track" title="Data Centers" description={track.description}>
        <CtaLink href={track.intakeHref}>Start My Intake</CtaLink>
      </PageHero>
      <Container className="pb-16">
        <PlaceholderNotice note="This page will be expanded with data-center-specific content, FAQs, and examples." />
      </Container>
    </>
  );
}
