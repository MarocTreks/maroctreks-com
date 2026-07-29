import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const siteUrl = "https://maroctreks.com";
const outputPath = resolve("src/data/tours.generated.json");
const duplicateLegacySlug = "randonnee-dans-le-moyen-atlas-8-jours";

const sources = [
  { slug: "randonnee-dans-latlas", category: "toubkal" },
  { slug: "randonnee-berbere-avec-ascension-du-toubkal-8-jours", category: "toubkal" },
  { slug: "randonnee-dans-le-haut-atlas-central", category: "mgoun" },
  { slug: "randonnee-en-famille-vallee-heureuse-dait-bouguemez-8-jours", category: "mgoun" },
  { slug: "randonnee-moyen-atlas", category: "moyen-atlas" },
  { slug: "randonnee-jbel-saghro", category: "anti-atlas" },
  { slug: "randonnee-jbel-siroua", category: "anti-atlas" },
  { slug: "randonnee-jbel-siroua-circuit-de-8-jours-dans-lanti-atlas", category: "anti-atlas" },
  { slug: "randonnee-region-de-tafraout-circuit-de-8-jours-dans-lanti-atlas", category: "anti-atlas" },
  { slug: "randonnee-desert-marocain-circuit-de-8-jours-vallee-du-draa", category: "desert" },
  { slug: "randonnee-dunes-de-chegaga-circuit-de-8-jours-desert-marocain", category: "desert" },
  { slug: "randonnee-cote-atlantique-circuit-de-8-jours-essaouira", category: "atlantique" },
  { slug: "grande-traversee-de-latlas-marocain-circuit-de-22-jours", category: "grande-traversee" },
];

const categoryImages = {
  toubkal: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600",
  mgoun: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600",
  "moyen-atlas": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600",
  "anti-atlas": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1600",
  desert: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1600",
  atlantique: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=1600",
  "grande-traversee": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600",
};

function decodeHtml(value = "") {
  const named = {
    amp: "&", apos: "'", quot: '"', nbsp: " ", lt: "<", gt: ">",
    eacute: "é", egrave: "è", ecirc: "ê", agrave: "à", ugrave: "ù",
    ocirc: "ô", icirc: "î", ccedil: "ç", rsquo: "’", lsquo: "‘",
    rdquo: "”", ldquo: "“", ndash: "–", mdash: "—", hellip: "…",
  };

  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, number) => String.fromCodePoint(Number(number)))
    .replace(/&([a-z]+);/gi, (entity, name) => named[name.toLowerCase()] ?? entity);
}

