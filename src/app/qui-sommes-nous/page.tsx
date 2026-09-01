import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Heart,
  Mountain,
  Shield,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/seo";
import { cloudinaryImage } from "@/lib/tour-media";

const mohamedPhotos = {
  portrait: {
    src: cloudinaryImage("d51a6779-1efb-49da-8d40-a48c53c99aed_ctnoul"),
    alt: "Portrait de Mohamed Ait Tadrart dans les montagnes marocaines",
    width: 1200,
    height: 900,
  },
  trail: {
    src: cloudinaryImage("1759e27e-ccb4-4d43-a66b-61ce6e9ae35a_atiluy"),
    alt: "Mohamed Ait Tadrart en tenue de guide sur un sentier de montagne",
    width: 624,
    height: 832,
  },
  forest: {
    src: cloudinaryImage("d54af689-b5c0-4632-bac8-713c2f3243d6_muhirx"),
    alt: "Mohamed Ait Tadrart pendant une halte sous les arbres",
    width: 1200,
    height: 900,
  },
  river: {
    src: cloudinaryImage("0493d7bb-5f79-439a-b0a8-818bbb77d289_vrnxgj"),
    alt: "Mohamed aidant son groupe à traverser une rivière de l’Atlas",
    width: 1200,
    height: 900,
  },
  snow: {
    src: cloudinaryImage("1dc910cd-f0aa-41fd-9475-5dcc1cc9cf2a_cbo26p"),
    alt: "Mohamed Ait Tadrart sur un névé du Haut Atlas",
    width: 1200,
    height: 1600,
  },
};

const values = [
  {
    title: "Guide certifié",
    description:
      "Une formation professionnelle de guide de montagne, complétée par des années d’expérience sur le terrain.",
    icon: BadgeCheck,
  },
  {
    title: "Sécurité sur le terrain",
    description:
      "Les étapes, l’allure et les décisions sont adaptées au groupe, à l’altitude et aux conditions rencontrées.",
    icon: Shield,
  },
  {
    title: "Équipe locale",
    description:
      "Guides, cuisiniers, muletiers, chameliers et familles d’accueil travaillent directement avec Maroc Treks.",
    icon: Heart,
  },
  {
    title: "Expérience du Maroc",
    description:
      "Des centaines de circuits conduits dans l’Atlas, l’Anti-Atlas, le désert, les vallées du Sud et sur la côte.",
    icon: Award,
  },
];

export const metadata = createMetadata({
  title: "Mohamed Ait Tadrart, guide de montagne au Maroc",
  description:
    "Rencontrez Mohamed Ait Tadrart, guide de montagne certifié et fondateur de Maroc Treks, avec plus de 20 ans d’expérience dans l’Atlas et le Sahara.",
  path: "/qui-sommes-nous",
});

