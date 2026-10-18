import LegalPage from "@/components/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Conditions de réservation des treks",
  description: "Cadre de réservation, devis, paiement, annulation, assurance et adaptation des treks organisés par Maroc Treks.",
  path: "/conditions-reservation",
});

export default function BookingTermsPage() {
  return <LegalPage eyebrow="Réserver en confiance" title="Conditions de réservation" introduction="Chaque voyage est préparé sur mesure. Le devis écrit envoyé avant confirmation précise les prestations et conditions applicables à votre groupe." sections={[
    { title: "Programme et devis", content: <p>Une demande envoyée depuis le site ne constitue pas une réservation. Maroc Treks confirme par écrit les dates, le programme, le nombre de participants, le prix, les prestations incluses et les modalités de paiement avant tout engagement.</p> },
    { title: "Confirmation", content: <p>La réservation devient effective selon les modalités indiquées dans le devis personnel. Ne réservez pas de transport non modifiable avant d’avoir reçu la confirmation écrite de disponibilité.</p> },
    { title: "Modification ou annulation", content: <p>Les conditions de modification, d’annulation et de remboursement dépendent du voyage, de la proximité du départ et des frais déjà engagés auprès des hébergements, transporteurs et équipes locales. Elles sont communiquées dans le devis avant confirmation.</p> },
    { title: "Sécurité et adaptation du programme", content: <p>Le guide peut adapter une étape, un horaire ou un itinéraire lorsque la météo, l’enneigement, l’état du terrain, la santé d’un participant ou une contrainte locale l’exige. La sécurité du groupe prime sur l’objectif sportif ou le programme initial.</p> },
    { title: "Assurance et aptitude", content: <p>Chaque participant doit disposer d’une assurance adaptée couvrant au minimum les soins, l’assistance, le rapatriement et, pour les itinéraires concernés, la recherche et le secours en montagne jusqu’à l’altitude prévue. Il appartient au voyageur de vérifier que le niveau annoncé correspond à sa condition physique.</p> },
    { title: "Documents de voyage", content: <p>Chaque voyageur reste responsable de son passeport, de ses formalités d’entrée au Maroc et des recommandations de santé correspondant à sa situation. Les exigences doivent être vérifiées auprès des autorités compétentes avant le départ.</p> },
  ]} />;
}
