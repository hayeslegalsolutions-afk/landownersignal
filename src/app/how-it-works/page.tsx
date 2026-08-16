import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { CtaLink } from "@/components/cta-link";
import { PlaceholderNotice } from "@/components/placeholder-notice";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How Landownersignal reviews your lease, offer, or surface agreement and helps you prepare to negotiate.",
};

const steps = [
  {
    title: "1. Submit your documents",
    description:
      "Complete an intake form and share your lease, offer letter, division order, or surface use agreement.",
  },
  {
    title: "2. We review the details",
    description:
      "We look at bonus, royalty, term, pooling, access, and other key terms specific to your situation.",
  },
  {
    title: "3. You get a plain-language summary",
    description:
      "We translate the legal and industry language into a clear breakdown of what's being offered.",
  },
  {
    title: "4. Prepare your talking points",
    description:
      "We help you identify questions, red flags, and negotiation points before you respond to the landman or operator.",
  },
  {
    title: "5. Negotiate with confidence",
    description:
      "You decide how to proceed — armed with a clear understanding of your rights and options.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="From confusing offer to confident decision."
        description="Here's what to expect when you work with Landownersignal."
      />

      <section className="py-16">
        <Container>
          <PlaceholderNotice note="Process details, timelines, and pricing will be added here." />

          <ol className="mt-10 space-y-8">
            {steps.map((step) => (
              <li key={step.title} className="border-l-2 border-emerald-800 pl-6">
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="/intake/mineral-owner">Start My Mineral Review</CtaLink>
            <CtaLink href="/intake/surface-owner" variant="secondary">
              Start My Surface Review
            </CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
