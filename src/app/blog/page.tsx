import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock3, Compass, Mountain, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-posts";
import { createMetadata, JsonLd, SITE_URL } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog trekking Maroc : conseils de guides locaux",
  description: "Préparez votre trek au Maroc avec nos guides : saisons, équipement, Toubkal, Imlil, Atlas, Sahara, itinéraires et conseils de randonnée.",
  path: "/blog",
});

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts;
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
      <main className="flex-grow overflow-hidden bg-[#fbf8f1]">
        <header className="relative border-b border-stone-200/80 bg-slate-950 text-white">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_75%_25%,rgba(234,88,12,0.55),transparent_30%),radial-gradient(circle_at_15%_90%,rgba(245,158,11,0.18),transparent_25%)]" />
          <div className="absolute -right-24 top-16 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-8 top-32 h-72 w-72 rounded-full border border-white/5" />
          <div className="relative mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:gap-10 sm:px-6 sm:py-28 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:px-8">
            <div>
              <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-orange-300">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Le carnet de nos guides
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-[0.98] tracking-tight sm:mt-6 sm:text-7xl">
                Marcher mieux.<br /><span className="text-orange-400">Voyager plus loin.</span>
              </h1>
            </div>
            <div className="border-l border-white/15 pl-4 sm:pl-8">
              <p className="max-w-xl text-base leading-6 text-slate-300 sm:text-lg sm:leading-8">
                Conseils de terrain, itinéraires et histoires du Maroc pour préparer une aventure juste, sûre et inoubliable.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-400 sm:mt-6 sm:gap-5 sm:text-xs">
                <span className="inline-flex items-center gap-2"><Mountain className="h-4 w-4 text-orange-400" />Atlas</span>
                <span className="inline-flex items-center gap-2"><Compass className="h-4 w-4 text-orange-400" />Conseils locaux</span>
                <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-orange-400" />Inspiration</span>
              </div>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-20 lg:px-8" aria-label="Article à la une">
          <div className="mb-7 flex items-center gap-4">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-700">À la une</span>
            <span className="h-px flex-1 bg-stone-300" />
          </div>
          <article className="group relative grid overflow-hidden rounded-[1.75rem] bg-slate-950 shadow-[0_24px_70px_rgba(15,23,42,0.18)] lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative min-h-[220px] overflow-hidden sm:min-h-[340px] lg:min-h-[500px]">
              <Image src={featuredPost.image} alt={featuredPost.imageAlt} fill unoptimized priority sizes="(min-width: 1024px) 65vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/35" />
            </div>
            <div className="relative flex flex-col justify-center p-5 text-white sm:p-10 lg:p-12">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-orange-300">
                <span>{featuredPost.category}</span><span className="h-1 w-1 rounded-full bg-slate-500" /><span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{featuredPost.readingTime}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-black leading-tight sm:mt-5 sm:text-4xl">{featuredPost.title}</h2>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7">{featuredPost.excerpt}</p>
              <Link href={`/blog/${featuredPost.slug}`} className="mt-5 inline-flex w-fit items-center gap-3 rounded-full bg-orange-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-orange-500 after:absolute after:inset-0 sm:mt-8 sm:px-6 sm:py-3.5">
                Lire l’article <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8" aria-label="Tous les articles">
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-stone-300 pb-5">
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-orange-700">Explorer</p><h2 className="mt-2 font-display text-3xl font-black text-slate-950 sm:text-4xl">Tous nos conseils</h2></div>
            <p className="hidden text-sm font-semibold text-slate-500 sm:block">{blogPosts.length} articles de terrain</p>
          </div>
          <div className="grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <article key={post.slug} className="group relative flex h-full flex-col">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-200 sm:aspect-[4/3]">
                  <Image src={post.image} alt={post.imageAlt} fill unoptimized sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.13em] text-orange-800 shadow-sm backdrop-blur">{post.category}</span>
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500"><Clock3 className="h-3.5 w-3.5" />{post.readingTime}</span>
                  <h3 className="mt-2 font-display text-xl font-black leading-tight text-slate-950 transition group-hover:text-orange-700 sm:mt-3 sm:text-2xl">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-extrabold text-orange-700 after:absolute after:inset-0">Lire le guide <ArrowUpRight className="h-4 w-4" /></Link>
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
