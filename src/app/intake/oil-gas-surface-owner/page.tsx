import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Container } from "@/components/container";
import { TrackBadge } from "@/components/ui/track-badge";
import { OilGasSurfaceOwnerForm } from "@/components/intake/forms/oil-gas-surface-owner-form";

export const metadata: Metadata = {
  title: "Oil & Gas Surface Owner Intake",
  description: "Start a review of a surface use agreement, easement, or damages request.",
};

export default function OilGasSurfaceOwnerIntakePage() {
  return (
    <>
      <Hero
        eyebrow={
          <div className="flex items-center gap-3">
            <TrackBadge track="oil-gas" />
            <span className="text-sm font-semibold text-ink-muted">Intake</span>
          </div>
        }
        title="Surface owner intake"
        description="Tell us about the surface use agreement or access request you've received — takes about three minutes."
      />
      <Container className="max-w-2xl py-12">
        <OilGasSurfaceOwnerForm />
      </Container>
    </>
  );
}
