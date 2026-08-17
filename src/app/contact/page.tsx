import type { Metadata } from "next";
import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Landownersignal team.",
};

const CONTACT_EMAIL = "hayeslegalsolutions@hayeslegalsolutions.com";

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Questions before you start?"
        description="Send us a message and we'll point you in the right direction — or reach us directly below."
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-serif text-xl font-semibold text-ink">Reach us directly</h2>
            <p className="mt-3 text-sm leading-6 text-ink-muted">
              Email is the fastest way to reach us.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-6 text-sm leading-6 text-ink-muted">
              We typically respond within one business day. For a document review, starting
              an intake gets you a faster, more complete response than a general message.
            </p>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
