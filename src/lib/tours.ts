import toursJson from "@/data/tours.generated.json";
import { createMetadata } from "@/lib/seo";
import { siteContent, type CollectionItem } from "@/lib/site-content";
import { cloudinaryImage, tourMediaBySlug, type TourMediaImage } from "@/lib/tour-media";

export type TourCategory =
  | "toubkal"
  | "mgoun"
  | "dades-roses"
  | "moyen-atlas"
  | "anti-atlas"
  | "desert"
  | "atlantique"
  | "grande-traversee";

export type TourFaq = { question: string; answer: string };
export type TourItineraryDay = { day: number; title: string; description: string };
export type TourSectionHeadings = {
  description: string;
  highlights: string;
  itinerary: string;
  included: string;
  details: string;
  faqs: string;
  gallery: string;
  price: string;
  request: string;
};
export type TourDetailLabels = {
  duration: string;
  difficulty: string;
  bestSeason: string;
  groupSize: string;
  tourType: string;
  price: string;
};

export type Tour = {
  slug: string;
  path: string;
  category: TourCategory;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  gallery: TourMediaImage[];
  duration: string;
  difficulty: string;
  maxAltitude: string;
  bestSeason: string;
  groupSize: string;
  tourType: string;
  price: string;
  sectionHeadings: TourSectionHeadings;
  detailLabels: TourDetailLabels;
  description: string;
  highlights: string[];
  itinerary: TourItineraryDay[];
  included: string[];
  notIncluded: string[];
  faqs: TourFaq[];
};

export type TourCategoryDefinition = {
  key: TourCategory;
  path: string;
  title: string;
  eyebrow: string;
  description: string;
  heroSubtitle: string;
  heroParagraphs: string[];
  introHeading: string;
  introParagraphs: string[];
  collectionHeading: string;
  collectionDescription: string;
  collectionItems: CollectionItem[];
  image: string;
  seoTitle: string;
  seoDescription: string;
};

type ImportedTour = Omit<Tour, "imageAlt" | "gallery">;

export const tours: Tour[] = (toursJson as ImportedTour[]).map((tour) => {
  const media = tourMediaBySlug[tour.slug];

  return {
    ...tour,
    image: media?.hero.src ?? tour.image,
    imageAlt: media?.hero.alt ?? `Paysage du circuit ${tour.title} au Maroc`,
    gallery: media?.gallery ?? [],
  };
});

const tourSeoTitles: Record<string, string> = {
  "randonnee-dans-latlas": "Tour du Toubkal 15 Jours | Trek avec Guide Local",
  "randonnee-berbere-avec-ascension-du-toubkal-8-jours": "Ascension Toubkal 8 Jours | Guide Local Certifié",
  "randonnee-dans-le-haut-atlas-central": "Ascension du M'Goun 10 Jours | Trek Haut Atlas",
  "randonnee-en-famille-vallee-heureuse-dait-bouguemez-8-jours": "Trek Famille Aït Bouguemez 8 Jours | Haut Atlas",
  "vallee-dades-vallee-des-roses-8-jours": "Trek Vallée des Roses & Dadès 8 Jours | Sud Maroc",
  "randonnee-moyen-atlas": "Trek Moyen Atlas 8 Jours | Cèdres & Lacs du Maroc",
  "randonnee-jbel-saghro": "Trek Jbel Saghro 8 Jours | Anti-Atlas & Bivouac",
  "randonnee-jbel-siroua": "Traversée Siroua Toubkal 15 Jours | Grand Trek",
  "randonnee-jbel-siroua-circuit-de-8-jours-dans-lanti-atlas": "Ascension Jbel Siroua 8 Jours | Trek Anti-Atlas",
  "randonnee-region-de-tafraout-circuit-de-8-jours-dans-lanti-atlas": "Trek Tafraout & Jbel Lekst 8 Jours | Anti-Atlas",
  "randonnee-desert-marocain-circuit-de-8-jours-vallee-du-draa": "Trek Désert Vallée du Draa 8 Jours | Sahara",
  "randonnee-dunes-de-chegaga-circuit-de-8-jours-desert-marocain": "Trek Dunes de Chegaga 8 Jours | Sahara Maroc",
  "randonnee-cote-atlantique-circuit-de-8-jours-essaouira": "Trek Côte Atlantique 8 Jours | Essaouira Maroc",
  "grande-traversee-de-latlas-marocain-circuit-de-22-jours": "Grande Traversée de l'Atlas 22 Jours | Trek",
};

