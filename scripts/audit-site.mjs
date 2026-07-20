import { readFile } from "node:fs/promises";

const baseUrl = (process.argv[2] ?? "http://127.0.0.1:3102").replace(/\/$/, "");
const canonicalOrigin = "https://maroctreks.com";
const tours = JSON.parse(await readFile(new URL("../src/data/tours.generated.json", import.meta.url), "utf8"));
const sourceSitePages = JSON.parse(await readFile(new URL("../src/data/site-pages.generated.json", import.meta.url), "utf8"));
const routes = [
  "/",
  "/circuits",
  "/haut-atlas-toubkal",
  "/haut-atlas-mgoun",
  "/antis-atlas",
  "/le-desert",
  "/excursions",
  "/informations-pratiques",
  "/qui-sommes-nous",
  "/contact",
  ...tours.map((tour) => tour.path),
];

const titles = new Map();
const descriptions = new Map();
const internalLinks = new Set();
let failures = 0;

function normalizeText(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, number) => String.fromCodePoint(Number(number)))
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#x27;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function expectedSourceText(path) {
  const tour = tours.find((item) => item.path === path);
  if (tour) {
    const renderedHeadings = Object.entries(tour.sectionHeadings)
      .filter(([key]) => key !== "gallery")
      .map(([, value]) => value);
    return [
      tour.title,
      tour.subtitle,
      tour.description,
      ...renderedHeadings,
      ...tour.highlights,
      ...tour.itinerary.flatMap((day) => [day.title, day.description]),
      ...tour.included,
      ...tour.notIncluded,
      ...tour.faqs.flatMap((faq) => [faq.question, faq.answer]),
    ];
  }

  const landing = sourceSitePages.categories.find((category) => category.path === path)
    ?? (sourceSitePages.circuits.path === path ? sourceSitePages.circuits : undefined);
  if (landing) {
    return [
      landing.heroTitle,
      ...landing.heroParagraphs,
      landing.introHeading,
      ...landing.introParagraphs,
      landing.collectionHeading,
      landing.collectionDescription,
      ...landing.collectionItems.map((item) => item.title),
    ];
  }

  if (sourceSitePages.excursions.path === path) {
    return [
      sourceSitePages.excursions.heroTitle,
      sourceSitePages.excursions.heroSubtitle,
      ...sourceSitePages.excursions.sections.flatMap((section) => [section.heading, section.subtitle, ...section.items]),
    ];
  }

  return [];
}

for (const path of routes) {
  const response = await fetch(`${baseUrl}${path}`);
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? "";
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1] ?? "";
  const openGraphTitle = html.match(/<meta property="og:title" content="([^"]+)"/)?.[1] ?? "";
  const openGraphDescription = html.match(/<meta property="og:description" content="([^"]+)"/)?.[1] ?? "";
  const openGraphUrl = html.match(/<meta property="og:url" content="([^"]+)"/)?.[1] ?? "";
  const twitterCard = html.match(/<meta name="twitter:card" content="([^"]+)"/)?.[1] ?? "";
  const visibleText = normalizeText(html.replace(/<script\b[\s\S]*?<\/script>/gi, " ").replace(/<style\b[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " "));
  const missingSourceText = expectedSourceText(path).filter((value) => !visibleText.includes(normalizeText(value)));
  const h1Count = html.match(/<h1\b/g)?.length ?? 0;
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const validJsonLd = jsonLdBlocks.length > 0 && jsonLdBlocks.every((match) => {
    try {
      JSON.parse(match[1]);
      return true;
    } catch {
      return false;
    }
  });
  const expectedCanonical = `${canonicalOrigin}${path === "/" ? "" : path}`;
  const valid = response.status === 200
    && canonical === expectedCanonical
    && h1Count === 1
    && title.length > 0
    && title.length <= 70
    && description.length >= 65
    && description.length <= 165
    && openGraphTitle.length > 0
    && openGraphDescription.length > 0
    && openGraphUrl === expectedCanonical
    && twitterCard === "summary_large_image"
    && validJsonLd
    && missingSourceText.length === 0;

  process.stdout.write(`${valid ? "OK" : "BAD"} ${response.status} H1:${h1Count} ${path} | title:${title.length} description:${description.length}\n`);
  if (missingSourceText.length > 0) {
    process.stdout.write(`MISSING SOURCE TEXT: ${missingSourceText[0]}${missingSourceText.length > 1 ? ` (+${missingSourceText.length - 1} more)` : ""}\n`);
  }
  if (!valid) failures += 1;

  if (titles.has(title)) {
    process.stdout.write(`DUPLICATE TITLE: ${path} and ${titles.get(title)}\n`);
    failures += 1;
  } else {
    titles.set(title, path);
  }

  if (descriptions.has(description)) {
    process.stdout.write(`DUPLICATE DESCRIPTION: ${path} and ${descriptions.get(description)}\n`);
    failures += 1;
  } else {
    descriptions.set(description, path);
  }

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/_next/")) {
      internalLinks.add(href.split(/[?#]/)[0]);
    }
  }
}

let internalLinkFailures = 0;
for (const href of internalLinks) {
  const response = await fetch(`${baseUrl}${href}`, { redirect: "manual" });
  const valid = response.status === 200;
  if (!valid) {
    process.stdout.write(`BAD internal link ${href} -> ${response.status}\n`);
    failures += 1;
    internalLinkFailures += 1;
  }
}
process.stdout.write(`${internalLinkFailures === 0 ? "OK" : "BAD"} internal links -> ${internalLinks.size} checked\n`);

const redirects = [
  ["/acceuil", "/"],
  ["/tous-les-circuits", "/circuits"],
  ["/randonnee-dans-le-moyen-atlas-8-jours", "/randonnee-moyen-atlas"],
  ["/en/haut-atlas-toubkal", "/haut-atlas-toubkal"],
];

for (const [source, destination] of redirects) {
  const response = await fetch(`${baseUrl}${source}`, { redirect: "manual" });
  const location = response.headers.get("location");
  const valid = response.status === 308 && location === destination;
  process.stdout.write(`${valid ? "OK" : "BAD"} redirect ${source} -> ${location} (${response.status})\n`);
  if (!valid) failures += 1;
}

const spamResponse = await fetch(`${baseUrl}/shop/fake-spam.html`);
process.stdout.write(`${spamResponse.status === 404 ? "OK" : "BAD"} spam route -> ${spamResponse.status}\n`);
if (spamResponse.status !== 404) failures += 1;

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
const sitemapXml = await sitemapResponse.text();
const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const expectedUrls = routes.map((path) => `${canonicalOrigin}${path === "/" ? "" : path}`);
const sitemapValid = sitemapResponse.status === 200
  && sitemapUrls.length === expectedUrls.length
  && new Set(sitemapUrls).size === sitemapUrls.length
  && expectedUrls.every((url) => sitemapUrls.includes(url));
process.stdout.write(`${sitemapValid ? "OK" : "BAD"} sitemap -> ${sitemapUrls.length} unique URLs\n`);
if (!sitemapValid) failures += 1;

const robotsResponse = await fetch(`${baseUrl}/robots.txt`);
const robotsText = await robotsResponse.text();
const robotsValid = robotsResponse.status === 200
  && robotsText.includes("User-Agent: *")
  && robotsText.includes("Allow: /")
  && robotsText.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`);
process.stdout.write(`${robotsValid ? "OK" : "BAD"} robots.txt\n`);
if (!robotsValid) failures += 1;

process.exitCode = failures > 0 ? 1 : 0;
