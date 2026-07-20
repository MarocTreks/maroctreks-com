import TrekDetailLayout, { ItineraryDay } from "@/components/TrekDetailLayout";

export default function MoyenAtlasTrek() {
  const highlights = [
    "Randonnée sous l'ombre des cèdres géants de la forêt d'Azrou",
    "Observation des célèbres Macaques de Barbarie (singes Magots) dans leur habitat naturel",
    "Découverte des magnifiques lacs volcaniques (Dayas) comme le lac d'Afennourir",
    "Visite des grandioses sources de l'Oum Er-Rbia (40 sources chaudes et froides)",
    "Climat frais et ressourçant idéal en période estivale",
  ];

  const itinerary: ItineraryDay[] = [
    {
      day: 1,
      title: "Marrakech - Azrou - Forêt de Cèdres (1650 m)",
      description: "Transfert routier vers le Moyen Atlas en direction d'Azrou. Nous traversons des paysages vallonnés avant de pénétrer dans le Parc National d'Ifrane. Rencontre avec nos accompagnateurs et première marche tranquille sous les cèdres séculaires. Installation du campement en lisière de forêt.",
    },
    {
      day: 2,
      title: "Forêt d'Azrou - Lac d'Afennourir (2000 m)",
      description: "Nous grimpons doucement sur le plateau karstique du Moyen Atlas. Nous marchons à travers une forêt dense de cèdres et de chênes verts pour atteindre la réserve biologique du lac d'Afennourir, une vaste zone humide accueillant de nombreux oiseaux migrateurs. Bivouac au bord du lac. Marche : environ 5 heures. Dénivelé : +350 m.",
    },
    {
      day: 3,
      title: "Lac d'Afennourir - Sources de l'Oum Er-Rbia (1300 m)",
      description: "Une journée magnifique vers les sources du plus long fleuve du Maroc. Nous descendons à travers des pâturages d'altitude et des villages de bergers semi-nomades. Nous arrivons aux célèbres 40 sources de l'Oum Er-Rbia, jaillissant de falaises spectaculaires de calcaire et de gypse. Nuit en gîte local ou bivouac près de la rivière. Marche : environ 6 heures.",
    },
    {
      day: 4,
      title: "Sources de l'Oum Er-Rbia - Khénifra - Marrakech",
      description: "Dernière matinée de balade le long des cascades des sources. Nous partageons un thé chez l'habitant avant de prendre le véhicule de retour vers Marrakech. Arrivée en fin de journée.",
    },
  ];

  const included = [
    "Transfert aller-retour de Marrakech en minibus ou 4x4 privé.",
    "Services de l'équipe locale de guides de randonnée et muletiers.",
    "Hébergement en bivouac sous tente ou en gîte local authentique.",
    "Pension complète savoureuse préparée par notre cuisinier.",
  ];

  const notIncluded = [
    "Boissons embouteillées et extras personnels.",
    "Équipement de randonnée individuel.",
    "Assurance personnelle obligatoire.",
    "Pourboires.",
  ];

  return (
    <TrekDetailLayout
      title="Randonnée au Moyen Atlas"
      subtitle="Forêts de cèdres géants, lacs volcaniques et sources de l'Oum Er-Rbia"
      bannerImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200"
      duration="4 Jours"
      difficulty="Facile"
      maxAltitude="2 000 m"
      bestSeason="Avril à Octobre"
      description={`Le Moyen Atlas est souvent appelé la 'Suisse marocaine' en raison de ses lacs glaciaires, ses forêts denses de cèdres de l'Atlas et son climat tempéré. C'est une randonnée douce, idéale pour les amoureux de faune sauvage et de grands plateaux forestiers rafraîchissants.`}
      highlights={highlights}
      itinerary={itinerary}
      included={included}
      notIncluded={notIncluded}
    />
  );
}
