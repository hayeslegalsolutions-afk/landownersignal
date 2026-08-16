import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Container } from "@/components/container";
import { TrackBadge } from "@/components/ui/track-badge";
import { DataCenterForm } from "@/components/intake/forms/data-center-form";

export const metadata: Metadata = {
  title: "Data Center Intake",
  description: "Start a review of a data center land lease, purchase offer, or easement.",
};

export default function DataCenterIntakePage() {
  return (
    <>
      <Hero
        eyebrow={
          <div className="flex items-center gap-3">
            <TrackBadge track="data-centers" />
            <span className="text-sm font-semibold text-ink-muted">Intake</span>
          </div>
        }
        title="Data center intake"
        description="Tell us about the land lease, purchase offer, or easement you've been approached about — takes about three minutes."
      />
      <Container className="max-w-2xl py-12">
        <DataCenterForm />
      </Container>
    </>
  );
}
