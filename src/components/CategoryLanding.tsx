import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import { JsonLd, SITE_URL } from "@/lib/seo";
import type { TourCategoryDefinition } from "@/lib/tours";
import { getTour } from "@/lib/tours";

const generalGuides = [
  { href: "/blog/meilleure-periode-trekking-maroc", title: "Quand partir en trek au Maroc ?" },
  { href: "/blog/que-mettre-sac-trek-maroc", title: "La checklist complète pour votre trek" },
];

const regionalGuides: Record<string, { href: string; title: string }[]> = {
  "/haut-atlas-toubkal": [{ href: "/blog/ascension-toubkal-guide-pratique", title: "Préparer l’ascension du Toubkal" }],
  "/haut-atlas-mgoun": [{ href: "/blog/trek-vallee-ait-bouguemez-4-5-jours", title: "Trek dans la vallée des Aït Bouguemez" }],
  "/vallees-dades-roses": [{ href: "/blog/haut-atlas-maroc-guide-complet", title: "Guide complet du Haut Atlas" }],
  "/antis-atlas": [{ href: "/blog/haut-atlas-maroc-guide-complet", title: "Comprendre les massifs du Maroc" }],
};

export default function CategoryLanding({ category }: { category: TourCategoryDefinition }) {
  const categoryTours = category.collectionItems.flatMap((item) => {
    const tour = getTour(item.slug);
    return tour ? [{ tour, displayTitle: item.title }] : [];
  });
  const practicalGuides = [...(regionalGuides[category.path] ?? []), ...generalGuides].slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}${category.path}#collection`,
    url: `${SITE_URL}${category.path}`,
    name: category.title,
    description: category.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: categoryTours.length,
      itemListElement: categoryTours.map(({ tour, displayTitle }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}${tour.path}`,
        name: displayTitle,
      })),
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main className="flex-grow bg-brand-sand">
        <header className="relative overflow-hidden bg-brand-slate py-14 text-white sm:py-32">
          <Image src={category.image} alt={`Paysage de ${category.title}`} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/35 to-slate-950/15" />
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
            <Link href="/circuits" className="theme-button-on-dark min-h-10 px-4 py-2">
              <ArrowLeft className="h-4 w-4" /> Tous les circuits
            </Link>
            <h1 className="mt-5 font-display text-3xl font-black tracking-tight sm:mt-8 sm:text-6xl">{category.title}</h1>
            <div className="mx-auto mt-4 max-w-3xl space-y-3 text-base leading-6 text-slate-200 sm:mt-6 sm:text-lg sm:leading-relaxed [&>p:not(:first-child)]:hidden sm:[&>p:not(:first-child)]:block">
              {category.heroParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl border-y border-slate-300 py-10 sm:py-12">
            <h2 className="font-display text-3xl font-black text-brand-slate">{category.introHeading}</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              {category.introParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <div className="mb-10 mt-16">
            <h2 className="font-display text-3xl font-black text-brand-slate sm:text-4xl">{category.collectionHeading}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{category.collectionDescription}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {categoryTours.map(({ tour, displayTitle }) => <TourCard key={tour.slug} tour={tour} displayTitle={displayTitle} />)}
          </div>

          <section className="mt-16 border-t border-slate-300 pt-10" aria-labelledby="category-guides-heading">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700">Conseils de terrain</p>
            <h2 id="category-guides-heading" className="mt-3 font-display text-3xl font-black text-brand-slate">Préparer votre trek dans cette région</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {practicalGuides.map((guide) => (
                <Link key={guide.href} href={guide.href} className="group flex min-h-32 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300">
                  <h3 className="font-display text-xl font-black leading-tight text-brand-slate group-hover:text-orange-700">{guide.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-orange-700">Lire le guide <ArrowUpRight className="h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
