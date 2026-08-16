import Link from "next/link";
import { Container } from "@/components/container";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { Hero } from "@/components/ui/hero";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { TrackBadge } from "@/components/ui/track-badge";
import { tracks } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow={
          <div className="flex flex-wrap gap-2">
            <TrackBadge track="oil-gas" />
            <TrackBadge track="data-centers" />
            <TrackBadge track="solar" />
          </div>
        }
        title="A company wants your land or your minerals. Know where you stand before you answer."
        description="Landownersignal helps landowners in Texas and Oklahoma read the offer, spot the tactics, and prepare to negotiate — whether it's a landman, a data center developer, or a solar company at your door."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/oil-gas">Find My Track</Button>
          <Button href="/how-it-works" variant="secondary">
            See How It Works
          </Button>
        </div>
        <Callout title="Don't sign anything yet" className="mt-8 max-w-2xl">
          Read the offer and understand your options first. Once you sign, most of your
          leverage is gone.
        </Callout>
      </Hero>

      <Container className="py-10">
        <div className="max-w-2xl">
          <PlaceholderNotice note="The rest of this page still uses the old placeholder styling — it'll be brought in line with the new system in a later pass." />
        </div>

        <h2 className="mt-10 text-xl font-semibold">Which describes you?</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {tracks.map((t) => (
            <Link
              key={t.key}
              href={t.href}
              className="rounded border border-slate-300 p-5 hover:border-slate-900"
            >
              <h3 className="font-semibold">{t.label}</h3>
              <p className="mt-2 text-sm text-slate-600">{t.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/shop" className="text-sm font-semibold underline">
            Or browse the shop for books &amp; PDF checklists &rarr;
          </Link>
        </div>
      </Container>
    </>
  );
}
