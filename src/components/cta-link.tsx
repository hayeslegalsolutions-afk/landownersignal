import Link from "next/link";

export function CtaLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors";
  const styles = {
    primary: `${base} bg-emerald-800 text-white hover:bg-emerald-700`,
    secondary: `${base} border border-slate-300 text-slate-800 hover:bg-slate-50`,
    light: `${base} bg-white text-emerald-900 hover:bg-emerald-50`,
  }[variant];

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
