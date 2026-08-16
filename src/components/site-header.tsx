"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/container";
import { SignalMark } from "@/components/ui/signal-mark";
import { primaryNav, secondaryNav, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line bg-paper">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-ink"
          onClick={() => setOpen(false)}
        >
          <SignalMark className="h-7 w-7 text-brand" />
          <span className="font-serif text-lg font-semibold tracking-tight">{siteConfig.name}</span>
        </Link>

        <nav aria-label="Tracks" className="hidden items-center gap-5 md:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <span className="h-4 w-px bg-line" aria-hidden="true" />
          {secondaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded border border-line px-3 py-1.5 text-sm font-semibold text-ink md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </Container>

      {open && (
        <div className="border-t border-line md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-2 py-2 text-sm font-semibold text-ink hover:bg-paper-tint"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="my-1 h-px bg-line" />
            {secondaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-2 py-2 text-sm text-ink-muted hover:bg-paper-tint"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
