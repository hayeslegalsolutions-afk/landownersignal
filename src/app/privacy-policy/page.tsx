import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Container } from "@/components/container";
import { Callout } from "@/components/ui/callout";
import { ArticleBody } from "@/components/education/article-body";
import type { ArticleBlock } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Landownersignal collects, uses, and protects your information.",
};

const LAST_UPDATED = "August 17, 2026";
const PRIVACY_CONTACT_EMAIL = "hayeslegalsolutions@hayeslegalsolutions.com";

const blocks: ArticleBlock[] = [
  {
    type: "paragraph",
    text: "This Privacy Policy explains how Landsignal, LLC (“Landsignal,” “we,” “us,” or “our”) collects, uses, stores, and shares information in connection with landownersignal.com (the “Site”) and the intake, education, and shop services offered on it (together, the “Services”). By using the Site, you agree to the collection and use of information as described in this policy.",
  },
  { type: "heading", text: "Information We Collect" },
  {
    type: "paragraph",
    text: "We collect information you provide directly to us, including:",
  },
  {
    type: "list",
    items: [
      "Intake form information: your name, email address, phone number, county and state, answers to the track-specific questions on each intake form, and any documents you choose to upload (such as a lease, offer, or agreement).",
      "Contact form information: your name, email address, and the content of your message.",
      "Shop order information: your name, email address, and, for physical book orders, a shipping address.",
      "Payment information: entered directly into Stripe’s hosted checkout page. We do not receive or store your full card number or other sensitive payment details — see “Payment Processing” below.",
      "Communications: if you email or otherwise contact us, we keep a record of that correspondence.",
    ],
  },
  {
    type: "paragraph",
    text: "We may also automatically collect limited technical information when you use the Site, such as your IP address, browser type, device information, and pages visited, through standard server logs and, if we enable them in the future, analytics tools. If we add cookie-based analytics or advertising tools, we will update this policy to describe them.",
  },
  { type: "heading", text: "How We Use Your Information" },
  {
    type: "paragraph",
    text: "We use the information we collect to:",
  },
  {
    type: "list",
    items: [
      "Respond to your intake submission, review the documents or information you provide, and prepare talking points or educational materials for your situation.",
      "Process and fulfill shop orders, including delivering digital downloads and shipping physical books.",
      "Communicate with you about your submission, order, or inquiry, including by email.",
      "Maintain the security, integrity, and proper functioning of the Site.",
      "Comply with our legal obligations and enforce our Terms of Use.",
    ],
  },
  { type: "heading", text: "Payment Processing" },
  {
    type: "paragraph",
    text: "All payments made through the Site are processed by Stripe, Inc. (“Stripe”). When you check out, you are providing your payment details directly to Stripe through its hosted checkout page, not to Landsignal. Stripe’s use of your information is governed by Stripe’s own privacy policy, available at stripe.com/privacy, which we encourage you to review. We receive limited order information from Stripe, such as the items purchased, the amount charged, and (for physical orders) the shipping address you provided, but we do not receive or store your full payment card number.",
  },
  { type: "heading", text: "How We Share Your Information" },
  {
    type: "paragraph",
    text: "We do not sell your personal information. We share information only as follows:",
  },
  {
    type: "list",
    items: [
      "With Stripe, to process payments and orders as described above.",
      "With Resend, our transactional email provider, solely to deliver intake confirmations, order notifications, and download links.",
      "If required to do so by law, subpoena, or other legal process, or if we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.",
      "In connection with a merger, acquisition, or sale of assets, in which case we would take reasonable steps to ensure your information continues to be protected consistent with this policy.",
    ],
  },
  { type: "heading", text: "Data Storage and Security" },
  {
    type: "paragraph",
    text: "Intake submissions and any uploaded documents are transmitted to us by email and reviewed manually; we do not currently maintain a searchable database of submissions. We take reasonable administrative and technical measures intended to protect the information you provide, but no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
  },
  { type: "heading", text: "Cookies and Automatically Collected Information" },
  {
    type: "paragraph",
    text: "The Site currently uses only the minimal technical storage necessary for it to function (for example, storing your shopping cart contents in your browser). We do not currently use third-party advertising cookies or cross-site tracking. If that changes, we will update this section to describe what is collected and how you can opt out.",
  },
  { type: "heading", text: "Your Rights and Choices" },
  {
    type: "paragraph",
    text: "You may ask us to access, correct, or delete the personal information we hold about you at any time. To make a request, email us at the address below with “Privacy Request” in the subject line and a description of what you would like us to do. We will respond within a reasonable time, generally within 30 days. We may need to verify your identity before completing certain requests, and we may retain information where required by law (for example, records related to a completed purchase).",
  },
  { type: "heading", text: "Children’s Privacy" },
  {
    type: "paragraph",
    text: "The Site is intended for adults and is not directed to children under 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will take steps to delete it.",
  },
  { type: "heading", text: "Changes to This Policy" },
  {
    type: "paragraph",
    text: "We may update this Privacy Policy from time to time. If we make material changes, we will update the “Last updated” date at the top of this page. Your continued use of the Site after a change becomes effective constitutes your acceptance of the revised policy.",
  },
  { type: "heading", text: "Contact Us" },
  {
    type: "paragraph",
    text: `If you have questions about this Privacy Policy or how we handle your information, contact us at ${PRIVACY_CONTACT_EMAIL}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated: ${LAST_UPDATED}`}
      />
      <Container className="max-w-3xl pb-16">
        <Callout tone="warning" title="Draft — not yet reviewed by counsel" className="mb-10">
          This page is placeholder legal language prepared to give Landsignal, LLC a
          complete first draft to work from. It has not been reviewed by an attorney and
          should not be relied upon as final legal documentation before launch.
        </Callout>
        <ArticleBody blocks={blocks} />
      </Container>
    </>
  );
}
