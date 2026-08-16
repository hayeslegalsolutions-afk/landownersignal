"use client";

import { MultiStepIntakeForm } from "@/components/intake/multi-step-intake-form";
import { TRACK_META, trackSteps } from "@/lib/intake/track-fields";

export function OilGasMineralOwnerForm() {
  return (
    <MultiStepIntakeForm
      steps={trackSteps["oil-gas-mineral-owner"]}
      track="oil-gas-mineral-owner"
      submitLabel={TRACK_META["oil-gas-mineral-owner"].submitLabel}
    />
  );
}
