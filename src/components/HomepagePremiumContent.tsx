"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Compass,
  Flower2,
  Heart,
  Leaf,
  MapPin,
  MessageCircle,
  Mountain,
  Route,
  ShieldCheck,
  TentTree,
  Trees,
  Waves,
} from "lucide-react";
import TourCard from "@/components/TourCard";
import { cloudinaryImage } from "@/lib/tour-media";
import { getToursByCategory } from "@/lib/tours";

const regions = [
  {
    id: "haut-atlas-marocain",
    shortTitle: "Haut Atlas",
    title: "Haut Atlas marocain",
    terrain: "Sommets, cols et vallées",
    icon: Mountain,
    description:
      "Du massif du Toubkal aux vallées du M’Goun, des itinéraires de randonnée et de haute montagne accompagnés par une équipe qui connaît chaque vallée.",
    tours: [
      ...getToursByCategory("toubkal"),
      ...getToursByCategory("mgoun"),
      ...getToursByCategory("grande-traversee"),
    ],
  },
  {
    id: "vallees-dades-roses",
    shortTitle: "Dadès & Roses",
    title: "Vallée du Dadès et Vallée des Roses",
    terrain: "Kasbahs, gorges et villages",
    icon: Flower2,
    description:
      "Une randonnée itinérante du Dadès à la vallée du M’Goun, entre villages en terre, gorges d’Agouti et sentiers de la Vallée des Roses.",
    tours: getToursByCategory("dades-roses"),
  },
  {
    id: "moyen-atlas-marocain",
    shortTitle: "Moyen Atlas",
    title: "Moyen Atlas marocain",
    terrain: "Forêts, lacs et plateaux",
    icon: Trees,
    description:
      "Une traversée des plateaux d’altitude, des forêts de cèdres et des villages du Moyen Atlas, loin des itinéraires les plus fréquentés.",
    tours: getToursByCategory("moyen-atlas"),
  },
  {
    id: "anti-atlas-marocain",
    shortTitle: "Anti-Atlas",
    title: "Anti-Atlas marocain",
    terrain: "Massifs minéraux et villages",
    icon: Route,
    description:
      "Le Jbel Saghro, le Siroua et les reliefs granitiques de Tafraout se découvrent à pied, entre villages, plateaux et vallées cultivées.",
    tours: getToursByCategory("anti-atlas"),
  },
  {
    id: "trekking-desert",
    shortTitle: "Désert",
    title: "Trekking dans le désert",
    terrain: "Dunes, oasis et bivouacs",
    icon: TentTree,
    description:
      "Des randonnées itinérantes entre la vallée du Draa et les dunes de Chegaga, avec bivouacs, cuisinier et équipe chamelière.",
    tours: getToursByCategory("desert"),
  },
  {
    id: "trekking-cote-atlantique",
    shortTitle: "Trekking Atlantique",
    title: "Trekking sur la côte atlantique",
    terrain: "Océan, dunes et arganeraies",
    icon: Waves,
    description:
      "Une marche le long des plages sauvages, des dunes et des arganeraies de la région d’Essaouira.",
    tours: getToursByCategory("atlantique"),
  },
];

const commitments = [
  {
    title: "Guides diplômés",
    description:
      "Des guides certifiés, formés aux premiers secours et habitués aux conditions de la montagne.",
    icon: BadgeCheck,
  },
  {
    title: "Équipe locale",
    description:
      "Guides, cuisiniers, muletiers, chameliers et familles d’accueil travaillent directement avec nous.",
    icon: Heart,
  },
  {
    title: "Voyages sur mesure",
    description:
      "Durée, étapes et niveau de marche sont adaptés aux dates et au rythme de votre groupe.",
    icon: Route,
  },
];

const reasons = [
  {
    title: "Sécurité",
    description:
      "Un encadrement par des guides diplômés qui connaissent le terrain, l’altitude et les conditions locales.",
    icon: ShieldCheck,
  },
  {
    title: "Logistique en direct",
    description:
      "Repas, hébergements, bivouacs et transport des bagages sont organisés par notre équipe locale.",
    icon: MapPin,
  },
  {
    title: "Économie locale",
    description:
      "Nous travaillons avec les muletiers, familles, cuisiniers et gîtes des vallées traversées.",
    icon: Leaf,
  },
  {
    title: "Plus de 20 ans de terrain",
    description:
      "Une expérience construite sur les sentiers de l’Atlas, du désert et des autres régions du Maroc.",
    icon: Award,
  },
];