function text(value = "") {
  return decodeHtml(value.replace(/<br\s*\/?\s*>/gi, " ").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .replace(/Aéroport - Hôtel - Ron - Hôtel - Aéroport/g, "Aéroport - Hôtel - Randonnée - Hôtel - Aéroport")
    .replace(/\bSiroua \(3400m\)/g, "Siroua (3 305 m)")
    .replace(/\bSiroua à 3400m\b/g, "Siroua à 3 305 m")
    .trim();
}

function headingMatching(html, pattern, fallback) {
  const headings = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((match) => text(match[1]));
  return headings.find((heading) => pattern.test(heading)) ?? fallback;
}

function firstMatch(html, pattern) {
  const match = html.match(pattern);
  return match ? text(match[1]) : "";
}

function sectionAfter(html, label) {
  const heading = new RegExp(`<h2[^>]*>[\\s\\S]*?${label}[\\s\\S]*?<\\/h2>([\\s\\S]*?)<\\/section>`, "i");
  return html.match(heading)?.[1] ?? "";
}

function listItems(html) {
  return [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((match) => text(match[1])).filter(Boolean);
}

function parseItinerary(html) {
  return [...html.matchAll(/<div class="itinerary-day">([\s\S]*?)<\/div>[\s\S]*?<h3>([\s\S]*?)<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>/gi)]
    .map((match, index) => ({
      day: Number(text(match[1]).match(/\d+/)?.[0] ?? index + 1),
      title: text(match[2]),
      description: text(match[3]),
    }));
}

function parseDetails(html) {
  const details = {};
  for (const match of html.matchAll(/<div class="detail-item">[\s\S]*?<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi)) {
    details[text(match[1])] = text(match[2]);
  }
  return details;
}

function parseFaqs(html) {
  return [...html.matchAll(/<div class="faq-accordion-header">[\s\S]*?<span>([\s\S]*?)<\/span>[\s\S]*?<div class="faq-accordion-content">[\s\S]*?<p>([\s\S]*?)<\/p>/gi)]
    .map((match) => ({ question: text(match[1]), answer: text(match[2]) }));
}

function detail(details, pattern, fallback) {
  const entry = Object.entries(details).find(([key]) => pattern.test(key));
  return entry?.[1] || fallback;
}

function detailLabel(details, pattern, fallback) {
  return Object.keys(details).find((key) => pattern.test(key)) ?? fallback;
}

function maxAltitude(itinerary) {
  const values = itinerary.flatMap((item) =>
    [...`${item.title} ${item.description}`.matchAll(/(\d[\d\s]{2,4})\s*m\b/gi)]
      .map((match) => Number(match[1].replace(/\s/g, "")))
      .filter((value) => value >= 1000 && value <= 5000),
  );
  const maximum = Math.max(...values, 0);
  return maximum ? `${maximum.toLocaleString("fr-FR")} m` : "Selon l’itinéraire";
}

async function importTour(source) {
  const endpoint = `${siteUrl}/wp-json/wp/v2/pages?slug=${source.slug}&_fields=slug,title,content`;
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error(`${source.slug}: HTTP ${response.status}`);
  const [page] = await response.json();
  if (!page) throw new Error(`${source.slug}: page introuvable`);

  const html = page.content.rendered;
  const descriptionSection = sectionAfter(html, "Description du Circuit");
  const descriptionParagraphs = [...descriptionSection.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) => text(match[1]))
    .filter(Boolean);
  const highlightSection = sectionAfter(html, "Points Forts");
  const includedSection = sectionAfter(html, "Ce Qui Est Inclus");
  const [includedHtml = "", notIncludedHtml = ""] = includedSection.split(
    /<h3[^>]*>(?:(?!<\/h3>)[\s\S])*Non Inclus(?:(?!<\/h3>)[\s\S])*<\/h3>/i,
  );
  const itinerary = parseItinerary(html);
  if (source.slug === "randonnee-jbel-siroua" && !itinerary.some((day) => day.day === 9)) {
    const restDayIndex = itinerary.findIndex((day) => /Jour de repos pour la visite du marché/i.test(day.title));
    if (restDayIndex >= 0) {
      itinerary[restDayIndex].title = itinerary[restDayIndex].title
        .replace(/\s*-\s*Jour de repos pour la visite du marché/i, "")
        .trim();
      itinerary.splice(restDayIndex + 1, 0, {
        day: 9,
        title: "Journée de repos et visite du marché",
        description: "Journée de repos à Sebt n’Assarag avec visite du marché local.",
      });
    }
  }
  const details = parseDetails(html);
  const duration = detail(details, /Durée/i, `${itinerary.length} jours`);

  const faqs = parseFaqs(html).map((faq) =>
    /visa/i.test(faq.question)
      ? {
          question: faq.question,
          answer: "Les formalités d’entrée dépendent de votre nationalité et peuvent évoluer. Avant le départ, vérifiez les exigences de passeport, de visa ou d’autorisation électronique auprès des autorités marocaines et du consulat compétent.",
        }
      : faq,
  );

  return {
    slug: source.slug,
    path: `/${source.slug}`,
    sourceUrl: `${siteUrl}/${source.slug}/`,
    category: source.category,
    title: firstMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i) || text(page.title.rendered),
    subtitle: firstMatch(html, /<div class="tour-highlight">([\s\S]*?)<\/div>/i),
    image: categoryImages[source.category],
    duration,
    difficulty: detail(details, /Difficulté|Niveau/i, "Selon le circuit"),
    maxAltitude: maxAltitude(itinerary),
    bestSeason: detail(details, /Saison|Période/i, "Selon les conditions"),
    groupSize: detail(details, /Groupe|Participants/i, "Sur demande"),
    tourType: detail(details, /Type/i, "Trekking guidé"),
    price: detail(details, /Prix/i, "Sur demande"),
    sectionHeadings: {
      description: headingMatching(html, /Description du Circuit/i, "Description du Circuit"),
      highlights: headingMatching(html, /Points Forts/i, "Points Forts du Circuit"),
      itinerary: headingMatching(html, /Itinéraire Détaillé/i, "Itinéraire Détaillé"),
      included: headingMatching(html, /Ce Qui Est Inclus/i, "Ce Qui Est Inclus"),
      details: headingMatching(html, /Détails.*Circuit/i, "Détails du Circuit"),
      faqs: headingMatching(html, /Questions Fréquemment|Questions Fréquentes/i, "Questions Fréquentes"),
      gallery: headingMatching(html, /Galerie Photo/i, "Galerie Photo"),
      price: headingMatching(html, /^Prix du Circuit$/i, "Prix du Circuit"),
      request: headingMatching(html, /Demander Ce Circuit/i, "Demander Ce Circuit"),
    },
    detailLabels: {
      duration: detailLabel(details, /Durée/i, "Durée"),
      difficulty: detailLabel(details, /Difficulté|Niveau/i, "Difficulté"),
      bestSeason: detailLabel(details, /Saison|Période/i, "Meilleure Saison"),
      groupSize: detailLabel(details, /Groupe|Participants/i, "Taille du Groupe"),
      tourType: detailLabel(details, /Type/i, "Type de Randonnée"),
      price: detailLabel(details, /Prix/i, "Prix de la Randonnée"),
    },
    description: descriptionParagraphs.join("\n\n"),
    highlights: listItems(highlightSection),
    itinerary,
    included: listItems(includedHtml),
    notIncluded: listItems(notIncludedHtml),
    faqs,
  };
}

const tours = await Promise.all(sources.map(importTour));
if (process.argv.includes("--check")) {
  const localTours = JSON.parse(await readFile(outputPath, "utf8"));
  if (JSON.stringify(localTours) !== JSON.stringify(tours)) {
    throw new Error("The local tour dataset differs from the current original-site import.");
  }

  const pagesResponse = await fetch(`${siteUrl}/wp-json/wp/v2/pages?per_page=100&_fields=slug`);
  if (!pagesResponse.ok) throw new Error(`Page inventory: HTTP ${pagesResponse.status}`);
  const liveTourSlugs = (await pagesResponse.json())
    .map((page) => page.slug)
    .filter((slug) => slug.startsWith("randonnee-") || slug.startsWith("grande-traversee-"))
    .sort();
  const expectedTourSlugs = [...sources.map((source) => source.slug), duplicateLegacySlug].sort();
  if (JSON.stringify(liveTourSlugs) !== JSON.stringify(expectedTourSlugs)) {
    throw new Error(`Original tour inventory changed. Live: ${liveTourSlugs.join(", ")}`);
  }

  process.stdout.write(`Verified ${tours.length} distinct tours against ${liveTourSlugs.length} original tour URLs (${duplicateLegacySlug} is the duplicate Middle Atlas URL).\n`);
} else {
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(tours, null, 2)}\n`, "utf8");
  process.stdout.write(`Imported ${tours.length} verified tours to ${outputPath}\n`);
}
