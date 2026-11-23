import Image from "next/image";
import { ArrowRight, BadgeCheck, CalendarDays, Footprints, MapPin, Mountain, ShieldCheck } from "lucide-react";
import { createMetadata, JsonLd, SITE_URL } from "@/lib/seo";
import { cloudinaryImage } from "@/lib/tour-media";

const whatsAppUrl =
  "https://wa.me/212667591933?text=Hello%20Maroc%20Treks%2C%20I%20am%20interested%20in%20a%20Mount%20Toubkal%20trek.%20My%20preferred%20dates%20are%3A%20";

export const metadata = createMetadata({
  title: "Mount Toubkal Trek: 2 or 3 Days with a Local Guide",
  description: "Plan a private 2 or 3-day Mount Toubkal trek from Marrakech with a qualified local guide. Route, difficulty, season, refuge and practical advice.",
  path: "/en/mount-toubkal-trek",
  locale: "en_GB",
  languages: { en: "/en/mount-toubkal-trek", "fr-FR": "/haut-atlas-toubkal", "x-default": "/haut-atlas-toubkal" },
});

const facts = [
  { label: "Summit", value: "4,167 m", icon: Mountain },
  { label: "Typical duration", value: "2 or 3 days", icon: CalendarDays },
  { label: "Starting point", value: "Imlil valley", icon: MapPin },
  { label: "Level", value: "Demanding hike", icon: Footprints },
];

export default function MountToubkalTrekPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Private Mount Toubkal trek with a local guide",
    description: "A private guided 2 or 3-day ascent of Mount Toubkal from Imlil in Morocco's High Atlas.",
    touristType: ["Hikers", "Mountain walkers"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Imlil to the Toubkal refuge" },
        { "@type": "ListItem", position: 2, name: "Toubkal summit and descent" },
      ],
    },
    provider: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/en/mount-toubkal-trek`,
    inLanguage: "en",
  };

  return (
    <main className="flex-1">
      <JsonLd data={schema} />
      <section className="relative flex min-h-[610px] items-end overflow-hidden bg-slate-950 pb-16 pt-32 text-white">
        <Image
          src={cloudinaryImage("0ac3fa52-5129-4287-83c6-8a0bf8bcdfd0_aosoyg")}
          alt="Hikers on a guided Mount Toubkal trek in Morocco"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.17em] text-orange-300">Private guided ascent from Imlil</p>
            <h1 className="mt-4 font-display text-4xl font-black leading-tight sm:text-6xl">Mount Toubkal trek in 2 or 3 days</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Climb North Africa’s highest summit with a qualified local guide and an itinerary matched to the season and your mountain experience.</p>
            <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="theme-button-primary mt-8 min-h-12 px-6">Check dates with our guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-stone-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div key={fact.label} className="bg-stone-50 p-5 sm:p-7">
                <Icon className="h-6 w-6 text-orange-700" aria-hidden="true" />
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500">{fact.label}</p>
                <p className="mt-1 font-display text-lg font-black">{fact.value}</p>
              </div>
            );
          })}
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <section>
          <h2 className="font-display text-3xl font-black">Is the Mount Toubkal trek right for you?</h2>
          <p className="mt-5 leading-8 text-slate-600">Toubkal is a high-altitude walking summit rather than a technical rock climb in dry summer conditions. The challenge comes from sustained ascent, rough mountain paths and the effect of altitude. You should be comfortable walking for several hours on consecutive days. A three-day programme gives more time to acclimatise than the faster two-day option and is usually the better choice for first-time high-altitude hikers.</p>
          <p className="mt-4 leading-8 text-slate-600">Winter is different. Snow and ice can make crampons and an ice axe necessary, and the guide will assess both the conditions and the group’s experience. Summit plans always remain subject to weather, trail conditions and safety.</p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl font-black">Typical 2-day itinerary</h2>
          <div className="mt-7 space-y-5">
            <div className="rounded-xl border border-slate-200 p-6">
              <p className="text-sm font-black uppercase tracking-wider text-orange-700">Day 1</p>
              <h3 className="mt-2 font-display text-xl font-black">Imlil to the Toubkal refuge</h3>
              <p className="mt-3 leading-7 text-slate-600">Meet the local team in Imlil, check equipment and begin the climb through the Aït Mizane valley. The path passes the shrine at Sidi Chamharouch before continuing to the refuge area, where you eat, rest and prepare for an early start.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <p className="text-sm font-black uppercase tracking-wider text-orange-700">Day 2</p>
              <h3 className="mt-2 font-display text-xl font-black">Toubkal summit and return to Imlil</h3>
              <p className="mt-3 leading-7 text-slate-600">Leave before sunrise for the summit ridge. After reaching 4,167 metres—conditions permitting—descend to the refuge for a break, then continue down the valley to Imlil. This is a long day, which is why fitness and an honest pace assessment matter.</p>
            </div>
          </div>
          <p className="mt-5 rounded-lg bg-orange-50 p-5 text-sm leading-7 text-orange-950"><strong>Three-day option:</strong> the extra day can create a gentler pace and better acclimatisation. The precise programme depends on the group and conditions.</p>
        </section>

        <section className="mt-14 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-black">What we normally arrange</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              {["Qualified local mountain guide", "Meals during the mountain programme", "Refuge accommodation", "Mule support where the route and season permit", "Route and equipment advice before departure"].map((item) => (
                <li key={item} className="flex gap-3"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-700" aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-black">Before you book</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">Tell us your dates, party size, recent hiking experience and whether you need a Marrakech transfer. We will reply with a written itinerary, inclusions and a personalised price. No summit can be guaranteed: your guide’s decision on weather, snow and group safety comes first.</p>
            <p className="mt-4 flex gap-3 text-sm font-bold text-slate-800"><ShieldCheck className="h-5 w-5 shrink-0 text-orange-700" aria-hidden="true" />Direct planning with our Imlil-based team.</p>
          </div>
        </section>
      </article>

      <section className="bg-slate-950 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-black">Ready to discuss your Toubkal ascent?</h2>
          <p className="mt-4 leading-7 text-slate-300">Send your dates and hiking background. We will recommend the 2-day or 3-day plan and explain the current seasonal requirements.</p>
          <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="theme-button-primary mt-7 min-h-12 px-6">Message our local guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </section>
    </main>
  );
}
