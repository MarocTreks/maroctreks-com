import TrekDetailLayout, { ItineraryDay } from "@/components/TrekDetailLayout";

export default function AntiAtlasTrek() {
  const highlights = [
    "Ascension du Jbel Siroua (3 305 m), volcan éteint de l'Anti-Atlas",
    "Découverte des champs et de la culture du Safran à Taliouine",
    "Rencontre des bergers nomades et nuit sous les étoiles",
    "Aiguilles de basalte et paysages lunaires d'une rare beauté",
    "Visite des greniers collectifs fortifiés (Agadirs) sculptés dans la roche",
  ];

  const itinerary: ItineraryDay[] = [
    {
      day: 1,
      title: "Marrakech - Col du Tichka - Taliouine - Akhfamane (1700 m)",
      description: "Départ de Marrakech par la superbe route du Tizi n'Tichka. Nous bifurquons vers la capitale du safran, Taliouine. Nous arrivons au petit village d'Akhfamane pour installer notre campement de départ. Randonnée d'échauffement l'après-midi. Nuit sous tente.",
    },
    {
      day: 2,
      title: "Akhfamane - Gorges de Tizgui (2200 m)",
      description: "Nous entamons notre marche à travers des villages de pierres sombres. Nous arrivons au village troglodyte de Tizgui où le grenier fortifié collectif (Agadir) est accroché à la falaise. Nous montons installer notre campement près des bergeries d'altitude. Marche : environ 5 heures. Dénivelé : +500 m.",
    },
    {
      day: 3,
      title: "Ascension du Jbel Siroua (3305 m) - Azib n'Moussa (2250 m)",
      description: "Départ matinal pour le sommet. La montée se fait sur des pentes régulières puis se termine par une courte escalade facile du dôme basaltique sommital. Du sommet du Siroua, le panorama sur la face sud du Toubkal est exceptionnel. Descente vers le vallon d'Azib n'Moussa pour notre campement. Marche : environ 6h30. Dénivelé : +1100 m, -1050 m.",
    },
    {
      day: 4,
      title: "Azib n'Moussa - Amassine (1800 m)",
      description: "Une journée plus tranquille de descente à travers les grands plateaux de transhumance. Nous traversons des villages entourés de cultures en terrasses de safran avant d'atteindre le charmant village d'Amassine. Nuit sous tente ou chez l'habitant. Marche : environ 5 heures.",
    },
    {
      day: 5,
      title: "Amassine - Taliouine - Marrakech",
      description: "Dernière petite marche matinale puis retour en véhicule vers Marrakech en repassant par Taliouine. Pause déjeuner en route et arrivée à Marrakech en fin de journée.",
    },
  ];

  const included = [
    "Transfert aller-retour de Marrakech en transport touristique.",
    "Services du guide officiel certifié et de l'équipe locale (cuisinier, muletiers).",
    "Pension complète durant toute la randonnée.",
    "Matériel de bivouac complet (tentes mess, tentes de couchage, matelas).",
  ];

  const notIncluded = [
    "Équipement de trekking individuel.",
    "Assurance assistance rapatriement et frais médicaux.",
    "Boissons et dépenses personnelles.",
    "Pourboires d'usage.",
  ];

  return (
    <TrekDetailLayout
      title="Anti Atlas & Jbel Siroua"
      subtitle="Un voyage volcanique au pays du safran et des greniers fortifiés"
      bannerImage="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200"
      duration="5 Jours"
      difficulty="Modéré"
      maxAltitude="3 305 m"
      bestSeason="Octobre à Avril"
      description={`L'Anti-Atlas volcanique offre un spectacle saisissant de roches sombres et d'oasis verdoyantes. Le massif du Siroua, trait d'union entre l'Atlas et le Sahara, est le terrain idéal pour une randonnée hors du temps, ponctuée par la culture du safran et les magnifiques greniers collectifs en pisé.`}
      highlights={highlights}
      itinerary={itinerary}
      included={included}
      notIncluded={notIncluded}
    />
  );
}
