import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BadgeDollarSign,
  Check,
  FileText,
  Images as ImagesIcon,
  MapPinned,
  Route,
  ShieldCheck,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourGallery from "@/components/TourGallery";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { JsonLd, SITE_URL } from "@/lib/seo";
import type { TourDetailLabels, TourSectionHeadings } from "@/lib/tours";
import { isCloudinaryImage, type TourMediaImage } from "@/lib/tour-media";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface TrekDetailProps {
  path: string;
  title: string;
  subtitle?: string;
  bannerImage: string;
  bannerImageAlt: string;
  gallery?: TourMediaImage[];
  duration: string;
  difficulty: string;
  maxAltitude: string;
  bestSeason: string;
  description: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  notIncluded: string[];
  groupSize?: string;
  tourType?: string;
  price?: string;
  sectionHeadings: TourSectionHeadings;
  detailLabels: TourDetailLabels;
  faqs?: { question: string; answer: string }[];
  categoryPath?: string;
  categoryTitle?: string;
}

export default function TrekDetailLayout({
  path,
  title,
  subtitle,
  bannerImage,
  bannerImageAlt,
  gallery = [],
  duration,
  difficulty,
  maxAltitude,
  bestSeason,
  description,
  highlights,
  itinerary,
  included,
  notIncluded,
  groupSize,
  tourType,
  price,
  sectionHeadings,
  detailLabels,
  faqs = [],
  categoryPath = "/circuits",
  categoryTitle = "Tous les circuits",
}: TrekDetailProps) {
  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${SITE_URL}${path}#trip`,
    url: `${SITE_URL}${path}`,
    name: title,
    description,
    image: [bannerImage, ...gallery.map((image) => image.src)],
    touristType: ["Trekking", "Randonnée", "Tourisme d’aventure"],
    provider: { "@id": `${SITE_URL}/#organization` },
    tripOrigin: { "@type": "Place", name: "Marrakech, Maroc" },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: itinerary.length,
      itemListElement: itinerary.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `Jour ${item.day} – ${item.title}`,
        description: item.description,
      })),
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Durée", value: duration },
      { "@type": "PropertyValue", name: "Difficulté", value: difficulty },
      { "@type": "PropertyValue", name: "Altitude maximale", value: maxAltitude },
      { "@type": "PropertyValue", name: "Meilleure saison", value: bestSeason },
    ],
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: categoryTitle, item: `${SITE_URL}${categoryPath}` },
      { "@type": "ListItem", position: 3, name: title, item: `${SITE_URL}${path}` },
    ],
  };

  return (
    <>
      <JsonLd data={[tripSchema, breadcrumbSchema]} />
      <Navbar />

      <main className="flex-grow bg-brand-sand">
        {/* Trek Hero Banner */}
        <section className="relative overflow-hidden bg-brand-slate py-14 text-white sm:py-32">
          <Image
            src={bannerImage}
            alt={bannerImageAlt}
            fill
            priority
            unoptimized={isCloudinaryImage(bannerImage)}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/65 via-slate-950/35 to-slate-950/15" />
          
          <div className="relative z-20 mx-auto max-w-5xl space-y-4 px-4 text-center sm:space-y-6">
            <Link
              href={categoryPath}
              className="theme-button-on-dark min-h-10 px-4 py-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Retour : {categoryTitle}</span>
            </Link>
            
            <h1 className="font-display text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mx-auto max-w-3xl text-base font-light leading-6 text-slate-200 sm:text-xl sm:leading-normal">
                {subtitle}
              </p>
            )}

            {/* Quick Specs */}
            <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-x-2 gap-y-4 rounded-lg border border-white/15 bg-slate-950/65 p-4 shadow-[0_12px_32px_rgba(15,23,42,0.22)] backdrop-blur-md sm:mt-10 sm:gap-6 sm:p-6 md:grid-cols-4">
              <div className="text-center">
                <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">{detailLabels.duration}</span>
                <span className="mt-1 block text-sm font-bold text-brand-gold sm:text-lg">{duration}</span>
              </div>
              <div className="text-center border-l border-white/10">
                <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">{detailLabels.difficulty}</span>
                <span className="mt-1 block text-sm font-bold text-brand-gold sm:text-lg">{difficulty}</span>
              </div>
              <div className="text-center border-l border-white/10">
                <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">{detailLabels.groupSize}</span>
                <span className="mt-1 block text-sm font-bold text-brand-gold sm:text-lg">{groupSize}</span>
              </div>
              <div className="text-center border-l border-white/10">
                <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">{detailLabels.bestSeason}</span>
                <span className="mt-1 block text-sm font-bold text-brand-gold sm:text-lg">{bestSeason}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-30 hidden lg:block">
          <nav
            aria-label="Accès rapide aux sections du circuit"
            className="mx-auto -mt-7 flex w-fit max-w-3xl items-center gap-2 rounded-lg border border-slate-200 bg-white p-2 shadow-[0_10px_30px_rgba(15,23,42,0.1)]"
          >
            <a
              href="#description"
              className="inline-flex min-h-11 items-center gap-2 rounded-md px-5 py-2.5 text-sm font-extrabold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700"
            >
              <FileText className="h-4 w-4 text-orange-700" aria-hidden="true" />
              Description
            </a>
            {gallery.length > 0 && (
              <a
                href="#photos"
                className="inline-flex min-h-11 items-center gap-2 rounded-md px-5 py-2.5 text-sm font-extrabold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700"
              >
                <ImagesIcon className="h-4 w-4 text-orange-700" aria-hidden="true" />
                Photos
              </a>
            )}
            <a
              href="#itineraire"
              className="inline-flex min-h-11 items-center gap-2 rounded-md px-5 py-2.5 text-sm font-extrabold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700"
            >
              <MapPinned className="h-4 w-4 text-orange-700" aria-hidden="true" />
              Itinéraire
            </a>
          </nav>
        </div>

        {/* Details and Itinerary */}
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Overview & Timeline */}
            <div className="space-y-8 sm:space-y-12 lg:col-span-8">
              {/* Overview */}
              <section id="description" className="theme-panel scroll-mt-28 space-y-4 p-5 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-brand-slate">{sectionHeadings.description}</h2>
                <div className="h-1 w-12 bg-brand-orange rounded-full" />
                <p className="text-slate-600 leading-relaxed font-light whitespace-pre-line">
                  {description}
                </p>
                <TourGallery images={gallery} heading={sectionHeadings.gallery} />
              </section>

              {/* Highlights */}
              <div className="theme-panel space-y-5 p-5 sm:space-y-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-brand-slate">{sectionHeadings.highlights}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-semibold text-brand-slate">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {(tourType || price) && (
                <section>
                  <h2 className="mb-6 font-display text-2xl font-bold text-brand-slate">{sectionHeadings.details}</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {tourType && (
                      <div className="theme-panel-muted p-5">
                        <Route className="h-5 w-5 text-brand-orange" />
                        <span className="mt-3 block text-xs font-bold uppercase tracking-wider text-slate-400">{detailLabels.tourType}</span>
                        <span className="mt-1 block font-bold text-brand-slate">{tourType}</span>
                      </div>
                    )}
                    {price && (
                      <div className="theme-panel-muted p-5">
                        <BadgeDollarSign className="h-5 w-5 text-brand-orange" />
                        <span className="mt-3 block text-xs font-bold uppercase tracking-wider text-slate-400">{detailLabels.price}</span>
                        <span className="mt-1 block font-bold text-brand-slate">{price}</span>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* Day-by-Day Itinerary */}
              <section id="itineraire" className="scroll-mt-28 space-y-6">
                <h2 className="font-display text-2xl font-bold text-brand-slate px-2">{sectionHeadings.itinerary}</h2>
                
                <div className="relative border-l-2 border-brand-orange/20 ml-4 space-y-10 pl-6 sm:pl-8">
                  {itinerary.map((day) => (
                    <div key={day.day} className="relative group">
                      {/* Day Dot Indicator */}
                      <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-brand-orange font-bold text-white shadow-md border-4 border-brand-sand group-hover:scale-110 transition-transform">
                        {day.day}
                      </div>

                      {/* Day Content Card */}
                      <div className="theme-panel p-5 transition-[border-color,box-shadow] duration-300 hover:border-orange-200 hover:shadow-[0_12px_32px_rgba(15,23,42,0.1)] sm:p-8">
                        <h3 className="font-display text-lg sm:text-xl font-bold text-brand-slate">
                          {day.title}
                        </h3>
                        <p className="mt-3 text-sm text-slate-500 leading-relaxed font-light">
                          {day.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {faqs.length > 0 && (
                <section className="theme-panel p-8">
                  <h2 className="font-display text-2xl font-bold text-brand-slate">{sectionHeadings.faqs}</h2>
                  <div className="mt-6 divide-y divide-slate-100">
                    {faqs.map((faq) => (
                      <details key={faq.question} className="group py-5 first:pt-0 last:pb-0">
                        <summary className="cursor-pointer list-none pr-6 font-bold text-brand-slate marker:hidden">
                          {faq.question}
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Side: Quick Booking & What's included */}
            <div className="lg:col-span-4 space-y-8 sticky top-24">
              
              {/* Quick Booking CTA */}
              <div className="space-y-6 rounded-lg border border-slate-700 border-t-4 border-t-orange-500 bg-slate-900 p-8 text-center text-white shadow-[0_12px_32px_rgba(15,23,42,0.18)]">
                <div className="text-orange-300">
                  <h2 className="font-display text-lg font-bold">{sectionHeadings.price}</h2>
                  <p className="mt-1 font-display text-2xl font-black">{price || "Sur demande"}</p>
                </div>
                <h2 className="font-display text-2xl font-black">{sectionHeadings.request}</h2>
                <p className="text-sm font-light leading-relaxed text-slate-300">
                  Prix disponible sur demande. Contactez-nous pour un devis personnalisé.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="theme-button-primary min-h-12 w-full"
                  >
                    <span>Demander Ce Circuit</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/212667591933"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#128C7E] p-4 text-sm font-extrabold text-white shadow-[0_6px_16px_rgba(18,140,126,0.22)] transition-colors duration-300 hover:bg-[#0f766e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    <span>Contacter le guide (WhatsApp)</span>
                  </a>
                </div>
                <div className="pt-2 flex items-center justify-center gap-2 text-xs text-orange-100">
                  <ShieldCheck className="h-4 w-4 text-white" />
                  <span>{price || "Sur demande"}</span>
                </div>
              </div>

              {/* Inclusions Card */}
              <div className="theme-panel space-y-6 p-8">
                <h2 className="font-display font-bold text-brand-slate text-lg">{sectionHeadings.included}</h2>
                
                {/* Included */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-green-600">Inclus</h3>
                  <ul className="space-y-2.5">
                    {included.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="leading-tight">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not Included */}
                <div className="space-y-3 border-t border-slate-100 pt-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-red-500">Non Inclus</h3>
                  <ul className="space-y-2.5">
                    {notIncluded.map((notInc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{notInc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
