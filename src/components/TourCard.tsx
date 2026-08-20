import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Footprints, Mountain } from "lucide-react";
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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-[transform,box-shadow,border-color] duration-300 motion-safe:hover:-translate-y-1.5 hover:border-orange-200/80 hover:shadow-[0_20px_35px_rgba(15,23,42,0.1)] focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-700 focus-within:ring-offset-2 motion-reduce:transition-none">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          fill
          unoptimized={tour.image.startsWith("https://")}
          sizes="(max-width: 767px) 88vw, (max-width: 1023px) 48vw, 30vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] group-focus-within:scale-[1.04] motion-reduce:transition-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 bg-white/95 backdrop-blur-sm text-slate-800 text-[0.65rem] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm ring-1 ring-black/5">
          {categoryLabels[tour.category]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Heading className="line-clamp-2 font-display text-[1.0625rem] font-extrabold leading-snug text-brand-slate transition-colors group-hover:text-orange-800 group-focus-within:text-orange-800">
          {title}
        </Heading>

        {/* Metadata Specs */}
        <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs font-semibold text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5 text-orange-600/90" aria-hidden="true" />
            <span>{tour.duration}</span>
          </span>
          <span className="h-3.5 w-px bg-slate-200" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5">
            <Footprints className="h-3.5 w-3.5 text-orange-600/90" aria-hidden="true" />
            <span className="truncate">{tour.difficulty}</span>
          </span>
          {tour.maxAltitude && (
            <>
              <span className="h-3.5 w-px bg-slate-200" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5">
                <Mountain className="h-3.5 w-3.5 text-orange-600/90" aria-hidden="true" />
                <span>{tour.maxAltitude}</span>
              </span>
            </>
          )}
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-500">
          {tour.subtitle || tour.description}
        </p>

        {/* Footer info & Link */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[0.625rem] font-bold uppercase tracking-wider text-slate-400 leading-none">Tarif</span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-700 mt-1">{tour.price}</span>
          </div>

          <Link
            href={tour.path}
            aria-label={`Découvrir le trek : ${title}`}
            className="inline-flex items-center gap-1 text-sm font-black text-orange-700 transition-colors duration-200 group-hover:text-orange-850 group-focus-within:text-orange-850 after:absolute after:inset-0 after:content-['']"
          >
            Découvrir
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
