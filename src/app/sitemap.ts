import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { tourCategories, tours } from "@/lib/tours";

const routes = [
  "",
  "/circuits",
  ...tourCategories.map((category) => category.path),
  ...tours.map((tour) => tour.path),
  "/excursions",
  "/informations-pratiques",
  "/qui-sommes-nous",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...new Set(routes)].map((path, index) => ({
    url: `${SITE_URL}${path}`,
    priority: index === 0 ? 1 : index < 8 ? 0.8 : 0.6,
  }));
}
