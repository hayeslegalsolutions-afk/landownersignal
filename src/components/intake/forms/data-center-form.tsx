"use client";

import { MultiStepIntakeForm } from "@/components/intake/multi-step-intake-form";
import { TRACK_META, trackSteps } from "@/lib/intake/track-fields";

export function DataCenterForm() {
  return (
    <MultiStepIntakeForm
      steps={trackSteps["data-center"]}
      track="data-center"
      submitLabel={TRACK_META["data-center"].submitLabel}
    />
  );
}
