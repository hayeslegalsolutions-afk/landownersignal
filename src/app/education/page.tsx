import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Guides and articles on mineral rights, surface rights, lease terms, and landman tactics in Texas and Oklahoma.",
};

const categories = [
  {
    title: "Mineral Rights Basics",
    description: "What mineral rights are, how they're severed from surface rights, and what ownership means.",
  },
  {
    title: "Lease Terms Explained",
    description: "Bonus payments, royalty rates, primary terms, pooling clauses, and shut-in provisions.",
  },
  {
    title: "Landman Tactics",
    description: "Common negotiation tactics and pressure points to recognize before you sign.",
  },
  {
    title: "Surface Use & Damages",
    description: "How surface use agreements and damage compensation typically work.",
  },
  {
    title: "Inheritance & Probate",
    description: "What heirs need to know about clearing title and confirming ownership.",
  },
  {
    title: "Texas vs. Oklahoma Law",
    description: "Key differences in mineral and surface rights law between the two states.",
  },
];

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education Hub"
        title="Learn the terms, tactics, and rights that matter."
        description="Articles in this hub will cover mineral rights, surface rights, and how to navigate conversations with landmen and operators in Texas and Oklahoma."
      />

      <section className="py-16">
        <Container>
          <PlaceholderNotice note="Individual articles will be added under this hub in a later step." />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c.title} className="rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{c.description}</p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
