export type TourMediaImage = {
  src: string;
  alt: string;
};

export type TourMedia = {
  hero: TourMediaImage;
  gallery: TourMediaImage[];
};

const cloudinaryBase = "https://res.cloudinary.com/s0d4bpze/image/upload";

export function cloudinaryImage(publicId: string) {
  return `${cloudinaryBase}/f_auto,q_auto,c_limit,w_1800/${publicId}`;
}

export function isCloudinaryImage(src: string) {
  return src.startsWith(`${cloudinaryBase}/`);
}

export const tourMediaBySlug: Record<string, TourMedia> = {
  "randonnee-dans-latlas": {
    hero: {
      src: cloudinaryImage("4796C7E6-F03B-4847-B866-107C876E9AD7_nfgfpq"),
      alt: "Randonneurs montant vers les sommets enneigés du massif du Toubkal",
    },
    gallery: [
      {
        src: cloudinaryImage("f724a9e7-fff1-4b97-9283-b5f6e4683053_ocnmib"),
        alt: "Lac d’Ifni aux eaux turquoise au cœur du massif du Toubkal",
      },
      {
        src: cloudinaryImage("a8d4d94f-942f-497a-a703-02cc997f161f_c5fqte"),
        alt: "Village amazigh au pied des sommets du Haut Atlas",
      },
      {
        src: cloudinaryImage("5703513e-d652-45aa-b88d-fad40fd42729_mjtfl5"),
        alt: "Groupe de randonneurs faisant une pause sur un sentier du massif du Toubkal",
      },
      {
        src: cloudinaryImage("1ba8983a-1f71-439b-9fdf-d46168f17175_izxza5"),
        alt: "Douars en terre au pied des montagnes du Haut Atlas",
      },
      {
        src: cloudinaryImage("3f251d6f-a8f0-46c2-b9cb-455ed5e9a1c8_bu6zvb"),
        alt: "Troupeau de chèvres traversant un passage rocheux du Haut Atlas",
      },
      {
        src: cloudinaryImage("a3cd32bb-7b0e-4131-8d50-8ed4c987ea9e_rshh71"),
        alt: "Village berbère et cultures en terrasses dans une vallée du Toubkal",
      },
      {
        src: cloudinaryImage("bd936464-880a-459a-9364-77d4bc9e6d53_mobirc"),
        alt: "Maisons berbères dans une vallée verdoyante du massif du Toubkal",
      },
    ],
  },
  "randonnee-dans-le-haut-atlas-central": {
    hero: {
      src: cloudinaryImage("f6673893-61c8-4754-b427-26dec54d0b01_rwz0ec"),
      alt: "Piton rocheux dominant un itinéraire de randonnée dans le massif du M’Goun",
    },
    gallery: [
      {
        src: cloudinaryImage("2f6d4a58-69fe-40f2-95c7-f243da604fc4_hlzq09"),
        alt: "Groupe de randonneurs traversant une rivière dans les gorges du M’Goun",
      },
      {
        src: cloudinaryImage("9c77c485-02f4-4ea3-8a91-7c436b94c48f_akfrc0"),
        alt: "Trekkeurs progressant dans l’eau au cœur des gorges du M’Goun",
      },
      {
        src: cloudinaryImage("783a1fbf-3960-4b97-9e84-77571b23ab72_ngaucm"),
        alt: "Cascade du Haut Atlas Central sur l’itinéraire du M’Goun",
      },
      {
        src: cloudinaryImage("c0d8a005-08e0-42d4-b1a8-ce8c7bcd9a6f_w8gfqm"),
        alt: "Marcheurs dans un passage encaissé des gorges du Haut Atlas Central",
      },
      {
        src: cloudinaryImage("43e12798-1dc1-42c7-be49-88417a4a3d31_gyjgwz"),
        alt: "Randonneurs franchissant à pied une rivière des gorges du M’Goun",
      },
    ],
  },
  "vallee-dades-vallee-des-roses-8-jours": {
    hero: {
      src: cloudinaryImage("63bb0096-69cb-4c96-a100-fa99c9876ec4_f6n0vm"),
      alt: "Paysage de randonnée entre la vallée du Dadès et la Vallée des Roses",
    },
    gallery: [
      {
        src: cloudinaryImage("93cac34f-4270-463e-9aa2-4d5838cbe16e_ckpq9y"),
        alt: "Sentier traversant les paysages de la vallée du Dadès",
      },
      {
        src: cloudinaryImage("57930de4-d20a-4f25-983c-d0d95832500a_wo2vto"),
        alt: "Randonneurs au cœur des vallées du sud du Haut Atlas",
      },
      {
        src: cloudinaryImage("d1f17a45-b09d-4a92-897c-e18eb24e13e7_fpvsy7"),
        alt: "Reliefs et villages de la Vallée des Roses",
      },
      {
        src: cloudinaryImage("cae20b67-07ba-4e53-b35b-55e380469aa4_kgp1zz"),
        alt: "Village traditionnel sur l’itinéraire de la Vallée des Roses",
      },
      {
        src: cloudinaryImage("2d78f91a-b7a8-49fc-8795-c16d6f058378_uiavot"),
        alt: "Chemin de randonnée dans les paysages du Dadès",
      },
    ],
  },
  "randonnee-en-famille-vallee-heureuse-dait-bouguemez-8-jours": {
    hero: {
      src: cloudinaryImage("2edbc427-c275-4e87-a012-e720aa814429_gloz1y"),
      alt: "Randonneurs traversant un torrent dans les gorges du Haut Atlas Central",
    },
    gallery: [
      {
        src: cloudinaryImage("8a5da5bc-22ca-4338-9f1c-26c52e29175a_dw3gtt"),
        alt: "Randonneurs au bord d’un torrent dans la Vallée Heureuse",
      },
      {
        src: cloudinaryImage("57930de4-d20a-4f25-983c-d0d95832500a_n5kysm"),
        alt: "Groupe de randonneurs suivant une rivière de montagne sous les arbres",
      },
      {
        src: cloudinaryImage("190c02b9-9459-4a76-996a-1bccabd3f975_gcdjdh"),
        alt: "Maisons en terre dans un village de la Vallée Heureuse",
      },
      {
        src: cloudinaryImage("a13ae920-abb1-41d7-abd9-18cc92bada6e_ov6j0q"),
        alt: "Groupe de trekkeurs faisant une pause dans une vallée verdoyante du Haut Atlas",
      },
      {
        src: cloudinaryImage("69f5b8eb-ecfd-421e-b680-bc389954b642_uajfgq"),
        alt: "Marcheurs longeant les champs cultivés de la Vallée Heureuse",
      },
    ],
  },
  "randonnee-desert-marocain-circuit-de-8-jours-vallee-du-draa": {
    hero: {
      src: cloudinaryImage("474a07e8-538c-4915-9b4a-50d84d470979_jr5e0h"),
      alt: "Groupe de randonneurs réuni sur les dunes de la vallée du Draa",
    },
    gallery: [
      {
        src: cloudinaryImage("3d728323-bc07-4c87-9b3e-0df13d5359a1_zzzf5r"),
        alt: "Groupe de trekkeurs marchant entre les dunes de la vallée du Draa",
      },
      {
        src: cloudinaryImage("82acf7af-4d80-4b7b-b42f-ce0064660aad_zxsygp"),
        alt: "Caravane de dromadaires traversant une palmeraie de la vallée du Draa",
      },
      {
        src: cloudinaryImage("4df9575e-fe0c-43ce-93ea-b9e9f3dc2f60_njj9zi"),
        alt: "Voyageuse à dos de dromadaire accompagnée par son chamelier",
      },
      {
        src: cloudinaryImage("711347e2-68bf-41b7-afdb-bd88825bd33d_ingblt"),
        alt: "Bivouac de tentes installé sur un plateau du désert marocain",
      },
      {
        src: cloudinaryImage("32b73f08-9713-43a3-b1d2-f8c5b7003160_jcrbmi"),
        alt: "Soirée autour du feu au bivouac dans le désert",
      },
    ],
  },
  "randonnee-dunes-de-chegaga-circuit-de-8-jours-desert-marocain": {
    hero: {
      src: cloudinaryImage("746b4061-aabd-4d49-b1eb-4028e8a8a189_bj8vla"),
      alt: "Randonneuses traversant les grandes dunes de Chegaga",
    },
    gallery: [
      {
        src: cloudinaryImage("99d32baf-5644-4534-bb77-3b2b8b4032bb_mziutb"),
        alt: "Groupe de trekkeurs montant une dune de Chegaga",
      },
      {
        src: cloudinaryImage("9a2c8615-ffbf-4ef6-8065-216a9f28a76b_mwu6hg"),
        alt: "Randonneurs observant le désert depuis le sommet d’une dune",
      },
      {
        src: cloudinaryImage("85fc8ed0-591b-472c-8ae8-934cef15d421_dv3zfz"),
        alt: "Groupe de voyageurs et guides réunis dans le désert de Chegaga",
      },
      {
        src: cloudinaryImage("17e2987c-eee8-4e4a-8f61-2ebfcfd3f104_vmg2ol"),
        alt: "Trekkeurs avançant sur la crête d’une grande dune de Chegaga",
      },
    ],
  },
  "randonnee-cote-atlantique-circuit-de-8-jours-essaouira": {
    hero: {
      src: cloudinaryImage("1fae77db-a708-4a49-9e6c-b140506f6e49_rqydsm"),
      alt: "Groupe de randonneurs sur les falaises de la côte Atlantique près d’Essaouira",
    },
    gallery: [
      {
        src: cloudinaryImage("e0d95e2c-545b-443b-ba1d-9397d023692e_eage2c"),
        alt: "Randonneurs marchant sur une plage sauvage sous une arche rocheuse",
      },
      {
        src: cloudinaryImage("76366408-4d0e-48e9-a853-22d3f16c750c_bezdno"),
        alt: "Pause de groupe face à l’océan pendant le trek de la côte Atlantique",
      },
      {
        src: cloudinaryImage("15b765ab-295a-4c8c-b745-d7af4209dba1_mqd8ka"),
        alt: "Bivouac du trek installé sur un plateau côtier près d’Essaouira",
      },
      {
        src: cloudinaryImage("d1452b73-20b3-4e03-a42b-1383175169bf_paovrp"),
        alt: "Groupe de marcheurs rejoignant une arche naturelle sur la plage",
      },
      {
        src: cloudinaryImage("bc5b59b9-9413-45d8-844a-fb3d4bc04828_xwqljh"),
        alt: "Plage sauvage et arche de grès sur la côte Atlantique marocaine",
      },
    ],
  },
  "randonnee-jbel-saghro": {
    hero: {
      src: cloudinaryImage("3319651f-4731-4457-bfb9-5d33298c7fda_yc4ita"),
      alt: "Randonneurs au pied des formations rocheuses monumentales du Jbel Saghro",
    },
    gallery: [
      {
        src: cloudinaryImage("90eb6d76-37c5-479c-b372-7e5437cf1426_olvwmb"),
        alt: "Randonneurs face aux plateaux rocheux du Jbel Saghro",
      },
      {
        src: cloudinaryImage("a467fd77-11d7-40a9-af7c-7e6bf5b231cb_op5wf0"),
        alt: "Bivouac de trek au coucher du soleil dans le Jbel Saghro",
      },
      {
        src: cloudinaryImage("9f2f9fc6-6ad2-4f38-b05c-87eb08478c8d_of1ata"),
        alt: "Groupe de randonneurs dans le paysage minéral du Jbel Saghro",
      },
      {
        src: cloudinaryImage("80dcdadb-39ad-4828-be17-05adf63a1921_pqlygf"),
        alt: "Village de montagne dans une vallée encaissée de l’Anti-Atlas",
      },
    ],
  },
  "randonnee-jbel-siroua": {
    hero: {
      src: cloudinaryImage("27694bd0-9d47-4bf1-9c36-6261bb2aca7b_sqykn5"),
      alt: "Randonneurs traversant un canyon rocheux du Jbel Siroua",
    },
    gallery: [
      {
        src: cloudinaryImage("5703513e-d652-45aa-b88d-fad40fd42729_mjtfl5"),
        alt: "Groupe de randonneurs sur un sentier du massif du Toubkal",
      },
      {
        src: cloudinaryImage("f724a9e7-fff1-4b97-9283-b5f6e4683053_ocnmib"),
        alt: "Lac d’Ifni au cœur du massif du Toubkal",
      },
      {
        src: cloudinaryImage("1a60dde0-9a46-469b-ab89-802aa2947359_ikiclj"),
        alt: "Groupe de randonneurs montant un sentier du Jbel Siroua",
      },
      {
        src: cloudinaryImage("77ece1ca-9b62-4158-aa0a-5026b75b9a65_llnugs"),
        alt: "Randonneurs sur une piste d’altitude du massif du Jbel Siroua",
      },
    ],
  },
  "randonnee-jbel-siroua-circuit-de-8-jours-dans-lanti-atlas": {
    hero: {
      src: cloudinaryImage("78a9dcaa-ba6c-4c55-831a-aec2a5276313_qllaw3"),
      alt: "Troupeau pâturant au pied des formations rocheuses du Jbel Siroua",
    },
    gallery: [
      {
        src: cloudinaryImage("27694bd0-9d47-4bf1-9c36-6261bb2aca7b_sqykn5"),
        alt: "Randonneurs traversant un canyon rocheux du Jbel Siroua",
      },
      {
        src: cloudinaryImage("12ff44a9-aa71-4440-b57b-456ea00a49c1_xombh0"),
        alt: "Hameaux et pâturages d’altitude dans le massif du Jbel Siroua",
      },
      {
        src: cloudinaryImage("1a60dde0-9a46-469b-ab89-802aa2947359_ikiclj"),
        alt: "Groupe de randonneurs montant un sentier du Jbel Siroua",
      },
      {
        src: cloudinaryImage("77ece1ca-9b62-4158-aa0a-5026b75b9a65_llnugs"),
        alt: "Randonneurs sur une piste d’altitude du massif du Jbel Siroua",
      },
    ],
  },
  "randonnee-region-de-tafraout-circuit-de-8-jours-dans-lanti-atlas": {
    hero: {
      src: cloudinaryImage("6b215ab4-8a0b-43b7-bde6-9e191be10ba8_fvnbz2"),
      alt: "Randonneuse parmi les blocs de granit rose de Tafraout dans l’Anti-Atlas",
    },
    gallery: [
      {
        src: cloudinaryImage("42ca84f3-91d8-445d-b56c-045a63e91e5a_bgi6sm"),
        alt: "Village berbère et cultures en terrasses dans les montagnes de Tafraout",
      },
      {
        src: cloudinaryImage("545bc53f-606b-4dee-82ad-7c90ecb6e56c_yeeipk"),
        alt: "Bivouac de trekking dans une palmeraie au pied des montagnes de Tafraout",
      },
      {
        src: cloudinaryImage("ed5e11b2-b96f-4172-8271-8ec14254aac7_v56hxs"),
        alt: "Architecture traditionnelle en pierre et en terre dans la région de Tafraout",
      },
      {
        src: cloudinaryImage("96df8436-dbed-4334-a6b4-30cb99570173_lpcbna"),
        alt: "Groupe de randonneurs faisant une pause dans le paysage minéral de l’Anti-Atlas",
      },
      {
        src: cloudinaryImage("fc9dc758-cc56-4fad-b636-cdd2988b6d4a_btneza"),
        alt: "Scène de vie sur une piste de l’Anti-Atlas",
      },
      {
        src: cloudinaryImage("96813917-4b88-492e-b063-d7d6cadd1343_vfermt"),
        alt: "Arrivée d’un groupe de randonneurs en minibus pour le circuit de Tafraout",
      },
    ],
  },
  "randonnee-berbere-avec-ascension-du-toubkal-8-jours": {
    hero: {
      src: cloudinaryImage("a8d4d94f-942f-497a-a703-02cc997f161f_c5fqte"),
      alt: "Village berbère au pied des sommets nuageux du Haut Atlas",
    },
    gallery: [
      {
        src: cloudinaryImage("58897216-87b3-488c-ba10-2914b95e69f1_qztmlj"),
        alt: "Groupe de randonneurs sur un sentier rocailleux du Haut Atlas",
      },
      {
        src: cloudinaryImage("2d613232-d6e3-4597-9092-d67a90b630c5_op4j5x"),
        alt: "Village berbère accroché à la montagne au-dessus d’une vallée verdoyante",
      },
      {
        src: cloudinaryImage("631113d0-7567-4608-8b87-3ee7c1e8a69a_vsfw6h"),
        alt: "Randonneurs traversant les terrasses cultivées du Haut Atlas",
      },
      {
        src: cloudinaryImage("3a6b8ac1-f0de-4bb5-b7fd-8af38f1bf7a3_mzxeqx"),
        alt: "Rivière et village berbère dans une vallée verte du Haut Atlas",
      },
      {
        src: cloudinaryImage("64f4eac3-d2e0-48d9-bc3b-2a7edb62ea5b_amskzf"),
        alt: "Maison traditionnelle devant les sommets enneigés du Haut Atlas",
      },
      {
        src: cloudinaryImage("966935b3-b691-4bef-98c0-89493ab2bca6_l9z8o8"),
        alt: "Vallée encaissée et cultures en terrasses dans le Haut Atlas",
      },
      {
        src: cloudinaryImage("bf23d7e0-c12f-4da6-8e2d-3050387cdf81_tjnrmd"),
        alt: "Village berbère à flanc de montagne dans une vallée du Haut Atlas",
      },
    ],
  },
  "grande-traversee-de-latlas-marocain-circuit-de-22-jours": {
    hero: {
      src: cloudinaryImage("f724a9e7-fff1-4b97-9283-b5f6e4683053_ocnmib"),
      alt: "Lac d’Ifni aux eaux turquoise sur l’itinéraire de la grande traversée de l’Atlas",
    },
    gallery: [
      {
        src: cloudinaryImage("f6673893-61c8-4754-b427-26dec54d0b01_rwz0ec"),
        alt: "Piton rocheux sur l’itinéraire de la traversée du massif du M’Goun",
      },
      {
        src: cloudinaryImage("43e12798-1dc1-42c7-be49-88417a4a3d31_gyjgwz"),
        alt: "Groupe de randonneurs franchissant une rivière dans les gorges du M’Goun",
      },
      {
        src: cloudinaryImage("2d613232-d6e3-4597-9092-d67a90b630c5_op4j5x"),
        alt: "Village berbère accroché à la montagne au-dessus d’une vallée verdoyante",
      },
      {
        src: cloudinaryImage("631113d0-7567-4608-8b87-3ee7c1e8a69a_vsfw6h"),
        alt: "Randonneurs traversant les cultures en terrasses des vallées berbères",
      },
      {
        src: cloudinaryImage("4796C7E6-F03B-4847-B866-107C876E9AD7_nfgfpq"),
        alt: "Randonneurs montant vers les sommets enneigés du Toubkal pendant la grande traversée",
      },
    ],
  },
};
