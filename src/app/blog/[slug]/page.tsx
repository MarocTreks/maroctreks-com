import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock3, Compass, Mountain, UserRound } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import { createMetadata, JsonLd, SITE_URL } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  const title = post?.seoTitle ?? post?.title;
  return post && title ? createMetadata({ title, description: post.description, path: `/blog/${post.slug}`, image: post.image }) : {};
}

function sectionId(heading: string) {
  return heading.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();

  const articleSchema = { "@context": "https://schema.org", "@type": "BlogPosting", "@id": `${SITE_URL}/blog/${post.slug}#article`, headline: post.title, description: post.description, image: post.image, datePublished: post.publishedAt, dateModified: post.updatedAt, inLanguage: "fr-FR", author: { "@id": `${SITE_URL}/#organization` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${post.slug}` };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` }] };

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <Navbar />
      <main className="flex-grow bg-[#fbf8f1]">
        <article>
          <header className="relative min-h-[680px] overflow-hidden bg-slate-950 text-white sm:min-h-[720px]">
            <Image src={post.image} alt={post.imageAlt} fill priority unoptimized sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94)_0%,rgba(2,6,23,0.72)_48%,rgba(2,6,23,0.2)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
            <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:min-h-[720px] sm:px-6 sm:pb-20 lg:px-8">
              <Link href="/blog" className="absolute top-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/20 px-4 py-2 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-slate-950"><ArrowLeft className="h-4 w-4" />Tous les articles</Link>
              <div className="max-w-4xl">
                <p className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-xs font-black uppercase tracking-[0.16em]"><Mountain className="h-3.5 w-3.5" />{post.category}</p>
                <h1 className="mt-6 font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">{post.title}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">{post.excerpt}</p>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/20 pt-6 text-sm font-semibold text-slate-300">
                  <span className="inline-flex items-center gap-2"><UserRound className="h-4 w-4 text-orange-400" />L’équipe Maroc Treks</span>
                  <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-orange-400" />{post.readingTime} de lecture</span>
                  <span className="inline-flex items-center gap-2"><Compass className="h-4 w-4 text-orange-400" />Conseils de guides locaux</span>
                </div>
              </div>
            </div>
          </header>

          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[250px_minmax(0,720px)] lg:justify-center lg:gap-16 lg:px-8">
            <aside className="hidden lg:block">
              <div className="sticky top-28 border-l border-stone-300 pl-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700">Dans cet article</p>
                <nav className="mt-5" aria-label="Sommaire de l’article">
                  <ol className="space-y-3">
                    {post.sections.map((section, index) => <li key={section.heading}><a href={`#${sectionId(section.heading)}`} className="group flex gap-3 text-sm leading-5 text-slate-500 transition hover:text-orange-700"><span className="font-black text-stone-300 group-hover:text-orange-500">{String(index + 1).padStart(2, "0")}</span>{section.heading}</a></li>)}
                  </ol>
                </nav>
              </div>
            </aside>

            <div>
              <div className="mb-14 border-l-4 border-orange-600 bg-white p-6 text-lg font-semibold leading-8 text-slate-700 shadow-[0_12px_35px_rgba(15,23,42,0.06)] sm:p-8">
                {post.description}
              </div>
              {post.sections.map((section, index) => (
                <section id={sectionId(section.heading)} key={section.heading} className="scroll-mt-28 border-b border-stone-200 py-12 first:pt-0 last:border-0">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 font-display text-sm font-black text-orange-600">{String(index + 1).padStart(2, "0")}</span>
                    <h2 className="font-display text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{section.heading}</h2>
                  </div>
                  <div className="mt-7 space-y-5 text-[1.05rem] leading-8 text-slate-700">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.bullets && (
                    <ul className="mt-8 grid gap-3 rounded-2xl border border-orange-200/70 bg-[#fff7ed] p-5 sm:p-7">
                      {section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-[0.95rem] font-semibold leading-6 text-slate-700"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-600 text-white"><Check className="h-3.5 w-3.5" /></span>{bullet}</li>)}
                    </ul>
                  )}
                </section>
              ))}

              <aside className="relative mt-16 overflow-hidden rounded-[1.75rem] bg-slate-950 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.22)] sm:p-11">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-orange-400/20" />
                <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-orange-600/10 blur-2xl" />
                <div className="relative">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-300">Votre aventure commence ici</p>
                  <h2 className="mt-4 max-w-xl font-display text-3xl font-black leading-tight sm:text-4xl">Un itinéraire pensé pour vous, par ceux qui connaissent le terrain.</h2>
                  <p className="mt-5 max-w-xl leading-7 text-slate-300">Mohamed et son équipe vous conseillent selon la saison, votre expérience et le rythme souhaité.</p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href={post.relatedHref} className="theme-button-primary">{post.relatedLabel}<ArrowRight className="h-4 w-4" /></Link>
                    <Link href="/contact" className="theme-button-on-dark">Parler à un guide</Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
