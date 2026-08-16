import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { CtaLink } from "@/components/cta-link";
import { PlaceholderNotice } from "@/components/placeholder-notice";

export const metadata: Metadata = {
  title: "Inherited Mineral Rights",
  description:
    "Just inherited mineral rights in Texas or Oklahoma? Learn what you own, what documents you need, and what to do next.",
};

const questions = [
  "What do I actually own, and where is it located?",
  "Is there an existing lease, and what are its terms?",
  "Do I need to probate the estate or clear title first?",
  "Am I already owed royalties I'm not receiving?",
  "Should I lease, sell, or hold onto these minerals?",
];

export default function InheritedMineralsPage() {
  return (
    <>
      <PageHero
        eyebrow="Inherited Mineral Rights"
        title="Inherited mineral rights and don't know where to start?"
        description="It's common to inherit mineral interests without any paperwork explaining what you own or what to do next. We help Texas and Oklahoma heirs sort through the basics before making any decisions."
      >
        <CtaLink href="/intake/mineral-owner">Start My Intake</CtaLink>
      </PageHero>

      <section className="py-16">
        <Container>
          <PlaceholderNotice note="This page will be expanded with a step-by-step guide for heirs and a document checklist." />

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-slate-900">
            Common questions heirs ask
          </h2>
          <ul className="mt-6 space-y-4">
            {questions.map((q) => (
              <li key={q} className="flex gap-3 rounded-lg border border-slate-200 p-4">
                <span className="text-emerald-800">&bull;</span>
                <span className="text-slate-700">{q}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
