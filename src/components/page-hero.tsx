import type { ReactNode } from "react";
import { Container } from "@/components/container";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <Container className="py-10">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{eyebrow}</p>
      )}
      <h1 className="mt-2 text-3xl font-bold">{title}</h1>
      {description && <p className="mt-3 max-w-2xl text-slate-600">{description}</p>}
      {children && <div className="mt-6">{children}</div>}
    </Container>
  );
}
