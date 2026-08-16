"use client";

import { MultiStepIntakeForm, type StepConfig } from "@/components/intake/multi-step-intake-form";
import { contactStep, offerStep, propertyStep, situationStep } from "@/components/intake/shared-steps";

const requestStep: StepConfig = {
  id: "request",
  title: "The Request",
  fields: [
    {
      name: "requestType",
      label: "What's being requested?",
      type: "radio",
      required: true,
      options: [
        { value: "lease", label: "Lease" },
        { value: "purchase", label: "Purchase" },
        { value: "easement", label: "Easement" },
        { value: "not-sure", label: "Not sure" },
      ],
    },
    {
      name: "approxAcreage",
      label: "Approximate acreage involved (if known)",
      type: "text",
      placeholder: "e.g. 150 acres",
    },
  ],
};

const steps: StepConfig[] = [
  contactStep,
  propertyStep,
  offerStep,
  requestStep,
  situationStep("Who contacted you, what were you offered, and what questions do you have?"),
];

export function DataCenterForm() {
  return (
    <MultiStepIntakeForm steps={steps} track="data-center" submitLabel="Submit Data Center Intake" />
  );
}
