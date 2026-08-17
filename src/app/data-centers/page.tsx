import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrackBadge } from "@/components/ui/track-badge";

export const metadata: Metadata = {
  title: "Data Centers",
  description:
    "A data center developer wants to lease, buy, or run easements across your land? What Texas and Oklahoma landowners need to know before they respond.",
};

const dealTypes = [
  {
    heading: "Ground lease",
    body: "You keep ownership of the land, and the developer pays to lease it — often for 20 to 99 years, with renewal options. This is the most common structure for data center campuses.",
  },
  {
    heading: "Purchase",
    body: "The developer buys your land outright, either to build on directly or to control the site permanently before leasing it to the company that will actually operate there.",
  },
  {
    heading: "Easement",
    body: "You keep the land, but grant specific rights — for transmission lines, water pipelines, fiber conduit, or a substation — that can run with the land even after you sell it.",
  },
];

const differences = [
  "Timelines: deals can take 12–24+ months to close, versus days or weeks with a landman",
  "Leverage: tied to grid capacity, water access, and fiber proximity — not what's underground",
  "Dollar figures & terms: often far larger payments, but land tied up for 20–99 years",
  "Power infrastructure: may require new substations or transmission lines on or near your land",
  "Neighboring impact: water usage and new utility infrastructure can affect nearby land and neighbors",
];

const tactics = [
  {
    heading: "Urgency & exclusivity windows",
    body: "Pressure to sign an option or exclusivity agreement quickly, locking you out of talking to other developers while terms are finalized.",
  },
  {
    heading: "Lowball initial offers",
    body: "An opening per-acre or per-year offer well below what larger, better-located, or utility-ready tracts have received.",
  },
  {
    heading: "NDA before terms",
    body: "A confidentiality agreement requested before you're shown real numbers, making it harder to compare offers or get outside advice.",
  },
  {
    heading: "Vague infrastructure commitments",
    body: "Verbal or loosely worded promises about power, water, or road improvements that don't make it into the final agreement.",
  },
];

const bookHighlights = [
  "Distinguish an option, purchase agreement, ground lease, and easement",
  "Identify economic terms beyond the headline price — escalation, bonuses, restoration obligations",
  "Ask informed questions about power, substations, water, and decommissioning",
  "Understand what a nondisclosure agreement actually commits you to",
  "Know when the document in front of you is important enough to call a lawyer",
];

const steps = [
  {
    title: "Review your offer or lease",
    body: "Send us the ground lease, purchase agreement, or easement proposal you've received. We break down the term, payment structure, and infrastructure commitments in plain language.",
  },
  {
    title: "Get your talking points",
    body: "We flag below-market terms, missing protections, and infrastructure questions worth raising before you respond.",
  },
  {
    title: "Negotiate with confidence",
    body: "You respond knowing what comparable tracts have gotten, what's negotiable, and what long-term commitments you're actually making.",
  },
];

export default function DataCentersPage() {
  return (
    <>
      <Hero
        eyebrow={<TrackBadge track="data-centers" />}
        title="A data center company wants your land. Here's what that actually means."
        description="Whether it's a ground lease, a purchase offer, or an easement for transmission lines or water access, these deals move differently than an oil & gas lease — longer terms, bigger numbers, and infrastructure decisions that outlast most owners. Know what's being asked before you respond."
      >
        <Button href="/intake/data-center">Start My Data Center Intake</Button>
      </Hero>

      <Section tone="paper">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          What&apos;s actually being proposed
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {dealTypes.map((d) => (
            <Card key={d.heading}>
              <h3 className="font-semibold text-ink">{d.heading}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{d.body}</p>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-sm font-semibold text-ink">
          How this differs from an oil &amp; gas lease:
        </p>
        <ul className="mt-3 space-y-2">
          {differences.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-ink-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
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

      <Section tone="tint">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">
              New book
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-ink sm:text-3xl">
              The Landowner&apos;s Guide to AI Data Centers
            </h2>
            <p className="mt-2 text-sm font-semibold text-ink-muted">
              By Amy Hayes — an Oklahoma-licensed attorney
            </p>
            <p className="mt-4 text-sm leading-6 text-ink-muted">
              A landowner usually doesn&apos;t wake up expecting a data-center developer to
              call. But when the letter, the broker, or the survey request arrives, the
              company on the other end may already know far more about the deal than the
              landowner does. This book was written to close that gap — a plain-English
              walkthrough of options and site-control agreements, NDAs, compensation
              structures, power and water commitments, decommissioning, and the tactics that
              show up again and again in real data-center land deals.
            </p>
            <p className="mt-4 text-sm leading-6 text-ink-muted">
              Available now on Amazon in paperback and Kindle.
            </p>
          </div>
          <Card className="border-brand/20 bg-white">
            <p className="font-serif text-lg italic leading-7 text-ink">
              &ldquo;Do not evaluate a data-center offer as though it were an ordinary farm
              sale or a routine commercial lease. The developer may be buying access to a
              strategic location, not merely acreage.&rdquo;
            </p>
            <p className="mt-4 text-sm text-ink-muted">What the book helps you do:</p>
            <ul className="mt-2 space-y-2">
              {bookHighlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-ink-muted">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                  {h}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section tone="brand">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Ready to understand your offer?
            </h2>
            <p className="mt-2 max-w-xl text-white/70">
              Send us your ground lease, purchase agreement, or easement proposal — most
              reviews start within a few minutes.
            </p>
          </div>
          <Button href="/intake/data-center" variant="inverse">
            Start My Data Center Intake
          </Button>
        </div>
      </Section>
    </>
  );
}
