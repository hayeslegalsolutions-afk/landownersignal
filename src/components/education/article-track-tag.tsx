import { TrackBadge, type TrackKey } from "@/components/ui/track-badge";
import { Badge } from "@/components/ui/badge";
import type { ArticleTrack } from "@/lib/articles";

export function ArticleTrackTag({ track }: { track: ArticleTrack }) {
  if (track === "general") return <Badge tone="neutral">General</Badge>;
  return <TrackBadge track={track as TrackKey} />;
}
