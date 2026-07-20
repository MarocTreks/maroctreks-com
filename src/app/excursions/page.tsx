import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Footprints, HeartHandshake, Mountain, Route, Sun } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/seo";
import { sourceSitePages } from "@/lib/site-content";

const page = sourceSitePages.excursions;
const sectionImages = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1400",
  "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1400",
];

function excursionIcon(item: string, isDesertSection: boolean) {
  if (item.includes("4x4")) return Route;
  if (isDesertSection || item.toLocaleLowerCase("fr").includes("désert")) return Sun;
  if (item.toLocaleLowerCase("fr").includes("ascension")) return Mountain;
  return Footprints;
}

export const metadata = createMetadata({
  title: "Excursions Professionnelles au Maroc",
  description: `${page.heroSubtitle}. ${page.sections.map((section) => section.heading).join(". ")}.`,
  path: page.path,
});

export default function Excursions() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-brand-sand">
        <header className="relative overflow-hidden bg-brand-slate py-20 text-white">
          <Image
            src="https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1920"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl">{page.heroTitle}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-slate-300">{page.heroSubtitle}</p>
          </div>
        </header>

        <section className="mx-auto max-w-7xl space-y-12 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {page.sections.map((section, sectionIndex) => (
            <section key={section.heading} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.08)]">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                <div className="relative min-h-72 overflow-hidden lg:min-h-full">
                  <Image
                    src={sectionImages[sectionIndex]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent lg:bg-gradient-to-r" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
                      {sectionIndex === 0
                        ? <Mountain className="h-6 w-6 text-orange-300" aria-hidden="true" />
                        : <Sun className="h-6 w-6 text-orange-300" aria-hidden="true" />}
                    </span>
                    <h2 className="mt-4 max-w-md font-display text-3xl font-black leading-tight sm:text-4xl">{section.heading}</h2>
                    <p className="mt-3 text-sm font-bold text-orange-200">{section.subtitle}</p>
                  </div>
                </div>
                <div className="p-5 sm:p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {section.items.map((item, itemIndex) => {
                      const Icon = excursionIcon(item, sectionIndex === 1);
                      return (
                        <article key={item} className="group flex min-h-36 flex-col rounded-xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-orange-300 hover:bg-orange-50/40">
                          <div className="flex items-center justify-between">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
                              <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                            </span>
                            <span className="font-display text-sm font-extrabold tabular-nums text-orange-700" aria-hidden="true">
                              {String(itemIndex + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <h3 className="mt-4 text-sm font-bold leading-relaxed text-slate-800">{item}</h3>
                        </article>
                      );
                    })}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-orange-700 px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2"
                    aria-label={`Contactez-nous pour ${section.heading}`}
                  >
                    Contactez-nous
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>
          ))}

          <div className="flex justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-brand-slate px-7 py-4 text-sm font-bold text-white shadow-lg transition-colors hover:bg-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2"
            >
              <HeartHandshake className="h-5 w-5" aria-hidden="true" />
              <span>Contactez-nous</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