const faqs = [
  {
    question: "Quelle est la meilleure période pour faire un trek au Maroc ?",
    answer:
      "Le printemps et l’automne conviennent à la plupart des régions. En été, nous privilégions les itinéraires d’altitude du Haut Atlas. En hiver, le désert est particulièrement agréable, tandis que les sommets de l’Atlas demandent un équipement adapté à la neige.",
  },
  {
    question: "L’ascension du Toubkal est-elle difficile ?",
    answer:
      "L’ascension ne présente pas de difficulté technique majeure en été, mais l’altitude et la pente demandent une bonne condition physique. En hiver, crampons et piolet peuvent être indispensables selon les conditions.",
  },
  {
    question: "Comment s’organisent les repas et les nuits ?",
    answer:
      "Notre cuisinier prépare des repas chauds pendant le trek. Selon l’itinéraire, les nuits se passent en gîte, chez l’habitant ou sous tente. Les bagages sont transportés par des mules dans l’Atlas et par des dromadaires dans le désert.",
  },
  {
    question: "Les circuits peuvent-ils être personnalisés ?",
    answer:
      "Oui. Nous pouvons modifier la durée, les étapes, le niveau de marche et les dates pour une famille, un groupe d’amis ou un club de randonnée.",
  },
];

const images = {
  team: cloudinaryImage("0ac3fa52-5129-4287-83c6-8a0bf8bcdfd0_aosoyg"),
  cta: cloudinaryImage("a467fd77-11d7-40a9-af7c-7e6bf5b231cb_op5wf0"),
};

const heroSlides = [
  {
    id: "atlas-group",
    src: cloudinaryImage("57930de4-d20a-4f25-983c-d0d95832500a_n5kysm"),
    alt: "Groupe de randonneurs suivant une rivière dans le Haut Atlas",
  },
  {
    id: "saghro-group",
    src: cloudinaryImage("9f2f9fc6-6ad2-4f38-b05c-87eb08478c8d_of1ata"),
    alt: "Groupe de randonneurs dans le paysage désertique du Jbel Saghro",
  },
  {
    id: "anti-atlas-group",
    src: cloudinaryImage("96df8436-dbed-4334-a6b4-30cb99570173_lpcbna"),
    alt: "Groupe de randonneurs dans le paysage minéral de l’Anti-Atlas",
  },
];

function RegionAdviceCard({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`${className} rounded-lg border border-orange-200 bg-orange-50 p-5`}
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-orange-700 text-white">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h4 className="font-display text-base font-extrabold text-slate-900">
            Besoin d’aide pour choisir ?
          </h4>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Mohamed vous conseille selon votre niveau, vos dates et le rythme
            de votre groupe.
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-orange-200 pt-4 text-xs font-bold text-slate-700">
        <span className="inline-flex items-center gap-1.5">
          <BadgeCheck
            className="h-4 w-4 text-orange-700"
            aria-hidden="true"
          />
          Guide diplômé
        </span>
        <span className="inline-flex items-center gap-1.5">
          <BadgeCheck
            className="h-4 w-4 text-orange-700"
            aria-hidden="true"
          />
          Devis gratuit
        </span>
      </div>
      <Link
        href="/contact"
        className="theme-button-dark mt-5 w-full"
      >
        Demander conseil
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </aside>
  );
}

