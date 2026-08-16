import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { CtaLink } from "@/components/cta-link";
import { tracks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Oil & Gas",
  description:
    "Guidance for mineral owners and surface owners in Texas and Oklahoma dealing with oil & gas landmen.",
};

const track = tracks.find((t) => t.key === "oil-gas")!;

export default function OilGasHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Track"
        title="Oil & Gas"
        description={track.description}
      >
        <CtaLink href="/intake/oil-gas-mineral-owner">Start an Intake</CtaLink>
      </PageHero>

      <Container className="pb-16">
        <PlaceholderNotice note="This hub page will be expanded with track-specific content." />

        <h2 className="mt-8 text-xl font-semibold">Choose your situation</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {track.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="rounded border border-slate-300 p-5 hover:border-slate-900"
            >
              <h3 className="font-semibold">{child.label}</h3>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
