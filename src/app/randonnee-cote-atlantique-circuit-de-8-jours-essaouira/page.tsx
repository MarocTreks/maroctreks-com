import TrekDetailLayout, { ItineraryDay } from "@/components/TrekDetailLayout";

export default function CoteAtlantiqueTrek() {
  const highlights = [
    "Une caravane de dromadaires pour porter vos bagages au rythme de l'océan",
    "Bivouacs magiques posés sur le sable, au creux des dunes face à l'Atlantique",
    "Découverte du village de pêcheurs d'Imsouane et de la plage des surfeurs de Sidi Kaouki",
    "Visite guidée de la médina fortifiée d'Essaouira (ancienne Mogador)",
    "Traversée des forêts d'arganiers sauvages où grimpent les chèvres",
  ];

  const itinerary: ItineraryDay[] = [
    {
      day: 1,
      title: "Marrakech - Essaouira - Imsouane",
      description: "Départ de Marrakech en direction de l'océan. Nous longeons la côte vers le sud pour atteindre le petit port de pêche d'Imsouane. Rencontre avec nos chameliers, chargement du matériel sur les dromadaires et première nuit de bivouac en bord de mer.",
    },
    {
      day: 2,
      title: "Imsouane - Plage de Tafedna",
      description: "Nous marchons le long des falaises côtières dominant l'océan, offrant des points de vue splendides sur l'infini bleu. Nous traversons des plateaux plantés d'arganiers avant de descendre sur la magnifique plage de Tafedna. Bivouac dans les dunes. Marche : environ 5 heures.",
    },
    {
      day: 3,
      title: "Tafedna - Sidi M'barek",
      description: "Nous continuons notre périple côtier. Passage par des villages de pêcheurs traditionnels et de belles criques de sable. Nous arrivons à Sidi M'barek, célèbre pour ses cascades côtières se jetant directement sur la plage près d'un ancien marabout. Bivouac. Marche : environ 5h30.",
    },
    {
      day: 4,
      title: "Sidi M'barek - Sidi Kaouki",
      description: "Marche le long des grandes plages de sable fin. L'air marin est vivifiant. Nous arrivons à Sidi Kaouki, spot mondialement connu pour le surf et le kitesurf. Nuit sous tente ou en auberge locale au coucher du soleil. Marche : environ 4h30.",
    },
    {
      day: 5,
      title: "Sidi Kaouki - Cap Sim - Essaouira",
      description: "Dernière étape de marche. Nous franchissons le Cap Sim avec ses dunes de sable blanc spectaculaires sculptées par le vent. Arrivée à Essaouira, transfert à l'hôtel dans la médina historique. Fin de la randonnée avec les dromadaires. Marche : environ 4 heures.",
    },
    {
      day: 6,
      title: "Essaouira (Journée Libre)",
      description: "Journée consacrée à la découverte d'Essaouira : ses remparts maritimes construits par des architectes français, son port de pêche actif, ses ateliers de sculpture sur bois de thuya et sa médina calme et artistique. Repas libres. Nuit à l'hôtel.",
    },
    {
      day: 7,
      title: "Essaouira - Marrakech",
      description: "Matinée libre à Essaouira pour vos derniers achats ou balades. L'après-midi, transfert retour vers Marrakech. Installation à l'hôtel et soirée libre.",
    },
    {
      day: 8,
      title: "Marrakech (Départ)",
      description: "Transfert vers l'aéroport de Marrakech selon vos horaires de vol. Fin de nos services.",
    },
  ];

  const included = [
    "Tous les transferts en véhicule privé climatisé.",
    "Hébergement : 3 nuits d'hôtel/riad (Essaouira, Marrakech) et 4 nuits en bivouac.",
    "Services de l'équipe locale chamelière et du guide certifié.",
    "Dromadaires de portage (bagages et logistique campement).",
    "Pension complète durant le trek (repas libres à Marrakech et Essaouira).",
  ];

  const notIncluded = [
    "Repas de midi et du soir à Marrakech et Essaouira.",
    "Boissons et dépenses personnelles.",
    "Assurance assistance rapatriement.",
    "Pourboires pour l'équipe locale.",
  ];

  return (
    <TrekDetailLayout
      title="La Côte Atlantique d'Essaouira"
      subtitle="Une randonnée caravanière de 8 jours au grand air marin"
      bannerImage="https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=1200"
      duration="8 Jours"
      difficulty="Facile"
      maxAltitude="150 m"
      bestSeason="Toute l'année (Idéal au printemps/été)"
      description={`Longez les plages sauvages de l'Atlantique au rythme lent d'une caravane de dromadaires. Ce circuit allie la douceur du climat marin, l'authenticité des villages berbères côtiers du sud d'Essaouira, et la visite de la sublime ville fortifiée d'Essaouira.`}
      highlights={highlights}
      itinerary={itinerary}
      included={included}
      notIncluded={notIncluded}
    />
  );
}
