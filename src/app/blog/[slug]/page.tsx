import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock3 } from "lucide-react";
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
  const title = post?.slug === "meilleure-periode-trekking-maroc"
    ? "Meilleure période pour un trek au Maroc"
    : post?.title;
  return post && title
    ? createMetadata({ title, description: post.description, path: `/blog/${post.slug}`, image: post.image })
    : {};
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: "fr-FR",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <Navbar />
      <main className="flex-grow bg-white">
        <article>
          <header className="bg-[#f6f1e8]">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:px-8">
              <div>
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 hover:text-orange-800"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Tous les conseils</Link>
                <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">{post.category}</p>
                <h1 className="mt-4 font-display text-4xl font-black leading-tight text-slate-950 sm:text-5xl">{post.title}</h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">{post.excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-sm font-semibold text-slate-500">
                  <span>Par l’équipe Maroc Treks</span><span aria-hidden="true">•</span><span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4" aria-hidden="true" />{post.readingTime}</span>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
                <Image src={post.image} alt={post.imageAlt} fill priority unoptimized sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
            {post.sections.map((section) => (
              <section key={section.heading} className="mb-12 last:mb-0">
                <h2 className="font-display text-2xl font-black leading-tight text-slate-950 sm:text-3xl">{section.heading}</h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-700">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets && (
                  <ul className="mt-6 space-y-3 rounded-xl border border-orange-100 bg-orange-50 p-6">
                    {section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm font-semibold leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-orange-700" aria-hidden="true" />{bullet}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <aside className="mt-16 rounded-xl bg-slate-950 p-7 text-white sm:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-300">Poursuivre votre préparation</p>
              <h2 className="mt-3 font-display text-2xl font-black">Un itinéraire adapté à vos dates et à votre niveau</h2>
              <p className="mt-4 leading-7 text-slate-300">Mohamed et son équipe vous conseillent directement selon la saison, votre expérience et le rythme souhaité.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href={post.relatedHref} className="theme-button-primary">{post.relatedLabel}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                <Link href="/contact" className="theme-button-on-dark">Demander conseil</Link>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
