export type TrackKey = "oil-gas" | "data-centers" | "solar";

const TRACK_STYLES: Record<TrackKey, { label: string; dot: string; text: string; bg: string }> = {
  "oil-gas": { label: "Oil & Gas", dot: "bg-track-oil", text: "text-track-oil", bg: "bg-track-oil-tint" },
  "data-centers": {
    label: "Data Centers",
    dot: "bg-track-data",
    text: "text-track-data",
    bg: "bg-track-data-tint",
  },
  solar: { label: "Solar", dot: "bg-track-solar", text: "text-track-solar", bg: "bg-track-solar-tint" },
};

export function TrackBadge({ track, className = "" }: { track: TrackKey; className?: string }) {
  const style = TRACK_STYLES[track];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs font-semibold ${style.bg} ${style.text} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} aria-hidden="true" />
      {style.label}
    </span>
  );
}