const tourSeoDescriptions: Record<string, string> = {
  "randonnee-dans-latlas": "Tour du Toubkal en 15 jours avec Mohamed, guide certifié à Imlil. Vallées amazighes, cols d'altitude, lac d'Ifni et ascension du sommet. Devis direct.",
  "randonnee-berbere-avec-ascension-du-toubkal-8-jours": "Ascension du Toubkal (4 167 m) et villages berbères en 8 jours. Guide certifié à Imlil, équipe muletière & pension complète en direct sans intermédiaire.",
  "randonnee-dans-le-haut-atlas-central": "Ascension du M'Goun (4 071 m) et vallées d'Aït Bouguemez en 10 jours. Trek guidé au cœur du Haut Atlas central avec bivouacs et hauts plateaux.",
  "randonnee-en-famille-vallee-heureuse-dait-bouguemez-8-jours": "Trek en famille à Aït Bouguemez (8 jours) adapté aux enfants. Randonnée guidée dans la Vallée Heureuse du Haut Atlas, villages et rencontres locales.",
  "vallee-dades-vallee-des-roses-8-jours": "Trek de 8 jours entre la vallée du Dadès et la Vallée des Roses. Gorges spectaculaires, kasbahs en terre, villages amazighs et guide local privé.",
  "randonnee-moyen-atlas": "Trek guidé de 8 jours dans le Moyen Atlas. Randonnée entre lacs d'altitude, forêts de cèdres centenaires, plateaux et nuits chez l'habitant.",
  "randonnee-jbel-saghro": "Trek de 8 jours au Jbel Saghro dans l'Anti-Atlas. Pitons volcaniques, plateaux désertiques, oasis et bivouacs sauvages avec guide local certifié.",
  "randonnee-jbel-siroua": "Grande traversée du Jbel Siroua au Toubkal en 15 jours. Randonnée guidée entre Anti-Atlas, villages amazighs et sommets majeurs du Haut Atlas.",
  "randonnee-jbel-siroua-circuit-de-8-jours-dans-lanti-atlas": "Ascension du Jbel Siroua (3 304 m) en 8 jours dans l'Anti-Atlas. Paysages volcaniques, bergeries d'altitude, cultures de safran et guide local.",
  "randonnee-region-de-tafraout-circuit-de-8-jours-dans-lanti-atlas": "Trek de 8 jours à Tafraout et au Jbel Lekst. Granit rose, amandiers en fleurs, villages perchés de l'Anti-Atlas et randonnée guidée sur mesure.",
  "randonnee-desert-marocain-circuit-de-8-jours-vallee-du-draa": "Trek de 8 jours dans la vallée du Draa et le désert marocain. Dunes, oasis, bivouacs sous les étoiles et randonnée avec équipe chamelière locale.",
  "randonnee-dunes-de-chegaga-circuit-de-8-jours-desert-marocain": "Trek de 8 jours dans les dunes de Chegaga. Immersion dans le Sahara marocain avec guide saharien, caravane de dromadaires et bivouacs nomades.",
  "randonnee-cote-atlantique-circuit-de-8-jours-essaouira": "Trek de 8 jours sur la côte Atlantique vers Essaouira. Plages sauvages, falaises sur l'océan, arganeraies et bivouacs face à la mer avec guide.",
  "grande-traversee-de-latlas-marocain-circuit-de-22-jours": "Grande traversée de l'Atlas marocain en 22 jours, du M'Goun au Toubkal. Hauts cols, ascensions mythiques et villages berbères avec guide local.",
};

