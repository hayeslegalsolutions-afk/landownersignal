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

      <section className="py-16">
        <Container className="max-w-2xl">
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
                  className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700"
                  placeholder="Jane Landowner"
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
                  className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-slate-700">
                State
              </label>
              <select
                id="state"
                name="state"
                className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a state
                </option>
                <option value="TX">Texas</option>
                <option value="OK">Oklahoma</option>
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
                className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700"
                placeholder="Tell us a bit about your situation..."
              />
            </div>

            <button
              type="submit"
              disabled
              className="inline-flex items-center justify-center rounded-md bg-emerald-800 px-5 py-3 text-sm font-semibold text-white opacity-60"
            >
              Send Message (coming soon)
            </button>
          </form>
        </Container>
      </section>
    </>
  );
}
