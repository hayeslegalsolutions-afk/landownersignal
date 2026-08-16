import { Section } from "@/components/ui/section";
import { Hero } from "@/components/ui/hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/ui/callout";
import { TrackBadge, type TrackKey } from "@/components/ui/track-badge";

const situations: {
  track: TrackKey;
  heading: string;
  body: string;
  examples: string;
  href: string;
}[] = [
  {
    track: "oil-gas",
    heading: "A landman contacted you",
    body: "You've been approached about leasing your minerals, signing a division order, or letting a company access your surface for oil & gas activity.",
    examples: "Lease offers · Division orders · Surface access requests",
    href: "/oil-gas",
  },
  {
    track: "data-centers",
    heading: "A data center developer wants your land",
    body: "A company has approached you about a long-term land lease or easement for a data center, substation, or the transmission infrastructure that comes with it.",
    examples: "Land leases · Easements · Option agreements",
    href: "/data-centers",
  },
  {
    track: "solar",
    heading: "A solar company wants to lease your land",
    body: "You've received a proposal to lease your land for a solar farm — often for 20 to 30+ years, with options and easements attached.",
    examples: "Solar leases · Option-to-lease agreements",
    href: "/solar",
  },
];

const steps = [
  {
    title: "Review your offer or lease",
    body: "Share the document you've been given — a lease, an easement, an option agreement — and we break down what it actually says in plain language.",
  },
  {
    title: "Get your talking points",
    body: "We highlight the terms worth questioning and give you specific points to raise before you respond.",
  },
  {
    title: "Negotiate with confidence",
    body: "You go back to the table — or the phone call — knowing what's normal, what's negotiable, and what to watch for.",
  },
];

const tactics = [
  {
    heading: "Creating urgency",
    body: "“This offer expires Friday” pressures you to sign before you've had time to compare it to anything.",
  },
  {
    heading: "Anchoring low",
    body: "Opening well under what neighboring tracts have gotten, hoping you don't know the going rate.",
  },
  {
    heading: "Bundling terms",
    body: "Burying pooling, indemnity, or renewal clauses in boilerplate language you're not expected to read closely.",
  },
  {
    heading: "Skipping the paper trail",
    body: "Verbal promises about future payments or protections that never make it into the signed agreement.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow={<Badge tone="brand">Serving Texas &amp; Oklahoma Landowners</Badge>}
        title="A company wants your land or your minerals. Know what you're agreeing to before you sign."
        description="Oil & gas landmen, data center developers, and solar companies are approaching landowners across Texas and Oklahoma right now — often with a contract ready to sign on the first visit. Landownersignal helps you read the offer, ask the right questions, and negotiate from a position of strength."
      >
        <p className="text-sm font-semibold text-ink-muted">What&apos;s your situation?</p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Button href="/oil-gas">Oil &amp; Gas</Button>
          <Button href="/data-centers">Data Centers</Button>
          <Button href="/solar">Solar</Button>
          <Button href="#which-situation" variant="ghost" className="ml-1">
            Not sure which applies to you? ↓
          </Button>
        </div>
        <Callout title="Don't sign anything yet" className="mt-8 max-w-2xl">
          Once you sign, most of your leverage is gone. Take a day to understand the offer
          before you respond.
        </Callout>
      </Hero>

      <Section id="which-situation" tone="paper">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          Which situation am I in?
        </h2>
        <p className="mt-2 max-w-2xl text-ink-muted">
          Pick the one that matches what&apos;s happening to you right now.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {situations.map((s) => (
            <Card key={s.track} href={s.href} className="flex flex-col">
              <TrackBadge track={s.track} />
              <h3 className="mt-4 text-lg font-semibold text-ink">{s.heading}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-ink-muted">{s.body}</p>
              <p className="mt-4 text-xs font-medium text-ink-muted">{s.examples}</p>
              <p className="mt-4 text-sm font-semibold text-brand">See what applies to me →</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          How Landownersignal works
        </h2>
        <p className="mt-2 max-w-2xl text-ink-muted">
          The same three steps whether it&apos;s oil &amp; gas, a data center, or solar.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
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

        <div className="mt-10">
          <Button href="/how-it-works" variant="secondary">
            See the full process
          </Button>
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">Why this matters</h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Landmen, land agents, and leasing reps are professionals. Negotiating land and
          mineral agreements is their full-time job — it usually isn&apos;t yours. That
          imbalance is where owners lose value, not because anyone did anything illegal.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {tactics.map((t) => (
            <Card key={t.heading}>
              <h3 className="font-semibold text-ink">{t.heading}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{t.body}</p>
            </Card>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-ink-muted">
          None of this means you&apos;re being targeted personally — it just means it pays
          to know the playbook before you&apos;re in the room.
        </p>
      </Section>

      <Section tone="tint">
        <Callout tone="info" title="Texas and Oklahoma, for now" className="mx-auto max-w-2xl">
          Landownersignal currently covers landowners in Texas and Oklahoma. We&apos;re focused
          on doing right by owners in these two states before expanding anywhere else.
        </Callout>
      </Section>

      <Section tone="paper">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Who&apos;s behind Landownersignal
          </h2>
          <p className="mt-3 leading-7 text-ink-muted">
            Landownersignal is a service of Landsignal, LLC. We built this because
            landowners kept ending up in negotiations without the context the other side
            already has going in — and understanding your offer shouldn&apos;t require hiring a
            lawyer just to ask good questions.
          </p>
          <div className="mt-4">
            <Button href="/about" variant="ghost">
              More about who we are →
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="brand">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Know what you&apos;re signing before you sign it.
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
