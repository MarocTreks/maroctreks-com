import TrekDetailLayout, { ItineraryDay } from "@/components/TrekDetailLayout";

export default function MgounTrek() {
  const highlights = [
    "Ascension du Jbel M'Goun (4 068 m), le deuxième plus haut sommet du Maroc",
    "Découverte de la 'Vallée Heureuse' des Aït Bougmez et ses cultures en terrasse",
    "Nuitées sous tente sur le magnifique plateau pastoral de Tarkeddite",
    "Randonnée aquatique ludique dans les spectaculaires gorges du M'Goun",
    "Une immersion totale au cœur du pays berbère le plus sauvage",
  ];

  const itinerary: ItineraryDay[] = [
    {
      day: 1,
      title: "Marrakech - Azilal - Vallée heureuse d'Aït Bougmez (1800 m)",
      description: "Transfert depuis Marrakech vers le cœur de l'Atlas. Nous traversons de superbes paysages agricoles en passant par Azilal avant de plonger dans la sublime vallée des Aït Bougmez. Installation dans un gîte traditionnel berbère, accueil chaleureux avec le thé traditionnel et découverte des villages environnants.",
    },
    {
      day: 2,
      title: "Aït Bougmez - Bergeries d'Arouss (2250 m)",
      description: "Début de notre randonnée. Nous rencontrons notre équipe de portage. La montée débute doucement le long des rivières et des cultures, pour entrer dans les gorges d'Arouss. Nous installons notre premier bivouac à proximité des bergeries traditionnelles. Marche : environ 3h30. Dénivelé : +450 m.",
    },
    {
      day: 3,
      title: "Bergeries d'Arouss - Col d'Aghouri (3400 m) - Plateau de Tarkeddite (2900 m)",
      description: "Une journée de montée soutenue vers le col d'Aghouri. Le paysage devient minéral et grandiose. Du col, la vue sur la crête du M'Goun est saisissante. Nous descendons ensuite vers le vaste plateau de Tarkeddite où les nomades font paître leurs troupeaux en été. Installation du bivouac. Marche : environ 5h30. Dénivelé : +1150 m, -500 m.",
    },
    {
      day: 4,
      title: "Ascension du Jbel M'Goun (4068 m) - Source d'Oulilimt (2600 m)",
      description: "Le grand jour. Départ matinal pour l'ascension. Nous montons progressivement pour atteindre la longue crête calcaire du M'Goun. Marcher sur cette crête à 4000m d'altitude offre un panorama inoubliable sur le Sud marocain. Descente vers la haute vallée d'Oulilimt et bivouac près des sources. Randonnée éprouvante mais fantastique. Marche : environ 7h30. Dénivelé : +1160 m, -1460 m.",
    },
    {
      day: 5,
      title: "Oulilimt - Gorges de l'Aït Bougmez - Aït Ziri (1800 m)",
      description: "Nous entamons le retour en longeant la rivière bordée d'étranges cheminées de fées de terre rouge. Nous remontons doucement vers le col avant de redescendre dans la vallée heureuse. Nuit en gîte confortable à Aït Ziri. Marche : environ 5 heures.",
    },
    {
      day: 6,
      title: "Vallée d'Aït Bougmez - Marrakech",
      description: "Après un bon petit-déjeuner au gîte, nous disons au revoir à l'équipe et reprenons le véhicule pour rentrer à Marrakech. Arrivée en début d'après-midi.",
    },
  ];

  const included = [
    "Transfert privé aller-retour de Marrakech.",
    "Hébergement en gîte de montagne (2 nuits) et sous tente double (3 nuits).",
    "Tout le matériel de campement (tente mess, tente cuisine, tentes couchage, matelas mousse).",
    "Pension complète pendant le trek cuisinée par notre chef berbère.",
    "Mules de portage et guide officiel breveté.",
  ];

  const notIncluded = [
    "Assurance assistance rapatriement et médicale.",
    "Sac de couchage chaud de haute montagne.",
    "Dépenses d'ordre personnel et boissons.",
    "Pourboires de fin de circuit.",
  ];

  return (
    <TrekDetailLayout
      title="Haut Atlas Mgoun"
      subtitle="Ascension sauvage du Jbel M'Goun par la Vallée Heureuse"
      bannerImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200"
      duration="6 Jours"
      difficulty="Très Difficile"
      maxAltitude="4 068 m"
      bestSeason="Juin à Septembre"
      description={`Le massif calcaire du M'Goun est l'un des secrets les mieux gardés du Haut Atlas. Plus reculé et moins touristique que le Toubkal, il offre des reliefs spectaculaires, des canyons profonds et une immersion pastorale unique chez les nomades berbères.`}
      highlights={highlights}
      itinerary={itinerary}
      included={included}
      notIncluded={notIncluded}
    />
  );
}
