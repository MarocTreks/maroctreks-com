import TrekDetailLayout, { ItineraryDay } from "@/components/TrekDetailLayout";

export default function DesertTrek() {
  const highlights = [
    "Ascension des dunes géantes de l'Erg Chegaga pour le coucher du soleil",
    "Méharée traditionnelle avec dromadaires au cœur du désert saharien",
    "Nuits inoubliables sous les étoiles et partage de la culture nomade autour du feu",
    "Traversée de la magnifique vallée du Draa, ses palmeraies et ses Kasbahs",
    "Visite du célèbre Ksar d'Aït Benhaddou, classé à l'UNESCO",
  ];

  const itinerary: ItineraryDay[] = [
    {
      day: 1,
      title: "Marrakech - Ouarzazate - Vallée du Draa - M'hamid El Ghizlane",
      description: "Départ de Marrakech tôt le matin. Nous franchissons le col du Tizi n'Tichka (2260 m) et descendons vers Ouarzazate. Nous continuons par la sublime vallée du Draa, une immense palmeraie bordée de villages fortifiés (Kasbahs). Nous atteignons M'hamid, le dernier village oasien avant le Sahara. Premier campement dans les dunes. Nuit sous tente ou à la belle étoile.",
    },
    {
      day: 2,
      title: "M'hamid - Erg Lihoudi",
      description: "Début du trek saharien. Nous rencontrons nos chameliers sahraouis. Nous entamons notre marche à travers le reg (désert de pierres) et les petites dunes pour atteindre le superbe site d'Erg Lihoudi ('la dune du juif'). Coucher de soleil magnifique et installation du bivouac. Marche : environ 4h30.",
    },
    {
      day: 3,
      title: "Erg Lihoudi - Oued Laatach",
      description: "Nous marchons au rythme lent de la caravane. Nous traversons des lits de rivières asséchées (Oueds) bordés de tamaris et d'acacias. Arrivée en fin d'après-midi à Oued Laatach ('la rivière de la soif') pour notre campement sauvage au milieu du sable. Dîner traditionnel et musique sous la voûte céleste. Marche : environ 5 heures.",
    },
    {
      day: 4,
      title: "Oued Laatach - Dunes géantes d'Erg Chegaga",
      description: "Une journée magique. Nous nous enfonçons dans le vrai grand désert de sable. Les vagues de dunes s'élèvent progressivement. Nous installons notre campement au pied des immenses dunes de l'Erg Chegaga, culminant à près de 300 mètres de hauteur. Nous montons au sommet de la plus haute dune pour contempler un coucher de soleil grandiose sur l'océan de sable. Marche : environ 5h30.",
    },
    {
      day: 5,
      title: "Erg Chegaga - Foum Zguid - Ouarzazate",
      description: "Dernier lever de soleil sur le Sahara. Un véhicule 4x4 nous récupère au campement pour traverser le lac asséché d'Iriqui (un reg plat immense). Nous rejoignons la route à Foum Zguid puis continuons vers Ouarzazate en passant par Taznakht (célèbre pour ses tapis berbères). Nuit à l'hôtel à Ouarzazate.",
    },
    {
      day: 6,
      title: "Ouarzazate - Aït Benhaddou - Marrakech",
      description: "Le matin, visite du Ksar fortifié d'Aït Benhaddou, chef-d'œuvre de l'architecture de terre du Sud marocain. Puis, traversée retour des montagnes du Haut Atlas pour rejoindre Marrakech en milieu d'après-midi. Fin du voyage.",
    },
  ];

  const included = [
    "Transport aller de Marrakech à M'hamid et retour de Chegaga en 4x4/minibus privé.",
    "Services de l'équipe locale de chameliers nomades et du guide de désert.",
    "Dromadaires pour le portage de toute la logistique (matelas, tentes, bagages).",
    "Hébergement : 1 nuit d'hôtel à Ouarzazate, 4 nuits en bivouac sous tente nomade.",
    "Pension complète durant tout le voyage dans le désert.",
  ];

  const notIncluded = [
    "Boissons et dépenses d'ordre personnel.",
    "Repas de midi lors des transferts routiers.",
    "Assurance assistance rapatriement.",
    "Pourboires pour l'équipe nomade.",
  ];

  return (
    <TrekDetailLayout
      title="Le Désert du Sahara"
      subtitle="Une immersion de 6 jours dans les dunes infinies de l'Erg Chegaga"
      bannerImage="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200"
      duration="6 Jours"
      difficulty="Modéré"
      maxAltitude="300 m"
      bestSeason="Octobre à Avril"
      description={`Le désert est un espace de silence et de ressourcement. Ce trek caravanière à travers Erg Chegaga vous invite à déconnecter complètement et à vivre l'hospitalité légendaire des nomades du Sahara.`}
      highlights={highlights}
      itinerary={itinerary}
      included={included}
      notIncluded={notIncluded}
    />
  );
}
