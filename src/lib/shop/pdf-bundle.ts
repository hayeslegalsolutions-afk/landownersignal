import { PDFDocument } from "pdf-lib";
import { readFile } from "fs/promises";
import path from "path";
import type { FulfillmentItem } from "@/lib/shop/types";

// Source PDFs live outside `public/` so they are never web-servable on their
// own — the only way to reach them is through the paid-and-verified download
// route, which merges the purchased set into one file per order.
const SOURCE_DIR = path.join(process.cwd(), "private", "downloads");

/** Merges every purchased PDF checklist into a single downloadable file for the order. */
export async function buildChecklistBundle(pdfItems: FulfillmentItem[]): Promise<Uint8Array> {
  const bundle = await PDFDocument.create();

  for (const item of pdfItems) {
    const filePath = path.join(SOURCE_DIR, `${item.product.slug}.pdf`);
    const bytes = await readFile(filePath);
    const source = await PDFDocument.load(bytes);
    const pages = await bundle.copyPages(source, source.getPageIndices());
    pages.forEach((page) => bundle.addPage(page));
  }

  return bundle.save();
}
