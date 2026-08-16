import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { ArticleFilter } from "@/components/education/article-filter";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Guides on oil & gas, data center, and solar lease terms and common company tactics for Texas and Oklahoma landowners.",
};

export default function EducationPage() {
  const summaries = articles.map((a) => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    track: a.track,
    hasContent: Boolean(a.body),
  }));

  return (
    <>
      <Hero
        eyebrow="Education Hub"
        title="Learn the terms, tactics, and rights that matter."
        description="Filter by track, or browse everything below. New articles are added regularly."
      />
      <Section tone="paper">
        <ArticleFilter articles={summaries} />
      </Section>
    </>
  );
}
