import TrekDetailLayout, { ItineraryDay } from "@/components/TrekDetailLayout";

export default function GrandeTraverseeTrek() {
  const highlights = [
    "L'ascension combinée des deux plus hauts sommets du Maroc : M'Goun (4068m) et Toubkal (4167m)",
    "Traversée intégrale des vallées préservées de l'Atlas (Bougmez, Tessaout, Ounila)",
    "Bivouacs sauvages au bord du lac glaciaire d'Ifni (2299m), unique lac d'altitude",
    "Une aventure humaine exceptionnelle en compagnie d'une équipe de guides et muletiers fidèles",
    "Une déconnexion totale de 3 semaines au rythme de la marche et de la montagne",
  ];

  const itinerary: ItineraryDay[] = [
    {
      day: 1,
      title: "Marrakech - Vallée de l'Aït Bougmez (Aït Ziri)",
      description: "Transfert depuis Marrakech vers le point de départ dans la Vallée Heureuse. Dîner et nuit en gîte chez l'habitant pour faire connaissance avec l'équipe de muletiers.",
    },
    {
      day: 2,
      title: "Ascension du Jbel M'Goun (4068 m) et descente vers Oulilimt",
      description: "Première grande étape montagnarde de notre périple. Nous franchissons les cols et la crête du M'Goun, dominant la barrière calcaire centrale de l'Atlas. Bivouac près des sources d'Oulilimt.",
    },
    {
      day: 6,
      title: "Traversée de la Vallée de la Tessaout",
      description: "Nous entrons dans la magnifique et secrète vallée de la Tessaout. Ici, les villages de terre rouge sont restés intacts, les bergers vivent au rythme des saisons. Nous marchons de village en village en installant nos bivouacs au bord de la rivière.",
    },
    {
      day: 12,
      title: "Passage par le Lac glaciaire d'Ifni (2299 m)",
      description: "Nous entamons la marche d'approche vers le Toubkal. Nous franchissons des cols minéraux pour atteindre les rives sauvages du lac d'Ifni, coincé entre d'immenses falaises de roches volcaniques. Nuit magique en bivouac au bord de l'eau.",
    },
    {
      day: 18,
      title: "Ascension du Mont Toubkal (4167 m) et retour à Marrakech",
      description: "Sommet final de notre grande traversée. Nous quittons le refuge à l'aube pour atteindre le toit de l'Afrique du Nord. Redescente victorieuse vers Imlil puis transfert retour vers Marrakech pour une douche bien méritée et une soirée de fête. Nuit à l'hôtel.",
    },
  ];

  const included = [
    "Tous les transferts routiers nécessaires au projet de trek.",
    "Hébergement en riad à Marrakech (2 nuits), gîtes d'étape (3 nuits) et bivouac de montagne (16 nuits).",
    "Logistique complète de campement haut de gamme pour 3 semaines.",
    "Mules de portage et équipe locale complète (guides, cuisiniers, muletiers).",
    "Pension complète durant tout le trek.",
  ];

  const notIncluded = [
    "Assurance assistance rapatriement spécifique haute montagne obligatoire.",
    "Matériel de randonnée individuel et duvet grand froid.",
    "Repas de midi et soir à Marrakech.",
    "Boissons et pourboires pour l'équipe (compter un budget adapté pour 22 jours).",
  ];

  return (
    <TrekDetailLayout
      title="Grande Traversée de l'Atlas"
      subtitle="La grande aventure de 22 jours d'Est en Ouest à travers les géants marocains"
      bannerImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200"
      duration="22 Jours"
      difficulty="Extrême"
      maxAltitude="4 167 m"
      bestSeason="Juin à Septembre"
      description={`Ce circuit d'envergure est le voyage d'une vie pour tout trekkeur passionné. Reliant les deux plus hauts massifs montagneux du pays, cette traversée vous confrontera aux éléments, à l'altitude et à la beauté pure des paysages sauvages et secrets de l'Atlas central.`}
      highlights={highlights}
      itinerary={itinerary}
      included={included}
      notIncluded={notIncluded}
    />
  );
}
