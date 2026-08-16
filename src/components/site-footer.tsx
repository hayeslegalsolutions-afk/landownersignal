import Link from "next/link";
import { Container } from "@/components/container";
import { footerLinks, intakeLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-300">
      <Container className="grid gap-8 py-10 sm:grid-cols-3">
        <div>
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="mt-2 max-w-xs text-sm text-slate-600">
            A service of {siteConfig.parentCompany}.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Site</p>
          <ul className="mt-2 space-y-1">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-600 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Start an Intake</p>
          <ul className="mt-2 space-y-1">
            {intakeLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-600 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-slate-300">
        <Container className="flex flex-col gap-1 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.parentCompany}. All rights reserved.
          </p>
          <p>{siteConfig.name} does not provide legal advice.</p>
        </Container>
      </div>
    </footer>
  );
}
