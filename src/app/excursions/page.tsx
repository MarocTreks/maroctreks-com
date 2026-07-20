import Link from "next/link";
import Image from "next/image";
import { Clock, ChevronRight, CalendarRange, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Excursions() {
  const excursionsList = [
    {
      title: "Vallée de l'Ourika",
      description: "Une escapade fraîche aux pieds de l'Atlas. Randonnée le long des cascades de Setti Fatma et déjeuner au bord de la rivière.",
      duration: "1 Jour",
      image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Cascades d'Ouzoud",
      description: "Découvrez les plus hautes chutes d'eau du Maroc (110m), observez les singes Magots en liberté et profitez d'une balade bucolique.",
      duration: "1 Jour",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Aït Benhaddou & Ouarzazate",
      description: "Franchissez l'Atlas par le col du Tichka pour visiter le mythique Ksar fortifié d'Aït Benhaddou et les studios de cinéma.",
      duration: "1 Jour",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Essaouira sur la Côte",
      description: "Visitez la médina fortifiée des artistes, son port de pêche actif, et profitez d'un déjeuner de poissons frais au grand air marin.",
      duration: "1 Jour",
      image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <>
      <Navbar />
      
      <main className="flex-grow bg-brand-sand">
        {/* Banner */}
        <section className="relative py-20 bg-brand-slate text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1920"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight">
              Excursions d'une Journée
            </h1>
            <p className="mt-4 text-lg text-slate-300 font-light max-w-2xl mx-auto">
              Au départ de Marrakech, évadez-vous le temps d'une journée pour découvrir les merveilles naturelles et historiques du Maroc.
            </p>
          </div>
        </section>

        {/* List Section */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {excursionsList.map((exc) => (
              <div
                key={exc.title}
                className="group flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-brand-orange/5 bg-white shadow-lg hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-auto sm:w-2/5 shrink-0 overflow-hidden">
                  <Image
                    src={exc.image}
                    alt={exc.title}
                    fill
                    sizes="(min-width: 640px) 40vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <span className="flex items-center gap-1 text-xs font-semibold text-brand-orange uppercase mb-2">
                      <Clock className="h-3.5 w-3.5" />
                      {exc.duration}
                    </span>
                    <h2 className="font-display text-xl font-bold text-brand-slate group-hover:text-brand-orange transition-colors">
                      {exc.title}
                    </h2>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed font-light">
                      {exc.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-bold text-brand-orange hover:text-brand-orange-hover gap-1"
                    >
                      <span>Réserver l'excursion</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom request CTA */}
          <div className="mt-16 rounded-3xl bg-white border border-brand-orange/5 p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CalendarRange className="h-6 w-6 text-brand-orange" />
                <h3 className="font-display text-2xl font-bold text-brand-slate">Groupes ou Comités d'Entreprise ?</h3>
              </div>
              <p className="text-slate-500 text-sm sm:text-base font-light max-w-xl">
                Nous pouvons privatiser des excursions d'un ou plusieurs jours avec transport dédié et repas réservés pour vos séjours professionnels ou familiaux.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold px-6 py-4 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all duration-300 shrink-0"
            >
              <HeartHandshake className="h-4.5 w-4.5" />
              <span>Demander un devis sur-mesure</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
