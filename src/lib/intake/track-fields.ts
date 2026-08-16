import type { StepConfig } from "./schema";

const contactStep: StepConfig = {
  id: "contact",
  title: "Contact Info",
  fields: [
    { name: "name", label: "Full name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: true },
  ],
};

const propertyStep: StepConfig = {
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

const offerStep: StepConfig = {
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

function situationStep(placeholder: string): StepConfig {
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

export const TRACK_KEYS = [
  "oil-gas-mineral-owner",
  "oil-gas-surface-owner",
  "data-center",
  "solar",
] as const;

export type TrackKey = (typeof TRACK_KEYS)[number];

export const trackSteps: Record<TrackKey, StepConfig[]> = {
  "oil-gas-mineral-owner": [
    contactStep,
    propertyStep,
    offerStep,
    ownershipStep,
    situationStep("Who contacted you, what were you offered, and what questions do you have?"),
  ],
  "oil-gas-surface-owner": [
    contactStep,
    propertyStep,
    offerStep,
    contactedStep,
    situationStep(
      "Who contacted you, what access or activity is planned, and what questions do you have?"
    ),
  ],
  "data-center": [
    contactStep,
    propertyStep,
    offerStep,
    requestStep,
    situationStep("Who contacted you, what were you offered, and what questions do you have?"),
  ],
  solar: [
    contactStep,
    propertyStep,
    offerStep,
    leaseDetailsStep,
    situationStep("Who contacted you, what were you offered, and what questions do you have?"),
  ],
};

export const TRACK_META: Record<TrackKey, { label: string; color: string; submitLabel: string }> = {
  "oil-gas-mineral-owner": {
    label: "Oil & Gas – Mineral Owner",
    color: "#6b4226",
    submitLabel: "Submit Mineral Owner Intake",
  },
  "oil-gas-surface-owner": {
    label: "Oil & Gas – Surface Owner",
    color: "#6b4226",
    submitLabel: "Submit Surface Owner Intake",
  },
  "data-center": {
    label: "Data Center",
    color: "#3e6270",
    submitLabel: "Submit Data Center Intake",
  },
  solar: {
    label: "Solar",
    color: "#9c5c1a",
    submitLabel: "Submit Solar Intake",
  },
};

export function isTrackKey(value: string): value is TrackKey {
  return (TRACK_KEYS as readonly string[]).includes(value);
}
