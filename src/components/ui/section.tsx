import type { ReactNode } from "react";
import { Container } from "@/components/container";

const toneClasses = {
  paper: "",
  tint: "bg-paper-tint",
  brand: "bg-brand text-white",
};

export function Section({
  children,
  tone = "paper",
  className = "",
}: {
  children: ReactNode;
  tone?: "paper" | "tint" | "brand";
  className?: string;
}) {
  return (
    <section className={`py-16 sm:py-20 ${toneClasses[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
