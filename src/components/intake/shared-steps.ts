import type { StepConfig } from "./multi-step-intake-form";

export const contactStep: StepConfig = {
  id: "contact",
  title: "Contact Info",
  fields: [
    { name: "name", label: "Full name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: true },
  ],
};

export const propertyStep: StepConfig = {
  id: "property",
  title: "Property Location",
  fields: [
    {
      name: "state",
      label: "State",
      type: "radio",
      required: true,
      options: [
        { value: "TX", label: "Texas" },
        { value: "OK", label: "Oklahoma" },
        { value: "other", label: "Other" },
      ],
    },
    {
      name: "county",
      label: "County",
      type: "text",
      required: true,
      placeholder: "e.g. Reeves County",
    },
  ],
};

export const offerStep: StepConfig = {
  id: "offer",
  title: "Current Offer",
  fields: [
    {
      name: "hasOffer",
      label: "Do you currently have an offer, lease, or agreement from the company?",
      type: "radio",
      required: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },
    {
      name: "document",
      label: "Upload the document (optional)",
      type: "file",
      helpText: "PDF, JPG, or PNG.",
      showIf: (data) => data.hasOffer === "yes",
    },
  ],
};

export function situationStep(placeholder: string): StepConfig {
  return {
    id: "situation",
    title: "Your Situation",
    fields: [
      {
        name: "situation",
        label: "What's your situation, or what's your main question?",
        type: "textarea",
        required: true,
        rows: 5,
        placeholder,
      },
    ],
  };
}
