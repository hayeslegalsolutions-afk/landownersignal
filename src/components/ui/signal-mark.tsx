/**
 * Placeholder logomark: a signal rising from a fixed point on a line.
 * Stands in for the exact exported asset from the Aug 15 Higgsfield logo
 * exploration (network-restricted from this session) — swap the <svg>
 * body below for the real file once it's available.
 */
export function SignalMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <line x1="2" y1="25" x2="29" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M11.17 21.79 A5 5 0 0 1 19.83 23.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8.11 19.21 A9 9 0 0 1 23.69 22.67" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5.04 16.64 A13 13 0 0 1 27.56 21.63" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="15" cy="25" r="1.9" fill="currentColor" />
    </svg>
  );
}
