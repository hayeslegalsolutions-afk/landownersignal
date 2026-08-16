import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Container } from "@/components/container";
import { Callout } from "@/components/ui/callout";
import { ArticleBody } from "@/components/education/article-body";
import type { ArticleBlock } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing your use of Landownersignal.",
};

const LAST_UPDATED = "August 17, 2026";
const LEGAL_CONTACT_EMAIL = "hayeslegalsolutions@hayeslegalsolutions.com";

const blocks: ArticleBlock[] = [
  {
    type: "paragraph",
    text: "These Terms of Use (“Terms”) govern your access to and use of landownersignal.com (the “Site”) and the services offered on it, operated by Landsignal, LLC (“Landsignal,” “we,” “us,” or “our”). By using the Site, submitting an intake form, or purchasing a product, you agree to be bound by these Terms. If you do not agree, do not use the Site.",
  },
  { type: "heading", text: "No Legal Advice; No Attorney-Client Relationship" },
  {
    type: "callout",
    tone: "warning",
    title: "Landsignal, LLC is not a law firm",
    text: "Landownersignal does not provide legal advice, legal representation, or legal opinions of any kind, and no attorney-client relationship is formed by using the Site, submitting an intake form, purchasing a product, or communicating with us in any way. The educational content, lease and offer reviews, negotiation talking points, books, and PDF checklists available through the Site are provided for general informational purposes only and are not a substitute for advice from a licensed attorney. For advice about your specific legal situation, you should consult a licensed attorney in your state.",
  },
  { type: "heading", text: "Description of Services" },
  {
    type: "paragraph",
    text: "Landownersignal helps landowners in Texas and Oklahoma understand offers and agreements from oil & gas, data center, and solar companies through educational content, document review, and negotiation preparation, along with a shop offering books and PDF checklists. Our review of a document you submit reflects our general understanding of common terms and practices; it is not a guarantee of any particular outcome and does not identify every issue that a licensed attorney might identify.",
  },
  { type: "heading", text: "Appropriate Use of the Site" },
  {
    type: "paragraph",
    text: "You agree to use the Site only for lawful purposes and in accordance with these Terms. When using the Site, you agree not to:",
  },
  {
    type: "list",
    items: [
      "Provide false, inaccurate, or misleading information in an intake form, contact form, or order.",
      "Upload any document you do not have the right to share with us.",
      "Use the Site in any way that could disable, overburden, damage, or impair it, or interfere with anyone else’s use of the Site.",
      "Attempt to gain unauthorized access to any part of the Site, other users’ accounts, or any systems or networks connected to the Site.",
      "Copy, scrape, or reproduce the Site’s content for any commercial purpose not expressly permitted by these Terms.",
      "Use the Site to violate any applicable local, state, national, or international law or regulation.",
    ],
  },
  { type: "heading", text: "Shop Purchases" },
  {
    type: "paragraph",
    text: "The Site sells physical books and digital PDF checklists. All payments are processed by Stripe. By placing an order, you authorize us (through Stripe) to charge your chosen payment method for the total amount shown at checkout, including any applicable tax and shipping.",
  },
  {
    type: "list",
    items: [
      "Physical books: We accept returns of unused, undamaged physical books within 30 days of delivery for a refund of the purchase price, less original shipping costs. Contact us before returning an item. [Placeholder — confirm the return window, restocking terms, and who pays return shipping before launch.]",
      "PDF checklists: Because digital checklists are delivered instantly and cannot be “returned,” all PDF checklist purchases are non-refundable once the download has been accessed. [Placeholder — please confirm this policy, including whether any exceptions apply (e.g., duplicate purchase, technical failure to deliver), before launch.]",
      "Order errors: If you believe you were charged incorrectly or did not receive an item or download you paid for, contact us and we will work with you to resolve it.",
    ],
  },
  { type: "heading", text: "Intellectual Property" },
  {
    type: "paragraph",
    text: "All content on the Site — including articles, guides, checklists, books, graphics, logos, and the overall look and feel of the Site — is owned by Landsignal, LLC or its licensors and is protected by copyright and other intellectual property laws. Purchasing a book or PDF checklist gives you a personal, non-transferable license to use that product for your own reference; it does not give you the right to reproduce, resell, redistribute, or publicly share the content, in whole or in part, without our prior written permission.",
  },
  { type: "heading", text: "Third-Party Services" },
  {
    type: "paragraph",
    text: "The Site relies on third-party services, including Stripe for payment processing. Your use of those services is also subject to their own terms and policies. We are not responsible for the acts or omissions of third-party service providers.",
  },
  { type: "heading", text: "Disclaimers" },
  {
    type: "paragraph",
    text: "The Site and all content and services are provided “as is” and “as available,” without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or completely secure, or that any educational content, review, or checklist is complete, accurate, or applicable to your specific situation.",
  },
  { type: "heading", text: "Limitation of Liability" },
  {
    type: "paragraph",
    text: "To the fullest extent permitted by law, Landsignal, LLC and its owners, employees, and contractors will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill, arising out of or related to your use of the Site or any product or service purchased through it, even if we have been advised of the possibility of such damages. To the fullest extent permitted by law, our total liability for any claim arising out of or relating to these Terms or the Site will not exceed the amount you paid to us, if any, in the twelve (12) months preceding the claim. [Placeholder — confirm this cap and scope with counsel.]",
  },
  { type: "heading", text: "Indemnification" },
  {
    type: "paragraph",
    text: "You agree to indemnify and hold harmless Landsignal, LLC and its owners, employees, and contractors from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys’ fees) arising out of your use of the Site, your violation of these Terms, or your violation of any rights of a third party.",
  },
  { type: "heading", text: "Governing Law" },
  {
    type: "paragraph",
    text: "These Terms are governed by the laws of the State of Texas, without regard to its conflict of laws principles. [Placeholder — confirm the governing state and venue with counsel.]",
  },
  { type: "heading", text: "Dispute Resolution" },
  {
    type: "paragraph",
    text: "We hope to resolve any disagreement informally — contact us first and we will try to work it out. [Placeholder — decide with counsel whether to add a formal arbitration clause, venue selection, or class-action waiver here before launch.]",
  },
  { type: "heading", text: "Changes to These Terms" },
  {
    type: "paragraph",
    text: "We may update these Terms from time to time. If we make material changes, we will update the “Last updated” date at the top of this page. Your continued use of the Site after a change becomes effective constitutes your acceptance of the revised Terms.",
  },
  { type: "heading", text: "Severability and Entire Agreement" },
  {
    type: "paragraph",
    text: "If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full effect. These Terms, together with our Privacy Policy, constitute the entire agreement between you and Landsignal, LLC regarding the Site.",
  },
  { type: "heading", text: "Contact Us" },
  {
    type: "paragraph",
    text: `Questions about these Terms can be sent to ${LEGAL_CONTACT_EMAIL}.`,
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <Hero eyebrow="Legal" title="Terms of Use" description={`Last updated: ${LAST_UPDATED}`} />
      <Container className="max-w-3xl pb-16">
        <Callout tone="warning" title="Draft — not yet reviewed by counsel" className="mb-10">
          This page is placeholder legal language prepared to give Landsignal, LLC a
          complete first draft to work from. It has not been reviewed by an attorney and
          should not be relied upon as final legal documentation before launch. Sections
          marked “[Placeholder]” need your explicit confirmation before this policy goes
          live.
        </Callout>
        <ArticleBody blocks={blocks} />
      </Container>
    </>
  );
}
