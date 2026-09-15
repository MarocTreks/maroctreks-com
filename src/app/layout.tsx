import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { DEFAULT_DESCRIPTION, JsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Trekking au Maroc avec guide local | Maroc Treks", template: "%s | Maroc Treks" },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "travel",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
      "fr-BE": "/",
      "fr-CH": "/",
    },
  },
  openGraph: { type: "website", locale: "fr_FR", url: SITE_URL, siteName: SITE_NAME, title: "Trekking au Maroc avec guide local | Maroc Treks", description: DEFAULT_DESCRIPTION },
  twitter: { card: "summary_large_image", title: "Trekking au Maroc avec guide local | Maroc Treks", description: DEFAULT_DESCRIPTION },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "TravelAgency"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo-mark.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/logo.png`,
    email: "tadrartmed@gmail.com",
    telephone: "+212667591933",
    description: DEFAULT_DESCRIPTION,
    founder: { "@type": "Person", name: "Mohamed Ait Tadrart" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Douar Armed, Imlil",
      addressLocality: "Asni",
      addressRegion: "Marrakech-Safi",
      postalCode: "42152",
      addressCountry: "MA",
    },
    areaServed: { "@type": "Country", name: "Maroc" },
    contactPoint: { "@type": "ContactPoint", telephone: "+212667591933", email: "tadrartmed@gmail.com", contactType: "reservations", availableLanguage: ["fr", "en", "es", "nl"] },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "5",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Fabienne Joveneau" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody: "I'm incredibly lucky to have already done six treks with Mohamed and his team. It's pure bliss, nothing but kindness. Complete safety. Paradise-like landscapes.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Eve Tondeur" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody: "I've done six treks with Mohammed over the past twenty years (Jebel Sahro, Jebel Siroua, the desert and Merzouga, Mgoun, along the coast, and Toubkal), and I can attest to his professionalism.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Marie Christine Wall" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody: "A week-long trip with CAFGI in June 2025. Delicious food, efficient muleteers. Mohamed, the guide, set a steady and rather slow pace which allowed the entire group to reach the summit of Toubkal without difficulty.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Gorete Matias" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody: "Mohamed and his team are excellent professionals. The entire trek to Toubkal was superbly organized. A memorable experience!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Luisa Piccinini" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody: "Went on a trek two years ago with a CAF group. Great experience. Thanks to the whole team. Luisa",
      },
    ],
  };
  const website = {
    "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE_URL}/#website`,
    url: SITE_URL, name: SITE_NAME, inLanguage: "fr-FR", publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-brand-sand text-brand-slate">
        <JsonLd data={[organization, website]} />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
