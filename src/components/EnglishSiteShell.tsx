import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_E164,
} from "@/lib/business";

const whatsAppUrl =
  "https://wa.me/212667591933?text=Hello%20Maroc%20Treks%2C%20I%20would%20like%20help%20planning%20a%20trek%20in%20Morocco.";

export default function EnglishSiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en" className="flex min-h-screen flex-col bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/en" aria-label="Maroc Treks English home" className="shrink-0 rounded-lg">
            <Image src="/logo-header.png" alt="Maroc Treks" width={360} height={153} sizes="130px" className="h-14 w-auto object-contain" />
          </Link>
          <nav aria-label="English navigation" className="hidden items-center gap-7 text-sm font-bold md:flex">
            <Link href="/en" className="transition hover:text-orange-700">Home</Link>
            <Link href="/en/mount-toubkal-trek" className="transition hover:text-orange-700">Mount Toubkal</Link>
            <Link href="/en#destinations" className="transition hover:text-orange-700">Destinations</Link>
            <Link href="/" hrefLang="fr" className="transition hover:text-orange-700">Français</Link>
          </nav>
          <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="theme-button-primary min-h-11 px-4">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Plan your trek</span>
            <span className="sm:hidden">Contact</span>
          </a>
        </div>
      </header>

      {children}

      <footer className="mt-auto border-t border-slate-800 bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <p className="font-display text-xl font-black text-white">Maroc Treks</p>
            <p className="mt-3 max-w-sm text-sm leading-6">Private Morocco trekking tours organised directly by a local mountain team based in the Imlil valley.</p>
          </div>
          <div>
            <p className="font-bold text-white">Explore</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/en/mount-toubkal-trek" className="hover:text-orange-300">Mount Toubkal trek</Link></li>
              <li><Link href="/en" className="hover:text-orange-300">Morocco trekking tours</Link></li>
              <li><Link href="/" hrefLang="fr" className="hover:text-orange-300">French website</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">Contact our local team</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden="true" />{BUSINESS_ADDRESS}</li>
              <li><a href={`tel:${BUSINESS_PHONE_E164}`} className="flex gap-2 hover:text-orange-300"><Phone className="h-4 w-4 text-orange-400" aria-hidden="true" />{BUSINESS_PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${BUSINESS_EMAIL}`} className="flex gap-2 hover:text-orange-300"><Mail className="h-4 w-4 text-orange-400" aria-hidden="true" />{BUSINESS_EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 px-4 py-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Maroc Treks. Local trekking team in Morocco.
        </div>
      </footer>
    </div>
  );
}
