"use client";

import { useState } from "react";
import { validateField, type FieldConfig, type StepConfig } from "@/lib/intake/schema";
import { TermsCheckbox } from "@/components/ui/terms-checkbox";

function FieldRenderer({
  field,
  value,
  file,
  error,
  onChange,
  onFileChange,
}: {
  field: FieldConfig;
  value: string;
  file: File | null;
  error?: string;
  onChange: (value: string) => void;
  onFileChange: (file: File | null) => void;
}) {
  const inputClasses = `mt-1.5 block w-full rounded-md border bg-white px-3 py-2 text-sm text-ink focus:outline-none focus:ring-1 ${
    error
      ? "border-signal focus:border-signal focus:ring-signal"
      : "border-line focus:border-brand focus:ring-brand"
  }`;

  return (
    <div>
      <label htmlFor={field.name} className="block text-sm font-medium text-ink">
        {field.label}
        {field.required && <span className="text-signal"> *</span>}
      </label>
      {field.helpText && <p className="mt-1 text-xs text-ink-muted">{field.helpText}</p>}

      {field.type === "textarea" && (
        <textarea
          id={field.name}
          rows={field.rows ?? 5}
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClasses}
        />
      )}

      {(field.type === "text" || field.type === "email" || field.type === "tel") && (
        <input
          id={field.name}
          type={field.type}
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClasses}
        />
      )}

      {field.type === "radio" && (
        <div className="mt-2 flex flex-wrap gap-2">
          {field.options?.map((opt) => {
            const checked = value === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange(opt.value)}
                aria-pressed={checked}
                className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                  checked
                    ? "border-brand bg-brand text-white"
                    : "border-line text-ink hover:border-brand"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      )}

      {field.type === "file" && (
        <div className="mt-1.5">
          <input
            id={field.name}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
            className="block w-full text-sm text-ink-muted file:mr-4 file:rounded-md file:border-0 file:bg-paper-tint file:px-4 file:py-2 file:text-sm file:font-semibold file:text-ink hover:file:bg-line"
          />
          {file && <p className="mt-1 text-xs text-ink-muted">Selected: {file.name}</p>}
        </div>
      )}

      {error && <p className="mt-1.5 text-sm font-medium text-signal-dark">{error}</p>}
    </div>
  );
}

const FALLBACK_CONTACT_EMAIL = "hayeslegalsolutions@hayeslegalsolutions.com";

export function MultiStepIntakeForm({
  steps,
  track,
  submitLabel = "Submit Intake",
}: {
  steps: StepConfig[];
  track: string;
  submitLabel?: string;
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<Record<string, File | null>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [agreedError, setAgreedError] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const step = steps[stepIndex];
  const visibleFields = step.fields.filter((f) => !f.showIf || f.showIf(data));

  function setValue(name: string, value: string) {
    setData((d) => ({ ...d, [name]: value }));
    if (name === "state") {
      const field = step.fields.find((f) => f.name === "state");
      setErrors((e) => ({ ...e, state: (field && validateField(field, value)) || "" }));
    } else {
      setErrors((e) => ({ ...e, [name]: "" }));
    }
  }

  function setFile(name: string, file: File | null) {
    setFiles((f) => ({ ...f, [name]: file }));
  }

  function validateStep(): boolean {
    const newErrors: Record<string, string> = {};
    for (const field of visibleFields) {
      const err = validateField(field, data[field.name] ?? "");
      if (err) newErrors[field.name] = err;
    }
    setErrors((e) => ({ ...e, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  }

  function goNext() {
    if (!validateStep()) return;
    setStepIndex((i) => Math.min(steps.length - 1, i + 1));
  }

  function goBack() {
    setStepIndex((i) => Math.max(0, i - 1));
  }

  function stepIndexForField(name: string): number {
    return steps.findIndex((s) => s.fields.some((f) => f.name === name));
  }

  async function handleSubmit() {
    if (!validateStep()) return;
    if (!agreed) {
      setAgreedError(true);
      return;
    }
    setStatus("submitting");
    setErrorMessage("");
    try {
      const formData = new FormData();
      formData.append("track", track);
      formData.append("company", honeypot);
      formData.append("agreed", String(agreed));
      Object.entries(data).forEach(([key, value]) => formData.append(key, value));
      Object.entries(files).forEach(([key, file]) => {
        if (file) formData.append(key, file);
      });

      const res = await fetch("/api/intake", { method: "POST", body: formData });
      const body = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        return;
      }

      if (res.status === 400 && body.errors) {
        const { agreed: agreedErrorMessage, ...fieldErrors } = body.errors;
        if (agreedErrorMessage) setAgreedError(true);
        setErrors((e) => ({ ...e, ...fieldErrors }));
        const firstField = Object.keys(fieldErrors)[0];
        const idx = firstField ? stepIndexForField(firstField) : steps.length - 1;
        if (idx >= 0) setStepIndex(idx);
        setStatus("idle");
        return;
      }

      throw new Error(body.message);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error && err.message ? err.message : "");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-line bg-white p-8 text-center">
        <h2 className="font-serif text-2xl font-semibold text-ink">Thanks — we&apos;ve got it.</h2>
        <p className="mt-3 text-ink-muted">
          We&apos;ll review what you sent and follow up by email. There&apos;s nothing else
          you need to do right now.
        </p>
      </div>
    );
  }

  const isLastStep = stepIndex === steps.length - 1;

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold text-ink-muted">
          Step {stepIndex + 1} of {steps.length}: {step.title}
        </p>
        <div className="mt-3 flex gap-1.5">
          {steps.map((s, i) => (
            <div
              key={s.id}
              className={`h-1.5 flex-1 rounded-full ${i <= stepIndex ? "bg-brand" : "bg-line"}`}
            />
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-line bg-white p-6 sm:p-8">
        {step.description && <p className="mb-6 text-sm text-ink-muted">{step.description}</p>}

        {/* Honeypot: real users never see or fill this. Left populated only by bots. */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
        >
          <label htmlFor="company">Leave this field blank</label>
          <input
            id="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="space-y-6">
          {visibleFields.map((field) => (
            <FieldRenderer
              key={field.name}
              field={field}
              value={data[field.name] ?? ""}
              file={files[field.name] ?? null}
              error={errors[field.name]}
              onChange={(v) => setValue(field.name, v)}
              onFileChange={(f) => setFile(field.name, f)}
            />
          ))}
        </div>

        {isLastStep && (
          <TermsCheckbox
            checked={agreed}
            onChange={(v) => {
              setAgreed(v);
              setAgreedError(false);
            }}
            error={agreedError}
            className="mt-6"
          />
        )}

        {status === "error" && (
          <p className="mt-6 text-sm font-medium text-signal-dark">
            {errorMessage || "Something went wrong submitting your intake."} Please try
            again, or reach us directly at{" "}
            <a href={`mailto:${FALLBACK_CONTACT_EMAIL}`} className="underline">
              {FALLBACK_CONTACT_EMAIL}
            </a>
            .
          </p>
        )}

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={goBack}
            disabled={stepIndex === 0}
            className="text-sm font-semibold text-ink-muted hover:text-ink disabled:invisible"
          >
            ← Back
          </button>

          {isLastStep ? (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting…" : submitLabel}
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
