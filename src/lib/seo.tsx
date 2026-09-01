import type { Metadata } from "next";

export const SITE_URL = "https://www.maroctreks.com";
export const SITE_NAME = "Maroc Treks";
export const DEFAULT_DESCRIPTION =
  "Treks privés au Maroc avec guide local : Toubkal, M’Goun, Haut Atlas, Anti-Atlas, Sahara et circuits sur mesure adaptés à votre niveau.";

type PageMetadata = { title: string; description: string; path: string; image?: string };

export function createMetadata({ title, description, path, image = "/opengraph-image" }: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: SITE_NAME,
      title,
      description,
      url: new URL(path, SITE_URL).toString(),
      images: [{ url: image, width: 1200, height: 630, alt: `${title} | ${SITE_NAME}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
