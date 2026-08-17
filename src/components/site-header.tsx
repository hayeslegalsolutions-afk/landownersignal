"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/container";
import { SignalMark } from "@/components/ui/signal-mark";
import { useCart } from "@/lib/cart/cart-context";
import { primaryNav, secondaryNav, siteConfig } from "@/lib/site";

/** Active for an exact match, or any sub-path (e.g. /oil-gas/mineral-owners under /oil-gas) — except "/", which only matches itself. */
function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount, hydrated } = useCart();
  const showCount = hydrated && itemCount > 0;

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
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={`text-sm font-semibold transition-colors ${
                isActive(pathname, link.href) ? "text-brand" : "text-ink hover:text-brand"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <span className="h-4 w-px bg-line" aria-hidden="true" />
          {secondaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={`text-sm transition-colors ${
                isActive(pathname, link.href) ? "font-semibold text-brand" : "text-ink-muted hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/shop/cart"
            aria-current={pathname === "/shop/cart" ? "page" : undefined}
            className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
              pathname === "/shop/cart" ? "text-brand" : "text-ink hover:text-brand"
            }`}
          >
            Cart
            {showCount && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-xs font-semibold text-white">
                {itemCount}
              </span>
            )}
          </Link>
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
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className={`rounded px-2 py-2 text-sm font-semibold hover:bg-paper-tint ${
                  isActive(pathname, link.href) ? "text-brand" : "text-ink"
                }`}
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
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className={`rounded px-2 py-2 text-sm hover:bg-paper-tint ${
                  isActive(pathname, link.href) ? "font-semibold text-brand" : "text-ink-muted"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/shop/cart"
              aria-current={pathname === "/shop/cart" ? "page" : undefined}
              className={`rounded px-2 py-2 text-sm font-semibold hover:bg-paper-tint ${
                pathname === "/shop/cart" ? "text-brand" : "text-ink"
              }`}
              onClick={() => setOpen(false)}
            >
              Cart{showCount ? ` (${itemCount})` : ""}
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
