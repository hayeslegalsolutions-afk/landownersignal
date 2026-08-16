import Link from "next/link";
import { Container } from "@/components/container";
import { footerLinks, intakeLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-700 text-sm font-bold text-white">
              LS
            </span>
            <span className="text-lg font-semibold text-white">{siteConfig.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-xs text-slate-500">
            {siteConfig.name} is a service of {siteConfig.parentCompany}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Site</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-400 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Start an Intake</h3>
          <ul className="mt-4 space-y-2">
            {intakeLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-400 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-slate-800">
        <Container className="flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.parentCompany}. All rights reserved.
          </p>
          <p>
            {siteConfig.name} does not provide legal advice. Information on this site is
            educational and does not create an attorney-client relationship.
          </p>
        </Container>
      </div>
    </footer>
  );
}
