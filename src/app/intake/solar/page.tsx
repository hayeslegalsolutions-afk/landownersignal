import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Container } from "@/components/container";
import { TrackBadge } from "@/components/ui/track-badge";
import { SolarForm } from "@/components/intake/forms/solar-form";

export const metadata: Metadata = {
  title: "Solar Intake",
  description: "Start a review of a solar lease or option agreement.",
};

export default function SolarIntakePage() {
  return (
    <>
      <Hero
        eyebrow={
          <div className="flex items-center gap-3">
            <TrackBadge track="solar" />
            <span className="text-sm font-semibold text-ink-muted">Intake</span>
          </div>
        }
        title="Solar intake"
        description="Tell us about the solar lease or option agreement you've received — takes about three minutes."
      />
      <Container className="max-w-2xl py-12">
        <SolarForm />
      </Container>
    </>
  );
}
