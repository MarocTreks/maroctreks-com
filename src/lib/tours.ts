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
  "randonnee-dans-latlas": "Tour du Toubkal : trek de 15 jours",
  "randonnee-berbere-avec-ascension-du-toubkal-8-jours": "Ascension du Toubkal et villages – 8 jours",
  "randonnee-dans-le-haut-atlas-central": "Ascension du M’Goun : trek de 10 jours",
  "randonnee-en-famille-vallee-heureuse-dait-bouguemez-8-jours": "Trek en famille à Aït Bouguemez – 8 jours",
  "vallee-dades-vallee-des-roses-8-jours": "Trek Dadès et Vallée des Roses – 8 jours",
  "randonnee-moyen-atlas": "Trek dans le Moyen Atlas – 8 jours",
  "randonnee-jbel-saghro": "Trek au Jbel Saghro – 8 jours",
  "randonnee-jbel-siroua": "Traversée Siroua-Toubkal – trek de 15 jours",
  "randonnee-jbel-siroua-circuit-de-8-jours-dans-lanti-atlas": "Ascension du Jbel Siroua – trek de 8 jours",
  "randonnee-region-de-tafraout-circuit-de-8-jours-dans-lanti-atlas": "Trek à Tafraout et au Jbel Lekst – 8 jours",
  "randonnee-desert-marocain-circuit-de-8-jours-vallee-du-draa": "Trek désert et vallée du Draa – 8 jours",
  "randonnee-dunes-de-chegaga-circuit-de-8-jours-desert-marocain": "Trek dans les dunes de Chegaga – 8 jours",
  "randonnee-cote-atlantique-circuit-de-8-jours-essaouira": "Trek côte Atlantique et Essaouira – 8 jours",
  "grande-traversee-de-latlas-marocain-circuit-de-22-jours": "Grande traversée de l’Atlas – trek de 22 jours",
};

const tourSeoDescriptions: Record<string, string> = {
  "randonnee-dans-latlas": "Parcourez le tour complet du Toubkal en 15 jours avec un guide local : vallées amazighes, cols d’altitude, lac d’Ifni et ascension du sommet.",
  "randonnee-berbere-avec-ascension-du-toubkal-8-jours": "Un trek de 8 jours entre villages amazighs et ascension du Toubkal, avec guide local, hébergements, repas et transport des bagages.",
  "randonnee-dans-le-haut-atlas-central": "Gravissez le M’Goun lors d’un trek de 10 jours dans le Haut Atlas central, entre Aït Bouguemez, hauts plateaux, gorges et villages amazighs.",
  "randonnee-en-famille-vallee-heureuse-dait-bouguemez-8-jours": "Découvrez Aït Bouguemez en famille lors d’un trek de 8 jours adapté aux enfants, entre villages, vallées verdoyantes et rencontres locales.",
  "vallee-dades-vallee-des-roses-8-jours": "Randonnez 8 jours entre vallée du Dadès et Vallée des Roses : kasbahs, gorges, villages en terre et paysages du Haut Atlas marocain.",
  "randonnee-moyen-atlas": "Explorez le Moyen Atlas en 8 jours avec un guide local : lacs, forêts de cèdres, plateaux d’altitude, villages et nuits chez l’habitant.",
  "randonnee-jbel-saghro": "Partez 8 jours dans le Jbel Saghro : pitons rocheux, plateaux désertiques, oasis et bivouacs au cœur de l’Anti-Atlas marocain.",
  "randonnee-jbel-siroua": "Reliez le Siroua au Toubkal en 15 jours lors d’une grande traversée guidée entre Anti-Atlas, villages amazighs et sommets du Haut Atlas.",
  "randonnee-jbel-siroua-circuit-de-8-jours-dans-lanti-atlas": "Réalisez l’ascension du Jbel Siroua en 8 jours : paysages volcaniques, villages amazighs, bergeries et cultures de safran de l’Anti-Atlas.",
  "randonnee-region-de-tafraout-circuit-de-8-jours-dans-lanti-atlas": "Explorez Tafraout et le Jbel Lekst en 8 jours : granit rose, villages de l’Anti-Atlas, palmeraies et randonnée avec guide local.",
  "randonnee-desert-marocain-circuit-de-8-jours-vallee-du-draa": "Marchez 8 jours dans la vallée du Draa avec une équipe locale : dunes, oasis, bivouacs et caravane de dromadaires dans le Sahara marocain.",
  "randonnee-dunes-de-chegaga-circuit-de-8-jours-desert-marocain": "Traversez les dunes de Chegaga en 8 jours avec guide et équipe chamelière : marche dans le Sahara, oasis, bivouacs et nuits étoilées.",
  "randonnee-cote-atlantique-circuit-de-8-jours-essaouira": "Randonnez 8 jours sur la côte Atlantique près d’Essaouira : plages sauvages, falaises, arganeraies et bivouacs face à l’océan.",
  "grande-traversee-de-latlas-marocain-circuit-de-22-jours": "Traversez l’Atlas marocain en 22 jours du M’Goun au Toubkal : hauts cols, vallées, villages amazighs et ascensions avec guide local.",
};

const categorySeo: Record<TourCategory, { title: string; description: string }> = {
  toubkal: { title: "Treks Toubkal et randonnées depuis Imlil", description: "Découvrez nos treks dans le massif du Toubkal depuis Imlil : ascensions, villages amazighs et circuits privés avec guide local dans le Haut Atlas." },
  mgoun: { title: "Treks M’Goun et vallée d’Aït Bouguemez", description: "Explorez le M’Goun et la vallée d’Aït Bouguemez avec un guide local : ascension, gorges, hauts plateaux et treks dans le Haut Atlas central." },
  "dades-roses": { title: "Treks Vallée du Dadès et Vallée des Roses", description: "Randonnées guidées dans les vallées du Dadès et des Roses : kasbahs, gorges, villages amazighs et circuits sur mesure dans le Sud marocain." },
  "moyen-atlas": { title: "Treks et randonnées dans le Moyen Atlas", description: "Découvrez les lacs, cèdres, plateaux et villages du Moyen Atlas lors d’un trek privé accompagné par un guide local marocain." },
  "anti-atlas": { title: "Treks dans l’Anti-Atlas : Saghro et Siroua", description: "Explorez le Jbel Saghro, le Siroua et Tafraout lors de treks guidés entre reliefs volcaniques, oasis et villages de l’Anti-Atlas marocain." },
  desert: { title: "Treks dans le désert marocain et le Sahara", description: "Partez en trek dans le désert marocain : dunes de Chegaga, vallée du Draa, bivouacs et randonnée avec guide et équipe chamelière locale." },
  atlantique: { title: "Treks sur la côte Atlantique au Maroc", description: "Randonnée guidée sur la côte Atlantique près d’Essaouira : plages sauvages, falaises, arganeraies et bivouacs face à l’océan." },
  "grande-traversee": { title: "Grande traversée de l’Atlas marocain", description: "Traversez le Haut Atlas du M’Goun au Toubkal avec un guide local : treks itinérants, hauts cols, villages amazighs et sommets du Maroc." },
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
