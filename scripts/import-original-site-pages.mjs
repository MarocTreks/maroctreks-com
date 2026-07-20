import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const siteUrl = "https://maroctreks.com";
const outputPath = resolve("src/data/site-pages.generated.json");

const categoryConfigs = [
  {
    key: "toubkal",
    slug: "haut-atlas-toubkal",
    tourSlugs: [
      "randonnee-dans-latlas",
      "randonnee-berbere-avec-ascension-du-toubkal-8-jours",
      "randonnee-moyen-atlas",
    ],
  },
  {
    key: "mgoun",
    slug: "haut-atlas-mgoun",
    tourSlugs: [
      "randonnee-dans-le-haut-atlas-central",
      "randonnee-en-famille-vallee-heureuse-dait-bouguemez-8-jours",
    ],
  },
  {
    key: "anti-atlas",
    slug: "antis-atlas",
    tourSlugs: [
      "randonnee-jbel-saghro",
      "randonnee-jbel-siroua",
      "randonnee-jbel-siroua-circuit-de-8-jours-dans-lanti-atlas",
      "randonnee-region-de-tafraout-circuit-de-8-jours-dans-lanti-atlas",
    ],
  },
  {
    key: "desert",
    slug: "le-desert",
    tourSlugs: [
      "randonnee-dunes-de-chegaga-circuit-de-8-jours-desert-marocain",
      "randonnee-desert-marocain-circuit-de-8-jours-vallee-du-draa",
    ],
  },
];

const circuitsTourSlugs = [
  "randonnee-dans-latlas",
  "randonnee-berbere-avec-ascension-du-toubkal-8-jours",
  "randonnee-moyen-atlas",
  "randonnee-dans-le-haut-atlas-central",
  "randonnee-en-famille-vallee-heureuse-dait-bouguemez-8-jours",
  "randonnee-jbel-saghro",
  "randonnee-jbel-siroua",
  "randonnee-jbel-siroua-circuit-de-8-jours-dans-lanti-atlas",
  "randonnee-region-de-tafraout-circuit-de-8-jours-dans-lanti-atlas",
  "randonnee-dunes-de-chegaga-circuit-de-8-jours-desert-marocain",
  "randonnee-desert-marocain-circuit-de-8-jours-vallee-du-draa",
];

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
    .trim();
}

function semanticBlocks(html) {
  return [...html.matchAll(/<(h1|h2|h3|p|li)\b[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map((match) => ({ type: match[1].toLowerCase(), text: text(match[2]) }))
    .filter((block) => block.text);
}

async function fetchPage(slug) {
  const response = await fetch(`${siteUrl}/wp-json/wp/v2/pages?slug=${slug}&_fields=content`);
  if (!response.ok) throw new Error(`${slug}: HTTP ${response.status}`);
  const [page] = await response.json();
  if (!page) throw new Error(`${slug}: page introuvable`);
  return semanticBlocks(page.content.rendered);
}

function parseLanding(blocks, config) {
  const heroIndex = blocks.findIndex((block) => block.type === "h1");
  const introIndex = blocks.findIndex((block, index) => index > heroIndex && block.type === "h2");
  const collectionIndex = blocks.findIndex((block, index) => index > introIndex && block.type === "h1");
  const cardTitles = blocks.filter((block, index) => index > collectionIndex && block.type === "h3").map((block) => block.text);

  return {
    key: config.key,
    path: `/${config.slug}`,
    heroTitle: blocks[heroIndex].text,
    heroSubtitle: blocks.slice(heroIndex + 1, introIndex).find((block) => block.type === "p")?.text ?? "",
    heroParagraphs: blocks.slice(heroIndex + 1, introIndex).filter((block) => block.type === "p").map((block) => block.text),
    introHeading: blocks[introIndex].text,
    introParagraphs: blocks.slice(introIndex + 1, collectionIndex).filter((block) => block.type === "p").map((block) => block.text),
    collectionHeading: blocks[collectionIndex].text,
    collectionDescription: blocks.slice(collectionIndex + 1).find((block) => block.type === "p")?.text ?? "",
    collectionItems: config.tourSlugs.map((slug, index) => ({ slug, title: cardTitles[index] })),
  };
}

function parseExcursions(blocks) {
  const heroIndex = blocks.findIndex((block) => block.type === "h1");
  const sectionIndexes = blocks.flatMap((block, index) => block.type === "h2" ? [index] : []);
  return {
    path: "/excursions",
    heroTitle: blocks[heroIndex].text,
    heroSubtitle: blocks.slice(heroIndex + 1, sectionIndexes[0]).find((block) => block.type === "p")?.text ?? "",
    sections: sectionIndexes.map((start, index) => {
      const sectionBlocks = blocks.slice(start + 1, sectionIndexes[index + 1] ?? blocks.length);
      return {
        heading: blocks[start].text,
        subtitle: sectionBlocks.find((block) => block.type === "p")?.text ?? "",
        items: sectionBlocks.filter((block) => block.type === "li").map((block) => block.text),
      };
    }),
  };
}

const categories = await Promise.all(categoryConfigs.map(async (config) => parseLanding(await fetchPage(config.slug), config)));
const toubkalCategory = categories.find((category) => category.key === "toubkal");
if (toubkalCategory) {
  const safetyParagraph = toubkalCategory.introParagraphs.findIndex((paragraph) => paragraph.startsWith("L' ascension du toit"));
  if (safetyParagraph >= 0) {
    toubkalCategory.introParagraphs[safetyParagraph] = "L'ascension du Toubkal est une randonnée de haute montagne à 4 167 mètres. Elle demande une bonne condition physique, une acclimatation progressive et un équipement adapté aux conditions. Le mal aigu des montagnes peut toucher les personnes non acclimatées, et la neige ou les névés peuvent persister selon la saison et les conditions météorologiques. L'accompagnement d'un guide qualifié permet d'adapter l'itinéraire et l'équipement.";
  }
}
const circuitsBlocks = await fetchPage("tous-les-circuits");
const circuits = parseLanding(circuitsBlocks, { key: "circuits", slug: "circuits", tourSlugs: circuitsTourSlugs });
const tourPages = await Promise.all(circuitsTourSlugs.concat([
  "randonnee-cote-atlantique-circuit-de-8-jours-essaouira",
  "grande-traversee-de-latlas-marocain-circuit-de-22-jours",
]).map(async (slug) => {
  const blocks = await fetchPage(slug);
  return { slug, title: blocks.find((block) => block.type === "h1")?.text ?? slug };
}));
circuits.collectionItems = [
  ...circuits.collectionItems,
  ...tourPages.slice(-2),
];

const excursions = parseExcursions(await fetchPage("excursions"));
const sitePages = { categories, circuits, excursions };

if (process.argv.includes("--check")) {
  const localSitePages = JSON.parse(await readFile(outputPath, "utf8"));
  if (JSON.stringify(localSitePages) !== JSON.stringify(sitePages)) {
    throw new Error("The local category, circuits or excursion content differs from the current original site.");
  }
  const excursionCount = excursions.sections.reduce((total, section) => total + section.items.length, 0);
  process.stdout.write(`Verified ${categories.length} regional pages, ${circuits.collectionItems.length} circuit cards and ${excursionCount} excursion services against the original site.\n`);
} else {
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(sitePages, null, 2)}\n`, "utf8");
  process.stdout.write(`Imported original category, circuits and excursion content to ${outputPath}\n`);
}
