import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { tourCategories, tours } from "@/lib/tours";
import { blogPosts } from "@/lib/blog-posts";

const routes = [
  "",
  "/circuits",
  ...tourCategories.map((category) => category.path),
  ...tours.map((tour) => tour.path),
  "/excursions",
  "/informations-pratiques",
  "/qui-sommes-nous",
  "/contact",
  "/blog",
  ...blogPosts.map((post) => `/blog/${post.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...new Set(routes)].map((path, index) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: index === 0 ? "weekly" : index < 8 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : index < 8 ? 0.8 : 0.6,
  }));
}
