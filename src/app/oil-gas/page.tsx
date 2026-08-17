import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { TrackBadge } from "@/components/ui/track-badge";

export const metadata: Metadata = {
  title: "Oil & Gas",
  description:
    "Guidance for mineral owners and surface owners in Texas and Oklahoma dealing with oil & gas landmen.",
};

const situations = [
  {
    heading: "I own the minerals",
    body: "You've been offered a lease, a top-lease, or received a division order for minerals you own or co-own.",
    href: "/oil-gas/mineral-owners",
  },
  {
    heading: "I own the surface",
    body: "An operator wants access to your surface for a well pad, road, pipeline, or other oil & gas infrastructure.",
    href: "/oil-gas/surface-owners",
  },
  {
    heading: "I inherited mineral rights",
    body: "You've inherited mineral interests and don't yet know what you own, or whether there's an existing lease.",
    href: "/oil-gas/inherited-minerals",
  },
];

export default function OilGasHubPage() {
  return (
    <>
      <Hero
        eyebrow={<TrackBadge track="oil-gas" />}
        title="Dealing with an oil & gas landman? Start here."
        description="Whether you own the minerals, the surface, or both, a landman's job is to get you to sign. Landownersignal helps Texas and Oklahoma mineral and surface owners understand their offer, know what's negotiable, and prepare before they respond."
      />

      <Section tone="paper">
        <Callout tone="info" title="Not sure if you own the minerals, the surface, or both?">
          In Texas and Oklahoma, mineral rights and surface rights can be owned
          separately. Check your deed for language granting rights to oil, gas, and other
          minerals &ldquo;in, on, and under&rdquo; the land — if you don&apos;t see it, you
          likely own the surface only.
        </Callout>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-ink sm:text-3xl">
          Choose your situation
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {situations.map((s) => (
            <Card key={s.href} href={s.href} className="flex flex-col">
              <h3 className="text-lg font-semibold text-ink">{s.heading}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-ink-muted">{s.body}</p>
              <p className="mt-4 text-sm font-semibold text-brand">Learn more →</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
              Same process, whichever one you are
            </h2>
            <p className="mt-2 max-w-xl text-ink-muted">
              Review your document, get your talking points, negotiate with confidence.
            </p>
          </div>
          <Button href="/how-it-works" variant="secondary">
            See the full process
          </Button>
        </div>
      </Section>

      <Section tone="brand">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Ready to understand your offer?
            </h2>
            <p className="mt-2 max-w-xl text-white/70">
              Pick what applies to you and get started — it only takes a few minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/oil-gas/mineral-owners" variant="inverse">
              Mineral Owners
            </Button>
            <Button href="/oil-gas/surface-owners" variant="inverse">
              Surface Owners
            </Button>
            <Button href="/oil-gas/inherited-minerals" variant="inverse">
              Inherited Minerals
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
