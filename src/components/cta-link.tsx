import Link from "next/link";

export function CtaLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base = "inline-flex items-center justify-center rounded px-4 py-2 text-sm font-semibold";
  const styles =
    variant === "primary"
      ? `${base} bg-slate-900 text-white hover:bg-slate-700`
      : `${base} border border-slate-400 text-slate-900 hover:bg-slate-100`;

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
