import { TrackBadge, type TrackKey } from "@/components/ui/track-badge";
import { Badge } from "@/components/ui/badge";
import type { Track } from "@/lib/track";

/** Renders a TrackBadge for the three negotiation tracks, or a plain neutral badge for "general" content. */
export function TrackTag({ track }: { track: Track }) {
  if (track === "general") return <Badge tone="neutral">General</Badge>;
  return <TrackBadge track={track as TrackKey} />;
}
