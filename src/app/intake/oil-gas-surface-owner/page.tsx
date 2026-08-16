import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { IntakeForm } from "@/components/intake-form";

export const metadata: Metadata = {
  title: "Oil & Gas Surface Owner Intake",
  description: "Start a review of a surface use agreement, easement, or damages request.",
};

export default function OilGasSurfaceOwnerIntakePage() {
  return (
    <>
      <PageHero
        eyebrow="Intake · Oil & Gas"
        title="Surface owner intake"
        description="Tell us about the surface use agreement, easement, or access request you've received."
      />
      <Container className="max-w-2xl pb-16">
        <PlaceholderNotice note="This intake form is not yet connected to a backend or file upload." />
        <IntakeForm
          documentTypeLabel="What do you need reviewed?"
          documentTypeOptions={[
            { value: "surface-use-agreement", label: "Surface use agreement" },
            { value: "pipeline-easement", label: "Pipeline / right-of-way easement" },
            { value: "damages-claim", label: "Damages claim or compensation offer" },
            { value: "access-request", label: "Access request, no paperwork yet" },
            { value: "other", label: "Other" },
          ]}
          detailsPlaceholder="Who contacted you, what access or activity is planned, and what questions do you have?"
        />
      </Container>
    </>
  );
}
