import LegalPage from "@/components/LegalPage";
import { BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_NAME, BUSINESS_OWNER, BUSINESS_PHONE_DISPLAY } from "@/lib/business";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Mentions légales",
  description: "Identité, coordonnées, hébergement et responsabilité éditoriale du site officiel Maroc Treks.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return <LegalPage eyebrow="Informations officielles" title="Mentions légales" introduction="Les informations essentielles sur l’éditeur et le fonctionnement du site officiel Maroc Treks." sections={[
    { title: "Éditeur du site", content: <><p><strong>{BUSINESS_NAME}</strong> est l’activité de trekking et d’accompagnement présentée par {BUSINESS_OWNER}, guide de montagne basé à Armed, dans la vallée d’Imlil.</p><ul><li>Adresse : {BUSINESS_ADDRESS}</li><li>Téléphone : <a href={`tel:${BUSINESS_PHONE_DISPLAY.replaceAll(" ", "")}`}>{BUSINESS_PHONE_DISPLAY}</a></li><li>Email : <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a></li></ul></> },
    { title: "Site officiel et nom historique", content: <p>Le présent site, <strong>www.maroctreks.com</strong>, est le site officiel actuel. Certaines archives de voyages plus anciennes peuvent mentionner Mohamed Ait Tadrart sous l’ancien domaine singulier <strong>maroctrek.com</strong>. Ce domaine historique n’est pas le domaine officiel actuel.</p> },
    { title: "Hébergement", content: <p>Le site est hébergé sur l’infrastructure de Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.</p> },
    { title: "Contenu et propriété intellectuelle", content: <p>Les textes, photographies, itinéraires, logos et éléments graphiques propres à Maroc Treks ne peuvent pas être reproduits à des fins commerciales sans autorisation écrite. Les marques et contenus appartenant à des tiers restent la propriété de leurs titulaires.</p> },
    { title: "Exactitude des informations", content: <p>Les itinéraires, durées et conditions présentés décrivent des programmes indicatifs. En montagne et dans le désert, la météo, l’état du terrain, les capacités du groupe ou les contraintes locales peuvent nécessiter une adaptation par le guide.</p> },
  ]} />;
}
