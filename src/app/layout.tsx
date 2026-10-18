import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { DEFAULT_DESCRIPTION, JsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BUSINESS_EMAIL, BUSINESS_NAME, BUSINESS_OWNER, BUSINESS_PHONE_E164, GOOGLE_MAPS_URL, TRIPADVISOR_URL } from "@/lib/business";

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
  },
  openGraph: { type: "website", locale: "fr_FR", url: SITE_URL, siteName: SITE_NAME, title: "Trekking au Maroc avec guide local | Maroc Treks", description: DEFAULT_DESCRIPTION },
  twitter: { card: "summary_large_image", title: "Trekking au Maroc avec guide local | Maroc Treks", description: DEFAULT_DESCRIPTION },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "TravelAgency"],
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo-mark.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/logo.png`,
    email: BUSINESS_EMAIL,
    telephone: BUSINESS_PHONE_E164,
    description: DEFAULT_DESCRIPTION,
    founder: { "@id": `${SITE_URL}/qui-sommes-nous#person` },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Douar Armed, Imlil",
      addressLocality: "Asni",
      addressRegion: "Marrakech-Safi",
      postalCode: "42152",
      addressCountry: "MA",
    },
    areaServed: { "@type": "Country", name: "Maroc" },
    contactPoint: { "@type": "ContactPoint", telephone: BUSINESS_PHONE_E164, email: BUSINESS_EMAIL, contactType: "reservations", availableLanguage: ["fr", "en", "es", "nl"] },
    sameAs: [GOOGLE_MAPS_URL, TRIPADVISOR_URL],
  };
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/qui-sommes-nous#person`,
    name: BUSINESS_OWNER,
    url: `${SITE_URL}/qui-sommes-nous`,
    jobTitle: "Guide de montagne diplômé",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    knowsAbout: ["Trekking au Maroc", "Haut Atlas", "Toubkal", "M'Goun", "Sahara marocain"],
  };
  const website = {
    "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE_URL}/#website`,
    url: SITE_URL, name: SITE_NAME, alternateName: ["MarocTreks", "maroctreks.com"], inLanguage: "fr-FR", publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <html
      lang="fr"
      translate="no"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} notranslate h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-brand-sand text-brand-slate">
        <JsonLd data={[organization, person, website]} />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
