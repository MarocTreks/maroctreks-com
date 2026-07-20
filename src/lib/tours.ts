import toursJson from "@/data/tours.generated.json";
import { createMetadata } from "@/lib/seo";
import { sourceSitePages, type SourceCollectionItem } from "@/lib/site-content";

export type TourCategory = "toubkal" | "mgoun" | "moyen-atlas" | "anti-atlas" | "desert" | "atlantique" | "grande-traversee";

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
  sourceUrl: string;
  category: TourCategory;
  title: string;
  subtitle: string;
  image: string;
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
  collectionItems: SourceCollectionItem[];
  image: string;
};

export const tours = toursJson as Tour[];

const tourSeoTitles: Record<string, string> = {
  "randonnee-dans-latlas": "Tour du Toubkal en 15 jours",
  "randonnee-berbere-avec-ascension-du-toubkal-8-jours": "Villages amazighs et Toubkal en 8 jours",
  "randonnee-dans-le-haut-atlas-central": "Ascension du M’Goun – trek de 10 jours",
  "randonnee-en-famille-vallee-heureuse-dait-bouguemez-8-jours": "Aït Bouguemez en famille – trek de 8 jours",
  "randonnee-moyen-atlas": "Randonnée dans le Moyen Atlas – 8 jours",
  "randonnee-jbel-saghro": "Trek du Jbel Saghro – circuit de 8 jours",
  "randonnee-jbel-siroua": "Traversée Siroua–Toubkal – 15 jours",
  "randonnee-jbel-siroua-circuit-de-8-jours-dans-lanti-atlas": "Ascension du Jbel Siroua – 8 jours",
  "randonnee-region-de-tafraout-circuit-de-8-jours-dans-lanti-atlas": "Trek à Tafraout et Jbel Lekst – 8 jours",
  "randonnee-desert-marocain-circuit-de-8-jours-vallee-du-draa": "Désert et vallée du Draa – trek de 8 jours",
  "randonnee-dunes-de-chegaga-circuit-de-8-jours-desert-marocain": "Trek aux dunes de Chegaga – 8 jours",
  "randonnee-cote-atlantique-circuit-de-8-jours-essaouira": "Randonnée côte Atlantique–Essaouira – 8 jours",
  "grande-traversee-de-latlas-marocain-circuit-de-22-jours": "Grande traversée de l’Atlas – 22 jours",
};

const categoryImages: Record<string, string> = {
  toubkal: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1600",
  mgoun: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600",
  "anti-atlas": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1600",
  desert: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1600",
};

export const tourCategories: TourCategoryDefinition[] = sourceSitePages.categories.map((category) => ({
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
  const sourceDescription = `${tour.subtitle.replace(/[.!?]$/, "")}. ${tour.highlights[0]}`.replace(/\s+/g, " ").trim();
  const description = sourceDescription.length > 158
    ? `${sourceDescription.slice(0, 155).replace(/\s+\S*$/, "")}\u2026`
    : sourceDescription;
  return createMetadata({
    title: tourSeoTitles[tour.slug] ?? tour.title,
    description,
    path: tour.path,
  });
}
