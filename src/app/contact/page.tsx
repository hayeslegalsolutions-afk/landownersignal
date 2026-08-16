import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Landownersignal team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Questions before you start an intake?"
        description="Reach out and we'll point you in the right direction."
      />

      <Container className="max-w-2xl pb-16">
        <PlaceholderNotice note="This form is not yet wired up to send messages." />

        <form className="mt-8 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-1.5 block w-full rounded border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1.5 block w-full rounded border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-slate-700">
              What is this about?
            </label>
            <select
              id="topic"
              name="topic"
              className="mt-1.5 block w-full rounded border border-slate-300 px-3 py-2 text-sm"
              defaultValue=""
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="oil-gas">Oil &amp; Gas</option>
              <option value="data-centers">Data Centers</option>
              <option value="solar">Solar</option>
              <option value="shop">Shop / order question</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1.5 block w-full rounded border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled
            className="inline-flex items-center justify-center rounded bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white opacity-60"
          >
            Send Message (coming soon)
          </button>
        </form>
      </Container>
    </>
  );
}
