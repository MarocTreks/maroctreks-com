import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Footprints } from "lucide-react";
import type { Tour } from "@/lib/tours";

const categoryLabels: Record<Tour["category"], string> = {
  toubkal: "Haut Atlas · Toubkal",
  mgoun: "Haut Atlas · M’Goun",
  "dades-roses": "Dadès · Vallée des Roses",
  "moyen-atlas": "Moyen Atlas",
  "anti-atlas": "Anti-Atlas",
  desert: "Désert marocain",
  atlantique: "Côte Atlantique",
  "grande-traversee": "Atlas marocain",
};

export default function TourCard({
  tour,
  displayTitle,
  headingLevel = "h3",
}: {
  tour: Tour;
  displayTitle?: string;
  headingLevel?: "h3" | "h4";
}) {
  const title = displayTitle || tour.title;
  const Heading = headingLevel;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)] transition-[transform,box-shadow,border-color] duration-300 motion-safe:hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-700 focus-within:ring-offset-2 motion-reduce:transition-none">
      <div className="relative aspect-video overflow-hidden bg-slate-200">
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          fill
          unoptimized={tour.image.startsWith("https://")}
          sizes="(max-width: 767px) 88vw, (max-width: 1023px) 48vw, 30vw"
          className="object-cover motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-[1.035] group-focus-within:scale-[1.035] motion-reduce:transition-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/5 to-slate-950/25" />
        <span className="absolute left-3 top-3 max-w-[calc(100%_-_1.5rem)] truncate border-l-2 border-orange-400 bg-slate-950/65 px-2.5 py-1.5 text-[0.6875rem] font-extrabold uppercase tracking-wide text-white backdrop-blur-sm sm:left-4 sm:top-4">
          <span className="sr-only">Région : </span>
          {categoryLabels[tour.category]}
        </span>
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-2.5 rounded-md border border-white/15 bg-slate-950/75 px-3 py-2 text-xs font-bold text-white backdrop-blur-sm sm:inset-x-4 sm:bottom-4">
          <span className="inline-flex min-w-0 flex-1 items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5 shrink-0 text-orange-300" aria-hidden="true" />
            <span className="sr-only">Durée : </span>
            <span className="truncate">{tour.duration}</span>
          </span>
          <span className="h-4 w-px shrink-0 bg-white/25" aria-hidden="true" />
          <span className="inline-flex min-w-0 flex-1 items-center gap-1.5">
            <Footprints className="h-3.5 w-3.5 shrink-0 text-orange-300" aria-hidden="true" />
            <span className="sr-only">Niveau : </span>
            <span className="truncate">{tour.difficulty}</span>
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <Heading className="line-clamp-2 font-display text-lg font-extrabold leading-snug text-brand-slate transition-colors group-hover:text-orange-800 group-focus-within:text-orange-800">
          {title}
        </Heading>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
          {tour.subtitle || tour.description}
        </p>

        <Link
          href={tour.path}
          aria-label={`Découvrir le trek : ${title}`}
          className="theme-button-primary mt-5 px-4 after:absolute after:inset-0 after:content-['']"
        >
          Découvrir ce trek
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
