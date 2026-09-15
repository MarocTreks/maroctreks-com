import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomepagePremiumContent from "@/components/HomepagePremiumContent";
import { createMetadata, JsonLd, SITE_URL } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Trek au Maroc avec Guide Local Diplômé | Atlas & Sahara",
  description:
    "Organisez votre trek au Maroc en direct avec Mohamed, guide certifié à Imlil : Toubkal, M'Goun, Sahara. Circuits sur mesure sans intermédiaire. Devis gratuit !",
  path: "/",
});

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Trek au Maroc avec Guide Local Diplômé",
    description:
      "Treks privés et randonnées accompagnées dans le Haut Atlas, ascension du Toubkal (4 167 m), massif du M’Goun et désert du Sahara.",
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
