import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { IntakeForm } from "@/components/intake-form";

export const metadata: Metadata = {
  title: "Data Center Intake",
  description: "Start a review of a data center land lease or easement offer.",
};

export default function DataCenterIntakePage() {
  return (
    <>
      <PageHero
        eyebrow="Intake · Data Centers"
        title="Data center intake"
        description="Tell us about the land lease or easement offer you've received from a data center developer."
      />
      <Container className="max-w-2xl pb-16">
        <PlaceholderNotice note="This intake form is not yet connected to a backend or file upload." />
        <IntakeForm
          documentTypeLabel="What do you need reviewed?"
          documentTypeOptions={[
            { value: "land-lease-offer", label: "Land lease offer" },
            { value: "easement-offer", label: "Easement offer" },
            { value: "option-agreement", label: "Option to lease agreement" },
            { value: "access-request", label: "Access request, no paperwork yet" },
            { value: "other", label: "Other" },
          ]}
          detailsPlaceholder="Who contacted you, what were you offered, and what questions do you have?"
        />
      </Container>
    </>
  );
}
