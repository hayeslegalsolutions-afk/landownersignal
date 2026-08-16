import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { CtaLink } from "@/components/cta-link";
import { tracks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar",
  description:
    "Guidance for landowners in Texas and Oklahoma approached about solar lease agreements.",
};

const track = tracks.find((t) => t.key === "solar")!;

export default function SolarPage() {
  return (
    <>
      <PageHero eyebrow="Track" title="Solar" description={track.description}>
        <CtaLink href={track.intakeHref}>Start My Intake</CtaLink>
      </PageHero>
      <Container className="pb-16">
        <PlaceholderNotice note="This page will be expanded with solar-specific content, FAQs, and examples." />
      </Container>
    </>
  );
}
