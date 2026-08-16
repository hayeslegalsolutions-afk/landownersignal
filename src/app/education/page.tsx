import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { tracks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Guides and articles on oil & gas, data center, and solar lease terms and common company tactics, organized by track.",
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education Hub"
        title="Learn the terms, tactics, and rights that matter."
        description="Articles will be organized by track below."
      />
      <Container className="pb-16">
        <PlaceholderNotice note="Individual articles will be added under each track in a later step." />

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {tracks.map((t) => (
            <div key={t.key} className="rounded border border-slate-300 p-5">
              <h2 className="font-semibold">{t.label}</h2>
              <p className="mt-2 text-sm text-slate-600">Articles coming soon.</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
