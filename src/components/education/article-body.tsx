import { Callout } from "@/components/ui/callout";
import type { ArticleBlock } from "@/lib/articles";

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="mt-10 font-serif text-2xl font-semibold text-ink first:mt-0">
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={i} className="mt-4 leading-7 text-ink-muted">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="mt-4 space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 leading-7 text-ink-muted">
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <Callout key={i} tone={block.tone ?? "info"} title={block.title} className="mt-8">
                {block.text}
              </Callout>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
