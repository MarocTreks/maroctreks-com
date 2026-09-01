import Image from "next/image";
import { ShieldAlert, Compass, CalendarRange, Briefcase, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { createMetadata } from "@/lib/seo";
import { cloudinaryImage } from "@/lib/tour-media";

export const metadata = createMetadata({
  title: "Préparer un trek au Maroc : équipement et conseils",
  description: "Préparez votre trek au Maroc : équipement, chaussures, climat, meilleures saisons, altitude, santé, assurance et conseils pratiques de guides locaux.",
  path: "/informations-pratiques",
});

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
        "Munissez-vous d’un passeport en cours de validité couvrant au minimum toute la durée de votre séjour.",
        "Les exigences de visa ou d’autorisation électronique dépendent de votre nationalité : vérifiez-les auprès des autorités marocaines avant le départ.",
        "Devise : le dirham marocain (MAD). Des bureaux de change et distributeurs sont disponibles dans les aéroports et les principales villes.",
        "Pourboires : Il est d'usage de remercier l'équipe locale (muletiers, cuisinier, guide) par un pourboire à la fin du trek.",
      ],
      source: {
        href: "https://www.visitmorocco.com/fr/formalit%C3%A9s",
        label: "Consulter les formalités officielles de voyage au Maroc",
      },
    },
    {
      title: "Santé & Assurances",
      description: "Conseils pour voyager l'esprit tranquille.",
      icon: ShieldAlert,
      items: [
        "Pour participer à nos treks, votre assurance doit couvrir l’assistance-rapatriement ainsi que la recherche et le sauvetage en montagne jusqu’à 4 200 m.",
        "Demandez à votre médecin ou à un centre de vaccination les recommandations adaptées à votre santé, votre itinéraire et votre date de voyage.",
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
          <div className="absolute inset-0">
            <Image
              src={cloudinaryImage("58897216-87b3-488c-ba10-2914b95e69f1_qztmlj")}
              alt=""
              fill
              unoptimized
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/35 to-slate-950/15" />
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
                  className="theme-panel space-y-6 p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-orange-100 text-orange-700">
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
                  {sec.source && (
                    <a
                      href={sec.source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-sm font-semibold text-brand-orange underline-offset-4 hover:underline"
                    >
                      {sec.source.label}
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* FAQ Link / Quick Contact CTA */}
          <div className="mt-16 flex flex-col items-center justify-between gap-8 rounded-lg border border-slate-700 border-t-4 border-t-orange-500 bg-slate-900 p-8 text-white shadow-[0_12px_32px_rgba(15,23,42,0.16)] sm:p-12 md:flex-row">
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
              className="inline-flex min-h-12 shrink-0 items-center gap-2.5 rounded-md bg-[#128C7E] px-6 py-4 text-sm font-extrabold text-white shadow-[0_6px_16px_rgba(18,140,126,0.22)] transition-colors duration-300 hover:bg-[#0f766e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Nous contacter sur WhatsApp</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
