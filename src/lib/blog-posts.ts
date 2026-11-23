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
  event?: {
    name: string;
    startDate: string;
    endDate: string;
    locationName: string;
  };
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "reveillon-2027-desert-draa",
    title: "Réveillon 2027 dans le désert du Drâa : trek et bivouac sous les étoiles",
    seoTitle: "Réveillon 2027 dans le désert du Drâa",
    excerpt: "Du 30 décembre 2026 au 6 janvier 2027, choisissez 2 à 5 jours de marche et célébrez le Nouvel An dans un bivouac traditionnel du Sahara.",
    description: "Fêtez le passage à 2027 dans le désert du Drâa : trek de 2 à 5 jours, bivouac traditionnel, repas marocains et réveillon sous les étoiles.",
    category: "Désert marocain",
    publishedAt: "2026-11-23",
    updatedAt: "2026-11-23",
    readingTime: "9 min",
    image: cloudinaryImage("474a07e8-538c-4915-9b4a-50d84d470979_jr5e0h"),
    imageAlt: "Groupe de randonneurs dans les dunes de la vallée du Drâa au Maroc",
    relatedHref: "/contact",
    relatedLabel: "Demander le programme du Réveillon 2027",
    event: {
      name: "Réveillon 2027 dans le désert du Drâa",
      startDate: "2026-12-30",
      endDate: "2027-01-06",
      locationName: "Désert du Drâa, sud du Maroc",
    },
    sections: [
      {
        heading: "Les dates à retenir pour le Réveillon 2027",
        paragraphs: [
          "Le Réveillon 2027 désigne la soirée du 31 décembre 2026 et le passage au 1er janvier 2027. Maroc Treks organise cette aventure dans le désert du Drâa sur une période plus large, du 30 décembre 2026 au 6 janvier 2027, afin de proposer plusieurs durées de randonnée.",
          "Vous pouvez choisir de marcher pendant 2, 3, 4 ou 5 jours selon le temps dont vous disposez et le niveau d’immersion recherché. Les jours précis de départ et de retour, le point de rendez-vous et le programme détaillé sont confirmés dans la proposition écrite correspondant à votre formule.",
        ],
        bullets: [
          "Période de l’événement : du 30 décembre 2026 au 6 janvier 2027",
          "Nuit du Réveillon : du 31 décembre 2026 au 1er janvier 2027",
          "Durée de marche au choix : 2, 3, 4 ou 5 jours",
          "Destination : désert du Drâa, dans le sud marocain",
          "Tarif personnalisé selon la formule et le nombre de participants",
        ],
      },
      {
        heading: "Pourquoi célébrer le Nouvel An dans le désert du Drâa ?",
        paragraphs: [
          "À la fin du mois de décembre, le désert offre une manière radicalement différente de terminer l’année. Les journées se déroulent au rythme de la marche, entre dunes, espaces ouverts et lumière d’hiver. Le soir, le bruit des villes laisse place au feu de camp et au ciel du Sahara.",
          "Cette proposition s’adresse aux voyageurs qui recherchent une expérience simple et collective plutôt qu’une soirée de gala. Le décor est exceptionnel, mais l’essentiel se trouve dans la marche, les repas partagés et le temps passé avec l’équipe locale.",
        ],
        links: [
          { href: "/le-desert", label: "Découvrir nos treks dans le désert" },
          { href: "/randonnee-desert-marocain-circuit-de-8-jours-vallee-du-draa", label: "Explorer la vallée du Drâa à pied" },
        ],
      },
      {
        heading: "Quelle formule choisir : 2, 3, 4 ou 5 jours de marche ?",
        paragraphs: [
          "Deux jours permettent une première rencontre avec la marche dans le désert et le bivouac. Trois jours donnent davantage de temps pour prendre le rythme. Quatre ou cinq jours conviennent mieux à ceux qui veulent s’éloigner progressivement des zones accessibles et vivre une véritable continuité entre les étapes.",
          "La durée ne doit pas être choisie uniquement en fonction du calendrier. Votre expérience de la randonnée, votre aisance avec un confort simple et votre envie de marcher plusieurs jours de suite comptent tout autant. Indiquez-nous votre niveau habituel : nous vous orienterons vers la formule la plus cohérente.",
        ],
        bullets: [
          "2 jours : une découverte courte du désert et du bivouac",
          "3 jours : un bon compromis entre marche et temps disponible",
          "4 jours : une immersion plus progressive dans les paysages du Drâa",
          "5 jours : l’expérience la plus complète proposée pour cet événement",
        ],
      },
      {
        heading: "Un bivouac traditionnel, sans luxe artificiel",
        paragraphs: [
          "Le campement est pensé pour vivre le désert avec simplicité. Les nuits se passent sous tente, au milieu des dunes, dans une ambiance conviviale. Il ne s’agit pas d’un camp hôtelier : le confort est sobre et l’expérience repose sur la proximité avec la nature.",
          "Les tentes de couchage accueillent deux personnes. Une tente individuelle peut être demandée à l’avance. Une tente de cuisine permet au cuisinier de préparer les repas, tandis qu’une tente mess commune réunit le groupe pour manger et passer la soirée à l’abri si nécessaire.",
        ],
        bullets: [
          "Tentes de deux personnes pour la nuit",
          "Tente individuelle disponible sur demande",
          "Tente de cuisine et tente mess commune",
          "Repas traditionnels préparés par un cuisinier",
          "Espace partagé autour du feu de camp",
        ],
      },
      {
        heading: "La soirée du 31 décembre sous les étoiles",
        paragraphs: [
          "Après la journée dans le désert, le groupe se retrouve au bivouac pour célébrer le passage à la nouvelle année. Le dîner traditionnel est préparé sur place par le cuisinier. La soirée se poursuit autour du feu, avec de la musique et des chants sahariens.",
          "L’ambiance se veut chaleureuse et authentique. Il n’y a ni salle de réception ni mise en scène luxueuse : seulement le campement, l’équipe, les voyageurs et le ciel nocturne. C’est précisément cette simplicité qui rend le Réveillon différent.",
        ],
      },
      {
        heading: "Quel niveau faut-il pour marcher dans le désert ?",
        paragraphs: [
          "Le désert ne présente pas les dénivelés du Haut Atlas, mais marcher dans le sable et sur des terrains irréguliers sollicite les jambes différemment. L’enchaînement des étapes et la vie en bivouac demandent également une condition physique normale et l’envie de vivre dehors pendant plusieurs jours.",
          "Le rythme est adapté au groupe et la formule doit rester cohérente avec votre expérience. Avant de confirmer, précisez-nous vos habitudes de marche, vos éventuelles contraintes et le nombre de participants. Ces informations nous permettent de vous conseiller honnêtement.",
        ],
      },
      {
        heading: "Que faut-il emporter fin décembre ?",
        paragraphs: [
          "Le soleil peut être généreux dans la journée, mais les températures baissent rapidement après son coucher. Une veste chaude, des couches faciles à superposer, un bonnet et un vêtement coupe-vent sont indispensables pour les soirées et les matinées. Pendant la marche, prévoyez de bonnes chaussures déjà portées, une protection solaire, des lunettes et un foulard contre le sable.",
          "La liste définitive dépend de la durée choisie et des conditions annoncées avant le départ. Maroc Treks communique les recommandations adaptées avec le programme confirmé.",
        ],
        links: [{ href: "/blog/que-mettre-sac-trek-maroc", label: "Consulter notre liste d’équipement" }],
      },
      {
        heading: "Ce que le devis doit préciser avant votre réservation",
        paragraphs: [
          "Le tarif est établi sur demande, car il dépend de la durée de marche, du nombre de voyageurs et des services retenus. Avant tout engagement, demandez une proposition écrite indiquant les dates exactes, le point de rendez-vous, les transferts éventuels, les repas, les nuits, l’encadrement et les prestations qui restent à votre charge.",
          "Cette étape évite les malentendus et vous permet de comparer les formules sur des éléments concrets. La réservation n’est confirmée qu’après accord sur le programme, le prix et les conditions communiquées par Maroc Treks.",
        ],
      },
      {
        heading: "Questions fréquentes sur le Réveillon dans le Drâa",
        paragraphs: [
          "Peut-on venir seul ? Oui, une demande individuelle est possible. La composition du groupe et la disponibilité d’une tente individuelle doivent être confirmées avant la réservation.",
          "Faut-il être un randonneur expérimenté ? Pas nécessairement pour la formule la plus courte, mais il faut pouvoir marcher plusieurs heures et accepter le confort simple du bivouac. Les formules longues demandent davantage d’endurance.",
          "Fait-il froid la nuit ? Les nuits d’hiver dans le désert peuvent être froides. Des vêtements chauds et un équipement de nuit adapté sont donc essentiels.",
          "Le prix est-il fixe ? Non. Il varie selon la durée choisie, le nombre de participants et les services confirmés dans le devis.",
          "Comment vérifier les places disponibles ? Contactez directement Maroc Treks avec vos dates, le nombre de voyageurs et la durée souhaitée. L’équipe vous répondra avec les disponibilités et le programme correspondant.",
        ],
      },
      {
        heading: "Demandez le programme du Réveillon 2027",
        paragraphs: [
          "Pour recevoir une proposition, indiquez le nombre de participants, la formule envisagée — 2, 3, 4 ou 5 jours —, votre expérience de la marche et vos besoins particuliers. Vous recevrez ainsi un programme adapté plutôt qu’une offre générique.",
          "Les départs se déroulent pendant la période du 30 décembre 2026 au 6 janvier 2027. Comme il s’agit d’un événement à dates fixes, contactez l’équipe suffisamment tôt pour vérifier les places et organiser les détails pratiques.",
        ],
        links: [{ href: "/contact", label: "Recevoir le programme et le tarif" }],
      },
    ],
  },
  {
    slug: "quel-trek-choisir-maroc",
    title: "Quel trek choisir au Maroc ? Le guide pour trouver l’itinéraire qui vous ressemble",
    seoTitle: "Quel trek choisir au Maroc ? Guide par saison et niveau",
    excerpt: "Atlas, Toubkal, M’Goun, Anti-Atlas ou désert : comparez les régions, les saisons et les niveaux pour choisir un trek vraiment adapté à votre voyage.",
    description: "Comparez les meilleurs treks au Maroc selon votre niveau, la saison, la durée et vos envies : Toubkal, M’Goun, Anti-Atlas, Vallée Heureuse ou désert.",
    category: "Préparer son trek",
    publishedAt: "2026-11-23",
    updatedAt: "2026-11-23",
    readingTime: "12 min",
    image: cloudinaryImage("a8d4d94f-942f-497a-a703-02cc997f161f_c5fqte"),
    imageAlt: "Village amazigh au pied des sommets du Haut Atlas marocain",
    relatedHref: "/circuits",
    relatedLabel: "Comparer tous nos circuits",
    sections: [
      {
        heading: "L’essentiel pour choisir sans se tromper",
        paragraphs: [
          "Le meilleur trek au Maroc n’est pas forcément le plus haut ni le plus long. C’est celui qui correspond à votre saison de voyage, à votre rythme et à ce que vous avez envie de vivre : atteindre un sommet, traverser des villages, marcher en famille ou dormir sous les étoiles du désert.",
          "Pour une première décision, retenez ce repère simple : le Haut Atlas se prête surtout aux treks de montagne du printemps à l’automne ; l’Anti-Atlas et le Sahara sont particulièrement agréables pendant les mois frais. La durée et le dénivelé quotidien permettent ensuite d’affiner le choix.",
        ],
        bullets: [
          "Pour un premier trek : vallée d’Aït Bouguemez ou villages du massif du Toubkal",
          "Pour un sommet : Toubkal à 4 167 m ou M’Goun à 4 068 m",
          "Pour voyager en hiver : Jbel Saghro, Siroua, Tafraout ou désert marocain",
          "Pour partir en famille : Vallée Heureuse avec des étapes souples",
          "Pour une immersion nomade : vallée du Drâa ou dunes de Chegaga",
        ],
      },
      {
        heading: "Quel trek selon la saison ?",
        paragraphs: [
          "De mai à octobre, les itinéraires d’altitude du Haut Atlas offrent les meilleures possibilités. Juillet et août peuvent être chauds dans les vallées, mais les nuits restent fraîches en hauteur. Le printemps apporte des paysages plus verts ; le début de l’automne offre souvent une lumière claire et des sentiers plus calmes.",
          "De novembre à mars, mieux vaut regarder vers le Jbel Saghro, l’Anti-Atlas, la côte Atlantique ou le Sahara. L’ascension hivernale du Toubkal reste possible pour des marcheurs préparés, mais elle devient une course de montagne avec neige, froid et matériel technique ; ce n’est plus le même voyage qu’en été.",
        ],
        links: [{ href: "/blog/meilleure-periode-trekking-maroc", label: "Voir le calendrier région par région" }],
      },
      {
        heading: "Pour un premier trek : les villages du Haut Atlas",
        paragraphs: [
          "Autour d’Imlil, des itinéraires de trois à six jours relient des villages amazighs, des cultures en terrasses et des cols panoramiques. Ils permettent de découvrir la montagne sans faire de l’ascension du Toubkal une obligation. Les nuits en gîte et chez l’habitant donnent au voyage une vraie dimension humaine.",
          "C’est un bon choix si vous marchez régulièrement mais n’avez jamais fait de trek itinérant. Demandez des étapes de quatre à cinq heures et une journée d’adaptation avant de franchir les cols les plus hauts.",
        ],
        links: [
          { href: "/haut-atlas-toubkal", label: "Découvrir les treks du Toubkal" },
          { href: "/blog/trek-4-jours-haut-atlas-villages-cuisine", label: "Voir un itinéraire de 4 jours" },
        ],
      },
      {
        heading: "Pour atteindre un sommet : Toubkal ou M’Goun ?",
        paragraphs: [
          "Le Toubkal est le sommet le plus connu et le plus accessible depuis Marrakech. En conditions estivales, son itinéraire normal ne demande pas d’escalade, mais l’altitude et la longue montée finale exigent de l’endurance. Deux jours constituent une formule rapide ; quatre à six jours permettent une approche plus progressive et plus riche.",
          "Le M’Goun propose une aventure plus isolée dans le Haut Atlas central. Son ascension s’intègre naturellement à une traversée de la Vallée Heureuse et demande davantage de temps. Choisissez le Toubkal pour un premier 4 000 m et le M’Goun pour une itinérance plus sauvage.",
        ],
        links: [
          { href: "/circuit-toubkal-6-jours-lac-ifni", label: "Circuit du Toubkal en 6 jours" },
          { href: "/randonnee-dans-le-haut-atlas-central", label: "Trek du M’Goun" },
          { href: "/blog/ascension-toubkal-guide-pratique", label: "Préparer l’ascension du Toubkal" },
        ],
      },
      {
        heading: "Pour marcher en famille : la Vallée Heureuse",
        paragraphs: [
          "La vallée des Aït Bouguemez combine villages, champs, greniers collectifs et sentiers modulables. Elle permet de construire des journées plus courtes, de prévoir des pauses et d’adapter l’itinéraire à l’âge des enfants. L’objectif n’est pas la performance mais le plaisir de progresser ensemble.",
          "Pour une famille, regardez surtout le temps de marche réel, le dénivelé, la chaleur attendue et le confort des hébergements. Une étape de douze kilomètres sur terrain facile peut être plus agréable qu’une courte montée raide.",
        ],
        links: [
          { href: "/randonnee-en-famille-vallee-heureuse-dait-bouguemez-8-jours", label: "Voir le trek familial" },
          { href: "/blog/trek-famille-ait-bouguemez-guide", label: "Lire le guide avec des enfants" },
        ],
      },
      {
        heading: "Pour l’hiver et les grands espaces : Anti-Atlas ou Sahara",
        paragraphs: [
          "Le Jbel Saghro offre des plateaux volcaniques, des pitons rocheux et de vastes horizons, sans les altitudes extrêmes du Haut Atlas. Autour de Tafraout, les vallées d’amandiers et les villages de l’Anti-Atlas composent un trek plus doux, particulièrement beau à la fin de l’hiver.",
          "Dans le Sahara, la marche change de rythme. Les étapes suivent les dunes, les regs et les palmeraies, avec un bivouac le soir. Choisissez le désert pour le silence et l’immersion ; choisissez l’Anti-Atlas si vous préférez un relief plus varié et davantage de villages.",
        ],
        links: [
          { href: "/randonnee-jbel-saghro", label: "Trek dans le Jbel Saghro" },
          { href: "/le-desert", label: "Comparer les treks dans le désert" },
        ],
      },
      {
        heading: "Choisir la bonne durée",
        paragraphs: [
          "Trois ou quatre jours suffisent pour déconnecter et découvrir la vie des vallées. Une semaine permet une vraie traversée, avec des paysages qui évoluent et un rythme de marche qui s’installe. Au-delà de dix jours, le trek devient un voyage complet où la récupération et la régularité comptent autant que la condition physique.",
          "Ne comptez pas uniquement les jours de marche. Gardez une marge à l’arrivée, surtout si vous prenez l’avion, et évitez de placer l’étape la plus difficile au lendemain d’un long trajet.",
        ],
        bullets: [
          "3 à 4 jours : première expérience ou court séjour depuis Marrakech",
          "6 à 8 jours : meilleur équilibre entre marche, rencontres et variété",
          "10 à 15 jours : grande itinérance pour marcheurs habitués",
          "Plus de 20 jours : traversée engagée demandant endurance et disponibilité",
        ],
      },
      {
        heading: "Comment évaluer votre niveau réel ?",
        paragraphs: [
          "Le nombre d’heures ne suffit pas à décrire la difficulté. Une journée de cinq heures à 3 500 m, sur un sentier pierreux, fatigue davantage que cinq heures en plaine. Regardez ensemble le dénivelé positif, l’altitude maximale, la technicité du terrain, la succession des étapes et le confort des nuits.",
          "Avant de réserver, dites simplement ce que vous pratiquez aujourd’hui : fréquence de marche, distance habituelle, plus grand dénivelé réalisé et expérience en altitude. Un guide local peut alors ajuster les étapes sans vous vendre un niveau qui ne correspond pas au terrain.",
        ],
        bullets: [
          "Facile : 3 à 5 h de marche, faible altitude et pauses possibles",
          "Modéré : 5 à 6 h, plusieurs jours de suite et dénivelé régulier",
          "Soutenu : 6 à 8 h, cols élevés, terrain irrégulier ou longues traversées",
          "Engagé : haute altitude, conditions hivernales ou isolement important",
        ],
      },
      {
        heading: "Guide, hébergement et portage : ce qui change l’expérience",
        paragraphs: [
          "Un trek accompagné ne se résume pas à suivre un chemin. Le guide adapte le rythme, lit les conditions, facilite les rencontres et coordonne l’équipe. Dans l’Atlas, les mules transportent généralement le bagage principal ; dans le désert, ce rôle revient aux dromadaires. Vous gardez un sac de journée avec l’eau et les affaires indispensables.",
          "Les nuits peuvent alterner entre gîtes, maisons d’hôtes, refuges et bivouacs. Demandez ce qui est réellement prévu : chambre privative ou dortoir, douche disponible, couverture ou sac de couchage, transfert des bagages et repas inclus.",
        ],
        links: [{ href: "/informations-pratiques", label: "Consulter les informations pratiques" }],
      },
      {
        heading: "Notre conseil final avant de réserver",
        paragraphs: [
          "Choisissez d’abord la bonne région pour la saison, puis un niveau que vous pourriez tenir plusieurs jours de suite. Ajoutez ensuite ce qui donnera du sens au voyage : un sommet, des villages, des paysages désertiques ou du temps en famille.",
          "Si vous hésitez entre deux circuits, indiquez-nous vos dates, le nombre de voyageurs, votre expérience et le nombre d’heures que vous souhaitez marcher chaque jour. Nous vous dirons franchement quel itinéraire convient le mieux et ce qu’il est utile d’adapter.",
        ],
        links: [
          { href: "/circuits", label: "Voir tous les circuits" },
          { href: "/contact", label: "Demander conseil à un guide local" },
          { href: "/blog/que-mettre-sac-trek-maroc", label: "Préparer son sac" },
        ],
      },
    ],
  },
  {
    slug: "trek-4-jours-haut-atlas-villages-cuisine",
    title: "4 jours dans le Haut Atlas : de village en village, jusqu’à la cuisine d’Armed",
    seoTitle: "Trek 4 jours Haut Atlas : villages et cuisine",
    excerpt: "Deux cols, les vallées d’Azzaden et d’Aït Mizane, des nuits chez l’habitant et un atelier de cuisine : quatre jours pour vivre la montagne de l’intérieur.",
    description: "Un trek de quatre jours au départ de Marrakech, entre Aguerssioual, Id Aïssa et Armed, avec des étapes accessibles, des nuits dans les villages et un cours de cuisine marocaine.",
    category: "Haut Atlas",
    publishedAt: "2026-10-27",
    updatedAt: "2026-10-27",
    readingTime: "8 min",
    image: cloudinaryImage("a3cd32bb-7b0e-4131-8d50-8ed4c987ea9e_rshh71"),
    imageAlt: "Village amazigh et cultures en terrasses dans une vallée du massif du Toubkal",
    relatedHref: "/contact",
    relatedLabel: "Organiser ce trek de 4 jours",
    sections: [
      {
        heading: "Quatre jours pour entrer dans la vie du Haut Atlas",
        paragraphs: [
          "Il n’est pas toujours nécessaire de monter au sommet du Toubkal pour sentir la force du Haut Atlas. Sur cet itinéraire, le voyage se trouve ailleurs : dans les sentiers qui relient les villages, dans l’ombre des genévriers et des noyers, autour d’un repas préparé ensemble à Armed.",
          "En quatre jours et trois nuits, nous traversons une partie du massif du Toubkal depuis Aguerssioual jusqu’à Armed. Les deux premières journées sont les plus sportives. Les deux suivantes ralentissent le pas pour laisser davantage de place aux rencontres, à la cuisine et à la vie du village.",
        ],
        bullets: [
          "Durée : 4 jours et 3 nuits, au départ et au retour de Marrakech",
          "Marche : environ 3 à 5 heures par jour",
          "Point culminant : col de Tizi n’Mzik, 2 260 m",
          "Hébergement : gîte puis logement chez l’habitant",
          "Repas : pension complète pendant le séjour",
          "Tarif : sur demande, selon les dates et la composition du groupe",
        ],
      },
      {
        heading: "Jour 1 — D’Aguerssioual à Id Aïssa par Tizi n’Oudid",
        paragraphs: [
          "Nous quittons Marrakech le matin en direction des montagnes. À Aguerssioual, vers 1 600 mètres, la route cède la place au sentier et le trek commence vraiment. Peu à peu, les villages s’éloignent et le regard s’ouvre sur les versants du Haut Atlas.",
          "La montée nous conduit au col de Tizi n’Oudid, à environ 2 200 mètres. C’est le premier beau passage du voyage, avant une descente progressive vers Id Aïssa. Nous y retrouvons le calme du village pour le dîner et une première nuit en gîte.",
        ],
        bullets: [
          "Distance : environ 8,68 km",
          "Dénivelé : +600 m / −400 m",
          "Temps de marche : environ 4 heures",
          "Altitudes : Aguerssioual 1 600 m, Tizi n’Oudid 2 200 m, Id Aïssa 1 800 m",
        ],
      },
      {
        heading: "Jour 2 — La traversée vers Armed par Tizi n’Mzik",
        paragraphs: [
          "Après le petit-déjeuner, nous prenons la direction de Tizi Oussem, le dernier village de la vallée d’Azzaden. Le sentier monte à travers une forêt de genévriers jusqu’au col de Tizi n’Mzik. À 2 260 mètres, le point le plus haut du trek offre une vue magnifique sur les reliefs du massif et la vallée d’Aït Mizane.",
          "Nous prenons le repas de midi à l’ombre des noyers lorsque les conditions le permettent, puis descendons dans l’après-midi vers Armed. Cette grande journée relie deux vallées et deux ambiances ; elle reste souvent le souvenir de marche le plus fort du séjour.",
        ],
        bullets: [
          "Distance : environ 11,71 km",
          "Dénivelé : +660 m / −360 m",
          "Temps de marche : environ 5 heures",
          "Altitudes : Id Aïssa 1 800 m, Tizi n’Mzik 2 260 m, Armed 1 900 m",
          "Nuit et dîner chez l’habitant à Armed",
        ],
      },
      {
        heading: "Jour 3 — Armed, une promenade et un repas cuisiné ensemble",
        paragraphs: [
          "Après deux journées de traversée, nous restons à Armed. Une promenade choisie selon l’envie et l’énergie du groupe permet de regarder le village autrement : ses maisons, ses cultures en terrasses, ses chemins et le rythme quotidien de ses habitants.",
          "Puis vient un moment plus rare dans un programme de trek : un cuisinier local nous ouvre sa cuisine. Nous découvrons les ingrédients, les gestes et les temps de préparation d’un tajine et du couscous. Le cours se termine naturellement autour de la table, avec le repas que nous avons contribué à préparer.",
          "Cette journée n’a pas de distance imposée. Elle est volontairement souple afin que la rencontre et le partage ne soient pas chronométrés.",
        ],
      },
      {
        heading: "Jour 4 — Un dernier matin dans la montagne",
        paragraphs: [
          "Le dernier matin, nous marchons encore dans les environs d’Armed. La promenade s’adapte au temps disponible et aux jambes du groupe : elle peut rester tranquille ou prendre un peu de hauteur pour un dernier regard sur la vallée.",
          "Après le retour au village, un véhicule nous ramène à Marrakech, avec une arrivée prévue en fin d’après-midi. Le passage des sentiers de montagne à l’animation de la ville marque toujours une vraie fin de voyage.",
        ],
      },
      {
        heading: "Ce que représentent les deux grandes étapes",
        paragraphs: [
          "Les chiffres des deux premières journées donnent une bonne idée de l’effort : environ 20,39 km, 1 260 mètres de montée cumulée et 760 mètres de descente. Le terrain de montagne et le passage des cols comptent toutefois davantage que la distance seule.",
          "Ce trek convient à des marcheurs en bonne santé, capables d’enchaîner quatre à cinq heures de marche et plusieurs centaines de mètres de dénivelé. Nous adaptons le rythme, les pauses et les promenades des jours 3 et 4 à chaque groupe.",
        ],
        links: [{ href: "/blog/que-mettre-sac-trek-maroc", label: "Préparer son sac pour le Haut Atlas" }],
      },
      {
        heading: "Pourquoi ce voyage reste différent",
        paragraphs: [
          "Ce programme ne cherche pas à accumuler les kilomètres. Il associe une vraie traversée de montagne à une expérience plus intime du Haut Atlas. Dormir dans les villages, s’arrêter sous les noyers et cuisiner avec une personne d’ici donnent du sens au chemin parcouru.",
          "Les distances et les dénivelés restent indicatifs. La météo, l’état des sentiers et le niveau du groupe peuvent amener le guide à ajuster une étape. Pour recevoir un tarif et confirmer les conditions correspondant à vos dates, dites-nous simplement quand vous souhaitez partir et combien de personnes marcheront avec vous.",
        ],
        links: [
          { href: "/haut-atlas-toubkal", label: "Découvrir nos treks dans le massif du Toubkal" },
          { href: "/contact", label: "Demander le programme et un devis" },
        ],
      },
    ],
  },
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
