"use client";

import { MultiStepIntakeForm } from "@/components/intake/multi-step-intake-form";
import { TRACK_META, trackSteps } from "@/lib/intake/track-fields";

export function OilGasSurfaceOwnerForm() {
  return (
    <MultiStepIntakeForm
      steps={trackSteps["oil-gas-surface-owner"]}
      track="oil-gas-surface-owner"
      submitLabel={TRACK_META["oil-gas-surface-owner"].submitLabel}
    />
  );
}
