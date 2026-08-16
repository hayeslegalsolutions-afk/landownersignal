import Link from "next/link";
import { Container } from "@/components/container";
import { SignalMark } from "@/components/ui/signal-mark";
import { footerLinks, intakeLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-brand text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <SignalMark className="h-7 w-7 text-white" />
            <span className="font-serif text-lg font-semibold">{siteConfig.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
            A service of {siteConfig.parentCompany}. On your side when a company comes
            asking for your land or minerals.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Site</p>
          <ul className="mt-3 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Start an Intake</p>
          <ul className="mt-3 space-y-2">
            {intakeLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-1 py-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.parentCompany}. All rights reserved.
          </p>
          <p>{siteConfig.name} does not provide legal advice.</p>
        </Container>
      </div>
    </footer>
  );
}
