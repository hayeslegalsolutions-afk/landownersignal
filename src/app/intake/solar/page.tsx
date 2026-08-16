import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { IntakeForm } from "@/components/intake-form";

export const metadata: Metadata = {
  title: "Solar Intake",
  description: "Start a review of a solar lease agreement.",
};

export default function SolarIntakePage() {
  return (
    <>
      <PageHero
        eyebrow="Intake · Solar"
        title="Solar intake"
        description="Tell us about the solar lease agreement you've received."
      />
      <Container className="max-w-2xl pb-16">
        <PlaceholderNotice note="This intake form is not yet connected to a backend or file upload." />
        <IntakeForm
          documentTypeLabel="What do you need reviewed?"
          documentTypeOptions={[
            { value: "solar-lease-offer", label: "Solar lease offer" },
            { value: "option-agreement", label: "Option to lease agreement" },
            { value: "existing-lease", label: "Existing lease I already signed" },
            { value: "access-request", label: "Access request, no paperwork yet" },
            { value: "other", label: "Other" },
          ]}
          detailsPlaceholder="Who contacted you, what were you offered, and what questions do you have?"
        />
      </Container>
    </>
  );
}
