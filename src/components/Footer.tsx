import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fastLinks = [
    { name: "Accueil", href: "/" },
    { name: "Tous les circuits", href: "/circuits" },
    { name: "Qui sommes nous ?", href: "/qui-sommes-nous" },
    { name: "Informations Pratiques", href: "/informations-pratiques" },
    { name: "Excursions", href: "/excursions" },
    { name: "Contact", href: "/contact" },
  ];

  const popularTreks = [
    { name: "Tour du Toubkal – 15 jours", href: "/randonnee-dans-latlas" },
    { name: "M'Goun – 10 jours", href: "/randonnee-dans-le-haut-atlas-central" },
    { name: "Jbel Saghro – 8 jours", href: "/randonnee-jbel-saghro" },
    { name: "Dunes de Chegaga – 8 jours", href: "/randonnee-dunes-de-chegaga-circuit-de-8-jours-desert-marocain" },
    { name: "La Grande Traversée de l'Atlas", href: "/grande-traversee-de-latlas-marocain-circuit-de-22-jours" },
  ];

  return (
    <footer className="w-full bg-brand-slate text-brand-sand border-t border-brand-orange/10">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: About Maroc Treks */}
          <div className="space-y-6">
            <Link
              href="/"
              translate="no"
              aria-label="Maroc Treks — Accueil"
              className="notranslate inline-flex rounded-lg bg-white/95 px-3 py-2 shadow-lg shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-slate"
            >
              <Image
                src="/logo.png"
                alt="Maroc Treks — Explore the magic of Morocco"
                width={1137}
                height={544}
                sizes="210px"
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">
              Votre agence locale de trekking et randonnée au Maroc. Fondée par Mohamed Ait Tadrart, guide professionnel breveté avec plus de 20 ans d'expérience. Trek Toubkal, excursions désert, et immersion culturelle authentique.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="mt-6 space-y-3.5">
              {fastLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treks Populaires */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Treks Populaires</h3>
            <ul className="mt-6 space-y-3.5">
              {popularTreks.map((trek) => (
                <li key={trek.href}>
                  <Link
                    href={trek.href}
                    className="text-sm text-slate-300 hover:text-brand-orange transition-colors"
                  >
                    {trek.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact & Support</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand-orange mt-0.5" />
                <span className="text-sm text-slate-300">
                  Douar Armed, Imlil, Asni 42152, Maroc
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-orange" />
                <a
                  href="tel:+212667591933"
                  className="text-sm text-slate-300 hover:text-brand-orange transition-colors"
                >
                  +212 667 591 933
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-orange" />
                <a
                  href="mailto:tadrartmed@gmail.com"
                  className="text-sm text-slate-300 hover:text-brand-orange transition-colors break-all"
                >
                  tadrartmed@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/80 p-3">
              <ShieldCheck className="h-5 w-5 shrink-0 text-green-400" />
              <span className="text-xs font-semibold text-slate-300 leading-tight">
                Licence de guide professionnel certifiée par l'État Marocain.
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Sub-Footer */}
      <div className="border-t border-slate-800 bg-slate-950/60 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Maroc Treks. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/qui-sommes-nous" className="hover:text-brand-orange">
              À propos
            </Link>
            <Link href="/contact" className="hover:text-brand-orange">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
