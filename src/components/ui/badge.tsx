import type { ReactNode } from "react";

const toneClasses = {
  neutral: "bg-paper-tint text-ink-muted border-line",
  brand: "bg-brand-tint text-brand border-transparent",
  signal: "bg-signal-tint text-signal-dark border-transparent",
};

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: "neutral" | "brand" | "signal";
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
