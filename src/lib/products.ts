export type Product = {
  slug: string;
  title: string;
  type: "book" | "pdf-checklist";
  track: "oil-gas" | "data-centers" | "solar" | "general";
  price: number;
  description: string;
};

export const products: Product[] = [
  {
    slug: "mineral-owners-handbook",
    title: "Mineral Owner's Handbook",
    type: "book",
    track: "oil-gas",
    price: 29,
    description: "A plain-language guide to understanding and negotiating oil & gas leases.",
  },
  {
    slug: "oil-gas-lease-negotiation-checklist",
    title: "Oil & Gas Lease Negotiation Checklist",
    type: "pdf-checklist",
    track: "oil-gas",
    price: 15,
    description: "A PDF checklist of terms to review before signing a lease or division order.",
  },
  {
    slug: "data-center-land-lease-checklist",
    title: "Data Center Land Lease Checklist",
    type: "pdf-checklist",
    track: "data-centers",
    price: 19,
    description: "A PDF checklist for landowners evaluating a data center land lease or easement.",
  },
  {
    slug: "solar-lease-negotiation-checklist",
    title: "Solar Lease Negotiation Checklist",
    type: "pdf-checklist",
    track: "solar",
    price: 15,
    description: "A PDF checklist of terms to review before signing a solar lease agreement.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
