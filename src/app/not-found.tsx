import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrackBadge } from "@/components/ui/track-badge";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "That page doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <Hero
        eyebrow="404"
        title="That page doesn't exist."
        description="The link may be out of date, or the page may have moved. Here's where you probably meant to go."
      >
        <Button href="/">Back to Home</Button>
      </Hero>

      <Section tone="paper">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          Which situation am I in?
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <Card href="/oil-gas" className="flex flex-col">
            <TrackBadge track="oil-gas" />
            <p className="mt-4 text-sm font-semibold text-brand">Oil &amp; Gas →</p>
          </Card>
          <Card href="/data-centers" className="flex flex-col">
            <TrackBadge track="data-centers" />
            <p className="mt-4 text-sm font-semibold text-brand">Data Centers →</p>
          </Card>
          <Card href="/solar" className="flex flex-col">
            <TrackBadge track="solar" />
            <p className="mt-4 text-sm font-semibold text-brand">Solar →</p>
          </Card>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/shop" variant="secondary">
            Shop
          </Button>
          <Button href="/education" variant="secondary">
            Education
          </Button>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
