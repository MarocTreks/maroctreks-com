import Link from "next/link";
import Image from "next/image";
import { Mountain, Clock, CheckCircle2, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const treks = [
    {
      title: "Haut Atlas Toubkal",
      description: "Gravissez le sommet de l'Afrique du Nord (4 167 m) et découvrez les villages berbères traditionnels.",
      href: "/haut-atlas-toubkal",
      duration: "2-8 Jours",
      difficulty: "Modéré à Difficile",
      image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Le Désert du Sahara",
      description: "Explorez les dunes sauvages de Chegaga en dromadaire et bivouaquez sous les étoiles.",
      href: "/le-desert",
      duration: "5-8 Jours",
      difficulty: "Facile à Modéré",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Côte Atlantique d'Essaouira",
      description: "Une randonnée vivifiante entre plages sauvages, dunes côtières et villages de pêcheurs.",
      href: "/randonnee-cote-atlantique-circuit-de-8-jours-essaouira",
      duration: "8 Jours",
      difficulty: "Facile",
      image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Grande Traversée de l'Atlas",
      description: "Le trek ultime de 22 jours à travers les vallées et les hauts cols sauvages du Maroc.",
      href: "/grande-traversee-de-latlas-marocain-circuit-de-22-jours",
      duration: "22 Jours",
      difficulty: "Trés Difficile",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-slate overflow-hidden">
          {/* Background Image / Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?auto=format&fit=crop&q=80&w=1920"
              alt="Trekking in Morocco Atlas Mountains"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-35 object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-sand via-transparent to-brand-slate/85 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-slate via-brand-slate/50 to-transparent z-10" />
          </div>

          <div className="relative z-20 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-left w-full">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-brand-orange border border-brand-orange/30 mb-6">
                <Mountain className="h-4 w-4" />
                <span>Randonnées 100% Authentiques au Maroc</span>
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                Vivez l'aventure unique du <span className="text-brand-orange">Trekking</span> au Maroc
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed font-light">
                Explorez le Haut Atlas, grimpez le Toubkal ou découvrez la magie des bivouacs sahariens avec Mohamed Ait Tadrart et son équipe de guides locaux berbères certifiés.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-orange/30 hover:scale-[1.02] hover:shadow-brand-orange/40 transition-all duration-300"
                >
                  Réserver Maintenant
                </Link>
                <a
                  href="#tours"
                  className="rounded-xl border-2 border-white/60 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm hover:bg-white hover:text-brand-slate hover:border-white transition-all duration-300"
                >
                  Découvrir les Circuits
                </a>
              </div>

              {/* Quick Stats */}
              <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/15 pt-8 max-w-xl">
                <div>
                  <span className="block text-3xl font-extrabold text-brand-gold">20+</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Années d'Expérience</span>
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-brand-gold">100%</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Guides Locaux Berbères</span>
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-brand-gold">4.9★</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Note Clients</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tours Section */}
        <section id="tours" className="py-20 lg:py-28 bg-brand-sand">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-slate">
                Nos Circuits Phares
              </h2>
              <div className="mt-3 h-1 w-20 bg-brand-orange mx-auto rounded-full" />
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                Des déserts du Sahara aux cimes de l'Atlas, explorez nos voyages incontournables minutieusement préparés par nos guides professionnels.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              {treks.map((trek) => (
                <div
                  key={trek.href}
                  className="group flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-brand-orange/5 bg-white shadow-lg hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300"
                >
                  {/* Card Image */}
                  <div className="relative h-56 sm:h-auto sm:w-2/5 shrink-0 overflow-hidden">
                    <Image
                      src={trek.image}
                      alt={trek.title}
                      fill
                      sizes="(min-width: 640px) 40vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent sm:hidden" />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-brand-orange uppercase mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {trek.duration}
                        </span>
                        <span>•</span>
                        <span>{trek.difficulty}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-brand-slate group-hover:text-brand-orange transition-colors">
                        {trek.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                        {trek.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <Link
                        href={trek.href}
                        className="inline-flex items-center text-sm font-bold text-brand-orange hover:text-brand-orange-hover gap-1"
                      >
                        <span>Détails de l'itinéraire</span>
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder / About Section */}
        <section className="py-20 bg-gradient-to-b from-brand-sand to-white border-t border-brand-orange/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Photo Frame */}
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-4 rounded-3xl bg-brand-gold/10 -rotate-2" />
                <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl rotate-1">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
                    alt="Mohamed Ait Tadrart Guide"
                    width={600}
                    height={450}
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6 text-white">
                    <span className="text-xs uppercase font-bold tracking-wider text-brand-gold">Fondateur & Guide Principal</span>
                    <h3 className="text-xl font-bold font-display mt-1">Mohamed Ait Tadrart</h3>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-sm font-bold tracking-wider uppercase text-brand-orange">Qui Sommes-Nous ?</span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-slate">
                  Une équipe locale berbère passionnée
                </h2>
                <div className="h-1 w-16 bg-brand-orange rounded-full" />
                
                <p className="text-slate-600 leading-relaxed">
                  <strong>Maroc Treks</strong> est une agence locale basée dans les montagnes de l'Atlas. Son fondateur, Mohamed Ait Tadrart, est un guide de montagne professionnel breveté avec plus de 20 ans d'expérience dans l'accompagnement de randonneurs dans l'Atlas marocain, l'Anti-Atlas et le grand désert du Sahara.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Nous employons exclusivement des guides locaux, muletiers, cuisiniers et chameliers berbères. En choisissant Maroc Treks, vous soutenez directement l'économie locale et les familles des vallées de montagne tout en vivant une immersion culturelle d'une authenticité sans égale.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "Guides certifiés par l'État",
                    "Cuisine berbère fraîche et saine",
                    "Logistique & sécurité éprouvées",
                    "Itinéraires sur mesure et flexibles",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-orange" />
                      <span className="text-sm font-semibold text-brand-slate">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA booking section */}
        <section className="py-20 lg:py-24 bg-brand-slate text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1920"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Prêt pour une aventure sur-mesure ?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto">
              Que vous voyagiez seul, en famille ou en groupe, nous adaptons le parcours à vos envies et à votre forme physique.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-orange/30 hover:scale-[1.02] hover:shadow-brand-orange/40 transition-all duration-300"
              >
                <span>Demander un Devis Gratuit</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
