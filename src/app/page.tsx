import Link from "next/link";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { PlaceholderNotice } from "@/components/placeholder-notice";

const audiences = [
  {
    title: "Mineral Owners",
    href: "/mineral-owners",
    description:
      "Received a lease offer, division order, or unexpected call from a landman? Understand what's on the table before you sign anything.",
  },
  {
    title: "Surface Owners",
    href: "/surface-owners",
    description:
      "Oil & gas activity planned on your land? Learn how surface use agreements work and what damages and access terms you can negotiate.",
  },
  {
    title: "Inherited Mineral Rights",
    href: "/inherited-minerals",
    description:
      "Inherited minerals from a family member and not sure what you own or what to do next? Start here.",
  },
];

const steps = [
  {
    title: "Tell us what you have",
    description: "Share your lease, offer, or division order and a bit about your situation.",
  },
  {
    title: "Get a plain-language review",
    description:
      "We break down the key terms, red flags, and questions to ask before you respond to a landman.",
  },
  {
    title: "Negotiate with confidence",
    description:
      "Walk into your next conversation with talking points and a clear understanding of your options.",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <Container className="py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
            Texas &amp; Oklahoma
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Know what you own before you sign anything a landman puts in front of you.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Landownersignal helps mineral and surface owners in Texas and Oklahoma review
            lease and offer documents, prepare negotiation talking points, and learn the
            tactics landmen commonly use &mdash; so you can make informed decisions about
            your property.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="/intake/mineral-owner">Start My Mineral Review</CtaLink>
            <CtaLink href="/intake/surface-owner" variant="secondary">
              Start My Surface Review
            </CtaLink>
          </div>
          <div className="mt-10 max-w-2xl">
            <PlaceholderNotice note="Hero copy, stats, and imagery will be finalized in a later pass." />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Which describes you?
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Choose the path that matches your situation and we&apos;ll guide you from there.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group flex flex-col rounded-xl border border-slate-200 p-6 transition-colors hover:border-emerald-700 hover:bg-emerald-50/40"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-800">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{a.description}</p>
                <span className="mt-4 text-sm font-semibold text-emerald-800">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How it works
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-800 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <CtaLink href="/how-it-works" variant="secondary">
              See the full process
            </CtaLink>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-emerald-900 px-8 py-12 text-white sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Not sure where to start?
            </h2>
            <p className="mt-2 max-w-xl text-emerald-100">
              Browse our education hub for guides on lease terms, landman tactics, and
              mineral rights basics.
            </p>
          </div>
          <CtaLink href="/education" variant="light">
            Visit the Education Hub
          </CtaLink>
        </Container>
      </section>
    </>
  );
}
