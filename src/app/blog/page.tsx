import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-posts";
import { createMetadata, JsonLd, SITE_URL } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Conseils trekking au Maroc",
  description: "Conseils de guides locaux pour préparer un trek au Maroc : Toubkal, Atlas, Sahara, saisons, équipement et sécurité en montagne.",
  path: "/blog",
});

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: "Conseils trekking au Maroc",
    description: "Conseils pratiques de l’équipe Maroc Treks pour préparer une randonnée au Maroc.",
    inLanguage: "fr-FR",
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: blogPosts.map((post) => ({ "@id": `${SITE_URL}/blog/${post.slug}#article` })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main className="flex-grow bg-[#fffdf7]">
        <header className="border-b border-stone-200 bg-[#f6f1e8] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Le carnet de nos guides
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
              Conseils pour préparer votre trek au Maroc
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Saisons, équipement, altitude et itinéraires : des réponses concrètes écrites avec l’expérience de notre équipe sur les sentiers de l’Atlas et du désert.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8" aria-label="Articles du blog">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={post.slug} className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.06)] transition-transform motion-safe:hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image src={post.image} alt={post.imageAlt} fill unoptimized priority={index === 0} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-slate-500">
                    <span className="uppercase tracking-[0.12em] text-orange-700">{post.category}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" aria-hidden="true" />{post.readingTime}</span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-black leading-snug text-slate-950">{post.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-extrabold text-orange-700 after:absolute after:inset-0">
                    Lire l’article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
