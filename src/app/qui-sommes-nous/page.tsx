import Image from "next/image";
import { Mountain, Award, Heart, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function QuiSommesNous() {
  const values = [
    {
      title: "Sécurité Absolue",
      description: "Nos guides sont certifiés par le Centre de Formation aux Métiers de Montagne (CFAMM) et formés aux premiers secours.",
      icon: Shield,
    },
    {
      title: "Économie Locale Solidaire",
      description: "Nous reversons des salaires équitables et travaillons directement avec les muletiers et familles de l'Atlas.",
      icon: Heart,
    },
    {
      title: "Authenticité & Culture",
      description: "Vivez le vrai Maroc. Partagez le thé chez l'habitant et découvrez le mode de vie ancestral des Berbères.",
      icon: Mountain,
    },
    {
      title: "20 Ans d'Expertise",
      description: "Mohamed Ait Tadrart et son équipe possèdent une connaissance parfaite des sentiers de l'Atlas et du désert.",
      icon: Award,
    },
  ];

  return (
    <>
      <Navbar />
      
      <main className="flex-grow bg-brand-sand">
        {/* Banner Section */}
        <section className="relative py-20 bg-brand-slate text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight">
              Qui Sommes-Nous ?
            </h1>
            <p className="mt-4 text-lg text-slate-300 font-light max-w-2xl mx-auto">
              Découvrez l'histoire de Maroc Treks et notre passion pour les grands espaces marocains.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Story */}
            <div className="space-y-6">
              <span className="text-sm font-bold tracking-wider uppercase text-brand-orange">Notre Histoire</span>
              <h2 className="font-display text-3xl font-extrabold text-brand-slate">
                Une passion née dans l'Atlas
              </h2>
              <div className="h-1 w-16 bg-brand-orange rounded-full" />
              
              <p className="text-slate-600 leading-relaxed">
                Né au cœur des montagnes du Toubkal, le fondateur de <strong>Maroc Treks</strong>, Mohamed Ait Tadrart, a grandi au rythme des transhumances et des sentiers de montagne. Devenu guide officiel après une formation rigoureuse dans l'Atlas et les Alpes françaises, il a décidé de fonder sa propre structure pour partager la splendeur de son pays de manière durable et sûre.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Aujourd'hui, Maroc Treks n'est pas seulement une agence touristique, c'est une grande famille de guides diplômés, de cuisiniers hors pair (capables de préparer des tagines succulents sur un réchaud à 3000m d'altitude) et de muletiers de confiance issus des mêmes vallées.
              </p>
              <p className="text-slate-600 leading-relaxed font-semibold text-brand-orange">
                « Notre objectif est de vous faire aimer le Maroc comme nous l'aimons, en respectant la nature et les hommes qui la peuplent. »
              </p>
            </div>

            {/* Crew Image and details */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand-orange/5 bg-white p-6 space-y-6">
              <Image
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800"
                alt="Notre équipe de muletiers et guides berbères"
                width={800}
                height={256}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div>
                <h3 className="font-display text-lg font-bold text-brand-slate">L'équipe de Maroc Treks</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Que ce soit pour l'ascension du Toubkal, un trek de 3 semaines ou un bivouac saharien, notre logistique assure des tentes de qualité, des repas chauds et copieux, et un portage des bagages par mules (montagne) ou dromadaires (désert) pour que vous profitiez sereinement de votre marche.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Values / Commitments */}
        <section className="py-16 sm:py-24 bg-white border-t border-b border-brand-orange/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-slate">
                Nos Engagements
              </h2>
              <p className="mt-4 text-slate-500">
                La charte éthique et professionnelle de Maroc Treks guide chacun de nos pas sur les sentiers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((val) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={val.title}
                    className="flex flex-col p-6 rounded-2xl bg-brand-sand border border-brand-orange/5 hover:border-brand-orange/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange mb-5">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-brand-slate mb-3">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
