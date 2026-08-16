import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";

export const metadata: Metadata = {
  title: "Surface Owner Intake",
  description: "Start a review of a surface use agreement, easement, or damages request.",
};

export default function SurfaceOwnerIntakePage() {
  return (
    <>
      <PageHero
        eyebrow="Intake"
        title="Surface owner intake"
        description="Tell us about the surface use agreement, easement, or access request you've received."
      />

      <section className="py-16">
        <Container className="max-w-2xl">
          <PlaceholderNotice note="This intake form is not yet connected to a backend or file upload." />

          <form className="mt-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700"
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
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-slate-700">
                  County / State of the property
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder="e.g. Grady County, OK"
                  className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700"
                />
              </div>
            </div>

            <div>
              <label htmlFor="documentType" className="block text-sm font-medium text-slate-700">
                What do you need reviewed?
              </label>
              <select
                id="documentType"
                name="documentType"
                className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="surface-use-agreement">Surface use agreement</option>
                <option value="pipeline-easement">Pipeline / right-of-way easement</option>
                <option value="damages-claim">Damages claim or compensation offer</option>
                <option value="access-request">Access request, no paperwork yet</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-slate-700">
                Tell us about your situation
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                className="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-700"
                placeholder="Who contacted you, what access or activity is planned, and what questions do you have?"
              />
            </div>

            <div>
              <span className="block text-sm font-medium text-slate-700">
                Upload documents (agreement, easement, correspondence)
              </span>
              <div className="mt-1.5 flex justify-center rounded-md border border-dashed border-slate-300 px-6 py-8 text-center">
                <p className="text-sm text-slate-500">
                  File upload will be enabled in a later step.
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled
              className="inline-flex items-center justify-center rounded-md bg-emerald-800 px-5 py-3 text-sm font-semibold text-white opacity-60"
            >
              Submit Intake (coming soon)
            </button>
          </form>
        </Container>
      </section>
    </>
  );
}
