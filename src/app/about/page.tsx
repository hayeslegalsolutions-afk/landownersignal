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
        description="We help landowners in Texas and Oklahoma understand offers from oil & gas, data center, and solar companies."
      />
      <Container className="pb-16">
        <PlaceholderNotice note="Company story, team bios, and credentials will be added here." />
        <p className="mt-8 max-w-2xl text-sm text-slate-600">
          {siteConfig.name} provides educational information and document review support. We
          do not provide legal advice, and using this site does not create an
          attorney-client relationship.
        </p>
      </Container>
    </>
  );
}
