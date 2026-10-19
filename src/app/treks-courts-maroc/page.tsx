import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock3, Footprints, MapPin, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { createMetadata, JsonLd, SITE_URL } from "@/lib/seo";
import { cloudinaryImage } from "@/lib/tour-media";

const path = "/treks-courts-maroc";
const heroImage = cloudinaryImage("4796C7E6-F03B-4847-B866-107C876E9AD7_nfgfpq");

export const metadata = createMetadata({
  title: "Treks de 2, 3 et 4 jours depuis Marrakech | Haut Atlas",
  description: "Treks courts dans le Haut Atlas : villages amazighs en 2 jours, Toubkal en 3 jours ou traversée des vallées en 4 jours avec guide local.",
  path,
  image: heroImage,
});

const programs = [
  {
    id: "trek-atlas-2-jours", duration: "2 jours / 1 nuit", difficulty: "Facile à modéré",
    title: "Villages amazighs et vallée d’Imlil en 2 jours",
    intro: "Une première immersion dans le Haut Atlas, sans ascension technique, adaptée au temps dont vous disposez.",
    image: cloudinaryImage("a8d4d94f-942f-497a-a703-02cc997f161f_c5fqte"), alt: "Village amazigh au pied du Haut Atlas",
    days: [
      ["Jour 1 — Marrakech, Imlil et villages", "Transfert vers Imlil, rencontre avec l’équipe puis marche entre cultures en terrasses et villages amazighs. Dîner et nuit en gîte."],
      ["Jour 2 — Sentiers panoramiques", "Randonnée adaptée au groupe, déjeuner dans la vallée puis retour à Imlil et transfert vers Marrakech."],
    ],
    note: "Le village de nuit et la boucle sont choisis selon la saison, votre niveau et les disponibilités.",
  },
  {
    id: "toubkal-3-jours", duration: "3 jours / 2 nuits", difficulty: "Soutenu",
    title: "Ascension du Toubkal en 3 jours",
    intro: "Un rythme progressif pour tenter d’atteindre le sommet du Toubkal à 4 167 mètres avec un guide local.",
    image: cloudinaryImage("5703513e-d652-45aa-b88d-fad40fd42729_mjtfl5"), alt: "Randonneurs dans le massif du Toubkal",
    days: [
      ["Jour 1 — Marrakech, Imlil et approche", "Transfert à Imlil, accueil par le guide et marche d’approche pour commencer progressivement."],
      ["Jour 2 — Montée au refuge", "Progression par Sidi Chamharouch jusqu’au refuge, à environ 3 200 m. Dîner, préparation et nuit au refuge."],
      ["Jour 3 — Sommet et retour", "Départ matinal pour le sommet si les conditions le permettent, puis descente vers Imlil et transfert à Marrakech."],
    ],
    note: "Le sommet n’est jamais garanti. Le guide décide selon la météo, le terrain, l’altitude et la sécurité. En hiver, un équipement spécifique peut être nécessaire.",
  },
  {
    id: "haut-atlas-4-jours", duration: "4 jours / 3 nuits", difficulty: "Modéré",
    title: "Vallées et villages du Haut Atlas en 4 jours",
    intro: "Une véritable itinérance pour marcher de vallée en vallée, rencontrer les habitants et découvrir les paysages de l’Atlas.",
    image: cloudinaryImage("a3cd32bb-7b0e-4131-8d50-8ed4c987ea9e_rshh71"), alt: "Cultures en terrasses dans une vallée du Toubkal",
    days: [
      ["Jour 1 — Marrakech et vallée d’Imlil", "Transfert, rencontre avec l’équipe et première étape entre villages et cultures en terrasses. Nuit en gîte."],
      ["Jour 2 — Col et vallée voisine", "Traversée d’un col accessible au groupe, vues sur les sommets et descente vers une autre vallée."],
      ["Jour 3 — Villages et sentiers muletiers", "Journée d’itinérance au rythme du groupe, rencontres dans les villages et nuit en gîte."],
      ["Jour 4 — Dernière randonnée", "Étape panoramique, déjeuner puis rendez-vous avec le véhicule pour le retour à Marrakech."],
    ],
    note: "L’itinéraire peut emprunter les vallées d’Imlil, d’Imnane ou d’Azzaden. Notre équipe le confirme selon vos dates, la météo et votre condition physique.",
  },
] as const;

const included = ["Transferts prévus depuis Marrakech", "Guide de montagne local", "Hébergement pendant le trek", "Repas pendant la marche", "Logistique et transport des bagages lorsque le parcours le permet"];

