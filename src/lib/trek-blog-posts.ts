import type { BlogPost } from "@/lib/blog-posts";
import { getTour, type Tour } from "@/lib/tours";

type TrekGuideConfig = {
  tourSlug: string;
  slug: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  description: string;
  category: string;
  readingTime: string;
  imageAlt: string;
  intro: [string, string];
  terrain: [string, string];
  effort: [string, string];
  season: [string, string];
  audience: [string, string];
};

const categoryLinks: Record<Tour["category"], { href: string; label: string }> = {
  toubkal: { href: "/haut-atlas-toubkal", label: "Comparer les treks du Toubkal" },
  mgoun: { href: "/haut-atlas-mgoun", label: "Découvrir les treks du M’Goun" },
  "dades-roses": { href: "/vallees-dades-roses", label: "Explorer les vallées du Dadès et des Roses" },
  "moyen-atlas": { href: "/circuits", label: "Voir tous les circuits, dont le Moyen Atlas" },
  "anti-atlas": { href: "/antis-atlas", label: "Voir les circuits de l’Anti-Atlas" },
  desert: { href: "/le-desert", label: "Comparer les randonnées dans le désert" },
  atlantique: { href: "/circuits", label: "Voir tous les circuits, dont la côte Atlantique" },
  "grande-traversee": { href: "/circuits", label: "Comparer les grandes randonnées au Maroc" },
};

function itineraryBullets(tour: Tour) {
  return tour.itinerary.map((stage) => `Jour ${stage.day} — ${stage.title}. ${stage.description}`);
}

function buildTrekGuide(config: TrekGuideConfig): BlogPost {
  const tour = getTour(config.tourSlug);

  if (!tour) {
    throw new Error(`Trek blog references an unknown tour: ${config.tourSlug}`);
  }

  const categoryLink = categoryLinks[tour.category];

  return {
    slug: config.slug,
    title: config.title,
    seoTitle: config.seoTitle,
    excerpt: config.excerpt,
    description: config.description,
    category: config.category,
    publishedAt: "2026-09-20",
    updatedAt: "2026-09-20",
    readingTime: config.readingTime,
    image: tour.image,
    imageAlt: config.imageAlt,
    relatedHref: tour.path,
    relatedLabel: `Voir le programme et demander un devis pour ce trek de ${tour.duration}`,
    sections: [
      {
        heading: "Pourquoi nous aimons guider cette grande boucle",
        paragraphs: config.intro,
        links: [{ href: tour.path, label: `Consulter la fiche complète : ${tour.title}` }],
      },
      {
        heading: `L’itinéraire détaillé, jour après jour`,
        paragraphs: [
          `Le voyage dure ${tour.duration}. Le déroulé ci-dessous permet de comprendre la progression réelle, les transferts et l’enchaînement des étapes avant de réserver. Les temps de marche restent indicatifs : le guide adapte le rythme au groupe, au terrain et aux conditions du jour.`,
          "Les journées d’arrivée et de départ font partie du programme, tandis que les étapes de marche constituent le cœur du trek. Cette lecture complète aide à distinguer le temps total du voyage du nombre de journées effectivement passées sur les sentiers.",
        ],
        bullets: itineraryBullets(tour),
      },
      {
        heading: "Paysages, villages et moments forts",
        paragraphs: config.terrain,
        bullets: tour.highlights,
      },
      {
        heading: "Niveau, altitude et préparation physique",
        paragraphs: config.effort,
        bullets: [
          `Durée du voyage : ${tour.duration}`,
          `Niveau annoncé : ${tour.difficulty}`,
          `Altitude maximale ou repère d’altitude : ${tour.maxAltitude}`,
          `Taille du groupe : ${tour.groupSize}`,
          `Formule : ${tour.tourType}`,
        ],
        links: [{ href: "/blog/que-mettre-sac-trek-maroc", label: "Préparer son sac pour un trek au Maroc" }],
      },
      {
        heading: "Quand partir et à quoi s’attendre selon la saison",
        paragraphs: config.season,
        links: [{ href: "/blog/meilleure-periode-trekking-maroc", label: "Lire notre guide des saisons de trekking au Maroc" }],
      },
      {
        heading: "Encadrement, hébergement, repas et transport des bagages",
        paragraphs: [
          "L’intérêt d’un trek accompagné tient aussi à son organisation sur le terrain. Le guide gère l’orientation et le rythme, l’équipe locale prépare les repas et le transport prévu pour l’itinéraire allège les journées de marche. Les hébergements alternent selon les régions entre hôtel, gîte, refuge, logement chez l’habitant et bivouac.",
          "Voici ce que le programme inclut actuellement. Les prestations exactes, les éventuelles nuits supplémentaires et les adaptations privées sont confirmées dans la proposition envoyée avant le départ.",
        ],
        bullets: tour.included,
      },
      {
        heading: "À qui ce trek convient-il ?",
        paragraphs: config.audience,
      },
      {
        heading: "Vérifier le programme et préparer son départ",
        paragraphs: [
          "La fiche du circuit rassemble le prix de référence, les prestations non incluses, les réponses aux questions fréquentes et le formulaire de demande. Utilisez-la pour transmettre vos dates, la composition du groupe et votre expérience de marche ; nous pourrons alors confirmer la faisabilité et proposer les ajustements utiles.",
          "Pour comparer avant de choisir, consultez aussi la page de la région. Vous verrez plus facilement les différences de durée, de niveau, de saison et de paysages entre les itinéraires disponibles.",
        ],
        links: [
          { href: tour.path, label: `Voir les détails et le tarif de ${tour.title}` },
          categoryLink,
          { href: "/contact", label: "Parler de votre projet avec notre équipe locale" },
        ],
      },
    ],
  };
}

