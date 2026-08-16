import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { IntakeForm } from "@/components/intake-form";

export const metadata: Metadata = {
  title: "Oil & Gas Mineral Owner Intake",
  description: "Start a review of your mineral lease, offer, or division order.",
};

export default function OilGasMineralOwnerIntakePage() {
  return (
    <>
      <PageHero
        eyebrow="Intake · Oil & Gas"
        title="Mineral owner intake"
        description="Tell us about your lease, offer, or division order so we can help you understand it."
      />
      <Container className="max-w-2xl pb-16">
        <PlaceholderNotice note="This intake form is not yet connected to a backend or file upload." />
        <IntakeForm
          documentTypeLabel="What do you need reviewed?"
          documentTypeOptions={[
            { value: "lease-offer", label: "New lease offer" },
            { value: "top-lease", label: "Top-lease offer" },
            { value: "division-order", label: "Division order" },
            { value: "existing-lease", label: "Existing lease I already signed" },
            { value: "inherited", label: "Inherited minerals, no documents yet" },
            { value: "other", label: "Other" },
          ]}
          detailsPlaceholder="Who contacted you, what were you offered, and what questions do you have?"
        />
      </Container>
    </>
  );
}
