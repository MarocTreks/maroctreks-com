import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import { JsonLd, SITE_URL } from "@/lib/seo";
import type { TourCategoryDefinition } from "@/lib/tours";
import { getTour } from "@/lib/tours";

export default function CategoryLanding({ category }: { category: TourCategoryDefinition }) {
  const categoryTours = category.collectionItems.flatMap((item) => {
    const tour = getTour(item.slug);
    return tour ? [{ tour, displayTitle: item.title }] : [];
  });
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
        <header className="relative overflow-hidden bg-brand-slate py-24 text-white sm:py-32">
          <Image src={category.image} alt={`Paysage de ${category.title}`} fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-slate via-brand-slate/70 to-brand-slate/30" />
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
            <Link href="/circuits" className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Tous les circuits
            </Link>
            <h1 className="mt-8 font-display text-4xl font-black tracking-tight sm:text-6xl">{category.title}</h1>
            <div className="mx-auto mt-6 max-w-3xl space-y-3 text-lg leading-relaxed text-slate-200">
              {category.heroParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border border-brand-orange/5 bg-white p-8 shadow-lg sm:p-12">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