export default function HomepagePremiumContent() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [activeRegion, setActiveRegion] = useState(regions[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [canScrollRegionsLeft, setCanScrollRegionsLeft] = useState(false);
  const [canScrollRegionsRight, setCanScrollRegionsRight] = useState(true);
  const regionTabsRef = useRef<HTMLDivElement>(null);
  const region =
    regions.find((item) => item.id === activeRegion) ?? regions[0];
  const RegionIcon = region.icon;

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (motionPreference.matches) return;

    const timer = window.setInterval(() => {
      setHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const tabs = regionTabsRef.current;
    if (!tabs) return;

    function syncRegionScrollControls() {
      if (!tabs) return;
      setCanScrollRegionsLeft(tabs.scrollLeft > 4);
      setCanScrollRegionsRight(
        tabs.scrollLeft + tabs.clientWidth < tabs.scrollWidth - 4,
      );
    }

    syncRegionScrollControls();
    tabs.addEventListener("scroll", syncRegionScrollControls, {
      passive: true,
    });
    window.addEventListener("resize", syncRegionScrollControls);

    return () => {
      tabs.removeEventListener("scroll", syncRegionScrollControls);
      window.removeEventListener("resize", syncRegionScrollControls);
    };
  }, []);

  function scrollRegionTabs(direction: -1 | 1) {
    const tabs = regionTabsRef.current;
    if (!tabs) return;

    tabs.scrollBy({
      left: direction * Math.min(220, tabs.clientWidth * 0.7),
      behavior: "smooth",
    });
  }

  return (
    <main className="flex-grow overflow-x-clip bg-white">
      <section className="relative flex min-h-[610px] items-end overflow-hidden bg-slate-800 pb-16 pt-28 text-white sm:min-h-[660px] sm:pb-20">
        {heroSlides.map((slide, index) => (
          <Image
            key={slide.id}
            src={slide.src}
            alt={heroSlide === index ? slide.alt : ""}
            fill
            priority={index === 0}
            loading={index === 0 ? undefined : "eager"}
            unoptimized
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-700 motion-reduce:transition-none ${
              heroSlide === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/48 via-slate-900/18 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-white/5" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-300">
              <Compass className="h-4 w-4" aria-hidden="true" />
              Guide de montagne breveté
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-black leading-[1.04] sm:text-6xl lg:text-7xl">
              Trekking au Maroc avec un guide local
            </h1>
            <p className="mt-5 max-w-2xl font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              Le Maroc à pied, avec ceux qui y vivent.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Treks dans l’Atlas, traversées du désert et circuits à pied
              organisés par Mohamed Ait Tadrart et son équipe locale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#treks"
                className="theme-button-primary min-h-12 px-6"
              >
                Voir les treks
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="theme-button-on-dark min-h-12 px-6"
              >
                Contacter Maroc Treks
              </Link>
            </div>
            <div
              className="mt-7 flex items-center gap-2"
              aria-hidden="true"
            >
              {heroSlides.map((slide, index) => (
                <span
                  key={slide.id}
                  className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                    heroSlide === index
                      ? "w-8 bg-orange-400"
                      : "w-3 bg-white/55"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="homepage-introduction"
        className="border-y border-slate-200 bg-[#edf3f1] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.65fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
                <Compass className="h-4 w-4" aria-hidden="true" />
                Voyages à pied au Maroc
              </p>
              <h2
                id="homepage-introduction"
                className="mt-4 max-w-md font-display text-3xl font-black leading-tight text-slate-950 sm:text-4xl"
              >
                Des sentiers de l’Atlas aux dunes du Sahara
              </h2>
              <div className="mt-7 h-1 w-16 bg-orange-600" aria-hidden="true" />
              <p className="mt-6 max-w-sm text-sm font-semibold leading-6 text-slate-700">
                Circuits privés ou en petit groupe, accompagnés et organisés
                directement par une équipe locale.
              </p>
            </div>

            <div className="max-w-3xl space-y-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              <p>
                Maroc Treks est une équipe locale spécialisée dans le{" "}
                <Link
                  href="/circuits"
                  className="font-semibold text-slate-950 underline decoration-orange-500 decoration-2 underline-offset-4 transition-colors hover:text-orange-700"
                >
                  trekking et la randonnée au Maroc
                </Link>
                . Depuis Marrakech, Mohamed Ait Tadrart, guide de montagne
                diplômé originaire du Haut Atlas, conçoit et accompagne des
                itinéraires dans le massif du Toubkal, le Haut Atlas central et
                le M’Goun, les vallées du Dadès et des Roses, l’Anti-Atlas, le
                Moyen Atlas, le désert marocain et la côte atlantique.
              </p>
              <p>
                Chaque voyage est préparé selon votre niveau, vos dates et le
                rythme de votre groupe. L’équipe organise les transferts, les
                gîtes et maisons d’hôtes, les bivouacs, les repas ainsi que le
                transport des bagages par mules ou dromadaires selon la région.
                Vous pouvez choisir une ascension, une traversée itinérante, une
                randonnée en famille ou demander un circuit sur mesure. Des{" "}
                <Link
                  href="/excursions"
                  className="font-semibold text-slate-950 underline decoration-orange-500 decoration-2 underline-offset-4 transition-colors hover:text-orange-700"
                >
                  excursions depuis Marrakech
                </Link>{" "}
                sont également proposées sur demande.
              </p>
            </div>
          </div>

          <nav
            aria-label="Circuits de trekking à découvrir"
            className="mt-12 border-y border-slate-300"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/randonnee-berbere-avec-ascension-du-toubkal-8-jours"
                className="group flex min-h-28 items-center gap-4 border-b border-slate-300 py-5 transition-colors hover:bg-white/70 sm:px-5 lg:border-b-0 lg:px-6"
              >
                <Mountain
                  className="h-6 w-6 shrink-0 text-orange-700"
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-600">
                    Haut Atlas
                  </span>
                  <span className="mt-1 flex items-center gap-2 font-display text-base font-extrabold text-slate-950">
                    Ascension du Toubkal
                    <ArrowRight
                      className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </Link>

              <Link
                href="/randonnee-dans-le-haut-atlas-central"
                className="group flex min-h-28 items-center gap-4 border-b border-slate-300 py-5 transition-colors hover:bg-white/70 sm:border-l sm:px-5 lg:border-b-0 lg:px-6"
              >
                <Route
                  className="h-6 w-6 shrink-0 text-orange-700"
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-600">
                    Atlas central
                  </span>
                  <span className="mt-1 flex items-center gap-2 font-display text-base font-extrabold text-slate-950">
                    Traversée du M’Goun
                    <ArrowRight
                      className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </Link>

              <Link
                href="/vallee-dades-vallee-des-roses-8-jours"
                className="group flex min-h-28 items-center gap-4 border-b border-slate-300 py-5 transition-colors hover:bg-white/70 sm:px-5 lg:border-b-0 lg:border-l lg:px-6"
              >
                <Flower2
                  className="h-6 w-6 shrink-0 text-orange-700"
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-600">
                    Sud du Haut Atlas
                  </span>
                  <span className="mt-1 flex items-center gap-2 font-display text-base font-extrabold text-slate-950">
                    Dadès et Roses
                    <ArrowRight
                      className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </Link>

              <Link
                href="/randonnee-dunes-de-chegaga-circuit-de-8-jours-desert-marocain"
                className="group flex min-h-28 items-center gap-4 py-5 transition-colors hover:bg-white/70 sm:border-l sm:px-5 lg:px-6"
              >
                <TentTree
                  className="h-6 w-6 shrink-0 text-orange-700"
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-600">
                    Désert marocain
                  </span>
                  <span className="mt-1 flex items-center gap-2 font-display text-base font-extrabold text-slate-950">
                    Dunes de Chegaga
                    <ArrowRight
                      className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </Link>
            </div>
          </nav>

          <div className="mt-7 flex justify-end">
            <Link
              href="/circuits"
              className="inline-flex min-h-11 items-center gap-2 font-bold text-slate-900 transition-colors hover:text-orange-700"
            >
              Explorer tous les circuits
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-8">
          <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-slate-200 sm:min-h-[500px] lg:col-span-6">
            <Image
              src={images.team}
              alt="Mohamed Ait Tadrart et l’équipe locale de Maroc Treks"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-6 pb-6 pt-20 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-300">
                Armed, vallée d’Imlil
              </p>
              <p className="mt-1 font-display text-xl font-extrabold">
                Mohamed Ait Tadrart et son équipe
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
              Notre histoire
            </p>
            <h2 className="mt-3 font-display text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              Une passion née dans l’Atlas
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-slate-600">
              <p className="text-lg font-medium leading-8 text-slate-800">
                L’histoire de Maroc Treks commence à Armed, dans la vallée
                d’Imlil, avec une connaissance intime des sentiers et l’envie
                de faire découvrir le pays au rythme de la marche.
              </p>
              <p>
                Né au cœur des montagnes du Toubkal, Mohamed Ait Tadrart a
                grandi au rythme des transhumances et des sentiers de montagne.
                Devenu guide officiel après une formation dans l’Atlas et les
                Alpes françaises, il a fondé Maroc Treks pour partager son pays
                de manière durable et sûre.
              </p>
              <p>
                Aujourd’hui, l’équipe réunit guides diplômés, cuisiniers et
                muletiers issus des vallées traversées. Elle organise les
                hébergements, les repas, les bivouacs et le portage pour que
                chacun puisse se concentrer sur la marche et les rencontres.
              </p>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {commitments.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 border-t border-slate-200 pt-4"
                >
                  <Icon
                    className="h-5 w-5 shrink-0 text-orange-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-bold text-slate-800">
                    {title}
                  </span>
                </div>
              ))}
            </div>
            <blockquote className="mt-7 border-l-4 border-orange-600 pl-5 text-lg font-semibold leading-7 text-slate-800">
              « Notre objectif est de vous faire aimer le Maroc comme nous
              l’aimons, en respectant la nature et les hommes qui la peuplent. »
            </blockquote>
            <Link
              href="/qui-sommes-nous"
              className="mt-8 inline-flex min-h-11 items-center gap-2 font-bold text-orange-700 hover:text-orange-800"
            >
              Rencontrer l’équipe
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="treks"
        aria-label="Programmes de trekking par région"
        className="scroll-mt-20 border-b border-slate-200 bg-slate-50 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
            Choisir une région
          </p>
          <div className="relative mt-5">
            <button
              type="button"
              onClick={() => scrollRegionTabs(-1)}
              disabled={!canScrollRegionsLeft}
              aria-label="Afficher les régions précédentes"
              className="absolute left-0 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-[calc(50%+0.375rem)] items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-md transition-[opacity,background-color,color] hover:bg-slate-900 hover:text-white disabled:cursor-default disabled:opacity-30 lg:hidden"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div
              ref={regionTabsRef}
              className="flex gap-2 overflow-x-auto px-11 pb-3 [scrollbar-width:none] lg:justify-center lg:px-0 [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Régions de trekking"
            >
              {regions.map((item) => {
                const Icon = item.icon;
                const active = item.id === activeRegion;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls="region-tours"
                    onClick={() => setActiveRegion(item.id)}
                    className={`inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-bold shadow-sm transition-[transform,box-shadow,border-color,background-color,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 motion-safe:hover:-translate-y-0.5 ${
                      active
                        ? "border-orange-700 bg-orange-700 text-white shadow-[0_6px_16px_rgba(194,65,12,0.28)]"
                        : "border-slate-300 bg-white text-slate-700 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-800 hover:shadow-md"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${
                        active ? "text-white" : "text-orange-700"
                      }`}
                      aria-hidden="true"
                    />
                    {item.shortTitle}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => scrollRegionTabs(1)}
              disabled={!canScrollRegionsRight}
              aria-label="Afficher les régions suivantes"
              className="absolute right-0 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-[calc(50%+0.375rem)] items-center justify-center rounded-full border border-orange-700 bg-orange-700 text-white shadow-md transition-[opacity,background-color] hover:bg-orange-800 disabled:cursor-default disabled:border-slate-300 disabled:bg-white disabled:text-slate-800 disabled:opacity-30 lg:hidden"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div
            id="region-tours"
            role="tabpanel"
            className="mt-8 grid gap-8 border-t border-slate-300 pt-8 lg:grid-cols-[18rem_1fr] lg:gap-10 lg:pt-10"
          >
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
                {region.tours.length}{" "}
                {region.tours.length === 1
                  ? "programme de trekking"
                  : "programmes de trekking"}
              </p>
              <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-md bg-orange-100 text-orange-700">
                <RegionIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {region.terrain}
              </p>
              <h3 className="mt-2 font-display text-2xl font-black text-slate-900">
                {region.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {region.description}
              </p>

              <RegionAdviceCard className="mt-7 hidden lg:block" />
            </div>

            <div
              className={`grid gap-6 ${
                region.tours.length === 1
                  ? "max-w-xl"
                  : "md:grid-cols-2 xl:grid-cols-3"
              }`}
            >
              {region.tours.map((tour) => (
                <TourCard key={tour.slug} tour={tour} headingLevel="h4" />
              ))}
            </div>

            <RegionAdviceCard className="lg:hidden" />
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-[#f6f1e8] py-16 text-slate-950 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
                Sur le terrain
              </p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight sm:text-4xl">
                Une organisation simple, locale et expérimentée
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Du premier échange au retour à Marrakech, la même équipe prépare
                votre itinéraire et vous accompagne sur place.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map(({ title, description, icon: Icon }) => (
                <article key={title} className="rounded-xl border border-stone-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                  <Icon className="h-6 w-6 text-orange-600" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-extrabold">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-sand py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
              Conseils de nos guides
            </p>
            <h2 className="mt-3 font-display text-3xl font-black text-slate-900 sm:text-4xl">
              Préparer votre trek
            </h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => {
              const open = openFaq === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left font-display text-base font-extrabold text-slate-900 sm:text-lg"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-orange-700 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {open && (
                    <p className="max-w-3xl pb-6 text-sm leading-7 text-slate-600 sm:text-base">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="relative mx-auto min-h-[400px] max-w-7xl overflow-hidden rounded-lg bg-slate-950 text-white">
          <Image
            src={images.cta}
            alt="Bivouac dans les dunes du Sahara"
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/52 via-slate-950/22 to-transparent" />
          <div className="relative flex min-h-[400px] items-center px-6 py-12 sm:px-12 lg:px-16">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-300">
                Itinéraire sur mesure
              </p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight sm:text-5xl">
                Parlons de votre prochain trek
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-200">
                Donnez-nous vos dates, votre niveau et la région qui vous
                attire. Nous vous proposerons un itinéraire adapté.
              </p>
              <Link
                href="/contact"
                className="theme-button-primary mt-8 min-h-12 px-6"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
