import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} and ${siteConfig.parentCompany}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`${siteConfig.name} is a service of ${siteConfig.parentCompany}.`}
        description="We help mineral and surface owners in Texas and Oklahoma understand what they own and what's being offered, so they can make informed decisions."
      />

      <section className="py-16">
        <Container>
          <PlaceholderNotice note="Company story, team bios, and credentials will be added here." />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Our mission</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Landowners in Texas and Oklahoma are often approached by landmen without the
                context they need to evaluate a lease, offer, or surface use agreement.
                {" "}
                {siteConfig.name} exists to close that gap with clear, practical guidance.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Who we serve</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We work with mineral owners, surface owners, and heirs who have recently
                inherited mineral rights across Texas and Oklahoma.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Important disclaimer</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {siteConfig.name} provides educational information and document review support.
              We do not provide legal advice, and using this site does not create an
              attorney-client relationship. For legal advice specific to your situation,
              consult a licensed attorney in your state.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
