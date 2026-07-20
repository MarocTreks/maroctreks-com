import Link from "next/link";
import Image from "next/image";
import { Check, X, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface TrekDetailProps {
  title: string;
  subtitle?: string;
  bannerImage: string;
  duration: string;
  difficulty: string;
  maxAltitude: string;
  bestSeason: string;
  description: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  notIncluded: string[];
}

export default function TrekDetailLayout({
  title,
  subtitle,
  bannerImage,
  duration,
  difficulty,
  maxAltitude,
  bestSeason,
  description,
  highlights,
  itinerary,
  included,
  notIncluded,
}: TrekDetailProps) {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-brand-sand">
        {/* Trek Hero Banner */}
        <section className="relative py-24 sm:py-32 bg-brand-slate text-white overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <Image src={bannerImage} alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-sand via-transparent to-brand-slate/90 z-10" />
          
          <div className="relative z-20 max-w-5xl mx-auto px-4 text-center space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Retour à l'accueil</span>
            </Link>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg sm:text-xl text-slate-300 font-light max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}

            {/* Quick Specs */}
            <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-white/10 mt-10">
              <div className="text-center">
                <span className="block text-xs uppercase font-bold tracking-wider text-slate-400">Durée</span>
                <span className="block text-base sm:text-lg font-bold text-brand-gold mt-1">{duration}</span>
              </div>
              <div className="text-center border-l border-white/10">
                <span className="block text-xs uppercase font-bold tracking-wider text-slate-400">Difficulté</span>
                <span className="block text-base sm:text-lg font-bold text-brand-gold mt-1">{difficulty}</span>
              </div>
              <div className="text-center border-l border-white/10">
                <span className="block text-xs uppercase font-bold tracking-wider text-slate-400">Altitude Max</span>
                <span className="block text-base sm:text-lg font-bold text-brand-gold mt-1">{maxAltitude}</span>
              </div>
              <div className="text-center border-l border-white/10">
                <span className="block text-xs uppercase font-bold tracking-wider text-slate-400">Meilleure Saison</span>
                <span className="block text-base sm:text-lg font-bold text-brand-gold mt-1">{bestSeason}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Details and Itinerary */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Overview & Timeline */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <div className="bg-white rounded-3xl p-8 border border-brand-orange/5 shadow-lg space-y-4">
                <h2 className="font-display text-2xl font-bold text-brand-slate">Présentation du circuit</h2>
                <div className="h-1 w-12 bg-brand-orange rounded-full" />
                <p className="text-slate-600 leading-relaxed font-light whitespace-pre-line">
                  {description}
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-3xl p-8 border border-brand-orange/5 shadow-lg space-y-6">
                <h2 className="font-display text-2xl font-bold text-brand-slate">Les Points Forts</h2>
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

              {/* Day-by-Day Itinerary */}
              <div className="space-y-6">
                <h2 className="font-display text-2xl font-bold text-brand-slate px-2">Programme jour par jour</h2>
                
                <div className="relative border-l-2 border-brand-orange/20 ml-4 space-y-10 pl-6 sm:pl-8">
                  {itinerary.map((day) => (
                    <div key={day.day} className="relative group">
                      {/* Day Dot Indicator */}
                      <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-brand-orange font-bold text-white shadow-md border-4 border-brand-sand group-hover:scale-110 transition-transform">
                        {day.day}
                      </div>

                      {/* Day Content Card */}
                      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-orange/5 shadow-md hover:shadow-lg transition-all duration-300">
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
              </div>
            </div>

            {/* Right Side: Quick Booking & What's included */}
            <div className="lg:col-span-4 space-y-8 sticky top-24">
              
              {/* Quick Booking CTA */}
              <div className="rounded-3xl bg-gradient-to-br from-brand-orange to-brand-gold p-8 text-white shadow-xl text-center space-y-6">
                <h3 className="font-display text-2xl font-black">Réserver ce trek</h3>
                <p className="text-sm text-orange-50 font-light leading-relaxed">
                  Envoyez-nous vos dates, le nombre de personnes et vos préférences. Nous ajusterons l'itinéraire pour vous.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-slate p-4 text-sm font-bold text-white shadow-lg hover:scale-102 transition-all duration-300"
                  >
                    <span>Faire une demande de devis</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/212667591933"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white p-4 text-sm font-bold text-brand-orange shadow-md hover:bg-slate-50 transition-all duration-300"
                  >
                    <span>Contacter le guide (WhatsApp)</span>
                  </a>
                </div>
                <div className="pt-2 flex items-center justify-center gap-2 text-xs text-orange-100">
                  <ShieldCheck className="h-4 w-4 text-white" />
                  <span>Prix juste, direct guide local</span>
                </div>
              </div>

              {/* Inclusions Card */}
              <div className="rounded-3xl bg-white border border-brand-orange/5 p-8 shadow-lg space-y-6">
                <h4 className="font-display font-bold text-brand-slate text-lg">Inclus / Non Inclus</h4>
                
                {/* Included */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-green-600 block">Compris dans le tarif :</span>
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
                  <span className="text-xs font-bold uppercase tracking-wider text-red-500 block">Non compris dans le tarif :</span>
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
