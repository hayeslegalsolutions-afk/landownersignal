"use client";

import { MultiStepIntakeForm, type StepConfig } from "@/components/intake/multi-step-intake-form";
import { contactStep, offerStep, propertyStep, situationStep } from "@/components/intake/shared-steps";

const ownershipStep: StepConfig = {
  id: "ownership",
  title: "Ownership Situation",
  fields: [
    {
      name: "ownershipSituation",
      label: "Which best describes your ownership?",
      type: "radio",
      required: true,
      options: [
        { value: "sole-owner", label: "I'm the sole owner" },
        { value: "inherited-with-heirs", label: "Inherited, with other heirs" },
        { value: "other", label: "Other" },
      ],
    },
  ],
};

const steps: StepConfig[] = [
  contactStep,
  propertyStep,
  offerStep,
  ownershipStep,
  situationStep("Who contacted you, what were you offered, and what questions do you have?"),
];

export function OilGasMineralOwnerForm() {
  return (
    <MultiStepIntakeForm steps={steps} track="oil-gas-mineral-owner" submitLabel="Submit Mineral Owner Intake" />
  );
}
