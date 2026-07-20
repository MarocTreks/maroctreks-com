import Image from "next/image";
import { ShieldAlert, Compass, CalendarRange, Briefcase, HelpCircle, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InformationsPratiques() {
  const sections = [
    {
      title: "Équipement Recommandé",
      description: "Ce qu'il faut emporter pour votre confort et votre sécurité en montagne et dans le désert.",
      icon: Briefcase,
      items: [
        "Un sac de couchage chaud (confort 0°C à -5°C pour l'Atlas en altitude).",
        "De bonnes chaussures de marche montantes et déjà portées.",
        "Des vêtements chauds et respirants (système des 3 couches).",
        "Une lampe frontale avec piles de rechange.",
        "Pastilles de purification d'eau (Micropur) ou gourde filtrante.",
        "Une trousse de pharmacie personnelle (pansements, antalgiques, anti-diarrhéiques).",
        "Crème solaire haute protection, lunettes de soleil de catégorie 3 ou 4 et casquette.",
      ],
    },
    {
      title: "Climat & Saisons",
      description: "Quand partir au Maroc selon le type d'aventure souhaité.",
      icon: CalendarRange,
      items: [
        "Haut Atlas (Toubkal/Mgoun) : Idéal de mai à octobre. En hiver (novembre à avril), l'alpinisme requiert crampons et piolets.",
        "Désert du Sahara : De mi-octobre à avril. Les mois d'été sont extrêmement chauds et déconseillés pour les treks.",
        "Côte Atlantique (Essaouira) : Agréable toute l'année grâce aux vents alizés tempérés.",
      ],
    },
    {
      title: "Formalités & Devises",
      description: "Informations administratives utiles avant de décoller.",
      icon: Compass,
      items: [
        "Passeport en cours de validité (obligatoire, valable au moins 3 mois après la date de retour).",
        "Pas de visa requis pour les ressortissants de l'UE, du Canada et de Suisse pour un séjour < 90 jours.",
        "Devise : Le Dirham Marocain (MAD). 1 EUR ≈ 10.8 MAD. Il est conseillé de retirer des espèces dans les villes majeures.",
        "Pourboires : Il est d'usage de remercier l'équipe locale (muletiers, cuisinier, guide) par un pourboire à la fin du trek.",
      ],
    },
    {
      title: "Santé & Assurances",
      description: "Conseils pour voyager l'esprit tranquille.",
      icon: ShieldAlert,
      items: [
        "Une assurance assistance-rapatriement couvrant la recherche et le sauvetage en montagne (jusqu'à 4200m) est obligatoire.",
        "Aucun vaccin spécifique n'est exigé, mais assurez-vous que vos vaccins classiques (Tétanos, Polio, Hépatite A) sont à jour.",
        "Évitez de boire l'eau du robinet en dehors des grandes villes, privilégiez l'eau bouillie par l'équipe de cuisine ou l'eau capsulée.",
      ],
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
              src="https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=1920"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight">
              Informations Pratiques
            </h1>
            <p className="mt-4 text-lg text-slate-300 font-light max-w-2xl mx-auto">
              Tout ce que vous devez savoir pour préparer sereinement votre trek dans l'Atlas ou le désert.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {sections.map((sec) => {
              const IconComponent = sec.icon;
              return (
                <div
                  key={sec.title}
                  className="rounded-3xl border border-brand-orange/5 bg-white p-8 shadow-lg space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-brand-slate">
                        {sec.title}
                      </h2>
                      <p className="text-xs text-slate-400 mt-1">{sec.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 pl-4 border-l-2 border-brand-orange/20">
                    {sec.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-600 leading-relaxed list-disc list-inside marker:text-brand-orange">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* FAQ Link / Quick Contact CTA */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-brand-orange to-brand-gold p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-white" />
                <h3 className="font-display text-2xl font-bold">Une question spécifique ?</h3>
              </div>
              <p className="text-slate-100 text-sm sm:text-base font-light max-w-xl">
                Niveau physique requis, logistique pour enfants, ou matériel d'alpinisme... Notre guide Mohamed vous répond en direct.
              </p>
            </div>
            <a
              href="https://wa.me/212667591933"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-brand-slate px-6 py-4 text-sm font-bold text-white shadow-lg hover:scale-105 hover:bg-slate-900 transition-all duration-300 shrink-0"
            >
              <HeartHandshake className="h-4.5 w-4.5 text-brand-orange" />
              <span>Nous contacter sur WhatsApp</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
