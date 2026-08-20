import { cloudinaryImage } from "@/lib/tour-media";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  relatedHref: string;
  relatedLabel: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "meilleure-periode-trekking-maroc",
    title: "Quelle est la meilleure période pour faire un trek au Maroc ?",
    excerpt: "Atlas, Toubkal, M’Goun ou Sahara : choisissez votre saison selon la région, l’altitude et le type de randonnée recherché.",
    description: "Guide des saisons pour préparer un trek au Maroc : météo, températures, enneigement et meilleures périodes pour l’Atlas et le Sahara.",
    category: "Préparer son trek",
    publishedAt: "2026-08-20",
    updatedAt: "2026-08-20",
    readingTime: "7 min",
    image: cloudinaryImage("2edbc427-c275-4e87-a012-e720aa814429_gloz1y"),
    imageAlt: "Randonneurs traversant un torrent dans une vallée du Haut Atlas",
    relatedHref: "/circuits",
    relatedLabel: "Découvrir tous nos treks au Maroc",
    sections: [
      {
        heading: "Le Maroc se parcourt à pied toute l’année",
        paragraphs: [
          "Il n’existe pas une seule saison idéale pour tout le Maroc. Le relief et l’altitude créent des conditions très différentes entre les sommets du Haut Atlas, les plateaux de l’Anti-Atlas et les dunes du Sahara.",
          "Le bon choix dépend donc de votre destination, de votre niveau et de votre tolérance à la chaleur ou au froid. Un itinéraire bien choisi permet de marcher dans de bonnes conditions presque chaque mois de l’année.",
        ],
      },
      {
        heading: "Printemps : vallées fleuries et températures douces",
        paragraphs: [
          "De mars à mai, les vallées de l’Atlas sont particulièrement verdoyantes. C’est une excellente période pour les villages amazighs, le Dadès, la Vallée des Roses, le Siroua et le Jbel Saghro.",
          "En haute montagne, la neige peut encore couvrir les cols et le sommet du Toubkal. Selon l’année et l’altitude, crampons et piolet restent parfois nécessaires.",
        ],
        bullets: ["Mars et avril : Anti-Atlas, Saghro et vallées", "Mai : M’Goun, Toubkal et randonnées d’altitude", "Floraisons et journées généralement tempérées"],
      },
      {
        heading: "Été : privilégier les itinéraires d’altitude",
        paragraphs: [
          "De juin à septembre, la chaleur est forte dans le sud et le désert. Nous privilégions alors le Haut Atlas, où l’altitude apporte des nuits fraîches et des températures plus agréables pendant la marche.",
          "C’est la saison classique pour l’ascension estivale du Toubkal, la traversée du M’Goun et les itinéraires entre hauts cols et bergeries.",
        ],
      },
      {
        heading: "Automne et hiver : Anti-Atlas et désert",
        paragraphs: [
          "Septembre à novembre offre souvent une météo stable dans l’ensemble du pays. À partir de décembre, le désert, la vallée du Draa et le Jbel Saghro deviennent les destinations les plus confortables.",
          "Les treks hivernaux dans le Toubkal sont possibles, mais ils demandent une expérience adaptée, un guide et du matériel de montagne. Les conditions doivent toujours être vérifiées avant le départ.",
        ],
      },
    ],
  },
  {
    slug: "ascension-toubkal-guide-pratique",
    title: "Ascension du Toubkal : guide pratique avant de partir",
    excerpt: "Durée, difficulté, altitude, équipement et accompagnement : l’essentiel pour préparer l’ascension du plus haut sommet d’Afrique du Nord.",
    description: "Préparez votre ascension du Toubkal : difficulté, itinéraire depuis Imlil, altitude, équipement, guide et conseils d’acclimatation.",
    category: "Toubkal",
    publishedAt: "2026-08-20",
    updatedAt: "2026-08-20",
    readingTime: "8 min",
    image: cloudinaryImage("4796C7E6-F03B-4847-B866-107C876E9AD7_nfgfpq"),
    imageAlt: "Randonneurs montant vers les sommets enneigés du massif du Toubkal",
    relatedHref: "/haut-atlas-toubkal",
    relatedLabel: "Voir les circuits du Toubkal",
    sections: [
      {
        heading: "Le Toubkal, sommet du Maroc à 4 167 mètres",
        paragraphs: [
          "Le Jbel Toubkal domine le Haut Atlas et constitue le point culminant du Maroc et de l’Afrique du Nord. Le départ classique se fait depuis Imlil, village de montagne situé à environ 65 kilomètres de Marrakech.",
          "L’ascension estivale ne comporte généralement pas de passage d’escalade technique, mais l’altitude, la pente et la longueur des journées exigent une bonne condition physique.",
        ],
      },
      {
        heading: "Combien de jours faut-il prévoir ?",
        paragraphs: [
          "Une ascension directe s’organise généralement en deux ou trois jours depuis Imlil. Pour mieux s’acclimater et découvrir les villages, nous conseillons un circuit plus progressif de quatre jours ou davantage.",
        ],
        bullets: ["2 jours : formule rapide pour marcheurs entraînés", "3 à 4 jours : rythme plus progressif", "Une semaine : villages amazighs et sommet du Toubkal"],
      },
      {
        heading: "Difficulté et acclimatation",
        paragraphs: [
          "Le manque d’oxygène se ressent au-dessus de 3 000 mètres. Il est important de marcher lentement, de boire régulièrement et de signaler immédiatement tout mal de tête persistant, nausée ou fatigue inhabituelle.",
          "Un itinéraire progressif ne garantit pas l’absence de mal aigu des montagnes, mais il permet au corps de mieux s’adapter et rend l’expérience plus agréable.",
        ],
      },
      {
        heading: "Quel équipement emporter ?",
        paragraphs: [
          "En été, prévoyez des chaussures de randonnée, plusieurs couches de vêtements, une protection solaire, une lampe frontale et une veste coupe-vent. Les températures peuvent être froides avant le lever du soleil, même en juillet.",
          "En hiver, les conditions changent complètement : chaussures adaptées, crampons, piolet et vêtements chauds peuvent être indispensables. La décision finale dépend toujours de la neige et de la météo observées sur place.",
        ],
      },
    ],
  },
  {
    slug: "que-mettre-sac-trek-maroc",
    title: "Que mettre dans son sac pour un trek au Maroc ?",
    excerpt: "Une liste simple et réaliste pour voyager léger tout en restant protégé du soleil, du froid, du vent et de la pluie.",
    description: "Liste d’équipement pour un trek au Maroc : vêtements, chaussures, sac de journée, protection solaire et matériel selon la saison.",
    category: "Équipement",
    publishedAt: "2026-08-20",
    updatedAt: "2026-08-20",
    readingTime: "6 min",
    image: cloudinaryImage("5703513e-d652-45aa-b88d-fad40fd42729_mjtfl5"),
    imageAlt: "Groupe de randonneurs faisant une pause sur un sentier du massif du Toubkal",
    relatedHref: "/informations-pratiques",
    relatedLabel: "Consulter les informations pratiques",
    sections: [
      {
        heading: "Voyager léger sans oublier l’essentiel",
        paragraphs: [
          "Sur la plupart de nos circuits, le bagage principal est transporté par une mule dans l’Atlas ou par un dromadaire dans le désert. Vous marchez uniquement avec un sac de journée contenant l’eau, une couche chaude, la protection solaire et vos affaires personnelles.",
          "Un sac trop lourd fatigue inutilement. Choisissez des vêtements polyvalents, qui sèchent rapidement et peuvent être superposés lorsque la température change.",
        ],
      },
      {
        heading: "Dans le sac de journée",
        paragraphs: ["Un sac de 20 à 30 litres convient à la majorité des étapes. Gardez toujours les éléments indispensables à portée de main."],
        bullets: ["Gourde ou poche à eau", "Veste coupe-vent et imperméable", "Polaire légère", "Chapeau, lunettes et crème solaire", "Petite pharmacie personnelle", "Téléphone, papiers et argent protégés de l’humidité"],
      },
      {
        heading: "Chaussures et vêtements",
        paragraphs: [
          "Utilisez des chaussures déjà portées, avec une semelle offrant une bonne accroche. Des chaussures montantes sont utiles sur les terrains pierreux, mais une paire basse adaptée peut convenir aux itinéraires faciles.",
          "Prévoyez un pantalon de marche, des hauts respirants, une couche chaude et des vêtements confortables pour le soir. Dans les villages, une tenue sobre respecte mieux les habitudes locales.",
        ],
      },
      {
        heading: "Adapter la liste à la région",
        paragraphs: [
          "Pour le désert, ajoutez un foulard, une protection renforcée contre le soleil et un vêtement chaud pour les nuits. Pour le Haut Atlas au printemps ou en automne, prévoyez davantage de couches thermiques.",
          "Avant chaque départ, nous confirmons les conditions attendues et vous envoyons une liste adaptée à l’itinéraire, à la saison et au type d’hébergement.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
