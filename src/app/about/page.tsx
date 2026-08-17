import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/ui/callout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} and why it exists.`,
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow={<Badge tone="brand">About Us</Badge>}
        title="Know the Deal Before You're In It."
        description="Landowner Signal helps Texas and Oklahoma landowners see the offer clearly — and negotiate like they know it."
      />

      <Section tone="paper">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Why this exists
          </h2>
          <p className="mt-4 leading-7 text-ink-muted">
            Landmen, land agents, developers, and leasing reps do this full-time. Reading
            leases, sizing up land, and negotiating deals is their job — for the landowner
            on the other side of the table, it&apos;s usually a first (or one-off) experience,
            with real money and decades-long commitments riding on it.
          </p>
          <p className="mt-4 leading-7 text-ink-muted">
            {siteConfig.name} was built to close that information gap. Not by replacing a
            lawyer, appraiser, or CPA when you need one — but by helping you understand what
            you&apos;re actually being asked to sign well enough to ask the right questions,
            spot the terms worth pushing back on, and know when it&apos;s time to bring in a
            professional.
          </p>
        </div>
      </Section>

      <Section tone="tint">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          Who&apos;s behind it
        </h2>
        <div className="mt-8 max-w-2xl">
          <Card>
            <p className="font-semibold text-ink">Amy Hayes</p>
            <p className="mt-1 text-sm font-medium text-ink-muted">
              Oklahoma-licensed attorney · Author, The Landowner&apos;s Guide to AI Data
              Centers
            </p>
            <p className="mt-4 text-sm leading-6 text-ink-muted">
              {siteConfig.name} is a service of {siteConfig.parentCompany}, founded by Amy
              Hayes to give landowners the same kind of information the other side of the
              table already has going in — before an offer becomes a signature.
            </p>
          </Card>
          <Callout tone="info" className="mt-6">
            {siteConfig.name} provides educational information and document review support.
            We do not provide legal advice, and using this site does not create an
            attorney-client relationship.
          </Callout>
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          Where to find us
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Card>
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-ink">Landowner Protection Intelligence</h3>
              <Badge tone="neutral">Coming soon</Badge>
            </div>
            <p className="mt-2 text-sm leading-6 text-ink-muted">
              Our YouTube channel, breaking down real offers, lease terms, and negotiation
              tactics for oil &amp; gas, data center, and solar landowners.
            </p>
          </Card>
          <Card href="/shop">
            <h3 className="font-semibold text-ink">Books &amp; checklists</h3>
            <p className="mt-2 text-sm leading-6 text-ink-muted">
              Fillable worksheets and guides you can buy and download today, built from the
              same issues we see in real landowner offers.
            </p>
            <p className="mt-4 text-sm font-semibold text-brand">Visit the shop →</p>
          </Card>
        </div>
      </Section>

      <Section tone="brand">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Have an offer in hand?
            </h2>
            <p className="mt-2 max-w-xl text-white/70">
              Pick your track and get started — it only takes a few minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/oil-gas" variant="inverse">
              Oil &amp; Gas
            </Button>
            <Button href="/data-centers" variant="inverse">
              Data Centers
            </Button>
            <Button href="/solar" variant="inverse">
              Solar
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
