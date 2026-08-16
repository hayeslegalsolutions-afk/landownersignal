"use client";

import { MultiStepIntakeForm, type StepConfig } from "@/components/intake/multi-step-intake-form";
import { contactStep, offerStep, propertyStep, situationStep } from "@/components/intake/shared-steps";

const contactedStep: StepConfig = {
  id: "landman-contact",
  title: "Landman Contact",
  fields: [
    {
      name: "contactedAboutAccess",
      label: "Has a landman or company contacted you about surface access or damages?",
      type: "radio",
      required: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },
  ],
};

const steps: StepConfig[] = [
  contactStep,
  propertyStep,
  offerStep,
  contactedStep,
  situationStep(
    "Who contacted you, what access or activity is planned, and what questions do you have?"
  ),
];

export function OilGasSurfaceOwnerForm() {
  return (
    <MultiStepIntakeForm steps={steps} track="oil-gas-surface-owner" submitLabel="Submit Surface Owner Intake" />
  );
}
