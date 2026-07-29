"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cloudinaryImage } from "@/lib/tour-media";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    trek: "toubkal",
    travelers: "1",
    date: "",
    message: "",
  });
  
  const [submitted, setSubmitted] = useState(false);

  const treksList = [
    { value: "toubkal", label: "Haut Atlas Toubkal" },
    { value: "mgoun", label: "Haut Atlas Mgoun" },
    { value: "anti-atlas", label: "Anti Atlas & Siroua" },
    { value: "moyen-atlas", label: "Moyen Atlas & Cèdres" },
    { value: "atlantique", label: "La Côte Atlantique" },
    { value: "desert", label: "Le Désert (Sahara)" },
    { value: "traversee", label: "La Grande Traversée" },
    { value: "excursion", label: "Excursion d'une journée" },
    { value: "sur-mesure", label: "Séjour sur mesure" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trek = treksList.find(({ value }) => value === formData.trek)?.label ?? formData.trek;
    const subject = encodeURIComponent(`Demande de réservation — ${trek}`);
    const body = encodeURIComponent(
      [
        `Nom : ${formData.name}`,
        `Email : ${formData.email}`,
        `Téléphone : ${formData.phone}`,
        `Circuit : ${trek}`,
        `Nombre de personnes : ${formData.travelers}`,
        `Date souhaitée : ${formData.date || "Non précisée"}`,
        "",
        "Message :",
        formData.message || "Aucun message complémentaire.",
      ].join("\n"),
    );

    window.location.href = `mailto:tadrartmed@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      
      <main className="flex-grow bg-brand-sand">
        {/* Banner Section */}
        <section className="relative py-20 bg-brand-slate text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={cloudinaryImage("a13ae920-abb1-41d7-abd9-18cc92bada6e_ov6j0q")}
              alt=""
              fill
              unoptimized
              sizes="100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/35 to-slate-950/15" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight">
              Contact & Réservations
            </h1>
            <p className="mt-4 text-lg text-slate-300 font-light max-w-2xl mx-auto">
              Planifiez votre voyage ou posez vos questions directement à notre guide professionnel.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact info cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-sm font-bold tracking-wider uppercase text-brand-orange">Informations</span>
                <h2 className="font-display text-3xl font-extrabold text-brand-slate">Contactez-nous en direct</h2>
                <p className="text-sm text-slate-500 font-light">
                  Nous répondons généralement sous 24h par email. Pour une réponse rapide, n'hésitez pas à nous envoyer un message direct sur WhatsApp.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                <a
                  href="tel:+212667591933"
                  className="theme-panel flex items-center gap-4 p-6 transition-[border-color,box-shadow] hover:border-orange-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.1)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-orange-100 text-orange-700">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">Téléphone / WhatsApp</span>
                    <span className="text-base font-bold text-brand-slate hover:text-brand-orange transition-colors">+212 667 591 933</span>
                  </div>
                </a>

                <a
                  href="mailto:tadrartmed@gmail.com"
                  className="theme-panel flex items-center gap-4 p-6 transition-[border-color,box-shadow] hover:border-orange-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.1)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-orange-100 text-orange-700">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">Email</span>
                    <span className="text-base font-bold text-brand-slate hover:text-brand-orange transition-colors break-all">tadrartmed@gmail.com</span>
                  </div>
                </a>

                <div className="theme-panel flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-orange-100 text-orange-700">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">Bureau local</span>
                    <span className="text-sm font-semibold text-brand-slate">Douar Armed, Imlil, Asni 42152, Maroc</span>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-4 rounded-lg border border-slate-700 bg-slate-900 p-6 text-white shadow-[0_10px_30px_rgba(15,23,42,0.16)]">
                <div className="flex items-center gap-2 text-orange-300">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="font-display font-bold text-sm">Garanties Maroc Treks</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
                  <li>• Pas d'intermédiaires : Vous payez le juste prix directement aux acteurs locaux.</li>
                  <li>• Flexibilité : Modification de dates sans frais en cas de problème de vol.</li>
                  <li>• Expérience certifiée par le ministère du tourisme marocain.</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Contact/Booking Form */}
            <div className="theme-panel p-8 lg:col-span-7">
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-brand-slate">Votre demande est prête</h3>
                    <p className="text-slate-500 text-sm max-w-md mx-auto">
                      Votre messagerie a été ouverte avec votre demande préremplie. Vérifiez-la puis appuyez sur « Envoyer » pour nous la transmettre.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="theme-button-secondary"
                  >
                    Préparer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-brand-slate">Formulaire de réservation</h3>
                    <p className="text-xs text-slate-400">Remplissez ces quelques lignes pour recevoir votre devis personnalisé gratuit.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nom */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-brand-slate uppercase tracking-wider">Nom complet *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Ex: Jean Dupont"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="theme-field"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-brand-slate uppercase tracking-wider">Adresse email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="Ex: jean.dupont@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="theme-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Téléphone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold text-brand-slate uppercase tracking-wider">Téléphone *</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="Ex: +33 6 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="theme-field"
                      />
                    </div>

                    {/* Choix Trek */}
                    <div className="space-y-2">
                      <label htmlFor="trek" className="text-xs font-bold text-brand-slate uppercase tracking-wider">Circuit souhaité</label>
                      <select
                        id="trek"
                        value={formData.trek}
                        onChange={(e) => setFormData({ ...formData, trek: e.target.value })}
                        className="theme-field"
                      >
                        {treksList.map((tk) => (
                          <option key={tk.value} value={tk.value}>{tk.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nombre Voyageurs */}
                    <div className="space-y-2">
                      <label htmlFor="travelers" className="text-xs font-bold text-brand-slate uppercase tracking-wider">Nombre de personnes</label>
                      <input
                        type="number"
                        id="travelers"
                        min="1"
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                        className="theme-field"
                      />
                    </div>

                    {/* Date de départ */}
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-xs font-bold text-brand-slate uppercase tracking-wider">Date de départ estimée</label>
                      <input
                        type="date"
                        id="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="theme-field"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-brand-slate uppercase tracking-wider">Votre message / Demandes spécifiques</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Indiquez ici vos préférences physiques, demandes de repas spécifiques (végétarien, allergies) ou questions diverses..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="theme-field"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="theme-button-primary min-h-12 w-full cursor-pointer text-base"
                  >
                    <Send className="h-4.5 w-4.5" />
                    <span>Envoyer ma demande</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
