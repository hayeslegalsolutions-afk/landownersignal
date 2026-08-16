"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/container";
import { primaryNav, secondaryNav, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-300">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="text-lg font-bold" onClick={() => setOpen(false)}>
          {siteConfig.name}
        </Link>

        <button
          type="button"
          className="rounded border border-slate-300 px-3 py-1 text-sm md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <div className={`${open ? "flex" : "hidden"} w-full flex-col gap-3 md:flex md:w-auto md:flex-row md:items-center md:gap-6`}>
          <nav aria-label="Tracks" className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <span className="hidden text-slate-300 md:inline">|</span>
          <nav aria-label="Site" className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            {secondaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 hover:text-slate-900 hover:underline"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
