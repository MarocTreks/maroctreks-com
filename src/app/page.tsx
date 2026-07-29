import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomepagePremiumContent from "@/components/HomepagePremiumContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Trekking au Maroc avec guide local | Maroc Treks",
  description: "Explorez le Toubkal, le M’Goun, l’Atlas et le Sahara avec Mohamed Ait Tadrart, guide local. Treks authentiques et circuits sur mesure au Maroc.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <HomepagePremiumContent />
      <Footer />
    </>
  );
}
