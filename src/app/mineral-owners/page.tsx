import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { CtaLink } from "@/components/cta-link";
import { PlaceholderNotice } from "@/components/placeholder-notice";

export const metadata: Metadata = {
  title: "Mineral Owners",
  description:
    "Guidance for mineral rights owners in Texas and Oklahoma reviewing lease offers, division orders, and landman communications.",
};

const topics = [
  {
    title: "Lease offer review",
    description: "Understand bonus, royalty, primary term, and pooling language before you sign.",
  },
  {
    title: "Division orders",
    description: "Check decimal interests and payment terms against your title before signing.",
  },
  {
    title: "Landman calls & letters",
    description: "Know what landmen can and can't promise, and how to respond.",
  },
  {
    title: "Negotiation talking points",
    description: "Prepare questions and counter-points for your next conversation.",
  },
];

export default function MineralOwnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Mineral Owners"
        title="Understand your lease or offer before you respond to a landman."
        description="Whether you've received a fresh lease offer, a top-lease proposal, or a division order in the mail, we help Texas and Oklahoma mineral owners understand what's being asked of them."
      >
        <CtaLink href="/intake/mineral-owner">Start My Mineral Owner Intake</CtaLink>
      </PageHero>

      <section className="py-16">
        <Container>
          <PlaceholderNotice note="This page will be expanded with detailed mineral-owner content, FAQs, and examples." />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {topics.map((t) => (
              <div key={t.title} className="rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{t.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{t.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
