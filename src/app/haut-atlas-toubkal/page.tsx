import TrekDetailLayout, { ItineraryDay } from "@/components/TrekDetailLayout";

export default function ToubkalTrek() {
  const highlights = [
    "Ascension du Mont Toubkal, plus haut sommet d'Afrique du Nord (4 167 m)",
    "Traversée du charmant village d'Imlil, la petite 'Chamonix du Maroc'",
    "Rencontre enrichissante avec les communautés berbères locales",
    "Repas traditionnels succulents cuisinés frais chaque jour",
    "Vues époustouflantes à 360° sur les montagnes de l'Atlas et le désert",
  ];

  const itinerary: ItineraryDay[] = [
    {
      day: 1,
      title: "Marrakech - Imlil (1740 m) - Refuge du Toubkal (3207 m)",
      description: "Départ matinal de Marrakech en minibus ou 4x4 vers Imlil. C'est ici que nous rencontrons notre équipe de muletiers et notre cuisinier. Nous commençons la marche vers le refuge du Toubkal (anciennement refuge Neltner). Le sentier monte doucement le long de la vallée de l'Aït Mizane, passant par le village d'Aremd et le sanctuaire de Sidi Chamharouch. Déjeuner préparé en route par notre cuisinier. Dîner et nuit au refuge. Randonnée : environ 5 heures. Dénivelé : +1460 m.",
    },
    {
      day: 2,
      title: "Ascension du Mont Toubkal (4167 m) - Imlil - Marrakech",
      description: "Départ à l'aube (vers 5h) pour éviter la chaleur et profiter des meilleures conditions météo. La montée ne présente pas de difficultés techniques particulières mais la pente est raide et l'altitude se fait sentir. Après 3 à 4 heures d'ascension, nous atteignons le sommet du Toubkal. Une vue grandiose récompense nos efforts : par temps clair, on aperçoit la plaine du Haouz au nord et le début du Sahara au sud. Descente par le même itinéraire jusqu'au refuge pour le déjeuner, puis continuation de la descente vers Imlil. Transfert de retour à Marrakech en fin d'après-midi. Randonnée : environ 7 à 8 heures. Dénivelé : +960 m, -2420 m.",
    },
  ];

  const included = [
    "Transfert aller-retour depuis votre hôtel à Marrakech.",
    "Guide de montagne marocain certifié francophone.",
    "Hébergement au refuge du Toubkal (dortoirs collectifs).",
    "Pension complète durant le trek (petits-déjeuners, déjeuners chauds préparés sur place, dîners).",
    "Mules et muletiers pour le transport des bagages (maximum 15 kg par personne).",
  ];

  const notIncluded = [
    "Assurance voyage rapatriement (obligatoire).",
    "Sacs de couchage et équipement de marche personnel (location possible à Imlil).",
    "Boissons gazeuses et eau minérale en bouteille.",
    "Pourboires pour l'équipe (guide, cuisinier, muletiers).",
  ];

  return (
    <TrekDetailLayout
      title="Haut Atlas Toubkal"
      subtitle="Ascension en 2 jours du plus haut sommet d'Afrique du Nord (4 167 m)"
      bannerImage="https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1200"
      duration="2 Jours"
      difficulty="Difficile"
      maxAltitude="4 167 m"
      bestSeason="Mai à Octobre (Hivernal de Nov à Avril)"
      description={`L'ascension du mont Toubkal est l'aventure montagnarde incontournable du Maroc. Accessible à toute personne en bonne condition physique, ce trek vous plonge au cœur de la géographie des géants de l'Atlas.

Nous traverserons des sentiers escarpés bordés de genévriers, logerons dans le refuge mythique au pied du sommet, et vivrons un lever de soleil inoubliable sur l'Afrique du Nord.`}
      highlights={highlights}
      itinerary={itinerary}
      included={included}
      notIncluded={notIncluded}
    />
  );
}
