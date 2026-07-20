import sitePagesJson from "@/data/site-pages.generated.json";

export type SourceCollectionItem = { slug: string; title: string };
export type SourceLandingPage = {
  key: string;
  path: string;
  heroTitle: string;
  heroSubtitle: string;
  heroParagraphs: string[];
  introHeading: string;
  introParagraphs: string[];
  collectionHeading: string;
  collectionDescription: string;
  collectionItems: SourceCollectionItem[];
};
export type SourceExcursionSection = { heading: string; subtitle: string; items: string[] };
export type SourceExcursionsPage = {
  path: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: SourceExcursionSection[];
};
export type SourceSitePages = {
  categories: SourceLandingPage[];
  circuits: SourceLandingPage;
  excursions: SourceExcursionsPage;
};

export const sourceSitePages = sitePagesJson as SourceSitePages;
