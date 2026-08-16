import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrackBadge } from "@/components/ui/track-badge";

export const metadata: Metadata = {
  title: "Surface Owners",
  description:
    "What Texas and Oklahoma surface owners can negotiate before signing a surface use agreement with an oil & gas operator.",
};

const stakes = [
  "Location of wells, roads & pipelines",
  "Compensation for surface damages",
  "Timeline & duration of access",
  "Restoration requirements after operations end",
  "Water well & livestock protections",
  "Fencing & gate obligations",
];

const tactics = [
  {
    heading: "Framing access as non-negotiable",
    body: "Implying you have no choice or say in the matter, when the location, timing, and terms of access are often negotiable.",
  },
  {
    heading: "Lowball or one-time damage offers",
    body: "A flat payment offered upfront that doesn't account for actual disruption, lost use of your land, or long-term impact.",
  },
  {
    heading: "Vague restoration language",
    body: "A surface use agreement that doesn't specify how, or by when, your land will be restored once operations end.",
  },
  {
    heading: "Rushed signing before construction",
    body: "Pressure to sign quickly once equipment is already staged nearby, using the appearance of momentum as leverage.",
  },
];

const steps = [
  {
    title: "Review your surface use agreement",
    body: "Send us the agreement or proposal you've received. We break down the access, compensation, and restoration terms in plain language.",
  },
  {
    title: "Get your talking points",
    body: "We flag missing protections and give you specific language and questions to bring back to the operator.",
  },
  {
    title: "Negotiate with confidence",
    body: "You respond knowing what surface owners in your area typically get — and what to insist on before you sign.",
  },
];

export default function OilGasSurfaceOwnersPage() {
  return (
    <>
      <Hero
        eyebrow={
          <div className="flex items-center gap-3">
            <TrackBadge track="oil-gas" />
            <span className="text-sm font-semibold text-ink-muted">Surface Owners</span>
          </div>
        }
        title="An operator wants access to your land. Here's what you can still control."
        description="Even if you don't own the minerals beneath your property, Texas and Oklahoma law gives surface owners real leverage over how, where, and when an operator can access your land — but only if you use it before you sign a surface use agreement."
      >
        <Button href="/intake/oil-gas-surface-owner">Start My Surface Owner Intake</Button>
      </Hero>

      <Section tone="paper">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          What you can negotiate — even without owning the minerals
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-ink-muted">
          In Texas and Oklahoma, mineral rights generally take priority over surface
          rights, meaning an operator with a valid lease usually has the legal right to
          access the surface to develop those minerals. But &ldquo;right of access&rdquo;
          isn&apos;t the same as &ldquo;access on any terms.&rdquo; You can typically
          negotiate where roads and well pads go, how your land is restored afterward, and
          what you&apos;re paid for the disruption.
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
          Common landman tactics with surface owners
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
          What we do for surface owners
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
              Ready to understand your agreement?
            </h2>
            <p className="mt-2 max-w-xl text-white/70">
              Send us the surface use agreement or proposal you&apos;ve received — most reviews
              start within a few minutes.
            </p>
          </div>
          <Button href="/intake/oil-gas-surface-owner" variant="inverse">
            Start My Surface Owner Intake
          </Button>
        </div>
      </Section>
    </>
  );
}
