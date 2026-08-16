"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrackTag } from "@/components/ui/track-tag";
import type { ArticleTrack } from "@/lib/articles";

export type ArticleSummary = {
  slug: string;
  title: string;
  description: string;
  track: ArticleTrack;
  hasContent: boolean;
};

const FILTERS: { value: ArticleTrack | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "oil-gas", label: "Oil & Gas" },
  { value: "data-centers", label: "Data Centers" },
  { value: "solar", label: "Solar" },
  { value: "general", label: "General" },
];

export function ArticleFilter({ articles }: { articles: ArticleSummary[] }) {
  const [filter, setFilter] = useState<ArticleTrack | "all">("all");

  const visible = filter === "all" ? articles : articles.filter((a) => a.track === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              aria-pressed={active}
              className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "border-brand bg-brand text-white"
                  : "border-line text-ink hover:border-brand"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((article) => (
          <Card key={article.slug} href={`/education/${article.slug}`} className="flex flex-col">
            <div className="flex items-center justify-between gap-2">
              <TrackTag track={article.track} />
              {!article.hasContent && <Badge tone="neutral">Coming soon</Badge>}
            </div>
            <h3 className="mt-4 font-semibold text-ink">{article.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-ink-muted">{article.description}</p>
            <p className="mt-4 text-sm font-semibold text-brand">
              {article.hasContent ? "Read article →" : "Learn more →"}
            </p>
          </Card>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-8 text-sm text-ink-muted">No articles in this category yet.</p>
      )}
    </div>
  );
}
