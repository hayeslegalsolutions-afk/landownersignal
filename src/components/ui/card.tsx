import Link from "next/link";
import type { ReactNode } from "react";

export function Card({
  children,
  href,
  padded = true,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  /** Set false for cards with edge-to-edge content (e.g. a cover image); apply padding to inner content instead. */
  padded?: boolean;
  className?: string;
}) {
  const classes = `block overflow-hidden rounded-lg border border-line bg-white transition-colors ${
    padded ? "p-6" : ""
  } ${href ? "hover:border-brand" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