const trekGuideConfigs: TrekGuideConfig[] = [
  {
    tourSlug: "circuit-toubkal-6-jours-lac-ifni",
    slug: "circuit-toubkal-6-jours-lac-ifni-guide",
    title: "Circuit du Toubkal en 6 jours par Tacheddirt et le lac d’Ifni : le guide complet",
    seoTitle: "Circuit Toubkal 6 jours et lac d’Ifni : guide",
    excerpt: "Cols de Likemt et d’Ouanoums, lac d’Ifni, bivouacs et sommet du Toubkal : comprendre la grande boucle de 6 jours avant de partir.",
    description: "Guide détaillé du circuit du Toubkal en 6 jours par Tacheddirt, Azib Likemt, Amsouzart et le lac d’Ifni : étapes, niveau, altitude et saison.",
    category: "Toubkal",
    readingTime: "12 min",
    imageAlt: "Lac d’Ifni sur le circuit de six jours autour du Toubkal",
    intro: [
      "Depuis Imlil, beaucoup de voyageurs montent directement au refuge puis au sommet. Quand nous avons six jours devant nous, nous préférons montrer l’autre visage du massif : la vallée de l’Imnane, Tacheddirt, les bergeries de Likemt, Amsouzart et enfin le lac d’Ifni. Le Toubkal arrive seulement à la fin, lorsque le groupe a déjà traversé les versants est et sud de la montagne.",
      "C’est un itinéraire que nous conseillons aux bons marcheurs qui veulent vivre un vrai trek, pas seulement atteindre un sommet. Nous franchissons trois cols à plus de 3 000 mètres, dormons dans des lieux simples et avançons chaque jour vers une vallée différente. Les six jours sont bien remplis : cette boucle est courte sur le calendrier, mais elle reste soutenue sur le terrain.",
    ],
    terrain: [
      "À Tacheddirt, nous quittons peu à peu les villages pour gagner les pâturages d’Azib Likemt, où les bergers installent leurs troupeaux selon la saison. Après le Tizi n’Ououraine, la longue descente vers Amsouzart ramène le groupe parmi les noyers, les cultures en terrasses et les maisons des villages du versant sud.",
      "L’arrivée au lac d’Ifni est l’un des moments que nos groupes retiennent le plus. L’eau apparaît au fond d’un cirque de roche sombre, bien loin de l’itinéraire direct du Toubkal. Le lendemain, le Tizi n’Ouanoums nous fait passer du lac au refuge ; en quelques heures, les villages disparaissent et le paysage devient entièrement minéral.",
    ],
    effort: [
      "Sur ce circuit, nous marchons le plus souvent entre cinq et sept heures. La dernière journée est la plus exigeante : départ avant le lever du soleil, ascension du sommet, retour au refuge puis longue descente vers Imlil. Selon le rythme du groupe, elle peut demander huit à dix heures. Il faut donc arriver avec de l’endurance et être déjà habitué aux montées et descentes sur terrain caillouteux.",
      "Nous avançons sans chercher la vitesse et les premières étapes favorisent l’acclimatation, mais chaque personne réagit différemment au-dessus de 3 000 mètres. Pendant le trek, dites immédiatement au guide si vous ressentez un mal de tête inhabituel, des nausées ou une fatigue anormale. Avant le voyage, plusieurs sorties longues avec du dénivelé constituent la meilleure préparation.",
    ],
    season: [
      "Nous réalisons normalement cette boucle de mai à octobre, lorsque les cols de Likemt, d’Ououraine et d’Ouanoums sont praticables sans conditions hivernales. En mai et parfois en juin, il peut rester de la neige dans les passages élevés. En juillet et août, nous partons tôt pour éviter les heures les plus chaudes dans les vallées et nous surveillons davantage les réserves d’eau.",
      "Juin, septembre et le début d’octobre offrent souvent un bon équilibre, avec des journées suffisamment longues et des températures plus agréables. La montagne décide toujours : selon la neige, le vent ou un orage, notre guide peut adapter l’heure de départ, le lieu du bivouac ou une étape pour garder le groupe en sécurité.",
    ],
    audience: [
      "Nous recommandons cette boucle aux personnes pour qui le chemin compte autant que le sommet. Vous l’apprécierez si vous aimez changer de vallée chaque jour, dormir en gîte, au bivouac et au refuge, et accepter le confort simple de la montagne. Une bonne condition physique est nécessaire, mais l’esprit de groupe et un rythme régulier comptent davantage que la compétition.",
      "Pour une première randonnée de plusieurs jours, nous conseillerons plutôt un circuit de villages plus doux. Si vous avez déjà l’habitude de marcher cinq à sept heures avec du dénivelé et que le lac d’Ifni vous attire autant que le Toubkal, cette grande boucle est l’un des plus beaux itinéraires courts que nous puissions proposer autour d’Imlil.",
    ],
  },
  {
    tourSlug: "randonnee-dans-latlas",
    slug: "tour-toubkal-15-jours-guide",
    title: "Tour du Toubkal en 15 jours : itinéraire complet autour du plus haut sommet du Maroc",
    seoTitle: "Tour du Toubkal 15 jours : itinéraire et conseils",
    excerpt: "Le grand tour du massif, du Tizi n’Tacht au lac d’Ifni en passant par le sommet : étapes, acclimatation, niveau et vie dans les vallées.",
    description: "Préparer le Tour du Toubkal en 15 jours : itinéraire complet, ascension à 4 167 m, lac d’Ifni, cols, villages, difficulté et meilleure saison.",
    category: "Toubkal",
    readingTime: "15 min",
    imageAlt: "Randonneurs sur le grand Tour du massif du Toubkal",
    intro: [
      "Le Tour du Toubkal est destiné à ceux qui veulent comprendre le massif plutôt que collectionner uniquement son sommet. Depuis Imi Oughlad, le sentier traverse les vallées de Tiziane et Tamsoult, rejoint Armed et le refuge, puis bascule vers le lac d’Ifni avant de revenir par Likemt et Tacheddirt.",
      "Les quinze jours incluent l’arrivée, une journée libre à Marrakech et le départ. Entre les deux, la marche compose une boucle cohérente avec un sommet, plusieurs cols et des villages accessibles à pied. La durée crée une vraie immersion et une acclimatation plus progressive qu’une ascension express.",
    ],
    terrain: [
      "La partie occidentale alterne vallées cultivées, noyers, villages en pisé et cols panoramiques. Autour du refuge, le décor devient franchement minéral ; au-delà du Tizi n’Ouanoums, le lac d’Ifni introduit les paysages plus arides du versant sud.",
      "Le retour par Taghbalout, Azib n’Likemt et Tacheddirt révèle un autre Haut Atlas, fait de bergeries saisonnières et de vastes pâturages. Cette diversité est précisément la force du grand tour : aucune vallée ne résume à elle seule le massif.",
    ],
    effort: [
      "Le niveau est modéré au sens technique, car la randonnée ne demande pas d’escalade en conditions estivales. L’effort est néanmoins sérieux : plusieurs étapes de cinq à six heures et demie s’enchaînent, avec des cols élevés et une journée de sommet à 4 167 mètres.",
      "Une préparation axée sur l’endurance et les dénivelés successifs est recommandée. Marcher deux jours de suite pendant l’entraînement permet de tester les chaussures, la récupération et le confort du sac de journée avant de s’engager sur une itinérance aussi longue.",
    ],
    season: [
      "De mai à octobre, les vallées et les grands passages sont les plus accessibles. Mai et juin conservent des paysages plus verts et parfois des névés ; juillet et août sont chauds dans les basses vallées ; septembre et octobre offrent souvent une lumière nette et des nuits plus fraîches.",
      "La neige résiduelle au Toubkal et au col d’Ouanoums peut modifier l’équipement nécessaire. Demandez une confirmation précise avant le départ plutôt que de déduire les conditions de l’année précédente.",
    ],
    audience: [
      "Ce voyage s’adresse aux marcheurs disponibles deux semaines et davantage intéressés par la traversée que par une course au sommet. Il récompense la curiosité pour les villages amazighs, les nuits en gîte ou au bivouac et les changements de paysage quotidiens.",
      "Si vous disposez de moins d’une semaine, la boucle par le lac d’Ifni concentre les points forts. Si vous souhaitez surtout des rencontres et une ascension avec des étapes moins nombreuses, le circuit berbère de huit jours représente un intermédiaire pertinent.",
    ],
  },
  {
    tourSlug: "randonnee-berbere-avec-ascension-du-toubkal-8-jours",
    slug: "villages-berberes-toubkal-8-jours-guide",
    title: "Villages berbères et ascension du Toubkal en 8 jours : bien préparer le voyage",
    seoTitle: "Toubkal en 8 jours et villages berbères : guide",
    excerpt: "Une semaine entre Tiziane, Armed, Tacheddirt et le sommet : ce qu’il faut savoir sur le rythme, les gîtes, l’altitude et l’ascension.",
    description: "Guide du trek de 8 jours dans les villages berbères avec ascension du Toubkal : itinéraire, difficulté, hébergements, altitude et conseils.",
    category: "Toubkal",
    readingTime: "12 min",
    imageAlt: "Village amazigh et sentier du trek de huit jours vers le Toubkal",
    intro: [
      "Cet itinéraire associe deux expériences complémentaires : marcher de village en village dans les vallées habitées du Haut Atlas et atteindre le Jbel Toubkal. Le passage par Tiziane, Armed, Ouanskra et Tamguiste donne davantage de place à la vie locale qu’une simple montée au refuge.",
      "Le sommet reste facultatif. Cette souplesse est importante pour un groupe de niveaux différents : chacun partage le voyage et les étapes culturelles, tandis que l’ascension finale dépend de la forme, de l’acclimatation et des conditions observées par le guide.",
    ],
    terrain: [
      "Les premiers jours traversent des cols à taille humaine, des vergers, des terrasses et des villages reliés par les anciens chemins muletiers. L’approche de Sidi Chamharouch puis du refuge marque la transition vers la haute montagne et ses pentes pierreuses.",
      "Après le sommet, le retour par Armed et la vallée de l’Imnane évite de réduire le circuit à un aller-retour. Les gîtes et les rencontres replacent l’ascension dans son territoire amazigh, avec ses cultures, son architecture et ses rythmes saisonniers.",
    ],
    effort: [
      "Le classement moyen correspond aux étapes de trek, mais le sommet est une journée longue en altitude. Il faut pouvoir marcher plusieurs heures sur des sentiers irréguliers, monter lentement et garder assez d’énergie pour la descente, souvent plus exigeante pour les genoux.",
      "Un entraînement régulier, quelques randonnées avec dénivelé et une paire de chaussures déjà testée suffisent généralement. En hiver, la neige et la glace changent toutefois la nature de l’ascension et peuvent imposer crampons, piolet et expérience adaptée.",
    ],
    season: [
      "Le circuit est proposé toute l’année, mais l’expérience varie fortement. De la fin du printemps au début de l’automne, les chemins sont habituellement secs ; en hiver, les villages restent accessibles tandis que la haute montagne prend un caractère alpin.",
      "Le printemps colore les vallées et l’automne apporte des températures agréables. En été, les départs matinaux évitent la chaleur des basses altitudes. Une vérification des conditions du sommet est indispensable quelle que soit la date.",
    ],
    audience: [
      "Ce trek convient à un premier voyage dans le Haut Atlas si vous êtes en bonne condition et souhaitez équilibrer culture et sommet. Il est également adapté à un petit groupe dont certains membres pourraient préférer renoncer à l’ascension sans perdre l’intérêt du séjour.",
      "Les marcheurs qui privilégient un défi continu choisiront plutôt la boucle soutenue de six jours. Ceux qui veulent approfondir chaque vallée et multiplier les bivouacs trouveront davantage d’ampleur dans le tour complet de quinze jours.",
    ],
  },
  {
    tourSlug: "randonnee-dans-le-haut-atlas-central",
    slug: "trek-mgoun-10-jours-guide",
    title: "Trek du M’Goun en 10 jours : de la Vallée Heureuse au sommet à 4 068 mètres",
    seoTitle: "Trek M’Goun 10 jours : itinéraire et préparation",
    excerpt: "Plateau de Tarkeddit, longue crête du M’Goun, vallées et villages : guide détaillé de la traversée nord-sud du Haut Atlas central.",
    description: "Guide complet du trek du M’Goun en 10 jours : Vallée des Aït Bouguemez, plateau de Tarkeddit, sommet à 4 068 m, niveau et saison.",
    category: "M’Goun",
    readingTime: "13 min",
    imageAlt: "Plateaux du Haut Atlas central sur l’itinéraire du M’Goun",
    intro: [
      "Le M’Goun n’est pas un substitut tranquille au Toubkal. Sa longue crête calcaire, le plateau de Tarkeddit et la traversée vers le versant sud composent une aventure autonome, plus ouverte et souvent plus sauvage. Le voyage commence dans la Vallée Heureuse d’Aït Bouguemez et se termine vers Ouarzazate.",
      "Cette logique nord-sud évite l’aller-retour : on franchit réellement le massif. Le sommet à 4 068 mètres est le point haut, mais les vallées d’Arous, Ifri et Ameskar ainsi que les gorges donnent au parcours sa profondeur géographique et humaine.",
    ],
    terrain: [
      "Aït Bouguemez présente un paysage agricole minutieusement entretenu, encadré de sommets. Plus haut, les azibs et le plateau de Tarkeddit ouvrent un espace minéral où les distances paraissent plus grandes et où la crête du M’Goun domine l’horizon.",
      "La descente vers le sud traverse canyons, villages et reliefs érodés avant Boutaghrar. Les traces de dinosaures, l’architecture de terre et les rencontres avec les habitants complètent une lecture du massif bien plus large que la seule journée d’ascension.",
    ],
    effort: [
      "Le niveau moyen plus reflète une itinérance soutenue et une journée de sommet longue, sur une crête exposée au vent. Le terrain n’est pas une escalade technique en saison estivale, mais l’altitude, les pierriers et l’enchaînement des étapes exigent endurance et stabilité.",
      "Préparez les montées continues, mais aussi les descentes et la récupération entre deux journées. Des bâtons peuvent soulager les genoux. La décision d’emprunter la crête appartient au guide selon la météo, le vent et l’état du groupe.",
    ],
    season: [
      "La fenêtre de mai à octobre correspond à l’ouverture habituelle des hauts passages. Au printemps, les eaux et la végétation animent les vallées tandis que de la neige peut subsister en altitude ; en été, la crête est plus sèche, avec de fortes amplitudes thermiques.",
      "Septembre est souvent recherché pour ses journées stables et moins chaudes, mais aucune période ne garantit l’absence de vent au sommet. Une couche chaude et une protection coupe-vent restent indispensables même lorsque Marrakech connaît de fortes températures.",
    ],
    audience: [
      "Le circuit plaît aux marcheurs qui veulent une vraie traversée et un sommet de 4 000 mètres dans une région moins fréquentée. Il suppose d’accepter des nuits simples, des espaces isolés et des journées où l’équipe avance loin des routes.",
      "Pour un séjour familial dans la même région, la boucle douce d’Aït Bouguemez est mieux adaptée. Pour une expédition plus longue reliant M’Goun et Toubkal, la Grande Traversée de vingt-deux jours constitue l’étape supérieure.",
    ],
  },
  {
    tourSlug: "randonnee-en-famille-vallee-heureuse-dait-bouguemez-8-jours",
    slug: "trek-famille-ait-bouguemez-guide",
    title: "Randonnée en famille à Aït Bouguemez : guide de la Vallée Heureuse avec des enfants",
    seoTitle: "Aït Bouguemez en famille : randonnée et conseils",
    excerpt: "Promenades souples, villages, cascades d’Ouzoud et traces de dinosaures : organiser huit jours dans la Vallée Heureuse en famille.",
    description: "Préparer une randonnée familiale à Aït Bouguemez : étapes faciles, hébergements, traces de dinosaures, meilleure saison et conseils avec enfants.",
    category: "M’Goun",
    readingTime: "11 min",
    imageAlt: "Vallée d’Aït Bouguemez parcourue lors d’une randonnée en famille",
    intro: [
      "La Vallée Heureuse est l’un des rares territoires de haute montagne où l’intérêt ne dépend pas d’un sommet. Les chemins relient des villages, des champs, des greniers collectifs et des sites naturels à une altitude raisonnable. Cela permet de construire des journées motivantes sans imposer une course à la performance.",
      "Le programme de huit jours inclut les transferts et plusieurs promenades modulables autour d’Agouti et de Tabant. La souplesse est essentielle avec des enfants : le guide peut ajuster une boucle, prévoir une pause ou proposer ponctuellement une mule selon l’âge et la fatigue.",
    ],
    terrain: [
      "Les terrasses cultivées, les noyers, les maisons en terre et le cours de l’oued créent un paysage lisible pour les jeunes marcheurs. Les cascades d’Ouzoud ponctuent le trajet, tandis que les empreintes fossilisées de dinosaures apportent une dimension concrète et ludique au séjour.",
      "La vallée reste un lieu de vie agricole. Rencontrer ses habitants avec discrétion, respecter les cultures et demander avant de photographier font partie de l’expérience. Les petites étapes laissent précisément le temps d’observer au lieu de traverser trop vite.",
    ],
    effort: [
      "Le niveau facile et l’altitude maximale indiquée à 1 860 mètres rendent ce circuit plus accessible que les traversées de sommets. Facile ne signifie toutefois pas immobile : les chemins peuvent être caillouteux, le soleil présent et les enfants doivent déjà apprécier plusieurs heures dehors.",
      "Testez avant le voyage une randonnée familiale de durée comparable. Prévoyez des chaussures confortables, des couches adaptées, une protection solaire individuelle et quelques petits encas familiers. Donnez au guide des informations précises sur l’âge et les habitudes de marche de chaque enfant.",
    ],
    season: [
      "D’avril à octobre, la vallée offre une large saison de randonnée. Le printemps met en valeur les cultures et les cours d’eau ; l’été peut être chaud au soleil mais les nuits restent fraîches ; septembre et octobre apportent des températures souvent confortables.",
      "Le calendrier scolaire ne doit pas faire oublier l’amplitude thermique de la montagne. Un vêtement chaud pour le soir et une veste légère contre la pluie sont utiles même au cœur de l’été.",
    ],
    audience: [
      "Ce voyage est conçu pour les familles qui souhaitent partager une découverte culturelle et naturelle, sans objectif d’altitude. Il convient aussi aux grands-parents actifs ou aux groupes multigénérationnels lorsque les capacités de marche sont communiquées à l’avance.",
      "Pour des adolescents déjà sportifs et attirés par un sommet, un programme vers le Toubkal peut être étudié au cas par cas. Pour de jeunes enfants, la Vallée Heureuse offre une base beaucoup plus adaptable et rassurante.",
    ],
  },
  {
    tourSlug: "randonnee-moyen-atlas",
    slug: "trek-moyen-atlas-lacs-cedres-guide",
    title: "Randonnée dans le Moyen Atlas : lacs, cèdres et sources en 8 jours",
    seoTitle: "Randonnée Moyen Atlas 8 jours : guide complet",
    excerpt: "D’Aguelmane Azigza à Zaouiate Ifrane : itinéraire, paysages, saison et niveau d’un trek doux au cœur des lacs et forêts de cèdres.",
    description: "Guide d’un circuit de 8 jours dans le Moyen Atlas : Aguelmane Azigza, 40 sources, Ouiaouene, forêts de cèdres, niveau et saison.",
    category: "Moyen Atlas",
    readingTime: "11 min",
    imageAlt: "Lac naturel et forêt sur un itinéraire de randonnée dans le Moyen Atlas",
    intro: [
      "Le Moyen Atlas propose une autre idée de la randonnée au Maroc. Ici, le voyage suit les aguelmanes, les résurgences et les forêts plutôt que les sommets de 4 000 mètres. L’itinéraire relie Aguelmane Azigza, les 40 sources, Ouiaouene et Zaouiate Ifrane avant Ain Louh.",
      "Cette géographie plus douce favorise l’observation et la marche régulière. Elle intéresse les voyageurs qui recherchent des espaces préservés, un climat plus tempéré et une région encore peu associée au trekking dans les itinéraires classiques.",
    ],
    terrain: [
      "Les lacs naturels aux eaux changeantes alternent avec les plateaux pastoraux et les cédraies. Le relief reste présent, mais il n’impose pas la minéralité ni l’altitude du Haut Atlas. Les villages et les sources structurent les étapes.",
      "La faune, les arbres anciens et les usages ruraux demandent une approche calme. La valeur du circuit vient moins d’un moment spectaculaire unique que de la continuité des paysages d’eau, de forêt et de pâturage.",
    ],
    effort: [
      "Classé facile et culminant autour de 1 769 mètres sur ce programme, le trek est accessible à des marcheurs réguliers. Il faut toutefois être à l’aise avec plusieurs journées consécutives et avec des sentiers naturels parfois boueux ou irréguliers selon la météo.",
      "Une préparation simple faite de marche active et de sorties de quelques heures suffit souvent. Des chaussures avec une bonne adhérence, une protection contre la pluie et des vêtements superposables sont plus utiles qu’un équipement de haute montagne.",
    ],
    season: [
      "La meilleure période indiquée va d’octobre à mai, à l’inverse de plusieurs grands treks du Haut Atlas. Le climat peut être froid et humide en hiver, et la neige n’est pas impossible sur les plateaux : le mot facile décrit le niveau général, pas une météo garantie.",
      "Le printemps met en valeur l’eau et la végétation. L’automne convient aux voyageurs qui recherchent des températures modérées. Pour un départ hivernal, demandez toujours quelles conditions et quels hébergements sont prévus.",
    ],
    audience: [
      "Ce circuit convient aux voyageurs qui préfèrent les écosystèmes, les lacs et les forêts à l’ascension d’un sommet. Il constitue aussi une bonne première itinérance pour vérifier son goût des voyages à pied sur plusieurs jours.",
      "Les marcheurs cherchant des reliefs volcaniques et une culture de transhumance pourront comparer avec le Siroua ; ceux qui souhaitent un univers plus aride en hiver regarderont plutôt le Jbel Saghro.",
    ],
  },
  {
    tourSlug: "randonnee-jbel-saghro",
    slug: "trek-jbel-saghro-8-jours-guide",
    title: "Trek au Jbel Saghro en 8 jours : paysages lunaires et culture des Aït Atta",
    seoTitle: "Trek Jbel Saghro 8 jours : itinéraire et conseils",
    excerpt: "Pitons de roche noire, canyons, plateaux et villages : tout savoir avant une randonnée hivernale dans le massif du Saghro.",
    description: "Guide du trek au Jbel Saghro en 8 jours : itinéraire par Aït Youl, Tagmout et Nkob, paysages, Aït Atta, niveau et meilleure saison.",
    category: "Anti-Atlas",
    readingTime: "12 min",
    imageAlt: "Randonneurs parmi les reliefs rocheux du Jbel Saghro",
    intro: [
      "Le Saghro est la réponse minérale aux neiges du Haut Atlas. Entre le Dadès et le Drâa, ses plateaux sombres, ses aiguilles et ses canyons offrent une grande randonnée d’automne, d’hiver ou de printemps, lorsque les hauts sommets sont moins accessibles.",
      "L’itinéraire part d’Aït Youl, traverse Titkit, Elmers, Tagmout et Irazoun, puis rejoint Nkob. Cette progression d’ouest en est permet de découvrir le territoire des Aït Atta et les paysages liés à la transhumance, sans se limiter à une excursion routière.",
    ],
    terrain: [
      "La roche volcanique dessine des tables, des tours et des vallons presque désertiques. De petites oasis, des amandiers et quelques maisons apparaissent comme des repères dans l’immensité. Les campements et les troupeaux rappellent que ce décor est aussi un territoire pastoral.",
      "La traversée vers Nkob révèle des changements subtils de couleur et de forme. La lumière basse de l’hiver accentue les reliefs, tandis que les nuits dégagées offrent souvent un ciel remarquable loin des grandes villes.",
    ],
    effort: [
      "Le trek est annoncé facile, mais ses étapes atteignent environ cinq heures et demie à six heures. Le défi vient de la répétition, du terrain pierreux et de l’exposition au soleil plus que de l’altitude, le col du Tichka servant ici de repère maximal à 2 260 mètres.",
      "Travaillez l’endurance et habituez vos pieds aux chemins secs. Les bâtons sont utiles dans les descentes et les semelles solides protègent des pierres anguleuses. Buvez régulièrement même lorsque l’air frais masque la transpiration.",
    ],
    season: [
      "D’octobre à mai, les températures sont compatibles avec la marche. Décembre et janvier peuvent apporter des nuits très froides ; avril et mai deviennent plus chauds en journée. L’été est évité en raison de la chaleur dans ce massif aride.",
      "Une journée lumineuse ne garantit pas une nuit douce. Prévoyez une couche thermique et un bon sac de couchage lorsque le programme comprend un bivouac, puis adaptez la protection solaire aux longues zones sans ombre.",
    ],
    audience: [
      "Le Saghro convient à ceux qui aiment les paysages dépouillés, la géologie et les rencontres discrètes plutôt que les grandes ascensions. C’est un excellent choix hivernal pour un marcheur régulier qui souhaite découvrir l’Anti-Atlas.",
      "Si votre priorité est un sommet, le Siroua monte plus haut. Si vous recherchez palmeraies et dunes, la vallée du Drâa offre une expérience saharienne plus marquée.",
    ],
  },
  {
    tourSlug: "randonnee-jbel-siroua",
    slug: "traversee-siroua-toubkal-15-jours-guide",
    title: "Du Jbel Siroua au Toubkal en 15 jours : la traversée entre volcan et haute montagne",
    seoTitle: "Siroua–Toubkal en 15 jours : guide de la traversée",
    excerpt: "Deux sommets, le pays du safran, le lac d’Ifni et le col d’Ouanoums : décryptage d’une grande traversée du sud vers le Toubkal.",
    description: "Guide de la traversée Siroua–Toubkal en 15 jours : ascensions à 3 305 m et 4 167 m, lac d’Ifni, itinéraire, difficulté et saison.",
    category: "Anti-Atlas et Toubkal",
    readingTime: "15 min",
    imageAlt: "Massif volcanique du Siroua sur la traversée vers le Toubkal",
    intro: [
      "Cette traversée relie deux mondes : l’ancien volcan du Siroua et les hautes pentes du Toubkal. Elle commence au sud du Haut Atlas, dans le pays du safran et des igoudars, puis rejoint Amsouzart, le lac d’Ifni et le refuge avant le sommet à 4 167 mètres.",
      "L’intérêt ne réside pas uniquement dans le doublé de sommets. Les azibs, les marchés, les vallées cultivées et le passage progressif des reliefs volcaniques à la haute montagne racontent une continuité géographique rarement visible sur un séjour plus court.",
    ],
    terrain: [
      "Le Siroua juxtapose orgues basaltiques, plateaux, villages de terre et pâturages saisonniers. Les greniers collectifs fortifiés et les cultures de safran témoignent de l’organisation locale autour des ressources et des saisons.",
      "Après la liaison vers le massif du Toubkal, le lac d’Ifni marque un changement spectaculaire. Le Tizi n’Ouanoums conduit ensuite au refuge et au paysage pierreux du sommet, point culminant d’une progression commencée bien plus au sud.",
    ],
    effort: [
      "Le niveau moyen annoncé doit être lu à l’échelle de quinze jours : la difficulté vient de la durée, de l’isolement et de deux ascensions culminant à 3 305 et 4 167 mètres. Certaines étapes atteignent six à huit heures et la récupération devient une compétence à part entière.",
      "Une préparation de plusieurs semaines avec des sorties successives est vivement recommandée. Testez votre équipement, soignez sommeil et hydratation, et acceptez que le guide puisse modifier une ascension selon la météo ou l’état du groupe.",
    ],
    season: [
      "La traversée est conçue de mai à octobre afin de rendre compatibles les hauts passages du Toubkal et les plateaux du Siroua. Le début de saison peut garder de la neige en altitude ; le cœur de l’été est chaud dans les vallées ; l’automne raccourcit les journées.",
      "Juin et septembre sont souvent de bons compromis, sans supprimer l’amplitude thermique. Il faut emporter une protection solaire sérieuse et des couches chaudes capables de couvrir les deux extrêmes du voyage.",
    ],
    audience: [
      "Ce trek s’adresse aux voyageurs qui veulent une grande itinérance, deux massifs et une forte dimension culturelle. Il faut apprécier la simplicité des bivouacs et la répétition des journées de marche autant que les panoramas sommitaux.",
      "Si quinze jours sont trop longs, le circuit de huit jours au Siroua se concentre sur le volcan. Si le Toubkal et le lac d’Ifni sont prioritaires, la boucle de six jours offre une version plus compacte et plus soutenue.",
    ],
  },
  {
    tourSlug: "randonnee-jbel-siroua-circuit-de-8-jours-dans-lanti-atlas",
    slug: "trek-jbel-siroua-8-jours-guide",
    title: "Trek du Jbel Siroua en 8 jours : sommet volcanique, safran et villages amazighs",
    seoTitle: "Trek Jbel Siroua 8 jours : guide du circuit",
    excerpt: "De Tamlakout au sommet à 3 305 mètres : itinéraire, difficulté, paysages volcaniques et conseils pour randonner au Siroua.",
    description: "Guide du trek du Jbel Siroua en 8 jours : itinéraire, ascension à 3 305 m, villages amazighs, igoudars, niveau et meilleure saison.",
    category: "Anti-Atlas",
    readingTime: "12 min",
    imageAlt: "Reliefs volcaniques et villages sur le trek du Jbel Siroua",
    intro: [
      "À mi-chemin entre Haut Atlas et Anti-Atlas, le Siroua possède une identité volcanique unique. Le circuit de huit jours se concentre sur le massif : arrivée par le Tichka et Anzal, progression depuis Tamlakout et Aït Tigua, ascension du sommet puis descente par les bergeries d’Iriri.",
      "Cette durée permet d’associer un objectif à 3 305 mètres et la découverte des villages producteurs de safran. Elle conserve la logique d’une itinérance sans exiger les quinze jours de la grande liaison jusqu’au Toubkal.",
    ],
    terrain: [
      "Les cheminées de basalte, plateaux d’altitude et vallées cultivées donnent au Siroua un relief très différent des calcaires du M’Goun. Les villages de terre, les igoudars et les azibs montrent comment les habitants ont organisé stockage, élevage et agriculture.",
      "Le sommet ouvre un panorama vers les chaînes voisines. La descente vers Iriri et Tamazirte traverse des espaces pastoraux où la présence humaine change avec les saisons, ce qui explique l’importance du calendrier dans l’ambiance du trek.",
    ],
    effort: [
      "Le circuit est classé facile dans son ensemble, mais l’ascension du Siroua demande environ six heures et atteint 3 305 mètres. Les étapes précédentes de quatre à quatre heures et demie construisent une acclimatation progressive.",
      "Une personne en bonne condition peut s’y préparer avec des randonnées hebdomadaires et du dénivelé. Le terrain volcanique nécessite une bonne adhérence ; des bâtons et une protection contre le vent améliorent le confort sur les parties exposées.",
    ],
    season: [
      "D’avril à octobre, les hauts passages sont les plus adaptés au trekking. Le printemps peut encore être frais au sommet et met en valeur les vallées ; l’été est sec et lumineux ; l’automne correspond à une période importante dans les villages du safran.",
      "Le vent peut abaisser fortement la température ressentie à 3 305 mètres. Une veste coupe-vent et une couche chaude restent nécessaires, même si les étapes basses se déroulent sous un soleil généreux.",
    ],
    audience: [
      "Le Siroua convient à un marcheur souhaitant atteindre un vrai sommet sans s’engager immédiatement à plus de 4 000 mètres. Il séduira aussi les voyageurs intéressés par les paysages volcaniques et l’économie rurale du safran.",
      "Pour un voyage d’hiver, le Saghro possède une fenêtre saisonnière plus large. Pour prolonger l’aventure jusqu’au lac d’Ifni et au Toubkal, la traversée de quinze jours reprend le Siroua comme première partie.",
    ],
  },
  {
    tourSlug: "randonnee-region-de-tafraout-circuit-de-8-jours-dans-lanti-atlas",
    slug: "trek-tafraout-anti-atlas-8-jours-guide",
    title: "Trek autour de Tafraout en 8 jours : villages, amandiers et Djebel Lekst",
    seoTitle: "Trek Tafraout 8 jours : guide de l’Anti-Atlas",
    excerpt: "Sentiers d’amandiers, vallées fraîches, roches étonnantes et Djebel Lekst : préparer une randonnée de village en village à Tafraout.",
    description: "Guide du trek de Tafraout en 8 jours dans l’Anti-Atlas : Djebel Lekst, villages, amandiers, arganiers, difficulté et meilleure saison.",
    category: "Anti-Atlas",
    readingTime: "12 min",
    imageAlt: "Rochers et amandiers sur un sentier de randonnée près de Tafraout",
    intro: [
      "La région de Tafraout combine un relief de granite spectaculaire et des vallées habitées où poussent amandiers, arganiers et palmiers. Le trek avance de Targa Touchka vers Tagdichte, Tirouft et Aït Iftane avant la longue étape du Djebel Lekst et l’arrivée à Tafraout.",
      "Le voyage est une traversée de village en village, pas une suite de points de vue accessibles en voiture. Un véhicule transporte ici les bagages vers les bivouacs, car les mules sont moins courantes dans cette partie de l’Anti-Atlas.",
    ],
    terrain: [
      "Les rochers arrondis, les parois du Lekst et les palmeraies créent des contrastes de couleur particulièrement forts. Dans les fonds de vallée, les cultures et les arbres fruitiers témoignent d’une gestion précise de l’eau.",
      "Les villages permettent d’observer l’architecture et les activités quotidiennes sans folkloriser les rencontres. La floraison des amandiers transforme le paysage en janvier et février, alors que leur récolte appartient à une autre saison.",
    ],
    effort: [
      "La plupart des journées comptent quatre à cinq heures et demie de marche, mais l’étape du Djebel Lekst peut atteindre huit heures. C’est elle qui demande le plus d’endurance, malgré le classement global facile du circuit.",
      "Préparez une sortie longue avant le départ et habituez-vous aux chemins rocheux. Le portage principal est assuré, mais votre sac de journée doit contenir assez d’eau, une protection solaire et une couche contre le vent.",
    ],
    season: [
      "D’octobre à mai, les températures sont les plus propices. Janvier et février peuvent coïncider avec les amandiers en fleur, sans que la date précise soit garantie. Les soirées hivernales restent fraîches, surtout en bivouac.",
      "Au printemps, la chaleur augmente progressivement. Les départs matinaux et l’hydratation deviennent essentiels sur les sections exposées, tandis que les vallées offrent des pauses plus tempérées.",
    ],
    audience: [
      "Ce trek plaît aux voyageurs attirés par les villages, la botanique, l’architecture rurale et les formes géologiques. Il offre un bon équilibre entre marche accessible et une grande journée plus ambitieuse au Djebel Lekst.",
      "Pour des paysages volcaniques et un sommet plus élevé, comparez le Siroua. Pour une atmosphère plus aride et pastorale en plein hiver, le Saghro constitue une autre lecture de l’Anti-Atlas.",
    ],
  },
  {
    tourSlug: "randonnee-desert-marocain-circuit-de-8-jours-vallee-du-draa",
    slug: "trek-vallee-draa-desert-8-jours-guide",
    title: "Randonnée dans la vallée du Drâa en 8 jours : oasis, dunes et bivouac",
    seoTitle: "Vallée du Drâa à pied en 8 jours : guide",
    excerpt: "De Tidri à M’Hamid, marcher entre palmeraies, oueds et dunes avec une équipe chamelière : itinéraire et conseils pratiques.",
    description: "Guide d’une randonnée de 8 jours dans la vallée du Drâa : oasis, dunes de Rgabi, Mzouria, Oued Naam, bivouacs et saison idéale.",
    category: "Désert marocain",
    readingTime: "12 min",
    imageAlt: "Caravane et dunes sur une randonnée dans la vallée du Drâa",
    intro: [
      "Ce circuit suit la transition entre la vallée habitée et le désert. Après la route vers Zagora, la marche relie Tidri, les dunes de Rgabi, Mzouria, Oued Naam et la palmeraie de M’Hamid. On découvre ainsi l’oasis comme système de vie avant l’immersion dans les espaces sableux.",
      "L’équipe chamelière transporte l’intendance et les bagages. Les participants marchent à leur rythme avec un sac de journée ; les dromadaires sont une composante logistique de la caravane, et non une promesse de randonnée montée permanente.",
    ],
    terrain: [
      "Les étapes alternent palmeraies, lits d’oued, plateaux pierreux et cordons de dunes. Cette variété corrige l’image d’un Sahara uniformément couvert de sable. Les ksour et les villages fortifiés montrent aussi la manière dont l’habitat s’est adapté à la chaleur et à la rareté de l’eau.",
      "Le lever et le coucher du soleil donnent aux bivouacs leur rythme, mais les heures intermédiaires comptent tout autant : lecture des traces, observation du vent, préparation du thé et installation du camp avec l’équipe locale.",
    ],
    effort: [
      "Les journées de marche durent environ quatre à cinq heures. Le dénivelé est limité, mais le sable sollicite les mollets et la chaleur augmente l’effort perçu. Il faut pouvoir avancer plusieurs jours de suite sans rechercher un terrain parfaitement régulier.",
      "Entraînez-vous à marcher, puis accordez une attention particulière aux pieds, à l’hydratation et au soleil. Des chaussures légères fermées ou des chaussures de randonnée souples sont généralement préférables à des bottes très rigides.",
    ],
    season: [
      "La fenêtre d’octobre à avril évite les chaleurs extrêmes de l’été. En décembre et janvier, les journées peuvent être douces mais les nuits au bivouac sont froides. En mars et avril, la chaleur revient plus vite pendant l’après-midi.",
      "Prévoyez des vêtements couvrants et respirants, une protection solaire et une vraie couche chaude pour la nuit. Le vent peut soulever du sable et conduire l’équipe à adapter l’emplacement du camp.",
    ],
    audience: [
      "Cette randonnée convient à ceux qui cherchent une immersion lente dans le désert et s’intéressent autant aux oasis qu’aux dunes. Elle ne demande pas l’expérience de la haute montagne, mais suppose d’apprécier le bivouac, l’eau mesurée et le confort simple.",
      "Si votre priorité est d’atteindre les grandes dunes de Chegaga, le circuit dédié suit une trajectoire différente par le Jbel Bani. Comparez les deux itinéraires selon l’importance que vous accordez à la vallée du Drâa ou aux grands ergs.",
    ],
  },
  {
    tourSlug: "randonnee-dunes-de-chegaga-circuit-de-8-jours-desert-marocain",
    slug: "trek-dunes-chegaga-8-jours-guide",
    title: "Trek aux dunes de Chegaga en 8 jours : itinéraire et conseils pour le bivouac",
    seoTitle: "Trek dunes de Chegaga 8 jours : guide pratique",
    excerpt: "Jbel Bani, Oued Lemhasser, grandes dunes et nuits sous les étoiles : comprendre une randonnée chamelière jusqu’à Chegaga.",
    description: "Guide du trek de 8 jours aux dunes de Chegaga : étapes par Oued Lemhasser et Bougarn, bivouac, difficulté, équipement et saison.",
    category: "Désert marocain",
    readingTime: "12 min",
    imageAlt: "Grandes dunes de Chegaga au coucher du soleil pendant un trek",
    intro: [
      "Chegaga est l’objectif central de ce circuit, mais l’approche compte autant que l’arrivée. Depuis le plateau d’El Faija, la marche franchit le Jbel Bani par Oum Laachar, suit Oued Lemhasser puis rejoint les grandes dunes avant Bougarn et Oued Naam.",
      "Ce parcours montre comment le désert change de texture : hamada, relief rocheux, oued sec et sable. L’équipe chamelière rend possible plusieurs nuits loin des routes en transportant eau, cuisine, campement et bagages principaux.",
    ],
    terrain: [
      "Le contraste entre la barrière sombre du Jbel Bani et les dunes blondes donne au trek sa progression visuelle. Les grandes formes de Chegaga ne surgissent qu’après plusieurs étapes, ce qui préserve la sensation d’approche et d’éloignement.",
      "Bougarn et Oued Naam prolongent le voyage au-delà du site le plus connu. Les camps suivent les conditions de vent et l’accès à l’eau ; ils ne sont pas de simples hôtels fixes posés dans les dunes.",
    ],
    effort: [
      "Le niveau général est facile, mais les journées peuvent atteindre cinq heures et demie à six heures. Marcher dans le sable et sur les plateaux caillouteux fatigue différemment d’un sentier de montagne, sans offrir beaucoup d’ombre.",
      "Une endurance ordinaire suffit si elle est entretenue. Protégez les pieds du sable et des frottements, buvez avant d’avoir soif et gardez le visage couvert lorsque le vent se lève. Le guide organise les pauses en fonction de la température.",
    ],
    season: [
      "Le voyage est recommandé d’octobre à mai. L’hiver offre des journées souvent lumineuses et des nuits froides ; au printemps, les températures montent et les départs deviennent plus matinaux. L’été n’est pas adapté à cette itinérance pédestre.",
      "La différence entre soleil et ombre est marquée. Superposez les couches plutôt que de prévoir uniquement des vêtements chauds ou uniquement légers, et emportez une protection efficace contre les UV.",
    ],
    audience: [
      "Choisissez Chegaga si vous recherchez les grands paysages dunaires et plusieurs bivouacs successifs. L’expérience convient à un premier trek désertique pour une personne capable de marcher cinq à six heures et à l’aise avec un confort sobre.",
      "Le circuit de la vallée du Drâa accorde davantage de place aux oasis et aux villages. Chegaga met plus nettement l’accent sur la traversée désertique et l’approche des grandes dunes.",
    ],
  },
  {
    tourSlug: "randonnee-cote-atlantique-circuit-de-8-jours-essaouira",
    slug: "trek-cote-atlantique-essaouira-8-jours-guide",
    title: "Randonnée sur la côte Atlantique jusqu’à Essaouira : guide du circuit de 8 jours",
    seoTitle: "Randonnée Essaouira et côte Atlantique : guide 8 jours",
    excerpt: "De Tafdna à Sidi Kaouki puis Essaouira : plages sauvages, falaises, arganiers, villages de pêcheurs et logistique du trek.",
    description: "Guide d’une randonnée de 8 jours sur la côte Atlantique vers Essaouira : Tafdna, Sidi M’Bark, Sidi Kaouki, niveau, saison et bivouacs.",
    category: "Côte Atlantique",
    readingTime: "12 min",
    imageAlt: "Marcheurs sur une plage sauvage de la côte Atlantique près d’Essaouira",
    intro: [
      "Ce trek remplace les cols par l’horizon marin. Depuis Tafdna, il suit plages, falaises et plateaux jusqu’à Sidi Ahmed Saih, Sidi M’Bark, Sidi Kaouki et enfin Essaouira. L’arrivée à pied dans la ville donne un sens particulier à la traversée.",
      "La côte reste rurale sur une grande partie du parcours. Les villages de pêcheurs, les cultures en terrasse et les arganiers révèlent une économie tournée à la fois vers la mer et la terre, loin d’un simple séjour balnéaire.",
    ],
    terrain: [
      "Le terrain alterne sable ferme, dunes, chemins de falaise et plateaux. Les marées et le vent influencent certaines sections, si bien que le guide peut ajuster l’horaire. Les cascades de Sidi M’Bark et les longues plages créent des repères naturels entre les étapes.",
      "L’arganier accompagne le voyage jusque dans l’assiette, avec l’huile et l’amlou. À Essaouira, la médina, le port et les remparts offrent une conclusion urbaine cohérente après plusieurs jours dans des paysages peu habités.",
    ],
    effort: [
      "Le niveau moyen vient d’étapes comprises entre trois et six heures, du sable et de la répétition des journées. L’altitude est faible, mais le vent, le soleil réfléchi par l’océan et les portions meubles peuvent fatiguer.",
      "Préparez-vous avec des marches longues et testez des chaussures qui évacuent bien le sable. Une veste coupe-vent, une protection solaire et des bâtons légers peuvent améliorer le confort sur les dunes et les sentiers irréguliers.",
    ],
    season: [
      "Le circuit est réalisable toute l’année grâce à l’influence océanique. L’été est généralement plus tempéré qu’à l’intérieur du pays, tandis que l’hiver peut apporter pluie, vent et soirées fraîches.",
      "La météo maritime évolue vite et la brume fait partie de l’ambiance. Une couche imperméable légère est utile même lorsque les prévisions annoncent du soleil, et les marées sont prises en compte localement par le guide.",
    ],
    audience: [
      "Cette traversée convient aux voyageurs qui veulent marcher plusieurs jours sans altitude et qui aiment les paysages marins, la pêche et l’arganier. Elle représente une alternative intéressante aux circuits de montagne ou de désert.",
      "Les personnes sensibles à la chaleur peuvent apprécier le climat côtier. Il faut néanmoins aimer les plages sauvages, les hébergements simples et des étapes parfois exposées au vent.",
    ],
  },
  {
    tourSlug: "grande-traversee-de-latlas-marocain-circuit-de-22-jours",
    slug: "grande-traversee-atlas-maroc-22-jours-guide",
    title: "Grande Traversée de l’Atlas en 22 jours : du M’Goun au Toubkal",
    seoTitle: "Grande Traversée de l’Atlas 22 jours : guide",
    excerpt: "Deux sommets de 4 000 mètres, trois semaines de marche et une succession de vallées, lacs, gorges et villages : le guide de l’expédition.",
    description: "Guide de la Grande Traversée de l’Atlas en 22 jours du M’Goun au Toubkal : itinéraire, préparation, difficulté, acclimatation et saison.",
    category: "Grande Traversée",
    readingTime: "18 min",
    imageAlt: "Groupe de randonneurs traversant une vallée pendant la Grande Traversée de l’Atlas",
    intro: [
      "La Grande Traversée relie le Haut Atlas central au massif du Toubkal sans réduire le Maroc à deux ascensions. Depuis Aït Bouguemez et le plateau de Tarkeddit, elle franchit le M’Goun, poursuit par la Tassaoute, le lac Tamda et le Yagour, puis rejoint Likemt, le lac d’Ifni et le Toubkal.",
      "Vingt-deux jours changent la nature du voyage. Il ne s’agit plus d’un séjour autour d’un camp de base, mais d’une expédition linéaire où les paysages, les équipes et la récupération s’inscrivent dans la durée. Les deux sommets sont les points hauts d’une traversée beaucoup plus riche.",
    ],
    terrain: [
      "La première partie associe la Vallée Heureuse, les plateaux du M’Goun et les vallées de la Tassaoute. Viennent ensuite les reliefs du lac Tamda, les villages du versant nord, le plateau du Yagour et ses vastes pâturages.",
      "La dernière séquence gagne l’Azib Likemt, Amsouzart et le lac d’Ifni avant le col d’Ouanoums. Atteindre le Toubkal après avoir traversé l’Atlas donne au sommet une signification très différente d’une ascension de quelques jours.",
    ],
    effort: [
      "Classé difficile, ce voyage cumule trois semaines d’itinérance, deux sommets de plus de 4 000 mètres, plusieurs cols et des camps éloignés. La difficulté n’est pas seulement verticale : elle réside dans la capacité à récupérer, à gérer les petits inconforts et à rester constant.",
      "Une solide expérience du trek est recommandée. Préparez des sorties longues avec dénivelé, plusieurs jours consécutifs si possible, et validez chaussures, bâtons et sac bien avant le départ. Une consultation médicale est pertinente en cas de doute sur l’effort prolongé ou l’altitude.",
    ],
    season: [
      "De mai à octobre, les hauts cols ont la meilleure probabilité d’être ouverts. Mai peut conserver de la neige, l’été expose davantage à la chaleur dans les vallées, et octobre apporte des nuits longues et froides.",
      "Sur vingt-deux jours, il faut anticiper plusieurs météos plutôt qu’une tendance unique. Protection solaire, imperméable, couche chaude et matériel de bivouac adapté sont tous indispensables ; la liste finale doit être confirmée avec l’équipe.",
    ],
    audience: [
      "Cette expédition est destinée aux randonneurs expérimentés qui disposent du temps et de l’endurance nécessaires pour habiter réellement la montagne pendant trois semaines. Elle récompense davantage la régularité et la curiosité que l’esprit de compétition.",
      "Pour découvrir l’un des deux massifs avant de s’engager, le M’Goun en dix jours ou le Tour du Toubkal en quinze jours constituent de bons tests. La Grande Traversée ne devrait pas être choisie uniquement pour additionner deux sommets.",
    ],
  },
  {
    tourSlug: "vallee-dades-vallee-des-roses-8-jours",
    slug: "trek-dades-vallee-roses-8-jours-guide",
    title: "Vallée du Dadès et Vallée des Roses à pied : guide du trek de 8 jours",
    seoTitle: "Trek Dadès et Vallée des Roses 8 jours : guide",
    excerpt: "Kasbahs, villages en terre, gorges d’Agouti et traversées de rivière : préparer la randonnée entre Dadès, M’Goun et Vallée des Roses.",
    description: "Guide du trek de 8 jours entre vallée du Dadès et Vallée des Roses : Aït Mraou, Alemdoun, gorges d’Agouti, niveau et équipement.",
    category: "Dadès et Vallée des Roses",
    readingTime: "12 min",
    imageAlt: "Village en terre et vallée cultivée sur le trek de la Vallée des Roses",
    intro: [
      "Ce circuit relie trois territoires souvent visités séparément : la vallée du Dadès, la vallée du M’Goun et la Vallée des Roses. Après Skoura et Kelaa M’Gouna, la marche part d’Aït Youl puis traverse Aït Mraou, Alemdoun, les gorges d’Agouti, Boutaghrar et Tabarkhacht.",
      "La randonnée révèle ce que la route ne montre pas : les chemins entre villages, les parcelles irriguées, les passages dans l’oued et les nuits en gîte, chez l’habitant ou au bivouac. Quatre journées de marche structurent le cœur d’un voyage de huit jours.",
    ],
    terrain: [
      "Les kasbahs et maisons en terre se fondent dans les falaises rouges. Les cultures occupent les rubans fertiles au fond des vallées, tandis que les plateaux plus secs dominent le parcours. Les gorges d’Agouti resserrent soudain cet espace.",
      "Dans la vallée du M’Goun, certains passages se font dans l’eau. Cette contrainte fait partie de l’itinéraire et explique la recommandation d’emporter une paire de chaussures adaptées, en plus des chaussures de marche utilisées sur les sections sèches.",
    ],
    effort: [
      "Le niveau moyen correspond à plusieurs journées consécutives sur sentiers, dans les gorges et parfois dans la rivière. L’altitude maximale indiquée de 2 260 mètres concerne le col du Tichka emprunté pendant le transfert ; ce trek n’est pas une ascension de haute montagne.",
      "Travaillez l’endurance, protégez vos pieds et emportez des sandales fermées ou chaussures d’eau offrant une bonne adhérence. Le guide évalue le débit et adapte les passages selon les conditions locales.",
    ],
    season: [
      "Mars à juin et septembre à novembre correspondent aux températures les plus favorables. Le printemps est associé aux cultures et à la floraison des rosiers, dont le calendrier varie selon l’année et l’altitude ; l’automne apporte une lumière plus douce et des journées généralement stables.",
      "Le niveau d’eau et la chaleur influencent le déroulement plus que l’altitude. Avant le départ, demandez l’état des gorges et ne considérez jamais une traversée observée sur une photo comme garantie identique.",
    ],
    audience: [
      "Ce trek convient aux voyageurs qui recherchent villages, agriculture et architecture de terre plutôt qu’un sommet. Il offre une immersion accessible à des marcheurs réguliers, à condition d’être à l’aise avec les passages humides et les hébergements variés.",
      "Pour rester dans le Haut Atlas central avec un objectif de 4 000 mètres, choisissez le M’Goun. Pour une formule familiale sans traversées exigeantes, la Vallée Heureuse est plus modulable.",
    ],
  },
];

// Publish the sample guide only. The remaining trek drafts stay offline until
// their first-hand notes have been supplied and edited in the same local voice.
export const trekBlogPosts: BlogPost[] = trekGuideConfigs.slice(0, 1).map(buildTrekGuide);
