import type { Track } from "@/lib/track";

export type ProductType = "book" | "pdf-checklist";

export type Product = {
  slug: string;
  title: string;
  type: ProductType;
  /** A product can apply to more than one track. */
  tracks: Track[];
  price: number;
  shortDescription: string;
  longDescription: string[];
  /** Optional real cover image path — falls back to a generated cover when omitted. */
  coverImage?: string;
};

export const products: Product[] = [
  {
    slug: "landowners-guide-to-oil-gas-leases",
    title: "The Landowner's Guide to Oil & Gas Leases",
    type: "book",
    tracks: ["oil-gas"],
    price: 29,
    shortDescription:
      "A plain-language guide to understanding and negotiating oil & gas leases, from bonus to pooling to renewal.",
    longDescription: [
      "Most lease offers are written to be signed quickly, not understood. This guide walks Texas and Oklahoma mineral owners through every major clause in a typical oil & gas lease — bonus payments, royalty rates, primary terms, pooling and unitization, shut-in provisions, and renewal language — in plain English.",
      "Each chapter ends with a short list of questions worth asking before you sign, along with real examples of language that favors the operator over the owner.",
      "Written for first-time lessors and for owners who've leased before but never quite understood what they agreed to.",
    ],
  },
  {
    slug: "data-center-offer-review-checklist",
    title: "Data Center Offer Review Checklist",
    type: "pdf-checklist",
    tracks: ["data-centers"],
    price: 19,
    shortDescription:
      "A checklist for evaluating a ground lease, purchase offer, or easement from a data center developer.",
    longDescription: [
      "Data center land deals move slower and involve far larger numbers than most landowners are used to negotiating. This checklist walks through the terms that matter most: deal structure (lease vs. purchase vs. easement), rent and escalation, option period length and payment, power and utility commitments, and what happens if the project never gets built.",
      "Print it, mark it up, and bring it to your first real conversation with the developer — or use it before you even sign an NDA.",
    ],
  },
  {
    slug: "solar-lease-red-flags-checklist",
    title: "Solar Lease Red Flags Checklist",
    type: "pdf-checklist",
    tracks: ["solar"],
    price: 15,
    shortDescription:
      "A checklist of the terms most likely to work against you in a solar lease — and what to ask instead.",
    longDescription: [
      "Solar leases run 20 to 50+ years once renewals are counted, which means small differences in the fine print compound for decades. This checklist focuses on the handful of terms that matter most: escalation clauses, auto-renewal language, decommissioning and bond requirements, and how rent is calculated as the project scales.",
      "Each item includes a plain-language explanation of why it matters and a suggested question to ask the developer.",
    ],
  },
  {
    slug: "inherited-minerals-first-90-days",
    title: "Inherited Minerals: First 90 Days",
    type: "book",
    tracks: ["oil-gas"],
    price: 24,
    shortDescription:
      "A short, orienting guide for heirs who've just inherited mineral rights and don't know where to start.",
    longDescription: [
      "Inheriting mineral rights often comes with more questions than paperwork. This short guide walks through the first 90 days: locating documents, understanding what you actually own, identifying other heirs, checking for an existing lease, and recognizing when you're being rushed by a buyer or landman before you've had time to get oriented.",
      "Written to be read in one sitting, with a checklist at the end you can use to track your own progress.",
    ],
  },
  {
    slug: "red-flags-checklist-all-tracks",
    title: "Red Flags Checklist: Oil & Gas, Data Centers & Solar",
    type: "pdf-checklist",
    tracks: ["oil-gas", "data-centers", "solar"],
    price: 19,
    shortDescription:
      "One checklist covering the red flags that show up across all three tracks — for owners juggling more than one kind of offer.",
    longDescription: [
      "Some landowners are dealing with more than one kind of offer at once — a mineral lease and a solar option, or a data center inquiry alongside an existing oil & gas lease. This checklist pulls together the red flags that show up across all three: artificial urgency, vague or missing terms, verbal promises that never make it into writing, and pressure to sign before you've had outside input.",
      "Use it as a first pass on any offer, then go deeper with the track-specific checklist that matches your situation.",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