export default function ShortTreksPage() {
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${SITE_URL}${path}#collection`, url: `${SITE_URL}${path}`, name: "Treks courts de 2, 3 et 4 jours au Maroc", mainEntity: { "@type": "ItemList", numberOfItems: programs.length, itemListElement: programs.map((program, index) => ({ "@type": "ListItem", position: index + 1, name: program.title, url: `${SITE_URL}${path}#${program.id}` })) } };

  return <>
    <JsonLd data={schema} />
    <Navbar />
    <main className="flex-grow bg-brand-sand">
      <header className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-32">
        <Image src={heroImage} alt="Randonneurs dans le Haut Atlas" fill priority unoptimized sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/25" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-300">Départ de Marrakech · Guide local</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-black tracking-tight sm:text-6xl">Treks de 2, 3 et 4 jours dans le Haut Atlas</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Villages amazighs, itinérance entre vallées ou ascension du Toubkal : choisissez un format court sans consacrer une semaine entière au trek.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="#programmes" className="btn-primary">Comparer les programmes <ArrowRight className="h-4 w-4" /></Link><Link href="/contact" className="btn-on-dark">Demander conseil</Link></div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-2xl border border-stone-200 bg-white p-7 shadow-sm sm:grid-cols-3">
          <Feature icon={<Clock3 />} title="Durée adaptée">Choisissez 2, 3 ou 4 jours selon votre séjour.</Feature>
          <Feature icon={<MapPin />} title="Depuis Marrakech">Les transferts sont organisés vers le départ.</Feature>
          <Feature icon={<ShieldCheck />} title="Programme confirmé">Le parcours final dépend du niveau et de la météo.</Feature>
        </div>
      </section>

      <section id="programmes" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">Trois formats personnalisables</p><h2 className="mt-3 font-display text-3xl font-black text-slate-950 sm:text-4xl">Quel trek court vous correspond ?</h2><p className="mt-4 leading-7 text-slate-600">Après votre demande, notre équipe confirme les étapes, les nuits, le matériel, le guide affecté et le prix selon vos dates et votre groupe.</p></div>
        <div className="space-y-10">
          {programs.map((program, index) => <article id={program.id} key={program.id} className="scroll-mt-24 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-72 lg:min-h-full"><Image src={program.image} alt={program.alt} fill unoptimized sizes="(max-width:1023px) 100vw,42vw" className="object-cover" /><span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-black text-orange-800 shadow">{program.duration}</span></div>
              <div className="p-6 sm:p-9"><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-700">Option {index + 1}</p><h2 className="mt-2 font-display text-2xl font-black text-slate-950 sm:text-3xl">{program.title}</h2><p className="mt-3 leading-7 text-slate-600">{program.intro}</p><span className="mt-5 inline-flex items-center gap-2 rounded-full bg-stone-100 px-3 py-2 text-xs font-bold text-slate-700"><Footprints className="h-4 w-4 text-orange-700" />{program.difficulty}</span>
                <ol className="mt-7 space-y-5 border-l-2 border-orange-200 pl-6">{program.days.map(([title, description]) => <li key={title}><h3 className="font-display font-extrabold text-slate-900">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{description}</p></li>)}</ol>
                <p className="mt-6 rounded-lg bg-orange-50 p-4 text-sm leading-6 text-orange-950"><strong>À confirmer :</strong> {program.note}</p><Link href="/contact" className="btn-primary mt-6">Recevoir le programme et le prix <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </article>)}
        </div>
      </section>

      <section className="bg-white py-16"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">Organisation locale</p><h2 className="mt-3 font-display text-3xl font-black text-slate-950">Ce qui est normalement prévu</h2><ul className="mt-6 space-y-3">{included.map(item => <li key={item} className="flex gap-3 text-slate-700"><Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />{item}</li>)}</ul></div><div className="rounded-2xl bg-slate-950 p-8 text-white"><h2 className="font-display text-2xl font-black">Un tarif adapté à votre groupe</h2><p className="mt-4 leading-7 text-slate-300">Indiquez vos dates, le nombre de voyageurs et votre expérience. L’équipe Maroc Treks vous répond avec l’itinéraire précis, les prestations incluses et le prix.</p><Link href="/contact" className="btn-primary mt-7">Préparer mon trek <ArrowRight className="h-4 w-4" /></Link></div></div></section>
    </main>
    <Footer />
  </>;
}

function Feature({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return <div className="flex gap-4"><span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-orange-700">{icon}</span><div><h2 className="font-display font-extrabold text-slate-950">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-600">{children}</p></div></div>;
}
