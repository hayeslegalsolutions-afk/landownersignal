import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { CtaLink } from "@/components/cta-link";
import { PlaceholderNotice } from "@/components/placeholder-notice";

export const metadata: Metadata = {
  title: "Surface Owners",
  description:
    "Guidance for surface owners in Texas and Oklahoma negotiating surface use agreements, access, and damages with oil & gas operators.",
};

const topics = [
  {
    title: "Surface use agreements",
    description: "Review access, location, and restoration terms before an operator breaks ground.",
  },
  {
    title: "Damages & compensation",
    description: "Understand how surface damages are typically calculated and negotiated.",
  },
  {
    title: "Water wells & livestock",
    description: "Protect water sources, fencing, and grazing land during operations.",
  },
  {
    title: "Pipeline & right-of-way requests",
    description: "Know your options when approached about an easement or right-of-way.",
  },
];

export default function SurfaceOwnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Surface Owners"
        title="Protect your land when an operator wants access."
        description="If a landman or operator has approached you about a surface use agreement, pipeline easement, or drilling access on your Texas or Oklahoma property, we help you understand your rights and negotiating position."
      >
        <CtaLink href="/intake/surface-owner">Start My Surface Owner Intake</CtaLink>
      </PageHero>

      <section className="py-16">
        <Container>
          <PlaceholderNotice note="This page will be expanded with detailed surface-owner content, FAQs, and examples." />

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
