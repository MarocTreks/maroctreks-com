import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import { createMetadata, JsonLd, SITE_URL } from "@/lib/seo";
import { sourceSitePages } from "@/lib/site-content";
import { getTour } from "@/lib/tours";
import { cloudinaryImage } from "@/lib/tour-media";

const page = sourceSitePages.circuits;

export const metadata = createMetadata({
  title: page.heroTitle,
  description: page.heroSubtitle,
  path: page.path,
});

export default function CircuitsPage() {
  const collectionTours = page.collectionItems.flatMap((item) => {
    const tour = getTour(item.slug);
    return tour ? [{ tour, displayTitle: item.title }] : [];
  });
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}${page.path}#collection`,
    url: `${SITE_URL}${page.path}`,
    name: page.heroTitle,
    description: page.heroSubtitle,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: collectionTours.length,
      itemListElement: collectionTours.map(({ tour, displayTitle }, index) => ({
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
          <Image
            src={cloudinaryImage("4796C7E6-F03B-4847-B866-107C876E9AD7_nfgfpq")}
            alt="Montagnes de l'Atlas au Maroc"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/35 to-slate-950/10" />
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-6xl">{page.heroTitle}</h1>
            <div className="mx-auto mt-6 max-w-3xl space-y-3 text-lg leading-relaxed text-slate-200">
              {page.heroParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl border-y border-slate-300 py-10 sm:py-12">
            <h2 className="font-display text-3xl font-black text-brand-slate">{page.introHeading}</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              {page.introParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <div className="mb-10 mt-16">
            <h2 className="font-display text-3xl font-black text-brand-slate sm:text-4xl">{page.collectionHeading}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{page.collectionDescription}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {collectionTours.map(({ tour, displayTitle }) => (
              <TourCard key={tour.slug} tour={tour} displayTitle={displayTitle} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
