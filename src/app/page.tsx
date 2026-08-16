import Link from "next/link";
import { Container } from "@/components/container";
import { PlaceholderNotice } from "@/components/placeholder-notice";
import { tracks } from "@/lib/site";

export default function Home() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-bold">Landownersignal</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Helping landowners in Texas and Oklahoma evaluate offers from oil &amp; gas landmen,
        data center developers, and solar companies.
      </p>

      <div className="mt-8 max-w-2xl">
        <PlaceholderNotice note="Home page copy and design will be finalized in a later step." />
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
  );
}
