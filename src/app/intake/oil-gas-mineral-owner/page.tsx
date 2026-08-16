import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Container } from "@/components/container";
import { TrackBadge } from "@/components/ui/track-badge";
import { OilGasMineralOwnerForm } from "@/components/intake/forms/oil-gas-mineral-owner-form";

export const metadata: Metadata = {
  title: "Oil & Gas Mineral Owner Intake",
  description: "Start a review of your mineral lease, offer, or division order.",
};

export default function OilGasMineralOwnerIntakePage() {
  return (
    <>
      <Hero
        eyebrow={
          <div className="flex items-center gap-3">
            <TrackBadge track="oil-gas" />
            <span className="text-sm font-semibold text-ink-muted">Intake</span>
          </div>
        }
        title="Mineral owner intake"
        description="Tell us about your lease, offer, or division order — takes about three minutes."
      />
      <Container className="max-w-2xl py-12">
        <OilGasMineralOwnerForm />
      </Container>
    </>
  );
}
