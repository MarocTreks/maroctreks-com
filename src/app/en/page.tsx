import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Compass, MapPin, Mountain, Route, ShieldCheck, TentTree } from "lucide-react";
import { createMetadata, JsonLd, SITE_URL } from "@/lib/seo";
import { cloudinaryImage } from "@/lib/tour-media";

const whatsAppUrl =
  "https://wa.me/212667591933?text=Hello%20Maroc%20Treks%2C%20I%20would%20like%20help%20choosing%20a%20trek%20in%20Morocco.";

export const metadata = createMetadata({
  title: "Morocco Trekking Tours with a Local Mountain Guide",
  description: "Private Morocco trekking tours in the Atlas Mountains, Mount Toubkal, M'Goun, Anti-Atlas and Sahara, organised directly by an Imlil-based local team.",
  path: "/en",
  locale: "en_GB",
  languages: { en: "/en", "fr-FR": "/", "x-default": "/" },
});

const regions = [
  {
    title: "Mount Toubkal & the High Atlas",
    text: "Summit Morocco’s highest mountain or walk between Imlil’s Amazigh villages, high passes and cultivated valleys.",
    icon: Mountain,
  },
  {
    title: "M’Goun & the Central High Atlas",
    text: "Longer, quieter journeys through remote valleys, summer pastures and the dramatic M’Goun massif.",
    icon: Route,
  },
  {
    title: "Sahara desert treks",
    text: "Winter walking journeys through dunes and oasis landscapes with a local camel team and nights in camp.",
    icon: TentTree,
  },
];

export default function EnglishHomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/en#webpage`,
    url: `${SITE_URL}/en`,
    name: "Morocco trekking tours with a local mountain guide",
    description: "Private guided treks in Morocco's Atlas Mountains and Sahara, organised by a local Imlil-based team.",
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <main className="flex-1">
      <JsonLd data={schema} />
      <section className="relative flex min-h-[650px] items-end overflow-hidden bg-slate-950 pb-20 pt-32 text-white">
        <Image
          src={cloudinaryImage("57930de4-d20a-4f25-983c-d0d95832500a_n5kysm")}
          alt="Hikers crossing a mountain valley in Morocco's High Atlas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/15" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-orange-300"><Compass className="h-5 w-5" aria-hidden="true" />Based in Imlil, High Atlas</p>
            <h1 className="mt-5 font-display text-4xl font-black leading-tight sm:text-6xl">Morocco trekking tours, planned with the people who live here</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Private guided treks in the Atlas Mountains and Sahara, organised directly by a local mountain team—at your pace, on your dates.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="theme-button-primary min-h-12 px-6">Ask a local guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              <Link href="/en/mount-toubkal-trek" className="theme-button-on-dark min-h-12 px-6">Explore Mount Toubkal</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="mx-auto scroll-mt-24 max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-700">Choose the right trek</p>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Not every Morocco trek suits every season</h2>
            <p className="mt-5 leading-8 text-slate-600">In summer, high-altitude Atlas routes offer cooler walking. Spring and autumn suit many mountain regions. Winter is excellent for the Sahara, while a winter Toubkal ascent requires mountaineering equipment and suitable experience. We recommend a route after learning your dates, walking level and preferred comfort.</p>
            <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
              <li className="flex gap-3"><BadgeCheck className="h-5 w-5 shrink-0 text-orange-700" aria-hidden="true" />Private departures rather than fixed international groups</li>
              <li className="flex gap-3"><ShieldCheck className="h-5 w-5 shrink-0 text-orange-700" aria-hidden="true" />Qualified local mountain guides and route-specific logistics</li>
              <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-orange-700" aria-hidden="true" />Clear advice on difficulty, altitude, accommodation and packing</li>
            </ul>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {regions.map((region) => {
              const Icon = region.icon;
              return (
                <article key={region.title} className="rounded-xl border border-slate-200 bg-stone-50 p-6">
                  <Icon className="h-8 w-8 text-orange-700" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-xl font-black">{region.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{region.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-300">A direct local relationship</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Tell us your dates, group size and walking experience</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">We will suggest a realistic itinerary and explain what is included. Prices are quoted individually because party size, season, transfers, accommodation and route logistics all affect the final cost.</p>
          <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="theme-button-primary mt-8 min-h-12 px-6">Get a personalised trek proposal <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </section>
    </main>
  );
}
