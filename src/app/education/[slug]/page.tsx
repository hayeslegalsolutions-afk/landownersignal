import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/container";
import { TrackTag } from "@/components/ui/track-tag";
import { ArticleBody } from "@/components/education/article-body";
import { articles, getArticleBySlug } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.description };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <Container className="max-w-2xl py-12">
      <Link href="/education" className="text-sm font-semibold text-brand hover:underline">
        ← Education Hub
      </Link>

      <div className="mt-6">
        <TrackTag track={article.track} />
      </div>
      <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {article.title}
      </h1>
      <p className="mt-4 text-lg leading-8 text-ink-muted">{article.description}</p>

      <div className="mt-10 border-t border-line pt-10">
        {article.body ? (
          <ArticleBody blocks={article.body} />
        ) : (
          <div className="rounded-lg border border-dashed border-line bg-paper-tint p-8 text-center">
            <p className="font-semibold text-ink">We&apos;re still writing this one.</p>
            <p className="mt-2 text-sm text-ink-muted">
              Check back soon, or head back to the Education Hub for articles that are
              ready now.
            </p>
          </div>
        )}
      </div>
    </Container>
  );
}
