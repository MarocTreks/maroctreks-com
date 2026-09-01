import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomepagePremiumContent from "@/components/HomepagePremiumContent";
import { createMetadata, JsonLd, SITE_URL } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Trekking au Maroc avec guide local",
  description: "Treks privés au Maroc avec Mohamed Ait Tadrart, guide local : Toubkal, M’Goun, Atlas, Sahara et circuits sur mesure adaptés à votre niveau.",
  path: "/",
});

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Trekking au Maroc avec guide local",
    description:
      "Treks guidés dans l’Atlas, ascension du Toubkal, massif du M’Goun et randonnées dans le désert marocain.",
    inLanguage: "fr-FR",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/opengraph-image`,
    },
  };

  return (
    <>
      <JsonLd data={homePageSchema} />
      <Navbar />
      <HomepagePremiumContent />
      <Footer />
    </>
  );
}
