"use client";

import { MultiStepIntakeForm, type StepConfig } from "@/components/intake/multi-step-intake-form";
import { contactStep, offerStep, propertyStep, situationStep } from "@/components/intake/shared-steps";

const leaseDetailsStep: StepConfig = {
  id: "lease-details",
  title: "Lease Details",
  fields: [
    {
      name: "leaseTerm",
      label: "Lease term being offered (if known)",
      type: "text",
      placeholder: "e.g. 25 years",
    },
    {
      name: "othersApproached",
      label: "Have other landowners nearby been approached too?",
      type: "radio",
      required: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "not-sure", label: "Not sure" },
      ],
    },
  ],
};

const steps: StepConfig[] = [
  contactStep,
  propertyStep,
  offerStep,
  leaseDetailsStep,
  situationStep("Who contacted you, what were you offered, and what questions do you have?"),
];

export function SolarForm() {
  return <MultiStepIntakeForm steps={steps} track="solar" submitLabel="Submit Solar Intake" />;
}
