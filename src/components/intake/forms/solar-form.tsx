"use client";

import { MultiStepIntakeForm } from "@/components/intake/multi-step-intake-form";
import { TRACK_META, trackSteps } from "@/lib/intake/track-fields";

export function SolarForm() {
  return (
    <MultiStepIntakeForm
      steps={trackSteps.solar}
      track="solar"
      submitLabel={TRACK_META.solar.submitLabel}
    />
  );
}
