import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How Landownersignal reviews your offer and helps you prepare to negotiate.",
};

const steps = [
  "Submit your documents through an intake form",
  "We review the key terms specific to your situation",
  "You get a plain-language summary",
  "We help you prepare negotiation talking points",
  "You negotiate with confidence",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="From confusing offer to confident decision."
        description="Applies across all three tracks: oil & gas, data centers, and solar."
      />
      <Container className="pb-16">
        <PlaceholderNotice note="Process details, timelines, and pricing will be added here." />
        <ol className="mt-8 list-decimal space-y-2 pl-5 text-slate-700">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Container>
    </>
  );
}
