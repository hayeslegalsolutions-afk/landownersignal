import type { FieldConfig } from "@/lib/intake/schema";

export const contactFields: FieldConfig[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "topic",
    label: "What is this about?",
    type: "radio",
    required: true,
    options: [
      { value: "oil-gas", label: "Oil & Gas" },
      { value: "data-centers", label: "Data Centers" },
      { value: "solar", label: "Solar" },
      { value: "shop", label: "Shop / order question" },
      { value: "other", label: "Other" },
    ],
  },
  { name: "message", label: "Message", type: "textarea", required: true, rows: 6 },
];
