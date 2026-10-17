import { cloudinaryImage } from "@/lib/tour-media";
import { trekBlogPosts } from "@/lib/trek-blog-posts";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  links?: { href: string; label: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
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
    slug: "trek-vallee-ait-bouguemez-4-5-jours",
    title: "Trek dans la vallée des Aït Bouguemez : 4 ou 5 jours au cœur de la Vallée Heureuse",
    seoTitle: "Trek Aït Bouguemez 4 ou 5 jours | Vallée Heureuse",
    excerpt: "Villages amazighs, champs cultivés et montagnes du Haut Atlas : deux formules faciles de 4 ou 5 jours, au départ de Marrakech.",
    description: "Découvrez notre trek dans la vallée des Aït Bouguemez au départ de Marrakech : itinéraires de 4 ou 5 jours, randonnées faciles, nuits en gîte et rencontres locales.",
    category: "Aït Bouguemez",
    publishedAt: "2026-10-17",
    updatedAt: "2026-10-17",
    readingTime: "9 min",
    image: cloudinaryImage("190c02b9-9459-4a76-996a-1bccabd3f975_gcdjdh"),
    imageAlt: "Maisons en terre dans un village de la vallée des Aït Bouguemez",
    relatedHref: "/contact",
    relatedLabel: "Demander un devis personnalisé",
    sections: [
      {
        heading: "La vallée des Aït Bouguemez, un joyau du Haut Atlas",
        paragraphs: [
          "Située dans le Haut Atlas central, la vallée des Aït Bouguemez est l’une des plus belles destinations de randonnée du Maroc. Surnommée la Vallée Heureuse, elle offre des paysages de champs et de vergers, des villages traditionnels en terre et de magnifiques panoramas sur les montagnes environnantes.",
          "Ce séjour est idéal pour les voyageurs qui souhaitent découvrir le Maroc rural, marcher à leur rythme et partager des moments avec les habitants. Au départ de Marrakech, vous explorez la vallée à pied avec un guide local et profitez de repas préparés pendant les randonnées.",
        ],
        bullets: [
          "Formule de 4 jours et 3 nuits avec deux journées complètes de randonnée",
          "Formule de 5 jours et 4 nuits avec trois journées complètes de randonnée",
          "Hébergement en gîte traditionnel dans la Vallée Heureuse",
          "Randonnées faciles d’environ 3 à 5 heures, adaptées au groupe",
        ],
      },
      {
        heading: "Formule 1 : 4 jours et 3 nuits au départ de Marrakech",
        paragraphs: [
          "Cette formule concentre l’essentiel de la Vallée Heureuse en quatre jours. Après le trajet depuis Marrakech, deux journées de marche permettent de découvrir des secteurs différents avant le retour.",
          "Les temps de marche sont indicatifs. Le guide ajuste les parcours au niveau du groupe, à la saison et aux conditions du jour.",
        ],
        bullets: [
          "Jour 1 — Marrakech – vallée des Aït Bouguemez. Départ le matin via Azilal pour environ 241 km et 4 h 30 de route. Installation dans un gîte traditionnel, puis petite promenade selon l’heure d’arrivée. Dîner et nuit au gîte.",
          "Jour 2 — Première randonnée dans la Vallée Heureuse. Marche de 4 à 5 heures à travers villages amazighs, champs cultivés et vergers. Déjeuner préparé en pleine nature, puis retour au gîte.",
          "Jour 3 — Randonnée et patrimoine amazigh. Nouvel itinéraire entre villages, chemins agricoles et environs de Sidi Moussa. Déjeuner pendant la marche et retour au gîte après 4 à 5 heures de randonnée.",
          "Jour 4 — Vallée des Aït Bouguemez – Marrakech. Petit-déjeuner, trajet de retour à travers le Haut Atlas et arrivée à Marrakech.",
        ],
      },
      {
        heading: "Formule 2 : 5 jours et 4 nuits au départ de Marrakech",
        paragraphs: [
          "La formule de cinq jours ajoute une journée complète de randonnée. Elle laisse davantage de temps pour explorer les sentiers reliant les villages et profiter de l’atmosphère paisible de la vallée.",
          "Le dernier parcours est choisi avec le guide en fonction de vos envies et de votre niveau, ce qui rend cette formule particulièrement souple.",
        ],
        bullets: [
          "Jour 1 — Marrakech – vallée des Aït Bouguemez. Environ 241 km et 4 h 30 de route, installation au gîte et promenade facultative dans les environs.",
          "Jour 2 — Randonnée de 4 à 5 heures à travers villages traditionnels, cultures et vergers. Déjeuner préparé pendant la marche, dîner et nuit au gîte.",
          "Jour 3 — Deuxième randonnée de 4 à 5 heures dans un autre secteur, entre sentiers villageois, terres agricoles, patrimoine local et points de vue sur les montagnes.",
          "Jour 4 — Troisième randonnée de 3 à 5 heures, adaptée à la saison et au groupe. Déjeuner pendant la marche et dernière nuit au gîte.",
          "Jour 5 — Retour à Marrakech par la vallée d’Aït Bou Oulli et Demnate, environ 185 km et 4 heures de route.",
        ],
      },
      {
        heading: "Des nuits en gîte traditionnel",
        paragraphs: [
          "Pendant le séjour, vous êtes accueillis dans un gîte traditionnel de la vallée. Cet hébergement simple et chaleureux permet de découvrir l’hospitalité locale et de partager des repas marocains préparés avec des produits de la région.",
          "La formule de quatre jours comprend trois nuits en gîte ; celle de cinq jours en comprend quatre. L’hébergement exact est confirmé selon les disponibilités et l’itinéraire retenu.",
        ],
      },
      {
        heading: "Niveau de randonnée et accompagnement",
        paragraphs: [
          "Ces circuits s’adressent aux personnes qui souhaitent découvrir la montagne à pied sans entreprendre une ascension technique. Le niveau est facile, sous réserve de choisir un itinéraire adapté à la condition physique du groupe.",
          "Un guide professionnel local accompagne les randonnées. Les repas de midi sont préparés par un cuisinier, avec l’aide d’un muletier lorsque l’organisation le prévoit. Distances, dénivelés et temps de marche définitifs sont confirmés après le choix des parcours.",
        ],
        bullets: [
          "Temps de marche : environ 3 à 5 heures par journée de randonnée",
          "Dénivelé : variable selon le parcours choisi",
          "Accompagnement : guide professionnel local",
          "Repas en randonnée : cuisinier et, selon l’organisation, muletier",
        ],
        links: [{ href: "/blog/que-mettre-sac-trek-maroc", label: "Préparer son sac pour le Haut Atlas" }],
      },
      {
        heading: "Pourquoi choisir Maroc Treks ?",
        paragraphs: [
          "Avec Maroc Treks, vous découvrez le Haut Atlas au rythme de la marche et des rencontres. Le programme met en valeur les villages amazighs, les paysages de la Vallée Heureuse et le patrimoine rural, tout en restant adaptable à vos envies.",
          "La durée, les itinéraires de marche et le rythme peuvent être ajustés selon votre groupe. Notre connaissance du terrain nous permet de proposer un séjour cohérent avec la saison et votre expérience.",
        ],
        links: [
          { href: "/haut-atlas-mgoun", label: "Découvrir les treks du Haut Atlas central" },
          { href: "/randonnee-en-famille-vallee-heureuse-dait-bouguemez-8-jours", label: "Voir aussi le trek famille de 8 jours" },
        ],
      },
      {
        heading: "Réserver votre trek dans la Vallée Heureuse",
        paragraphs: [
          "Choisissez la formule de 4 jours et 3 nuits pour une première découverte avec deux journées complètes de randonnée, ou la formule de 5 jours et 4 nuits pour profiter de trois journées complètes de marche.",
          "Contactez Maroc Treks avec vos dates, le nombre de participants et votre expérience de la randonnée. Nous vous aiderons à choisir les parcours et vous enverrons un devis personnalisé.",
        ],
        links: [{ href: "/contact", label: "Organiser votre trek aux Aït Bouguemez" }],
      },
    ],
  },
  ...trekBlogPosts,
  {
    slug: "haut-atlas-maroc-guide-complet",
    title: "Haut Atlas au Maroc : le guide complet pour randonner au cœur des montagnes",
    seoTitle: "Haut Atlas au Maroc : guide complet de randonnée",
    excerpt: "Paysages, altitude, distances, rythme de marche, saisons, villages, Toubkal et M’Goun : tout comprendre avant de choisir votre trek dans le Haut Atlas.",
    description: "Guide complet du Haut Atlas au Maroc : altitude, difficulté, distances, saisons, villages amazighs, Imlil, Toubkal et M’Goun.",
    category: "Haut Atlas",
    publishedAt: "2026-09-18",
    updatedAt: "2026-09-18",
    readingTime: "12 min",
    image: cloudinaryImage("a8d4d94f-942f-497a-a703-02cc997f161f_c5fqte"),
    imageAlt: "Village amazigh au pied des sommets du Haut Atlas marocain",
    relatedHref: "/circuits",
    relatedLabel: "Découvrir nos treks dans le Haut Atlas",
    sections: [
      {
        heading: "Le Haut Atlas, bien plus que le mont Toubkal",
        paragraphs: [
          "Il y a un moment particulier lorsque l’on quitte Marrakech en direction du sud. La ville et la plaine disparaissent progressivement, l’air change, les villages apparaissent sur les flancs des montagnes et les sommets du Haut Atlas occupent peu à peu tout l’horizon.",
          "Le Haut Atlas marocain est bien plus que le mont Toubkal. C’est un immense territoire de vallées, de cols, de villages amazighs, de cultures en terrasses, de refuges, de sentiers muletiers et de sommets dépassant 4 000 mètres.",
          "Ce guide rassemble ce que les voyageurs ont réellement besoin de comprendre avant de choisir un trek : altitude, rythme, distances, difficulté, saisons, principaux massifs et vie locale.",
        ],
      },
      {
        heading: "Le Haut Atlas, le toit du Maroc",
        paragraphs: [
          "Le Haut Atlas forme la partie la plus élevée de la chaîne de l’Atlas marocain. Son sommet le plus célèbre est le Jbel Toubkal, à 4 167 mètres, point culminant du Maroc et de toute l’Afrique du Nord.",
          "Mais il existe des dizaines de vallées et de sommets qui permettent de vivre des expériences complètement différentes. Autour d’Imlil se trouvent le massif du Toubkal, la vallée d’Azzaden, la vallée de l’Imnane, Tacheddirt et de nombreux cols reliant les villages. Plus loin, le Haut Atlas central abrite notamment les Aït Bougmez et le massif du M’Goun.",
          "Après plus de 20 ans passés à organiser et accompagner des randonnées dans ces montagnes, Maroc Treks a appris qu’un bon itinéraire ne se choisit pas uniquement selon le nombre de kilomètres ou l’altitude du sommet. Il doit correspondre à votre condition physique, à la saison, au temps disponible et surtout à ce que vous voulez vivre dans la montagne.",
        ],
        links: [
          { href: "/haut-atlas-toubkal", label: "Découvrir les treks du Toubkal" },
          { href: "/haut-atlas-mgoun", label: "Explorer le M’Goun" },
        ],
      },
      {
        heading: "À quoi ressemble vraiment le Haut Atlas ?",
        paragraphs: [
          "Le paysage change parfois en quelques heures de marche. Autour des villages, les sentiers traversent des noyers, des vergers, des champs en terrasses et de petits canaux d’irrigation. Plus haut, la végétation s’espace, la roche prend le dessus et les vallées deviennent plus vastes.",
          "Au-dessus de 3 000 mètres, l’ambiance devient presque minérale : pentes de schiste, grandes combes, cols exposés au vent et vues ouvertes sur des chaînes de sommets. C’est cette transition, de la vie des villages à la haute montagne, qui surprend le plus les voyageurs.",
          "Au printemps, certaines vallées sont vertes et fleuries alors que les hauts sommets gardent encore la neige. En été, les fonds de vallée sont secs et lumineux, mais les nuits restent fraîches en altitude. En hiver, les itinéraires élevés peuvent devenir de véritables parcours de montagne sur neige et glace.",
        ],
      },
      {
        heading: "Altitude : de la vallée aux sommets de plus de 4 000 mètres",
        paragraphs: [
          "L’altitude est l’une des grandes particularités du trekking dans le Haut Atlas. Beaucoup de randonnées commencent déjà entre 1 500 et 2 000 mètres. Imlil se situe autour de 1 740 mètres, tandis que les refuges, cols et bivouacs d’altitude peuvent se trouver entre 2 500 et plus de 3 000 mètres.",
          "Au-dessus de 3 000 mètres, le souffle peut devenir plus court et le rythme doit ralentir. Vers 4 000 mètres, même une pente qui paraît simple demande davantage d’énergie. C’est pourquoi nous parlons toujours de dénivelé, de durée et d’altitude en plus de la distance.",
          "Pour une première expérience en haute montagne, une progression plus lente et une nuit supplémentaire en altitude peuvent rendre l’expérience beaucoup plus confortable.",
        ],
        links: [{ href: "/blog/ascension-toubkal-guide-pratique", label: "Lire le guide de l’ascension du Toubkal" }],
      },
      {
        heading: "Combien de kilomètres marche-t-on par jour ?",
        paragraphs: [
          "Dans le Haut Atlas, les kilomètres racontent seulement une partie de l’histoire. Une étape classique de trek peut représenter environ 8 à 15 kilomètres et 5 à 7 heures de marche. Certaines journées sont plus courtes mais plus raides ; d’autres sont plus longues sur un terrain plus roulant.",
          "Dix kilomètres avec 1 000 mètres de montée sur un sentier rocailleux ne ressemblent en rien à dix kilomètres sur terrain plat. L’altitude, la chaleur, le vent, l’état du sentier, le poids du sac et la longueur des descentes changent la difficulté réelle.",
          "C’est pourquoi le rythme doit être construit autour des personnes plutôt que d’une vitesse théorique. Sur un trek privé, les pauses et variantes peuvent être adaptées au niveau du groupe.",
        ],
      },
      {
        heading: "Le rythme de marche : régulier plutôt que rapide",
        paragraphs: [
          "Le meilleur rythme dans l’Atlas n’est pas celui qui permet de dépasser les autres. C’est celui que vous pouvez conserver pendant plusieurs heures sans vous épuiser. En altitude, partir trop vite se paie souvent plus tard.",
          "Un départ calme, de courtes pauses, une hydratation régulière et une alimentation simple permettent de mieux profiter de la journée. Le guide observe aussi la respiration, la fatigue et l’évolution de la météo afin d’ajuster le programme.",
          "Ce rythme laisse aussi la place aux rencontres, aux paysages, au thé et aux moments de pause qui font partie du voyage.",
        ],
      },
      {
        heading: "Imlil et le massif du Toubkal",
        paragraphs: [
          "Imlil est la porte d’entrée la plus connue du Haut Atlas occidental. Depuis ce village partent des sentiers vers Aremd, Sidi Chamharouch, le refuge du Toubkal, la vallée d’Azzaden et de nombreux cols.",
          "L’ascension du Toubkal est l’objectif le plus célèbre. En conditions estivales normales, l’itinéraire classique est une randonnée de haute montagne plutôt qu’une escalade technique, mais l’altitude, le dénivelé et la longueur des journées demandent une bonne condition physique.",
          "Pour ceux qui ne recherchent pas absolument un sommet, les vallées voisines offrent une expérience plus culturelle : plusieurs villages, des gîtes, des cols et un rythme plus progressif.",
        ],
        links: [
          { href: "/circuit-toubkal-6-jours-lac-ifni", label: "Grande boucle du Toubkal par le lac d’Ifni" },
          { href: "/randonnee-dans-latlas", label: "Voir le Tour complet du Toubkal" },
          { href: "/randonnee-berbere-avec-ascension-du-toubkal-8-jours", label: "Villages amazighs et Toubkal" },
        ],
      },
      {
        heading: "Azzaden, Imnane et Oukaïmeden : marcher de vallée en vallée",
        paragraphs: [
          "À l’ouest d’Imlil, la vallée d’Azzaden offre des paysages plus ouverts et des villages répartis le long des versants. Les itinéraires passant par Tizi Mzik et Tamsoult permettent de combiner villages, cascades, refuge et vues sur les hauts sommets.",
          "À l’est, la vallée de l’Imnane et les environs d’Oukaïmeden alternent pistes de montagne, sentiers muletiers, plateaux et villages. Ces secteurs sont parfaits pour ceux qui veulent marcher plusieurs jours sans faire du Toubkal l’unique objectif.",
          "Franchir un col est l’une des meilleures façons de comprendre la géographie du Haut Atlas : en quelques pas, une nouvelle vallée, une nouvelle architecture et parfois une végétation différente apparaissent.",
        ],
      },
      {
        heading: "Aït Bougmez et M’Goun : un Haut Atlas plus sauvage",
        paragraphs: [
          "Plus à l’est, le Haut Atlas central change d’échelle. La vallée des Aït Bougmez, souvent appelée la Vallée Heureuse, est entourée de villages en terre, de champs cultivés et de montagnes aux formes plus larges.",
          "Le massif du M’Goun approche 4 070 mètres et propose une expérience différente du Toubkal. Les étapes sont souvent plus isolées, les traversées plus longues et les possibilités de bivouac plus nombreuses.",
          "Ce secteur convient particulièrement aux personnes qui disposent de davantage de temps et recherchent un vrai voyage itinérant plutôt qu’une seule ascension.",
        ],
        links: [{ href: "/haut-atlas-mgoun", label: "Découvrir les treks du M’Goun et d’Aït Bougmez" }],
      },
      {
        heading: "Quelles activités peut-on faire dans le Haut Atlas ?",
        paragraphs: [
          "La randonnée reste l’activité principale, mais elle prend de nombreuses formes : balade entre villages, trek itinérant, ascension de sommet, bivouac, trek hivernal ou VTT selon la région et la saison.",
          "Une famille peut marcher quelques heures entre les villages ; un sportif peut viser un sommet de 4 000 mètres ; un groupe peut traverser plusieurs vallées avec les bagages transportés par mule lorsque l’itinéraire et la saison le permettent.",
          "Des journées culturelles, visites de marchés et nuits chez l’habitant peuvent aussi être intégrées pour donner davantage de profondeur au voyage.",
        ],
        links: [{ href: "/circuits", label: "Voir tous les circuits de randonnée au Maroc" }],
      },
      {
        heading: "Quelle est la meilleure période pour randonner ?",
        paragraphs: [
          "Il n’existe pas une seule meilleure saison pour tout le Haut Atlas. Le printemps apporte de l’eau et de la verdure dans les vallées, mais la neige peut rester présente sur les hauts cols. De la fin du printemps au début de l’automne, de nombreux itinéraires de haute montagne deviennent plus accessibles à pied.",
          "Juillet et août permettent de marcher en altitude, avec des départs matinaux pour éviter la chaleur des vallées basses. Septembre et octobre sont souvent appréciés pour leurs températures plus douces. En hiver, neige, glace et journées plus courtes imposent un équipement et une expérience adaptés.",
          "La météo de montagne reste variable en toute saison : un programme sérieux doit garder une marge d’adaptation.",
        ],
        links: [{ href: "/blog/meilleure-periode-trekking-maroc", label: "Choisir la meilleure période pour un trek au Maroc" }],
      },
      {
        heading: "Quel niveau faut-il pour un trek dans le Haut Atlas ?",
        paragraphs: [
          "Le Haut Atlas n’est pas réservé aux grands sportifs. Il existe des promenades faciles autour des villages, des circuits modérés avec quatre à six heures de marche et des itinéraires beaucoup plus exigeants.",
          "Pour une personne active qui marche régulièrement, un trek modéré de plusieurs jours est souvent accessible avec une préparation simple. Pour un sommet à plus de 4 000 mètres ou une longue traversée, une meilleure endurance est nécessaire.",
          "La bonne question n’est donc pas « suis-je assez fort pour l’Atlas ? », mais « quel itinéraire correspond à mon niveau ? ».",
        ],
      },
      {
        heading: "Où dort-on pendant un trek ?",
        paragraphs: [
          "Dans les vallées, on dort souvent dans des gîtes, maisons d’hôtes ou petites auberges de village. En haute montagne, les refuges permettent de dormir près des sommets. Dans les régions plus isolées, le bivouac peut être la meilleure solution.",
          "Le confort peut être adapté au voyage : certains recherchent une aventure simple, d’autres préfèrent combiner journées de marche et hébergements plus confortables dans la vallée.",
        ],
      },
      {
        heading: "La culture amazighe fait partie du sentier",
        paragraphs: [
          "Le Haut Atlas est une montagne habitée. Les sentiers relient depuis longtemps villages, champs, pâturages et marchés. Marcher ici signifie traverser un territoire vivant, pas un décor vide.",
          "Agriculture en terrasses, élevage, transport à dos de mule, thé, pain et repas partagés font encore partie du quotidien. Voyager avec respect signifie demander avant de photographier une personne, limiter les déchets et respecter les lieux religieux et les habitudes locales.",
        ],
      },
      {
        heading: "Que mettre dans son sac ?",
        paragraphs: [
          "Même pour une randonnée ensoleillée, la montagne demande plusieurs couches : veste coupe-vent, protection solaire, eau, lunettes, chapeau et bonnes chaussures. Pour les départs tôt le matin, une couche chaude reste utile même en été.",
          "En hiver, la liste change complètement : chaussures adaptées, crampons, piolet, gants chauds et vêtements techniques peuvent devenir indispensables. Le matériel exact doit être choisi selon l’itinéraire et les conditions réelles.",
        ],
        links: [{ href: "/blog/que-mettre-sac-trek-maroc", label: "Consulter la liste d’équipement" }],
      },
      {
        heading: "Combien de jours prévoir ?",
        paragraphs: [
          "Une journée suffit pour une première découverte autour d’Imlil. Deux à trois jours permettent un mini-trek ou une ascension rapide du Toubkal pour les marcheurs entraînés. Quatre à six jours offrent un meilleur équilibre entre vallées, cols et acclimatation. Une semaine ou davantage ouvre la porte aux traversées plus complètes et au Haut Atlas central.",
          "Le meilleur trek n’est pas forcément le plus haut ou le plus long. C’est celui qui vous laisse le temps de regarder autour de vous, de marcher à un rythme durable et de rentrer avec l’impression d’avoir réellement découvert la montagne.",
        ],
      },
      {
        heading: "Questions fréquentes sur le Haut Atlas",
        paragraphs: [
          "Peut-on découvrir le Haut Atlas sans être un grand randonneur ? Oui. De nombreuses vallées permettent des randonnées courtes et modulables.",
          "Le Toubkal est-il technique ? En conditions estivales normales, la voie classique ne demande généralement pas d’escalade technique, mais l’altitude, le dénivelé et la durée en font une randonnée exigeante. En hiver, neige et glace changent complètement le niveau technique.",
          "Peut-on marcher toute l’année ? Oui, mais pas sur le même itinéraire. Les saisons déterminent les secteurs et les altitudes les plus adaptés.",
        ],
      },
      {
        heading: "Découvrir le Haut Atlas avec une équipe locale",
        paragraphs: [
          "Maroc Treks organise des randonnées et treks dans ces montagnes depuis plus de vingt ans. Cette expérience permet de savoir quand ralentir, quelle vallée choisir selon la saison, comment adapter une étape et quelles alternatives utiliser lorsque la météo change.",
          "Que vous souhaitiez une journée autour d’Imlil, une ascension du Toubkal, un trek de plusieurs jours dans les villages ou une traversée plus sauvage du Haut Atlas, le programme peut être construit autour de votre rythme et de votre expérience.",
          "Dites-nous simplement combien de jours vous avez, votre niveau habituel de marche et le type de paysage que vous recherchez.",
        ],
        links: [{ href: "/contact", label: "Demander un itinéraire à Maroc Treks" }],
      },
    ],
  },
  {
    slug: "trek-imlil-1-jour-depuis-marrakech",
    title: "Trek Imlil 1 Jour | Randonnée dans le Haut Atlas depuis Marrakech",
    seoTitle: "Trek Imlil 1 jour depuis Marrakech",
    excerpt: "Découvrez Imlil en une journée depuis Marrakech : villages amazighs, cascades, panoramas sur l’Atlas et déjeuner traditionnel.",
    description: "Découvrez Imlil en une journée depuis Marrakech : randonnée dans le Haut Atlas, villages amazighs, cascades et déjeuner traditionnel avec Maroc Treks.",
    category: "Imlil et Toubkal",
    publishedAt: "2026-09-01",
    updatedAt: "2026-09-01",
    readingTime: "8 min",
    image: cloudinaryImage("631113d0-7567-4608-8b87-3ee7c1e8a69a_vsfw6h"),
    imageAlt: "Randonneurs traversant les cultures en terrasses près des villages d’Imlil dans le Haut Atlas",
    relatedHref: "/contact",
    relatedLabel: "Réserver votre randonnée à Imlil",
    sections: [
      {
        heading: "Découvrez les montagnes de l’Atlas en une journée",
        paragraphs: [
          "Vous souhaitez participer à une randonnée à Imlil depuis Marrakech ? Profitez d’une journée exceptionnelle au cœur du Haut Atlas marocain et découvrez ses paysages spectaculaires, ses villages amazighs traditionnels ainsi que les magnifiques vallées qui entourent Imlil.",
          "Cette excursion d’une journée à Imlil est idéale pour les voyageurs souhaitant découvrir les montagnes marocaines sans entreprendre un trek de plusieurs jours.",
        ],
      },
      {
        heading: "Une journée de randonnée au cœur du Haut Atlas",
        paragraphs: [
          "Depuis Marrakech, vous rejoindrez Imlil, l’un des principaux points de départ des randonnées vers le mont Toubkal. Accompagné de votre guide local, vous emprunterez les sentiers de montagne à travers des villages amazighs, des cultures en terrasses et des paysages offrant de magnifiques panoramas sur les sommets de l’Atlas.",
          "L’itinéraire vous conduira notamment à Aremd et aux cascades d’Imlil, deux sites incontournables de la région. Vous profiterez ensuite d’un déjeuner traditionnel marocain et découvrirez l’hospitalité des habitants de la montagne avant d’emprunter le chemin du retour.",
        ],
      },
      {
        heading: "Pourquoi choisir cette randonnée ?",
        paragraphs: ["Une formule privée et adaptable pour découvrir les incontournables d’Imlil à votre rythme."],
        bullets: [
          "Trek d’une journée à Imlil accompagné d’un guide local",
          "Découverte du Haut Atlas marocain et de ses communautés amazighes",
          "Visite des cascades d’Imlil et panoramas sur les montagnes de l’Atlas",
          "Déjeuner traditionnel marocain",
          "Transport disponible depuis Marrakech",
          "Trek privé adaptable aux familles, couples et petits groupes",
        ],
      },
      {
        heading: "Programme du trek Imlil d’une journée",
        paragraphs: [
          "Le départ de votre hôtel ou riad à Marrakech est prévu à 7 h 30. Après un trajet offrant de premières vues sur le Haut Atlas, vous arriverez à Imlil vers 9 h 30 pour rencontrer votre guide local et préparer la randonnée.",
          "La marche commence vers 10 h en direction des villages traditionnels et d’Aremd. Une pause aux cascades d’Imlil est prévue vers 12 h 30, suivie d’un déjeuner dans un restaurant ou chez l’habitant vers 13 h 30.",
          "Vous reprendrez tranquillement les sentiers à travers les villages et les vallées vers 15 h. Le départ d’Imlil pour Marrakech est prévu vers 16 h. Les horaires peuvent être adaptés à votre rythme, à la météo et aux conditions du trek.",
        ],
        bullets: ["7 h 30 : départ de Marrakech", "9 h 30 : arrivée à Imlil et accueil par le guide", "10 h : début de la randonnée vers Aremd", "12 h 30 : découverte des cascades d’Imlil", "13 h 30 : déjeuner traditionnel", "16 h : départ pour Marrakech"],
      },
      {
        heading: "Niveau, durée et altitude",
        paragraphs: ["De niveau facile à modéré, cette randonnée convient aux voyageurs disposant d’une condition physique normale. L’itinéraire peut être adapté aux familles, aux couples et aux petits groupes."],
        bullets: ["Durée de marche : environ 4 à 6 heures", "Durée totale : 1 journée", "Altitude d’Imlil : environ 1 740 mètres"],
      },
      {
        heading: "Tarif du trek à Imlil",
        paragraphs: ["Le tarif est proposé à partir de 45 € par personne. Il varie selon le nombre de participants, le transport depuis Marrakech et les prestations sélectionnées.", "Contactez Maroc Treks pour recevoir une offre personnalisée adaptée à votre groupe et à vos besoins."],
      },
      {
        heading: "Prestations incluses",
        paragraphs: ["La formule standard réunit les services essentiels pour profiter sereinement de votre journée dans le Haut Atlas."],
        bullets: ["Guide local professionnel", "Randonnée privée ou en petit groupe", "Déjeuner traditionnel", "Assistance pendant le trek"],
      },
      {
        heading: "Prestations non incluses",
        paragraphs: ["Les éléments suivants restent à votre charge, sauf mention contraire dans l’offre personnalisée."],
        bullets: ["Transport depuis Marrakech, sauf dans la formule sélectionnée", "Boissons et dépenses personnelles", "Pourboires", "Toute prestation non mentionnée dans le programme"],
      },
      {
        heading: "Réservez votre randonnée à Imlil",
        paragraphs: ["Une seule journée suffit pour découvrir une autre facette du Maroc. Au départ de Marrakech, explorez les montagnes, les villages amazighs et les paysages exceptionnels du Haut Atlas avec Maroc Treks.", "Réservez dès maintenant votre trek d’une journée à Imlil avec Maroc Treks, votre spécialiste des treks et randonnées au Maroc."],
      },
    ],
  },
  {
    slug: "meilleure-periode-trekking-maroc",
    title: "Quelle est la meilleure période pour faire un trek au Maroc ?",
    seoTitle: "Meilleure période pour un trek au Maroc",
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
    seoTitle: "Ascension du Toubkal : itinéraire et conseils",
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
    seoTitle: "Équipement trek Maroc : la liste complète",
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
