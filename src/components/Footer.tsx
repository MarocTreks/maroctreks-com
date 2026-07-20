import Link from "next/link";
import { Mountain, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fastLinks = [
    { name: "Accueil", href: "/" },
    { name: "Qui sommes nous ?", href: "/qui-sommes-nous" },
    { name: "Informations Pratiques", href: "/informations-pratiques" },
    { name: "Excursions", href: "/excursions" },
    { name: "Contact", href: "/contact" },
  ];

  const popularTreks = [
    { name: "Ascension du Toubkal (4167m)", href: "/haut-atlas-toubkal" },
    { name: "Traversée du Mgoun (4068m)", href: "/haut-atlas-mgoun" },
    { name: "Trek de l'Anti-Atlas (Siroua)", href: "/antis-atlas" },
    { name: "Aventure au Sahara / Désert", href: "/le-desert" },
    { name: "La Grande Traversée de l'Atlas", href: "/grande-traversee-de-latlas-marocain-circuit-de-22-jours" },
  ];

  return (
    <footer className="w-full bg-brand-slate text-brand-sand border-t border-brand-orange/10">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: About Maroc Treks */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-gold text-white shadow-md shadow-brand-orange/20">
                <Mountain className="h-5.5 w-5.5" />
              </div>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                Maroc<span className="text-brand-orange">Treks</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">
              Votre agence locale de trekking et randonnée au Maroc. Fondée par Mohamed Ait Tadrart, guide professionnel breveté avec plus de 20 ans d'expérience. Trek Toubkal, excursions désert, et immersion culturelle authentique.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-orange transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-orange transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
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
                  Imlil, Atlas Mountains, Maroc
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
            <div className="mt-6 flex items-center gap-2 rounded-xl bg-slate-800/80 p-3 border border-slate-700/50">
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
              Mentions Légales
            </Link>
            <Link href="/contact" className="hover:text-brand-orange">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
