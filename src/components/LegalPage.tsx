import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type LegalSection = {
  title: string;
  content: ReactNode;
};

export default function LegalPage({ eyebrow, title, introduction, sections }: { eyebrow: string; title: string; introduction: string; sections: LegalSection[] }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#fbf8f1]">
        <header className="border-b border-slate-800 bg-slate-950 py-16 text-white sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-300">{eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">{introduction}</p>
          </div>
        </header>
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="border-b border-stone-200 pb-10 last:border-0">
                <h2 className="font-display text-2xl font-black text-slate-950 sm:text-3xl">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 [&_a]:font-semibold [&_a]:text-orange-700 [&_a]:underline [&_a]:underline-offset-4 [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc">{section.content}</div>
              </section>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
            <h2 className="font-display text-2xl font-black">Une question avant de réserver ?</h2>
            <p className="mt-3 text-slate-300">Demandez les conditions correspondant précisément à votre itinéraire, vos dates et votre groupe.</p>
            <Link href="/contact" className="theme-button-primary mt-6">Contacter Maroc Treks</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
