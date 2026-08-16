import type { ReactNode } from "react";

const toneClasses = {
  warning: { border: "border-signal", bg: "bg-signal-tint", icon: "text-signal" },
  danger: { border: "border-signal-dark", bg: "bg-signal-tint", icon: "text-signal-dark" },
  info: { border: "border-brand", bg: "bg-brand-tint", icon: "text-brand" },
};

function CalloutIcon({ tone, className }: { tone: keyof typeof toneClasses; className: string }) {
  if (tone === "info") {
    return (
      <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h.25a1 1 0 100-2V10a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M8.485 3.495c.673-1.166 2.357-1.166 3.03 0l6.28 10.875c.673 1.167-.169 2.63-1.514 2.63H3.72c-1.345 0-2.187-1.463-1.514-2.63L8.485 3.495zM10 7a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 7zm0 8a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Callout({
  title,
  children,
  tone = "warning",
  className = "",
}: {
  title?: string;
  children: ReactNode;
  tone?: "warning" | "danger" | "info";
  className?: string;
}) {
  const t = toneClasses[tone];
  return (
    <div className={`flex gap-3 rounded-md border-l-4 ${t.border} ${t.bg} px-4 py-3 ${className}`}>
      <CalloutIcon tone={tone} className={`mt-0.5 h-5 w-5 shrink-0 ${t.icon}`} />
      <div className="text-sm leading-6 text-ink">
        {title && <p className="font-semibold">{title}</p>}
        <div className={title ? "mt-0.5" : ""}>{children}</div>
      </div>
    </div>
  );
}
