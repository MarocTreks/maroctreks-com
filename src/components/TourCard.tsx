import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Footprints,
  MapPin,
  Mountain,
  Users,
} from "lucide-react";
import type { Tour } from "@/lib/tours";

const categoryLabels: Record<Tour["category"], string> = {
  toubkal: "Haut Atlas · Toubkal",
  mgoun: "Haut Atlas · M’Goun",
  "moyen-atlas": "Moyen Atlas",
  "anti-atlas": "Anti-Atlas",
  desert: "Désert marocain",
  atlantique: "Côte Atlantique",
  "grande-traversee": "Atlas marocain",
};

export default function TourCard({ tour, displayTitle }: { tour: Tour; displayTitle?: string }) {
  const title = displayTitle || tour.title;
  const hasSpecificAltitude = tour.maxAltitude !== "Selon l’itinéraire";
  const facts = [
    { label: "Durée", value: tour.duration, icon: Clock3 },
    { label: "Niveau", value: tour.difficulty, icon: Footprints },
    hasSpecificAltitude
      ? { label: "Altitude max.", value: tour.maxAltitude, icon: Mountain }
      : { label: "Participants", value: tour.groupSize, icon: Users },
    { label: "Période", value: tour.bestSeason, icon: CalendarDays },
  ];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)] transition-[transform,box-shadow,border-color] duration-300 motion-safe:hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-700 focus-within:ring-offset-2 motion-reduce:transition-none">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        <Image
          src={tour.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 48vw, 100vw"
          className="object-cover motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-[1.035] group-focus-within:scale-[1.035] motion-reduce:transition-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-md border border-white/25 bg-slate-950/60 px-3 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
          <MapPin className="h-3.5 w-3.5 text-orange-300" aria-hidden="true" />
          {categoryLabels[tour.category]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-orange-700">
          <span className="h-px w-7 bg-orange-600" aria-hidden="true" />
          {tour.tourType}
        </p>
        <h3 className="mt-3 hyphens-auto font-display text-xl font-extrabold leading-snug text-brand-slate transition-colors group-hover:text-orange-800 group-focus-within:text-orange-800 sm:text-2xl">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
          {tour.subtitle || tour.description}
        </p>

        <div className="mt-auto pt-5">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200">
            {facts.map(({ label, value, icon: Icon }) => (
              <div key={label} className="min-h-20 bg-slate-50 px-3 py-3">
                <dt className="flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-wide text-slate-500">
                  <Icon className="h-3.5 w-3.5 shrink-0 text-orange-700" aria-hidden="true" />
                  {label}
                </dt>
                <dd className="mt-1.5 text-xs font-bold leading-snug text-slate-800 sm:text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Link
          href={tour.path}
          aria-label={`Voir le circuit complet : ${title}`}
          className="mt-5 inline-flex min-h-11 items-center justify-between gap-3 border-t border-slate-200 pt-4 text-sm font-extrabold text-slate-800 outline-none after:absolute after:inset-0 after:content-[''] focus-visible:text-orange-800"
        >
          Voir le circuit complet
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-700 text-white transition-colors group-hover:bg-orange-800 group-focus-within:bg-orange-800">
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </Link>
      </div>
    </article>
  );
}
