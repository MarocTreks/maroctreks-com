"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mountain, Menu, X, ChevronDown, Calendar, Phone } from "lucide-react";

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

function LanguageFlag({ code }: { code: string }) {
  const commonProps = {
    viewBox: "0 0 24 16",
    className: "h-4 w-6 shrink-0 rounded-[2px] ring-1 ring-black/10",
    "aria-hidden": true,
  } as const;

  if (code === "fr") {
    return (
      <svg {...commonProps}>
        <path fill="#0055A4" d="M0 0h8v16H0z" />
        <path fill="#fff" d="M8 0h8v16H8z" />
        <path fill="#EF4135" d="M16 0h8v16h-8z" />
      </svg>
    );
  }

  if (code === "es") {
    return (
      <svg {...commonProps}>
        <path fill="#AA151B" d="M0 0h24v4H0zM0 12h24v4H0z" />
        <path fill="#F1BF00" d="M0 4h24v8H0z" />
      </svg>
    );
  }

  if (code === "nl") {
    return (
      <svg {...commonProps}>
        <path fill="#AE1C28" d="M0 0h24v5.34H0z" />
        <path fill="#fff" d="M0 5.33h24v5.34H0z" />
        <path fill="#21468B" d="M0 10.66h24V16H0z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path fill="#012169" d="M0 0h24v16H0z" />
      <path fill="#fff" d="m0 0 24 16M24 0 0 16" stroke="#fff" strokeWidth="4" />
      <path fill="none" d="m0 0 24 16M24 0 0 16" stroke="#C8102E" strokeWidth="2" />
      <path fill="#fff" d="M10 0h4v16h-4zM0 6h24v4H0z" />
      <path fill="#C8102E" d="M11 0h2v16h-2zM0 7h24v2H0z" />
    </svg>
  );
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
    { name: "Tous les circuits", href: "/circuits" },
    { name: "Haut Atlas Toubkal", href: "/haut-atlas-toubkal" },
    { name: "Haut Atlas Mgoun", href: "/haut-atlas-mgoun" },
    { name: "Vallées du Dadès et des Roses", href: "/vallees-dades-roses" },
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

  function allowPageTranslation() {
    document.documentElement.removeAttribute("translate");
    document.documentElement.classList.remove("notranslate");
  }

  function preventPageTranslation() {
    document.documentElement.setAttribute("translate", "no");
    document.documentElement.classList.add("notranslate");
  }

  function applyLanguage(language: string) {
    setLanguageDropdownOpen(false);
    setSelectedLanguage(language);
    window.localStorage.setItem("maroctreks-language", language);
    setTranslateCookie(language);

    if (language === "fr") {
      preventPageTranslation();
      window.location.reload();
      return;
    }

    allowPageTranslation();
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
        allowPageTranslation();
        loadGoogleTranslate(() => selectGoogleLanguage(savedLanguage));
      } else {
        preventPageTranslation();
      }
    }, 0);
    // Restore the visitor's saved language once after hydration.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const desktopViewport = window.matchMedia("(min-width: 64rem)");

    function closeMobileMenuOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setMobileMenuOpen(false);
    }

    desktopViewport.addEventListener("change", closeMobileMenuOnDesktop);
    return () => desktopViewport.removeEventListener("change", closeMobileMenuOnDesktop);
  }, []);

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
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm shadow-brand-slate/5 backdrop-blur-xl transition-all duration-300">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 xl:h-20 xl:gap-4 xl:px-8">
          
          {/* Logo */}
          <Link
            href="/"
            translate="no"
            aria-label="Maroc Treks — Accueil"
            className="notranslate group flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
          >
            <Image
              src="/logo-header.png"
              alt="Maroc Treks"
              width={720}
              height={305}
              loading="eager"
              sizes="(min-width: 1280px) 132px, 113px"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] xl:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setLanguageDropdownOpen(false)}
                className={`shrink-0 whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-orange-700 text-white shadow-sm"
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
                onClick={() => setCircuitsDropdownOpen(!circuitsDropdownOpen)}
                aria-expanded={circuitsDropdownOpen}
                aria-controls="circuits-navigation"
                className={`flex shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isCircuitActive()
                    ? "bg-orange-700 text-white shadow-sm"
                    : "text-brand-slate hover:bg-brand-orange/10 hover:text-brand-orange"
                }`}
              >
                Circuits au Maroc
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${circuitsDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {circuitsDropdownOpen && (
                <div id="circuits-navigation" className="absolute left-0 mt-1 w-80 rounded-lg border border-slate-200 bg-white p-2.5 shadow-[0_12px_32px_rgba(15,23,42,0.12)] animate-in fade-in slide-in-from-top-2 duration-200">
                  {circuits.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      onClick={() => setCircuitsDropdownOpen(false)}
                      className={`flex items-center rounded-md px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? "bg-orange-50 text-orange-700"
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
              aria-current={isActive("/excursions") ? "page" : undefined}
              onClick={() => setLanguageDropdownOpen(false)}
              className={`shrink-0 whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
                isActive("/excursions")
                  ? "bg-orange-700 text-white shadow-sm"
                  : "text-brand-slate hover:bg-brand-orange/10 hover:text-brand-orange"
              }`}
            >
              Excursions
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              onClick={() => setLanguageDropdownOpen(false)}
              className={`shrink-0 whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
                isActive("/contact")
                  ? "bg-orange-700 text-white shadow-sm"
                  : "text-brand-slate hover:bg-brand-orange/10 hover:text-brand-orange"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Call / CTA Actions */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
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
                onClick={() => {
                  if (!languageDropdownOpen) loadGoogleTranslate(() => {});
                  setLanguageDropdownOpen(!languageDropdownOpen);
                }}
                translate="no"
                className="notranslate theme-button-secondary h-10 min-h-10 w-10 p-0 xl:h-11 xl:w-auto xl:gap-2 xl:px-3"
                aria-expanded={languageDropdownOpen}
                aria-label={`Choisir la langue, langue actuelle : ${currentLanguage.name}`}
              >
                <LanguageFlag code={currentLanguage.code} />
                <span className="hidden xl:inline">{currentLanguage.short}</span>
                <ChevronDown className={`hidden h-4 w-4 transition-transform xl:block ${languageDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {languageDropdownOpen && (
                <div
                  translate="no"
                  className="notranslate absolute right-0 z-[60] mt-2 w-44 overflow-hidden rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_12px_32px_rgba(15,23,42,0.12)]"
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => applyLanguage(language.code)}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                        selectedLanguage === language.code
                          ? "bg-orange-700 text-white"
                          : "text-brand-slate hover:bg-brand-orange/10 hover:text-brand-orange"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <LanguageFlag code={language.code} />
                        <span>{language.name}</span>
                      </span>
                      <span className="text-xs opacity-70">{language.short}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setLanguageDropdownOpen(false)}
              className="theme-button-primary hidden h-11 min-h-11 px-4 xl:flex"
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
                onClick={() => {
                  if (!languageDropdownOpen) loadGoogleTranslate(() => {});
                  setLanguageDropdownOpen(!languageDropdownOpen);
                }}
                translate="no"
                className="notranslate theme-button-secondary h-10 min-h-10 gap-1.5 px-2.5 py-0"
                aria-expanded={languageDropdownOpen}
                aria-label={`Choisir la langue, langue actuelle : ${currentLanguage.name}`}
              >
                <LanguageFlag code={currentLanguage.code} />
                <span>{currentLanguage.short}</span>
              </button>

              {languageDropdownOpen && (
                <div
                  translate="no"
                  className="notranslate absolute right-0 z-[70] mt-2 w-40 overflow-hidden rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_12px_32px_rgba(15,23,42,0.12)]"
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => applyLanguage(language.code)}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold ${
                        selectedLanguage === language.code
                          ? "bg-orange-700 text-white"
                          : "text-brand-slate hover:bg-brand-orange/10 hover:text-brand-orange"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <LanguageFlag code={language.code} />
                        <span>{language.name}</span>
                      </span>
                      <span className="text-xs opacity-70">{language.short}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:+212667591933"
              className="hidden h-10 w-10 items-center justify-center rounded-md border border-orange-200 bg-orange-50 text-orange-700 transition-colors hover:bg-orange-100 sm:flex"
              aria-label="Appeler votre guide"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => {
                setLanguageDropdownOpen(false);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-white shadow-sm transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
              aria-label={mobileMenuOpen ? "Fermer le menu principal" : "Ouvrir le menu principal"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
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
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
        className={`fixed top-0 right-0 z-50 flex h-dvh w-[min(22rem,calc(100vw-1rem))] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-brand-orange/10 bg-white p-4">
          <Link
            href="/"
            translate="no"
            aria-label="Maroc Treks — Accueil"
            className="notranslate rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/logo-header.png"
              alt="Maroc Treks"
              width={720}
              height={305}
              sizes="113px"
              className="h-12 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-orange-200 bg-orange-50 text-orange-700 transition-colors hover:bg-orange-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
            aria-label="Fermer le menu principal"
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
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLanguageDropdownOpen(false);
                }}
                className={`flex items-center rounded-md p-3 text-base font-semibold transition-colors duration-200 ${
                  isActive(link.href)
                    ? "bg-orange-50 text-orange-700"
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
                      aria-current={isActive(item.href) ? "page" : undefined}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setCircuitsDropdownOpen(false);
                        setLanguageDropdownOpen(false);
                      }}
                      className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-orange-700"
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
              aria-current={isActive("/excursions") ? "page" : undefined}
              onClick={() => {
                setMobileMenuOpen(false);
                setLanguageDropdownOpen(false);
              }}
              className={`flex items-center rounded-md p-3 text-base font-semibold transition-colors duration-200 ${
                isActive("/excursions")
                  ? "bg-orange-50 text-orange-700"
                  : "text-brand-slate hover:bg-brand-orange/5 hover:text-brand-orange"
              }`}
            >
              Excursions
            </Link>

            {/* Mobile Contact */}
            <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              onClick={() => {
                setMobileMenuOpen(false);
                setLanguageDropdownOpen(false);
              }}
              className={`flex items-center rounded-md p-3 text-base font-semibold transition-colors duration-200 ${
                isActive("/contact")
                  ? "bg-orange-50 text-orange-700"
                  : "text-brand-slate hover:bg-brand-orange/5 hover:text-brand-orange"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="border-t border-slate-200 bg-slate-50 p-5">
          <Link
            href="/contact"
            onClick={() => {
              setMobileMenuOpen(false);
              setLanguageDropdownOpen(false);
            }}
            className="theme-button-primary w-full text-base"
          >
            <Calendar className="h-5 w-5" />
            <span>Réserver Maintenant</span>
          </Link>
        </div>
      </div>
    </>
  );
}
