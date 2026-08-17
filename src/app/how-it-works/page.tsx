import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrackBadge, type TrackKey } from "@/components/ui/track-badge";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How Landownersignal reviews your offer and helps you prepare to negotiate.",
};

const steps = [
  {
    title: "Review your offer or lease",
    body: "Start the intake form that matches your situation — takes about three minutes. Tell us what's been proposed and upload the document if you have one (a lease, an easement, an option agreement, whatever you've been given). No payment required to submit.",
    details: [
      "Answer a few questions about who approached you and what's being proposed",
      "Upload the document itself, if you have one — PDF, JPG, or PNG",
      "We read it against what similar owners in your area have seen",
    ],
  },
  {
    title: "Get your talking points",
    body: "We break down what the document actually says in plain language — no legalese — and flag the terms most worth questioning before you respond.",
    details: [
      "Below-market terms, compared to what similar deals have included",
      "Missing protections — things a favorable version of this document would include",
      "Specific questions to raise with the landman, developer, or leasing rep",
    ],
  },
  {
    title: "Negotiate with confidence",
    body: "You go back to the table — or the phone call — knowing what's normal, what's negotiable, and what to watch for. You decide how to respond; we just make sure you're not doing it blind.",
    details: [
      "A clear sense of what's standard vs. what's unusual in your offer",
      "Language you can use when you push back on a specific term",
      "Knowing when it's worth bringing in a lawyer, appraiser, or CPA",
    ],
  },
];

const trackDocuments: { track: TrackKey; label: string; items: string[]; href: string }[] = [
  {
    track: "oil-gas",
    label: "Oil & Gas",
    items: [
      "Oil & gas leases",
      "Division orders",
      "Surface use & damage agreements",
      "Ratification & pooling notices",
    ],
    href: "/oil-gas",
  },
  {
    track: "data-centers",
    label: "Data Centers",
    items: ["Ground leases", "Purchase agreements", "Easements", "Option agreements"],
    href: "/data-centers",
  },
  {
    track: "solar",
    label: "Solar",
    items: ["Solar leases", "Option-to-lease agreements", "Easements"],
    href: "/solar",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        eyebrow="How It Works"
        title="From confusing offer to confident decision."
        description="The same three steps whether it's oil & gas, a data center, or solar — the documents and details differ, the process doesn't."
      />

      <Section tone="paper">
        <div className="space-y-14">
          {steps.map((step, i) => (
            <div key={step.title} className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-serif text-lg font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
                  {step.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-muted">{step.body}</p>
                <ul className="mt-4 space-y-2">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                        aria-hidden="true"
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          What differs by track
        </h2>
        <p className="mt-2 max-w-2xl text-ink-muted">
          The process is the same everywhere. What we review — and what to expect in the
          document itself — depends on what&apos;s actually being proposed.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {trackDocuments.map((t) => (
            <Card key={t.track} href={t.href} className="flex flex-col">
              <TrackBadge track={t.track} />
              <p className="mt-4 text-sm font-semibold text-ink">Documents we review</p>
              <ul className="mt-3 flex-1 space-y-2">
                {t.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-semibold text-brand">See the {t.label} track →</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="brand">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Ready to see what your offer says?
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