const categorySeo: Record<TourCategory, { title: string; description: string }> = {
  toubkal: { title: "Trek Toubkal & Haut Atlas avec Guide Local Imlil", description: "Réservez votre trek au Toubkal depuis Imlil avec Mohamed, guide certifié. Ascension du sommet (4 167m), villages berbères et pension complète." },
  mgoun: { title: "Trek M’Goun & Vallée d’Aït Bouguemez | Haut Atlas", description: "Explorez le massif du M’Goun (4 071m) et la Vallée Heureuse avec un guide local. Gorges, hauts plateaux et circuits guidés sur mesure au Maroc." },
  "dades-roses": { title: "Trek Vallée du Dadès & Vallée des Roses | Sud Maroc", description: "Randonnées guidées dans les vallées du Dadès et des Roses. Kasbahs, gorges d'altitude, villages amazighs et circuits privés sans intermédiaire." },
  "moyen-atlas": { title: "Trek Moyen Atlas | Cèdres, Lacs & Guide Local Maroc", description: "Découvrez les forêts de cèdres, lacs et plateaux du Moyen Atlas lors d’un trek privé accompagné par un guide local certifié." },
  "anti-atlas": { title: "Trek Anti-Atlas | Jbel Saghro, Siroua & Tafraout", description: "Explorez le Jbel Saghro, le Siroua et Tafraout. Reliefs volcaniques, oasis et villages amazighs lors de treks guidés en direct." },
  desert: { title: "Trek Désert Marocain & Sahara | Dunes de Chegaga", description: "Partez en trek dans le désert marocain : dunes de Chegaga, vallée du Draa, bivouacs sous les étoiles et équipe chamelière locale." },
  atlantique: { title: "Trek Côte Atlantique Essaouira | Randonnée Mer", description: "Randonnée guidée sur la côte Atlantique près d’Essaouira. Plages sauvages, falaises, arganeraies et bivouacs face à l’océan." },
  "grande-traversee": { title: "Grande Traversée de l’Atlas | 22 Jours de Trek", description: "Traversez le Haut Atlas du M’Goun au Toubkal avec un guide local. Cols d'altitude, sommets mythiques et immersion berbère en 22 jours." },
};

const categoryImages: Record<string, string> = {
  toubkal: cloudinaryImage("4796C7E6-F03B-4847-B866-107C876E9AD7_nfgfpq"),
  mgoun: cloudinaryImage("2edbc427-c275-4e87-a012-e720aa814429_gloz1y"),
  "dades-roses": cloudinaryImage("63bb0096-69cb-4c96-a100-fa99c9876ec4_f6n0vm"),
  "moyen-atlas": cloudinaryImage("57930de4-d20a-4f25-983c-d0d95832500a_n5kysm"),
  "anti-atlas": cloudinaryImage("3319651f-4731-4457-bfb9-5d33298c7fda_yc4ita"),
  desert: cloudinaryImage("a467fd77-11d7-40a9-af7c-7e6bf5b231cb_op5wf0"),
  atlantique: cloudinaryImage("6b215ab4-8a0b-43b7-bde6-9e191be10ba8_fvnbz2"),
  "grande-traversee": cloudinaryImage("27694bd0-9d47-4bf1-9c36-6261bb2aca7b_sqykn5"),
};

export const tourCategories: TourCategoryDefinition[] = siteContent.categories.map((category) => ({
  key: category.key as TourCategory,
  path: category.path,
  title: category.heroTitle,
  eyebrow: category.introHeading,
  description: category.heroSubtitle,
  heroSubtitle: category.heroSubtitle,
  heroParagraphs: category.heroParagraphs,
  introHeading: category.introHeading,
  introParagraphs: category.introParagraphs,
  collectionHeading: category.collectionHeading,
  collectionDescription: category.collectionDescription,
  collectionItems: category.collectionItems,
  image: categoryImages[category.key],
  seoTitle: categorySeo[category.key as TourCategory].title,
  seoDescription: categorySeo[category.key as TourCategory].description,
}));

export function getTour(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function getToursByCategory(category: TourCategory) {
  return tours.filter((tour) => tour.category === category);
}

export function getCategory(category: TourCategory) {
  return tourCategories.find((item) => item.key === category);
}

export function getTourMetadata(tour: Tour) {
  return createMetadata({
    title: tourSeoTitles[tour.slug] ?? tour.title,
    description: tourSeoDescriptions[tour.slug] ?? tour.subtitle,
    path: tour.path,
    image: tour.image,
  });
}
