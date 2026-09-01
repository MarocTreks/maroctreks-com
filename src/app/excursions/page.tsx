import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Check,
  Footprints,
  Mountain,
  Route,
  Sun,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { createMetadata } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";
import { cloudinaryImage } from "@/lib/tour-media";

const page = siteContent.excursions;

const excursionImages = {
  hero: {
    src: cloudinaryImage("a13ae920-abb1-41d7-abd9-18cc92bada6e_ov6j0q"),
    alt: "Groupe de randonneurs dans une vallée verdoyante du Haut Atlas",
  },
  sections: [
    {
      src: cloudinaryImage("5703513e-d652-45aa-b88d-fad40fd42729_mjtfl5"),
      alt: "Groupe de randonneurs sur un sentier du massif du Toubkal",
    },
    {
      src: cloudinaryImage("9f2f9fc6-6ad2-4f38-b05c-87eb08478c8d_of1ata"),
      alt: "Groupe de randonneurs dans le paysage minéral du Jbel Saghro",
    },
  ],
};

const sectionIntroductions = [
  "D’une balade de quelques heures à l’ascension du Toubkal, découvrez les vallées, cascades et villages amazighs au départ de Marrakech.",
  "Kasbahs, vallées, gorges et désert : nous organisons votre parcours dans le Sud selon le temps dont vous disposez.",
];

function excursionIcon(item: string, isDesertSection: boolean) {
  const normalizedItem = item.toLocaleLowerCase("fr");

  if (item.includes("4x4")) return Route;
  if (isDesertSection || normalizedItem.includes("désert")) return Sun;
  if (normalizedItem.includes("ascension")) return Mountain;
  return Footprints;
}

export const metadata = createMetadata({
  title: "Excursions depuis Marrakech et randonnées à la journée",
  description: "Réservez une excursion privée depuis Marrakech : Imlil, Toubkal, vallées de l’Atlas, cascades et désert avec guide local et programme sur mesure.",
  path: page.path,
});

export default function Excursions() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white">
        <header className="relative flex min-h-[560px] items-end overflow-hidden bg-slate-950 pb-16 pt-28 text-white sm:min-h-[620px] sm:pb-20">
          <Image
            src={excursionImages.hero.src}
            alt={excursionImages.hero.alt}
            fill
            preload
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/30 to-slate-950/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/10" />

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-300">
                <Mountain className="h-4 w-4" aria-hidden="true" />
                Excursions privées avec guide local
              </p>
              <h1 className="mt-5 font-display text-4xl font-black leading-tight sm:text-6xl">
                Excursions au Maroc
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
                {page.heroSubtitle}, des villages du Toubkal aux kasbahs et
                paysages du Sud marocain.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#excursions"
                  className="theme-button-primary min-h-12 px-6"
                >
                  Voir les excursions
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="theme-button-on-dark min-h-12 px-6"
                >
                  Créer mon itinéraire
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section
          aria-label="Organisation des excursions"
          className="border-b border-slate-200 bg-brand-sand"
        >
          <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
            <div className="flex items-center gap-4 py-6 md:px-6 md:first:pl-0">
              <CalendarClock
                className="h-6 w-6 shrink-0 text-orange-600"
                aria-hidden="true"
              />
              <div>
                <p className="font-display text-sm font-extrabold text-slate-900">
                  Itinéraire sur demande
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Adapté à vos dates et à votre rythme
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-6 md:px-6">
              <BadgeCheck
                className="h-6 w-6 shrink-0 text-orange-600"
                aria-hidden="true"
              />
              <div>
                <p className="font-display text-sm font-extrabold text-slate-900">
                  Guide diplômé
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Accompagnement par l’équipe locale
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-6 md:px-6 md:last:pr-0">
              <Route
                className="h-6 w-6 shrink-0 text-orange-600"
                aria-hidden="true"
              />
              <div>
                <p className="font-display text-sm font-extrabold text-slate-900">
                  Départ personnalisé
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  À pied, à dos de mule ou en 4x4
                </p>
              </div>
            </div>
          </div>
        </section>

        <div id="excursions" className="scroll-mt-20">
          {page.sections.map((section, sectionIndex) => (
            <section
              key={section.heading}
              className={sectionIndex % 2 === 0 ? "bg-white" : "bg-brand-sand"}
            >
              <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-8">
                <div
                  className={`relative min-h-[360px] overflow-hidden rounded-lg sm:min-h-[520px] lg:col-span-5 ${
                    sectionIndex % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={excursionImages.sections[sectionIndex].src}
                    alt={excursionImages.sections[sectionIndex].alt}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent px-6 pb-6 pt-24 text-white">
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-300">
                      Programme et prix sur demande
                    </p>
                  </div>
                </div>

                <div
                  className={`lg:col-span-7 ${
                    sectionIndex % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
                    {sectionIndex === 0
                      ? "Atlas et villages amazighs"
                      : "Kasbahs et Sud marocain"}
                  </p>
                  <h2 className="mt-3 max-w-2xl font-display text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                    {section.heading}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                    {sectionIntroductions[sectionIndex]}
                  </p>

                  <div className="mt-8 grid gap-x-8 sm:grid-cols-2">
                    {section.items.map((item) => {
                      const Icon = excursionIcon(item, sectionIndex === 1);
                      return (
                        <article
                          key={item}
                          className="flex gap-3 border-t border-slate-200 py-4"
                        >
                          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-orange-100 text-orange-700">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <h3 className="pt-1 text-sm font-bold leading-6 text-slate-800">
                            {item.replace("La ballade", "La balade")}
                          </h3>
                        </article>
                      );
                    })}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
                    <Link
                      href="/contact"
                      className="theme-button-primary min-h-12 px-6"
                      aria-label={`Demander un itinéraire pour ${section.heading}`}
                    >
                      Demander cet itinéraire
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <a
                      href="https://wa.me/212667591933?text=Bonjour%20Maroc%20Treks%2C%20je%20souhaite%20des%20informations%20sur%20une%20excursion."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#128C7E] bg-[#128C7E] px-6 py-3 text-sm font-extrabold text-white shadow-sm transition-colors hover:border-[#0f766e] hover:bg-[#0f766e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128C7E] focus-visible:ring-offset-2"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="bg-slate-950 py-14 text-white sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-300">
                <Check className="h-4 w-4" aria-hidden="true" />
                Itinéraires préparés à la demande
              </p>
              <h2 className="mt-3 font-display text-3xl font-black">
                Une idée, une durée, une date de départ
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                Parlez-nous de vos envies. Mohamed vous répond avec une
                proposition adaptée et son prix.
              </p>
            </div>
            <Link
              href="/contact"
              className="theme-button-primary min-h-12 w-fit shrink-0 px-6"
            >
              Recevoir une proposition
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
