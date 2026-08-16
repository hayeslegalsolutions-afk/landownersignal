export type FieldOption = { value: string; label: string };

export type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "radio" | "file";
  required?: boolean;
  placeholder?: string;
  options?: FieldOption[];
  rows?: number;
  helpText?: string;
  showIf?: (data: Record<string, string>) => boolean;
};

export type StepConfig = {
  id: string;
  title: string;
  description?: string;
  fields: FieldConfig[];
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Single source of truth for field validation, used both client-side
 * (per-step, as the user progresses) and server-side (across the full
 * submission) so the two can never drift out of sync.
 */
export function validateField(field: FieldConfig, value: string): string | null {
  if (field.type === "file") return null;
  if (field.name === "state" && value === "other") {
    return "We currently only work with landowners in Texas and Oklahoma.";
  }
  if (field.required && !value.trim()) {
    return "This field is required.";
  }
  if (field.type === "email" && value && !EMAIL_PATTERN.test(value)) {
    return "Enter a valid email address.";
  }
  return null;
}

export function getAllFields(steps: StepConfig[]): FieldConfig[] {
  return steps.flatMap((step) => step.fields);
}

export function validateSubmission(
  steps: StepConfig[],
  data: Record<string, string>
): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const field of getAllFields(steps)) {
    if (field.showIf && !field.showIf(data)) continue;
    const error = validateField(field, data[field.name] ?? "");
    if (error) errors[field.name] = error;
  }
  return errors;
}
