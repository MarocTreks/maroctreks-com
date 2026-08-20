import sitePagesJson from "@/data/site-pages.generated.json";

export type CollectionItem = { slug: string; title: string };
export type LandingPageContent = {
  key: string;
  path: string;
  heroTitle: string;
  heroSubtitle: string;
  heroParagraphs: string[];
  introHeading: string;
  introParagraphs: string[];
  collectionHeading: string;
  collectionDescription: string;
  collectionItems: CollectionItem[];
};
export type ExcursionSectionContent = { heading: string; subtitle: string; items: string[] };
export type ExcursionsPageContent = {
  path: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: ExcursionSectionContent[];
};
export type SiteContent = {
  categories: LandingPageContent[];
  circuits: LandingPageContent;
  excursions: ExcursionsPageContent;
};

/** Local editorial content bundled with the application. */
export const siteContent = sitePagesJson as SiteContent;