export default function QuiSommesNous() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-white">
        <header className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 mx-auto max-w-7xl">
            <Image
              src={mohamedPhotos.forest.src}
              alt={mohamedPhotos.forest.alt}
              fill
              priority
              unoptimized
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-contain object-top sm:object-right"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/5 sm:bg-gradient-to-r sm:from-slate-950 sm:via-slate-950/90 sm:to-slate-950/10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent sm:hidden" />

          <div className="relative mx-auto flex min-h-[690px] max-w-7xl items-end px-4 pb-10 pt-64 sm:min-h-[610px] sm:items-center sm:px-6 sm:py-16 lg:px-8">
            <div className="max-w-3xl">
              <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-300">
                <Mountain className="h-4 w-4" aria-hidden="true" />
                Maroc Treks · Qui sommes-nous ?
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-tight sm:text-6xl">
                Mohamed Ait Tadrart
              </h1>
              <p className="mt-4 max-w-3xl font-display text-xl font-bold leading-8 text-white sm:text-2xl">
                Guide certifié, enfant du Haut Atlas et force derrière Maroc
                Treks.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                Depuis Marrakech, Mohamed prépare et accompagne des voyages à
                pied dans tout le Maroc avec une équipe issue des régions
                traversées.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/20 pt-5 text-sm font-bold text-slate-200">
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck
                    className="h-4 w-4 text-orange-300"
                    aria-hidden="true"
                  />
                  Guide certifié
                </span>
                <span className="inline-flex items-center gap-2">
                  <Mountain
                    className="h-4 w-4 text-orange-300"
                    aria-hidden="true"
                  />
                  Originaire du Haut Atlas
                </span>
                <span className="inline-flex items-center gap-2">
                  <Award
                    className="h-4 w-4 text-orange-300"
                    aria-hidden="true"
                  />
                  Des centaines de circuits
                </span>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="theme-button-primary min-h-12 px-6"
                >
                  Contacter Maroc Treks
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/circuits"
                  className="theme-button-on-dark min-h-12 px-6"
                >
                  Voir les circuits
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-16 lg:px-8">
            <div className="lg:col-span-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
                Son parcours
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                Des sentiers de son enfance aux circuits à travers le Maroc
              </h2>

              <div className="mt-7 space-y-5 text-base leading-7 text-slate-600">
                <p className="text-lg font-medium leading-8 text-slate-800">
                  Mohamed a grandi dans les montagnes du Haut Atlas, au milieu
                  des villages, des troupeaux et des chemins qui relient les
                  vallées.
                </p>
                <p>
                  À la fin de sa vingtaine, il quitte sa région pour Marrakech.
                  Il y construit son métier de guide et le réseau local qui
                  deviendra Maroc Treks. Sa connaissance du terrain vient autant
                  de sa formation professionnelle que des années passées à
                  marcher avec les habitants, les muletiers et les voyageurs.
                </p>
                <p>
                  Depuis, il a conduit des centaines de circuits et accompagné
                  des milliers de marcheurs à travers le Maroc : sommets du
                  Toubkal et du M’Goun, vallées amazighes, Anti-Atlas, Sahara,
                  Dadès, Vallée des Roses et côte Atlantique.
                </p>
                <p>
                  Mohamed reste présent sur le terrain. En parcourant ce site,
                  vous le reconnaîtrez sur plusieurs photos avec les groupes
                  qu’il a guidés au fil des années.
                </p>
              </div>

              <div className="mt-8 grid gap-4 border-y border-slate-200 py-6 sm:grid-cols-3">
                <div>
                  <p className="font-display text-2xl font-black text-slate-900">
                    Guide certifié
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Formé aux métiers de la montagne
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-black text-slate-900">
                    Des centaines
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    de circuits conduits au Maroc
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-black text-slate-900">
                    Des milliers
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    de marcheurs accompagnés
                  </p>
                </div>
              </div>

              <Link href="/contact" className="theme-button-primary mt-8">
                Contacter Maroc Treks
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <figure className="theme-panel mx-auto max-w-md p-3 lg:col-span-5">
              <Image
                src={mohamedPhotos.trail.src}
                alt={mohamedPhotos.trail.alt}
                width={mohamedPhotos.trail.width}
                height={mohamedPhotos.trail.height}
                unoptimized
                sizes="(min-width: 1024px) 380px, 90vw"
                className="h-auto w-full object-contain"
              />
              <figcaption className="px-2 pb-2 pt-3 text-sm leading-6 text-slate-600">
                Mohamed sur le terrain, là où se prépare l’essentiel de chaque
                voyage.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
                Au fil des années
              </p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                Un guide que l’on retrouve sur les sentiers
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Ces images ne sont pas des photos de catalogue. Elles viennent
                des circuits, des pauses et des passages partagés avec les
                groupes.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <figure className="theme-panel overflow-hidden p-3">
                <Image
                  src={mohamedPhotos.portrait.src}
                  alt={mohamedPhotos.portrait.alt}
                  width={mohamedPhotos.portrait.width}
                  height={mohamedPhotos.portrait.height}
                  unoptimized
                  sizes="(min-width: 768px) 48vw, 100vw"
                  className="h-auto w-full object-contain"
                />
                <figcaption className="px-2 pb-2 pt-3 text-sm text-slate-600">
                  Mohamed dans les reliefs du Haut Atlas.
                </figcaption>
              </figure>

              <figure className="theme-panel overflow-hidden p-3">
                <Image
                  src={mohamedPhotos.river.src}
                  alt={mohamedPhotos.river.alt}
                  width={mohamedPhotos.river.width}
                  height={mohamedPhotos.river.height}
                  unoptimized
                  sizes="(min-width: 768px) 48vw, 100vw"
                  className="h-auto w-full object-contain"
                />
                <figcaption className="px-2 pb-2 pt-3 text-sm text-slate-600">
                  Aider le groupe fait partie du métier, jusque dans les
                  passages les plus simples en apparence.
                </figcaption>
              </figure>
            </div>

            <figure className="theme-panel mx-auto mt-6 max-w-lg p-3">
              <Image
                src={mohamedPhotos.snow.src}
                alt={mohamedPhotos.snow.alt}
                width={mohamedPhotos.snow.width}
                height={mohamedPhotos.snow.height}
                unoptimized
                sizes="(min-width: 640px) 480px, 90vw"
                className="h-auto w-full object-contain"
              />
              <figcaption className="px-2 pb-2 pt-3 text-sm text-slate-600">
                Dans la neige du Haut Atlas, sa montagne d’origine.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
                La manière Maroc Treks
              </p>
              <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Une équipe locale, un responsable sur le terrain
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Mohamed organise chaque voyage avec les personnes qui vivent
                dans les vallées et connaissent leurs sentiers.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="theme-panel-muted p-6 transition-[border-color,box-shadow] duration-300 hover:border-orange-200 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-100 text-orange-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
