export function BookIcon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12c-4.5-3.2-10.5-4-17-3v25c6.5-1 12.5-0.2 17 3 4.5-3.2 10.5-4 17-3V9c-6.5-1-12.5-0.2-17 3z" />
      <path d="M24 12v25" />
    </svg>
  );
}

export function ChecklistIcon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="10" y="6" width="28" height="36" rx="2" />
      <path d="M16 17l2.5 2.5L23 14" />
      <path d="M27 17h7" />
      <path d="M16 29l2.5 2.5L23 26" />
      <path d="M27 29h7" />
    </svg>
  );
}
