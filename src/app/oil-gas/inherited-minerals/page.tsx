import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrackBadge } from "@/components/ui/track-badge";

export const metadata: Metadata = {
  title: "Inherited Mineral Rights",
  description:
    "Inherited mineral rights in Texas or Oklahoma and don't know what to do next? A clear, no-pressure starting point for figuring out what you own.",
};

const firstSteps = [
  {
    title: "Locate any paperwork",
    body: "Division orders, old lease documents, a deed, or a letter from an attorney or courthouse. Even one document is a helpful starting point — you don't need everything at once.",
  },
  {
    title: "Don't sign anything yet",
    body: "If a landman, buyer, or company has already reached out with paperwork to sign, it can wait. Nothing expires as fast as they say it does.",
  },
  {
    title: "Figure out who else is involved",
    body: "Mineral rights are often inherited by multiple heirs. If you have siblings or other family members who may share ownership, it helps to know who they are early on.",
  },
  {
    title: "Understand what you actually own",
    body: "A percentage interest, a specific tract, or an interest in a larger unit — what you own affects what you're owed and what you can do with it.",
  },
  {
    title: "Check if there's an existing lease",
    body: "If the minerals were already leased before you inherited them, that lease may still be active, and you may already be owed royalties.",
  },
];

const situations = [
  {
    heading: "Contacted out of nowhere",
    body: "A landman, mineral buyer, or “we buy minerals” company reaches out before you've even had a chance to sort through the estate.",
  },
  {
    heading: "Unclear ownership percentage",
    body: "The paperwork you have — if any — doesn't clearly say what percentage you own, or it conflicts with what a company is telling you.",
  },
  {
    heading: "Multiple heirs, no clear plan",
    body: "Mineral rights are split among siblings, cousins, or other relatives, and no one has sat down to decide how to handle them together.",
  },
  {
    heading: "Missed or misdirected royalty payments",
    body: "There may be royalties owed to the estate or to you directly that were never redirected after the original owner passed away.",
  },
];

const steps = [
  {
    title: "Make sense of what you have",
    body: "Send us whatever documents you've found, even if it's incomplete. We help you understand what they say and what might be missing.",
  },
  {
    title: "Get an explanation of your options",
    body: "We walk through what owning inherited minerals actually means: your options to lease, hold, or eventually sell, and what each involves.",
  },
  {
    title: "Prepare before anyone else gets to you",
    body: "If a lease offer or buyout offer comes in, you'll already have context, talking points, and questions ready before you respond.",
  },
];

function CheckIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.415l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function OilGasInheritedMineralsPage() {
  return (
    <>
      <Hero
        eyebrow={
          <div className="flex items-center gap-3">
            <TrackBadge track="oil-gas" />
            <span className="text-sm font-semibold text-ink-muted">Inherited Minerals</span>
          </div>
        }
        title="You inherited mineral rights. Here's where to start."
        description="If you're not sure what you own, whether there's an existing lease, or what any of this paperwork means, you're not alone, and you don't have to figure it out today. Here's a clear, no-pressure starting point."
      >
        <Button href="#first-steps" variant="ghost">
          See where to start ↓
        </Button>
      </Hero>

      <Section id="first-steps" tone="paper">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          First steps: what to do this week, not today
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-ink-muted">
          There&apos;s no deadline here unless someone is telling you there is one. Before you
          do anything else:
        </p>
        <ul className="mt-8 space-y-5">
          {firstSteps.map((step) => (
            <li key={step.title} className="flex gap-3">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="font-semibold text-ink">{step.title}</p>
                <p className="mt-1 text-sm leading-6 text-ink-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="tint">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          Situations we see often
        </h2>
        <p className="mt-2 max-w-2xl text-ink-muted">
          If any of this sounds familiar, it&apos;s a common part of inheriting minerals —
          not a sign that something has gone wrong.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {situations.map((s) => (
            <Card key={s.heading}>
              <h3 className="font-semibold text-ink">{s.heading}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{s.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          How Landownersignal helps at this stage
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
              When you&apos;re ready, we&apos;re here to help you sort through it.
            </h2>
            <p className="mt-2 max-w-xl text-white/70">
              There&apos;s no rush and no obligation. Inherited mineral rights holders use
              our mineral owner intake — it works whether you have a full stack of
              documents or almost nothing at all.
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
