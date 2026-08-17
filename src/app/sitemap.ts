import type { MetadataRoute } from "next";
import { siteConfig, tracks } from "@/lib/site";
import { products } from "@/lib/products";
import { articles } from "@/lib/articles";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/how-it-works",
  "/education",
  "/shop",
  "/privacy-policy",
  "/terms-of-use",
  "/intake/oil-gas-mineral-owner",
  "/intake/oil-gas-surface-owner",
  "/intake/data-center",
  "/intake/solar",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteConfig.domain}`;

  const trackRoutes = tracks.flatMap((t) => [t.href, ...(t.children?.map((c) => c.href) ?? [])]);
  const productRoutes = products.map((p) => `/shop/${p.slug}`);
  const articleRoutes = articles.map((a) => `/education/${a.slug}`);

  const routes = [...staticRoutes, ...trackRoutes, ...productRoutes, ...articleRoutes];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
