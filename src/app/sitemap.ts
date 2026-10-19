import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { tourCategories, tours } from "@/lib/tours";
import { blogPosts } from "@/lib/blog-posts";

const routes = [
  "",
  "/circuits",
  "/treks-courts-maroc",
  ...tourCategories.map((category) => category.path),
  ...tours.map((tour) => tour.path),
  "/excursions",
  "/informations-pratiques",
  "/qui-sommes-nous",
  "/contact",
  "/mentions-legales",
  "/politique-confidentialite",
  "/conditions-reservation",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const imagesByPath = new Map<string, string>([
    ["", `${SITE_URL}/opengraph-image`],
    ...tourCategories.map((category) => [category.path, category.image] as [string, string]),
    ...tours.map((tour) => [tour.path, tour.image] as [string, string]),
  ]);
  const sitePages = [...new Set(routes)].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "" || path === "/blog" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : path === "/blog" || tourCategories.some((category) => category.path === path) ? 0.8 : 0.7,
    ...(imagesByPath.has(path) ? { images: [imagesByPath.get(path)!] } : {}),
  }));
  const articles = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [post.image],
  }));

  return [...sitePages, ...articles];
}
