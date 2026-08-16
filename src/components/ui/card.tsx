import Link from "next/link";
import type { ReactNode } from "react";

export function Card({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const classes = `block rounded-lg border border-line bg-white p-6 transition-colors ${
    href ? "hover:border-brand" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
