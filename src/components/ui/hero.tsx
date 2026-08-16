import type { ReactNode } from "react";
import { Container } from "@/components/container";

export function Hero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-paper-tint">
      <Container className="py-16 sm:py-24">
        {eyebrow && <div className="mb-4">{eyebrow}</div>}
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-muted">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
