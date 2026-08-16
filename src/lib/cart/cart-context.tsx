"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { getProductBySlug } from "@/lib/products";

export type CartItem = { slug: string; quantity: number };

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  hydrated: boolean;
  addItem: (slug: string, quantity?: number) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "landownersignal_cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  // Cart is read from localStorage after mount, not during initial render, so
  // the server-rendered and first-paint client HTML always match (an empty
  // cart) — avoids a hydration mismatch warning.
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // One-time sync from an external store (localStorage) right after mount —
    // the documented pattern for browser-only state that must stay
    // SSR-safe. Not a cascading-render risk: empty deps, runs exactly once.
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // Ignore malformed/unavailable storage — start with an empty cart.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  function addItem(slug: string, quantity = 1) {
    const product = getProductBySlug(slug);
    if (!product) return;

    setItems((prev) => {
      const existing = prev.find((i) => i.slug === slug);

      // PDFs are a digital, single-copy item — adding again is a no-op.
      if (product.type === "pdf-checklist") {
        return existing ? prev : [...prev, { slug, quantity: 1 }];
      }

      if (existing) {
        return prev.map((i) =>
          i.slug === slug ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { slug, quantity }];
    });
  }

  function removeItem(slug: string) {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }

  function setQuantity(slug: string, quantity: number) {
    const product = getProductBySlug(slug);
    if (!product || product.type === "pdf-checklist") return;
    const clamped = Math.max(1, Math.min(20, Math.round(quantity)));
    setItems((prev) => prev.map((i) => (i.slug === slug ? { ...i, quantity: clamped } : i)));
  }

  function clearCart() {
    setItems([]);
  }

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, itemCount, hydrated, addItem, removeItem, setQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
