"use client";

import { useState } from "react";
import { validateField } from "@/lib/intake/schema";
import { contactFields } from "@/lib/contact/fields";

const FALLBACK_CONTACT_EMAIL = "hayeslegalsolutions@hayeslegalsolutions.com";

export function ContactForm() {
  const [data, setData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function setValue(name: string, value: string) {
    setData((d) => ({ ...d, [name]: value }));
    setErrors((e) => ({ ...e, [name]: "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    for (const field of contactFields) {
      const err = validateField(field, data[field.name] ?? "");
      if (err) newErrors[field.name] = err;
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, company: honeypot }),
      });
      const body = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        return;
      }

      if (res.status === 400 && body.errors) {
        setErrors(body.errors);
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
        <h2 className="font-serif text-2xl font-semibold text-ink">Message sent.</h2>
        <p className="mt-3 text-ink-muted">
          Thanks for reaching out — we typically respond within one business day.
        </p>
      </div>
    );
  }

  const inputClasses = (hasError: boolean) =>
    `mt-1.5 block w-full rounded-md border bg-white px-3 py-2 text-sm text-ink focus:outline-none focus:ring-1 ${
      hasError
        ? "border-signal focus:border-signal focus:ring-signal"
        : "border-line focus:border-brand focus:ring-brand"
    }`;

  const nameField = contactFields[0];
  const emailField = contactFields[1];
  const topicField = contactFields[2];
  const messageField = contactFields[3];

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-line bg-white p-6 sm:p-8">
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

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={nameField.name} className="block text-sm font-medium text-ink">
            {nameField.label}
            <span className="text-signal"> *</span>
          </label>
          <input
            id={nameField.name}
            type="text"
            value={data.name ?? ""}
            onChange={(e) => setValue("name", e.target.value)}
            className={inputClasses(!!errors.name)}
          />
          {errors.name && <p className="mt-1.5 text-sm font-medium text-signal-dark">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor={emailField.name} className="block text-sm font-medium text-ink">
            {emailField.label}
            <span className="text-signal"> *</span>
          </label>
          <input
            id={emailField.name}
            type="email"
            value={data.email ?? ""}
            onChange={(e) => setValue("email", e.target.value)}
            className={inputClasses(!!errors.email)}
          />
          {errors.email && <p className="mt-1.5 text-sm font-medium text-signal-dark">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-ink">
          {topicField.label}
          <span className="text-signal"> *</span>
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {topicField.options?.map((opt) => {
            const checked = data.topic === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setValue("topic", opt.value)}
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
        {errors.topic && <p className="mt-1.5 text-sm font-medium text-signal-dark">{errors.topic}</p>}
      </div>

      <div className="mt-6">
        <label htmlFor={messageField.name} className="block text-sm font-medium text-ink">
          {messageField.label}
          <span className="text-signal"> *</span>
        </label>
        <textarea
          id={messageField.name}
          rows={messageField.rows ?? 6}
          value={data.message ?? ""}
          onChange={(e) => setValue("message", e.target.value)}
          className={inputClasses(!!errors.message)}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm font-medium text-signal-dark">{errors.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="mt-6 text-sm font-medium text-signal-dark">
          {errorMessage || "Something went wrong sending your message."} Please try again, or
          email us directly at{" "}
          <a href={`mailto:${FALLBACK_CONTACT_EMAIL}`} className="underline">
            {FALLBACK_CONTACT_EMAIL}
          </a>
          .
        </p>
      )}

      <div className="mt-8">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
