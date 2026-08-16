import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrackBadge } from "@/components/ui/track-badge";

export const metadata: Metadata = {
  title: "Solar",
  description:
    "A solar company wants to lease your land? What Texas and Oklahoma landowners need to know about rent, escalation, term length, and decommissioning before they sign.",
};

const leaseTerms = [
  {
    heading: "Per-acre rent",
    body: "The base payment you're paid annually (or per phase) for each acre under lease — the starting point for negotiation, and worth comparing to what others in your area have gotten.",
  },
  {
    heading: "Escalation clauses",
    body: "Scheduled increases to your rent over time, often a fixed percentage every few years. Without one, your payment can lose value over a 20 to 30+ year term.",
  },
  {
    heading: "Lease term & renewal options",
    body: "Solar leases commonly run 20 to 30 years, often with renewal options that can extend the deal to 40 to 50+ years — sometimes automatically unless you object.",
  },
  {
    heading: "Decommissioning & restoration",
    body: "Who removes the panels, foundations, and equipment when the lease ends, and who pays for it. Without clear language and financial security, that obligation can default to you.",
  },
  {
    heading: "Option periods",
    body: "Often 1 to 3 years where the developer pays a small fee to secure exclusive rights to your land while pursuing permits and interconnection — before construction or full lease payments begin.",
  },
];

const tactics = [
  {
    heading: "Long option periods, little pay",
    body: "A 1 to 3+ year exclusivity period that ties up your land with only a small annual payment, while you can't shop the deal to anyone else.",
  },
  {
    heading: "Unclear decommissioning responsibility",
    body: "Vague or missing language on who removes equipment and restores the land at the end of the lease, with no bond or financial guarantee behind it.",
  },
  {
    heading: "Neighbor comparison pressure",
    body: "Being told what a neighboring landowner “already agreed to,” used to anchor your expectations lower without you seeing their actual terms.",
  },
  {
    heading: "Auto-renewing terms",
    body: "Renewal options that extend the lease automatically unless you actively object within a narrow window — easy to miss years down the line.",
  },
];

const steps = [
  {
    title: "Review your lease or option agreement",
    body: "Send us the lease, option agreement, or easement proposal you've received. We break down the rent, escalation, term, and decommissioning language in plain terms.",
  },
  {
    title: "Get your talking points",
    body: "We flag missing protections, weak decommissioning terms, and below-market rent, and give you specific questions to raise before you respond.",
  },
  {
    title: "Negotiate with confidence",
    body: "You respond knowing what comparable tracts have gotten, what's negotiable, and what you're actually committing to for the next 20 to 50 years.",
  },
];

export default function SolarPage() {
  return (
    <>
      <Hero
        eyebrow={<TrackBadge track="solar" />}
        title="A solar company wants to lease your land. Here's what a 30-year deal actually looks like."
        description="Solar leases run longer than almost any other land deal — often 20 to 50+ years once renewals are included — with rent, escalation, and decommissioning terms that are easy to gloss over during the option period. Know what you're locking in before you sign."
      >
        <Button href="/intake/solar">Start My Solar Intake</Button>
      </Hero>

      <Section tone="paper">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          What&apos;s typically in a solar lease
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {leaseTerms.map((t) => (
            <Card key={t.heading}>
              <h3 className="font-semibold text-ink">{t.heading}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{t.body}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-6 text-ink-muted">
          Some projects also require a separate easement for shared access roads or the
          transmission line connecting the site to the grid — reviewed and negotiated the
          same way as the lease itself.
        </p>
      </Section>

      <Section tone="tint">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          Common tactics landowners report
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {tactics.map((t) => (
            <Card key={t.heading}>
              <h3 className="font-semibold text-ink">{t.heading}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{t.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          What we do for you
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-serif text-lg font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="brand">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Ready to understand your offer?
            </h2>
            <p className="mt-2 max-w-xl text-white/70">
              Send us your lease, option agreement, or easement proposal — most reviews
              start within a few minutes.
            </p>
          </div>
          <Button href="/intake/solar" variant="inverse">
            Start My Solar Intake
          </Button>
        </div>
      </Section>
    </>
  );
}
