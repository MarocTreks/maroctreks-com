import LegalPage from "@/components/LegalPage";
import { BUSINESS_EMAIL } from "@/lib/business";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Politique de confidentialité",
  description: "Comment Maroc Treks traite les informations envoyées lors d’une demande de trek ou de devis.",
  path: "/politique-confidentialite",
});

export default function PrivacyPage() {
  return <LegalPage eyebrow="Vos informations" title="Politique de confidentialité" introduction="Nous limitons la collecte d’informations à ce qui est nécessaire pour comprendre et organiser votre projet de voyage." sections={[
    { title: "Informations que vous choisissez d’envoyer", content: <p>Le formulaire prépare un message dans votre propre logiciel de messagerie. Il peut contenir votre nom, votre email, votre téléphone, les dates, la taille du groupe, le circuit souhaité et votre message. Le site ne stocke pas directement ce formulaire dans une base de données.</p> },
    { title: "Utilisation", content: <p>Ces informations servent uniquement à répondre à votre demande, préparer un itinéraire, établir un devis et assurer le suivi d’un voyage réservé. Elles ne sont pas vendues à des tiers.</p> },
    { title: "Services externes", content: <p>Le site utilise des services techniques indispensables, notamment Vercel pour l’hébergement, Cloudinary pour certaines images et Google Translate uniquement lorsqu’un visiteur demande une traduction automatique. Les liens vers WhatsApp, Google Maps et Tripadvisor ouvrent les services concernés, soumis à leurs propres politiques.</p> },
    { title: "Durée et sécurité", content: <p>Les échanges sont conservés pendant la durée utile au traitement de la demande et aux obligations liées à une réservation. Évitez d’envoyer par email des données médicales détaillées, des copies de passeport ou des informations bancaires sans avoir convenu d’un moyen adapté.</p> },
    { title: "Vos demandes", content: <p>Pour demander l’accès, la correction ou la suppression d’informations communiquées à Maroc Treks, écrivez à <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>.</p> },
  ]} />;
}
