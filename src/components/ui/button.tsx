import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  className?: string;
} & (
  | { href: string; type?: never; onClick?: never; disabled?: boolean }
  | { href?: never; type?: "button" | "submit"; onClick?: () => void; disabled?: boolean }
);

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-md text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  primary: "bg-brand px-5 py-2.5 text-white hover:bg-brand-dark",
  secondary: "border-2 border-ink px-5 py-2.5 text-ink hover:bg-paper-tint",
  ghost: "px-0 py-0 text-brand underline-offset-4 hover:underline",
  // For use on dark (brand-tone) sections, where primary/secondary lack contrast.
  inverse: "bg-white px-5 py-2.5 text-brand hover:bg-paper-tint",
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} aria-disabled={props.disabled}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as Extract<ButtonProps, { type?: unknown }>;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
