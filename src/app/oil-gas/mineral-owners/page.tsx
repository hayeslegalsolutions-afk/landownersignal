import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrackBadge } from "@/components/ui/track-badge";

export const metadata: Metadata = {
  title: "Mineral Owners",
  description:
    "What Texas and Oklahoma mineral owners need to know before responding to a landman about a lease offer, top-lease, or division order.",
};

const stakes = [
  "Bonus payment (the upfront $/acre)",
  "Royalty rate (your % of production value)",
  "Primary term length & renewal options",
  "Pooling & unitization clauses",
  "Shut-in royalty provisions",
  "Surface use during drilling & production",
];

const tactics = [
  {
    heading: "Lowball bonus, high urgency",
    body: "An opening offer below the going rate for your area, paired with a deadline meant to stop you from comparing it to anything.",
  },
  {
    heading: "Vague or missing pooling language",
    body: "Broad pooling clauses that let the operator combine your tract with others — diluting your royalty share — without clearly explaining what that means for you.",
  },
  {
    heading: "Division order pressure",
    body: "A division order sent with instructions to sign quickly, sometimes listing a decimal interest that doesn't match what you actually own.",
  },
  {
    heading: "Verbal royalty promises",
    body: "A verbal assurance of a better rate or bonus that conveniently never makes it into the written lease you're asked to sign.",
  },
];

const steps = [
  {
    title: "Review your lease or offer",
    body: "Send us your lease, top-lease offer, or division order. We break down the bonus, royalty, term, and pooling language in plain terms.",
  },
  {
    title: "Get your talking points",
    body: "We flag any below-market or unusual terms and give you specific questions and counter-points to raise with the landman.",
  },
  {
    title: "Negotiate with confidence",
    body: "You respond knowing what's standard for your area, what's negotiable, and what to watch for before you sign.",
  },
];

export default function OilGasMineralOwnersPage() {
  return (
    <>
      <Hero
        eyebrow={
          <div className="flex items-center gap-3">
            <TrackBadge track="oil-gas" />
            <span className="text-sm font-semibold text-ink-muted">Mineral Owners</span>
          </div>
        }
        title="A landman wants to lease your minerals. Here's what you're actually agreeing to."
        description="Whether it's a fresh lease offer, a top-lease on an existing agreement, or a division order that showed up with no explanation, the terms you sign now can lock in your royalty rate and your say over your minerals for years. Know what's negotiable before you respond."
      >
        <Button href="/intake/oil-gas-mineral-owner">Start My Mineral Owner Intake</Button>
      </Hero>

      <Section tone="paper">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          What you actually own — and what&apos;s on the table
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-ink-muted">
          As a mineral owner, you own the oil, gas, and other minerals beneath your land —
          separately from whoever owns the surface. That gives you the right to lease those
          minerals for development, and to be paid for it. A lease offer is the start of a
          negotiation, not a form you&apos;re required to sign as written.
        </p>
        <p className="mt-4 text-sm font-semibold text-ink">Commonly negotiated terms:</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {stakes.map((term) => (
            <li key={term} className="flex items-start gap-2 text-sm text-ink-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
              {term}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="tint">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          Common landman tactics with mineral owners
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
          What we do for mineral owners
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
              Send us your lease, offer, or division order — most reviews start within a
              few minutes.
            </p>
          </div>
          <Button href="/intake/oil-gas-mineral-owner" variant="inverse">
            Start My Mineral Owner Intake
          </Button>
        </div>
      </Section>
    </>
  );
}
