"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mountain, Menu, X, ChevronDown, Calendar, Phone, Languages } from "lucide-react";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          element: string,
        ) => void;
      };
    };
  }
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [circuitsDropdownOpen, setCircuitsDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const pathname = usePathname();

  const languages = [
    { code: "fr", short: "FR", name: "Français" },
    { code: "en", short: "EN", name: "English" },
    { code: "es", short: "ES", name: "Español" },
    { code: "nl", short: "NL", name: "Nederlands" },
  ];

  const circuits = [
    { name: "Haut Atlas Toubkal", href: "/haut-atlas-toubkal" },
    { name: "Haut Atlas Mgoun", href: "/haut-atlas-mgoun" },
    { name: "Anti Atlas", href: "/antis-atlas" },
    { name: "Moyen Atlas", href: "/randonnee-moyen-atlas" },
    { name: "La côte Atlantique", href: "/randonnee-cote-atlantique-circuit-de-8-jours-essaouira" },
    { name: "Le Désert", href: "/le-desert" },
    { name: "La grande Traversée", href: "/grande-traversee-de-latlas-marocain-circuit-de-22-jours" },
  ];

  const mainLinks = [
    { name: "Accueil", href: "/" },
    { name: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
    { name: "Infos pratiques", href: "/informations-pratiques" },
  ];

  const isActive = (href: string) => pathname === href;
  const isCircuitActive = () => circuits.some((c) => pathname === c.href);
  const currentLanguage = languages.find((language) => language.code === selectedLanguage) || languages[0];

  function translateCookieDomains() {
    const hostname = window.location.hostname;

    if (!hostname || hostname === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
      return [""];
    }

    return ["", `; domain=.${hostname.replace(/^www\./, "")}`];
  }

  function setTranslateCookie(language: string) {
    const value = language === "fr" ? "" : `/fr/${language}`;
    const expires = language === "fr" ? "Thu, 01 Jan 1970 00:00:00 GMT" : "Fri, 31 Dec 9999 23:59:59 GMT";

    translateCookieDomains().forEach((domain) => {
      document.cookie = `googtrans=${value}; expires=${expires}; path=/${domain}; SameSite=Lax`;
    });
  }

  function ensureTranslateElement() {
    let element = document.getElementById("google_translate_element");

    if (!element) {
      element = document.createElement("div");
      element.id = "google_translate_element";
      element.className = "translation-engine";
      document.body.appendChild(element);
    }
  }

  function initializeGoogleTranslate() {
    ensureTranslateElement();

    if (!window.google?.translate?.TranslateElement || document.querySelector(".goog-te-combo")) return;

    new window.google.translate.TranslateElement(
      {
        pageLanguage: "fr",
        includedLanguages: "fr,en,es,nl",
        autoDisplay: false,
      },
      "google_translate_element",
    );
  }

  function loadGoogleTranslate(callback: () => void) {
    ensureTranslateElement();

    if (!document.querySelector("[data-google-translate-script]")) {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js";
      script.async = true;
      script.dataset.googleTranslateScript = "true";
      script.onload = initializeGoogleTranslate;
      document.head.appendChild(script);
    }

    const waitForTranslate = (attempt = 0) => {
      initializeGoogleTranslate();

      if (document.querySelector(".goog-te-combo")) {
        callback();
        return;
      }

      if (attempt < 40) {
        window.setTimeout(() => waitForTranslate(attempt + 1), 200);
      }
    };

    waitForTranslate();
  }

  function selectGoogleLanguage(language: string) {
    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");

    if (!combo) return;

    combo.value = language;
    combo.dispatchEvent(new Event("change"));
  }

  function applyLanguage(language: string) {
    setLanguageDropdownOpen(false);
    setSelectedLanguage(language);
    window.localStorage.setItem("maroctreks-language", language);
    setTranslateCookie(language);

    if (language === "fr") {
      window.location.reload();
      return;
    }

    loadGoogleTranslate(() => selectGoogleLanguage(language));
  }

  useEffect(() => {
    const savedLanguage =
      document.cookie.match(/(?:^|;\s*)googtrans=\/fr\/([^;]+)/)?.[1] ||
      window.localStorage.getItem("maroctreks-language") ||
      "fr";

    window.setTimeout(() => {
      setSelectedLanguage(savedLanguage);

      if (savedLanguage !== "fr") {
        loadGoogleTranslate(() => selectGoogleLanguage(savedLanguage));
      }
    }, 0);
    // The translator loader is intentionally initialized once after hydration.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    function closeMenus(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      setMobileMenuOpen(false);
      setCircuitsDropdownOpen(false);
      setLanguageDropdownOpen(false);
    }

    window.addEventListener("keydown", closeMenus);

    return () => window.removeEventListener("keydown", closeMenus);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-brand-orange/10 bg-brand-sand/95 shadow-sm shadow-brand-slate/5 backdrop-blur-xl transition-all duration-300">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 xl:h-20 xl:px-8">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-gold text-white shadow-md shadow-brand-orange/20 transition-transform group-hover:scale-105 lg:h-11 lg:w-11">
              <Mountain className="h-5 w-5 lg:h-6 lg:w-6" />
            </div>
            <span className="font-display text-xl font-extrabold tracking-tight text-brand-slate transition-colors group-hover:text-brand-orange sm:text-2xl">
              Maroc<span className="text-brand-orange">Treks</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setLanguageDropdownOpen(false)}
                className={`rounded-lg px-3.5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                    : "text-brand-slate hover:bg-brand-orange/10 hover:text-brand-orange"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Dropdown for Circuits */}
            <div
              className="relative"
              onMouseEnter={() => setCircuitsDropdownOpen(true)}
              onMouseLeave={() => setCircuitsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isCircuitActive()
                    ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                    : "text-brand-slate hover:bg-brand-orange/10 hover:text-brand-orange"
                }`}
              >
                Circuits au Maroc
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${circuitsDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {circuitsDropdownOpen && (
                <div className="absolute left-0 mt-1 w-80 rounded-2xl border border-brand-orange/10 bg-brand-sand p-2.5 shadow-xl shadow-brand-slate/5 ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                  {circuits.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setCircuitsDropdownOpen(false)}
                      className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:translate-x-1 ${
                        isActive(item.href)
                          ? "bg-brand-orange/10 text-brand-orange"
                          : "text-brand-slate hover:bg-brand-orange/5 hover:text-brand-orange"
                      }`}
                    >
                      <Mountain className="mr-3 h-4 w-4 text-brand-orange/70" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Excursions */}
            <Link
              href="/excursions"
              onClick={() => setLanguageDropdownOpen(false)}
              className={`rounded-lg px-3.5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
                isActive("/excursions")
                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                  : "text-brand-slate hover:bg-brand-orange/10 hover:text-brand-orange"
              }`}
            >
              Excursions
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setLanguageDropdownOpen(false)}
              className={`rounded-lg px-3.5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
                isActive("/contact")
                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                  : "text-brand-slate hover:bg-brand-orange/10 hover:text-brand-orange"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Call / CTA Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+212667591933"
              className="hidden items-center gap-2 text-sm font-semibold text-brand-slate/80 transition-colors hover:text-brand-orange 2xl:flex"
            >
              <Phone className="h-4 w-4" />
              <span>+212 667 591 933</span>
            </a>

            <div className="relative">
              <button
                type="button"
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex h-11 items-center gap-2 rounded-xl border border-brand-orange/15 bg-white/80 px-3 text-sm font-bold text-brand-slate shadow-sm transition-all hover:border-brand-orange/40 hover:text-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                aria-expanded={languageDropdownOpen}
                aria-label="Choisir la langue"
              >
                <Languages className="h-4 w-4 text-brand-orange" />
                <span>{currentLanguage.short}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${languageDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {languageDropdownOpen && (
                <div className="absolute right-0 z-[60] mt-2 w-44 overflow-hidden rounded-2xl border border-brand-orange/10 bg-white p-1.5 shadow-xl shadow-brand-slate/10 ring-1 ring-black/5">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => applyLanguage(language.code)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-all ${
                        selectedLanguage === language.code
                          ? "bg-brand-orange text-white"
                          : "text-brand-slate hover:bg-brand-orange/10 hover:text-brand-orange"
                      }`}
                    >
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setLanguageDropdownOpen(false)}
              className="hidden h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold px-4 text-sm font-bold text-white shadow-md shadow-brand-orange/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-orange/40 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 xl:flex"
            >
              <Calendar className="h-4 w-4" />
              <span>Réserver</span>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <div className="relative">
              <button
                type="button"
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex h-10 items-center gap-1.5 rounded-xl border border-brand-orange/15 bg-white px-2.5 text-sm font-bold text-brand-slate shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                aria-expanded={languageDropdownOpen}
                aria-label="Choisir la langue"
              >
                <Languages className="h-4 w-4 text-brand-orange" />
                <span>{currentLanguage.short}</span>
              </button>

              {languageDropdownOpen && (
                <div className="absolute right-0 z-[70] mt-2 w-40 overflow-hidden rounded-2xl border border-brand-orange/10 bg-white p-1.5 shadow-xl shadow-brand-slate/10">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => applyLanguage(language.code)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold ${
                        selectedLanguage === language.code
                          ? "bg-brand-orange text-white"
                          : "text-brand-slate hover:bg-brand-orange/10 hover:text-brand-orange"
                      }`}
                    >
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:+212667591933"
              className="hidden h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange sm:flex"
              aria-label="Call guide"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => {
                setLanguageDropdownOpen(false);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-gold text-white shadow-md shadow-brand-orange/20 focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
              aria-label="Open main menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-brand-slate/40 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-[min(22rem,calc(100vw-1rem))] flex-col bg-brand-sand shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-brand-orange/10 p-5 bg-gradient-to-r from-brand-orange to-brand-gold text-white">
          <div className="flex items-center gap-2">
            <Mountain className="h-5 w-5" />
            <span className="font-display font-bold text-lg">Maroc Treks</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          <nav className="flex flex-col gap-4">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLanguageDropdownOpen(false);
                }}
                className={`flex items-center rounded-xl p-3 text-base font-semibold transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-brand-orange/10 text-brand-orange"
                    : "text-brand-slate hover:bg-brand-orange/5 hover:text-brand-orange"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Dropdown for Circuits */}
            <div className="border-t border-b border-brand-orange/10 py-3">
              <button
                type="button"
                onClick={() => setCircuitsDropdownOpen(!circuitsDropdownOpen)}
                className="flex w-full items-center justify-between px-3 py-2 text-base font-semibold text-brand-slate hover:text-brand-orange"
              >
                <span>Circuits au Maroc</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${circuitsDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {circuitsDropdownOpen && (
                <div className="mt-2 flex flex-col gap-1 pl-4">
                  {circuits.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setCircuitsDropdownOpen(false);
                        setLanguageDropdownOpen(false);
                      }}
                      className={`flex items-center rounded-xl py-2 px-3 text-sm font-medium transition-all ${
                        isActive(item.href)
                          ? "text-brand-orange"
                          : "text-brand-slate hover:text-brand-orange"
                      }`}
                    >
                      <Mountain className="mr-2 h-4 w-4 text-brand-orange/60" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Excursions */}
            <Link
              href="/excursions"
              onClick={() => {
                setMobileMenuOpen(false);
                setLanguageDropdownOpen(false);
              }}
              className={`flex items-center rounded-xl p-3 text-base font-semibold transition-all duration-200 ${
                isActive("/excursions")
                  ? "bg-brand-orange/10 text-brand-orange"
                  : "text-brand-slate hover:bg-brand-orange/5 hover:text-brand-orange"
              }`}
            >
              Excursions
            </Link>

            {/* Mobile Contact */}
            <Link
              href="/contact"
              onClick={() => {
                setMobileMenuOpen(false);
                setLanguageDropdownOpen(false);
              }}
              className={`flex items-center rounded-xl p-3 text-base font-semibold transition-all duration-200 ${
                isActive("/contact")
                  ? "bg-brand-orange/10 text-brand-orange"
                  : "text-brand-slate hover:bg-brand-orange/5 hover:text-brand-orange"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="border-t border-brand-orange/10 p-5 bg-orange-50">
          <Link
            href="/contact"
            onClick={() => {
              setMobileMenuOpen(false);
              setLanguageDropdownOpen(false);
            }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold p-3.5 text-base font-bold text-white shadow-md shadow-brand-orange/20"
          >
            <Calendar className="h-5 w-5" />
            <span>Réserver Maintenant</span>
          </Link>
        </div>
      </div>
    </>
  );
}
