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
  /**
   * Source PDF filenames, resolved against private/downloads/<slug>/<file>.
   * Omit for a single-file product backed by private/downloads/<slug>.pdf.
   */
  files?: string[];
};

const dataCenterKitFiles = [
  "01_Data_Center_First_Call_Checklist_Fillable.pdf",
  "02_Data_Center_Deal_Readiness_Checklist_Fillable.pdf",
  "03_Data_Center_Developer_Contact_Record_Fillable.pdf",
  "04_Data_Center_Due_Diligence_Entry_Log_Fillable.pdf",
  "05_Data_Center_Proposal_Comparison_Fillable.pdf",
];

const solarKitFiles = [
  "S01_Solar_First_Call_Checklist_Fillable.pdf",
  "S02_Solar_Lease_Term_Sheet_Decoder_Fillable.pdf",
  "S03_Solar_Site_and_Operations_Questions_Fillable.pdf",
  "S04_Solar_Compensation_and_Escalator_Worksheet_Fillable.pdf",
];

const longTermLandLeaseFiles = [
  "LTL01_Master_Agreement_and_Project_Register_Fillable.pdf",
  "LTL02_Agreement_Overlap_and_Conflict_Matrix_Fillable.pdf",
  "LTL03_Critical_Dates_Notice_and_Renewal_Calendar_Fillable.pdf",
  "LTL04_Payment_Escalator_and_Reconciliation_Tracker_Fillable.pdf",
  "LTL05_Continuing_Obligations_and_Compliance_Tracker_Fillable.pdf",
  "LTL06_Assignment_Lender_and_Ownership_Change_Log_Fillable.pdf",
  "LTL07_End_of_Term_Decommissioning_and_Release_Tracker_Fillable.pdf",
  "LTL08_Annual_Lease_File_Audit_Checklist_Fillable.pdf",
];

export const products: Product[] = [
  {
    slug: "data-center-landowner-starter-kit",
    title: "Data Center Landowner Starter Kit",
    type: "pdf-checklist",
    tracks: ["data-centers"],
    price: 49,
    files: dataCenterKitFiles,
    shortDescription:
      "Five fillable worksheets covering the first call through comparing competing proposals from data center developers.",
    longDescription: [
      "Data center land deals move through more paperwork, more advisers, and more zeros than most landowners are used to. This kit gives you a fillable worksheet for each stage: a first-call checklist to capture what was actually said before it becomes negotiation, a 10-point deal-readiness checklist to run before things get document-driven, a contact record for tracking every caller and company involved, a due-diligence entry log for site visits and testing, and a side-by-side proposal comparison sheet for when more than one offer is on the table.",
      "Print them, fill them in as calls and paperwork arrive, and bring them to the professionals you eventually bring in — every worksheet ends with a place to note open questions for legal, tax, appraisal, or engineering review.",
    ],
  },
  {
    slug: "solar-lease-landowner-starter-kit",
    title: "Solar Lease Landowner Starter Kit",
    type: "pdf-checklist",
    tracks: ["solar"],
    price: 39,
    files: solarKitFiles,
    shortDescription:
      "Four fillable worksheets for the first call, decoding a term sheet, site questions, and the compensation math behind a solar lease.",
    longDescription: [
      "Solar leases run 20 to 50+ years once renewals are counted, so the terms worth catching early are the ones that compound. This kit includes a first-call checklist for capturing what a developer actually says, a term sheet decoder that turns a short proposal into the questions that control the deal (site control, operating lease terms, additional rights, and end-of-project decommissioning), a site-and-operations worksheet, and a compensation and escalator worksheet built to separate option money, operating rent, other payment streams, and long-term value from each other.",
      "Each worksheet is built to be filled in as the deal develops, with a place to record what the proposal actually says instead of what was promised verbally.",
    ],
  },
  {
    slug: "long-term-land-lease-portfolio",
    title: "Long Term Land Lease Portfolio",
    type: "pdf-checklist",
    tracks: ["oil-gas", "data-centers", "solar"],
    price: 89,
    files: longTermLandLeaseFiles,
    shortDescription:
      "Eight fillable worksheets for landowners tracking multiple long-term agreements — leases, easements, options, and mineral activity — over years or decades.",
    longDescription: [
      "Some landowners aren't managing one deal — they're managing a portfolio: a mineral lease from a decade ago, a new easement, an option that's about to renew. This kit is built for the years after signing, not the weeks before it. It includes a master agreement and project register to track every long-term document affecting the property, an overlap and conflict matrix for spotting where agreements collide, a critical-dates calendar for renewals and notice deadlines, a payment and escalator reconciliation tracker, a compliance tracker for ongoing obligations, an assignment and ownership-change log, an end-of-term decommissioning tracker, and a 10-point annual lease file audit checklist.",
      "Applies across oil & gas, data center, and solar agreements alike — anywhere a long-term document needs to stay organized long after the ink dries.",
    ],
  },
  {
    slug: "complete-landownersignal-form-library",
    title: "Complete LandownerSignal Form Library",
    type: "pdf-checklist",
    tracks: ["oil-gas", "data-centers", "solar"],
    price: 129,
    files: [...dataCenterKitFiles, ...solarKitFiles, ...longTermLandLeaseFiles],
    shortDescription:
      "All 17 worksheets from the Data Center, Solar, and Long Term Land Lease kits in one bundle — for owners fielding more than one kind of offer.",
    longDescription: [
      "The complete set: every worksheet from the Data Center Landowner Starter Kit, the Solar Lease Landowner Starter Kit, and the Long Term Land Lease Portfolio, bundled together. Built for owners who are fielding more than one kind of offer at once, managing a mix of agreements over time, or who would simply rather buy the full library once than piece it together kit by kit.",
      "Priced below buying all three kits separately.",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
