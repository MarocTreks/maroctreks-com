"use client";

import { useEffect, useState } from "react";
import { Star, ExternalLink, ShieldCheck, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export interface GoogleReview {
  id: string;
  author: string;
  initial: string;
  avatarBg: string;
  reviewCount: string;
  rating: number;
  date: string;
  text: string;
}

export const googleReviews: GoogleReview[] = [
  {
    id: "fabienne-joveneau",
    author: "Fabienne Joveneau",
    initial: "F",
    avatarBg: "bg-[#004D40]",
    reviewCount: "1 review",
    rating: 5,
    date: "2 weeks ago",
    text: "I'm incredibly lucky to have already done six treks with Mohamed and his team. It's pure bliss, nothing but kindness. Complete safety. Paradise-like landscapes.\n\nBut above all, the spontaneous little details that showcase their kindness and generosity. My most cherished travel memories are undoubtedly with them. I'll be back as soon as possible.",
  },
  {
    id: "eve-tondeur",
    author: "Eve Tondeur",
    initial: "E",
    avatarBg: "bg-[#D84315]",
    reviewCount: "6 reviews",
    rating: 5,
    date: "a month ago",
    text: "I've done six treks with Mohammed over the past twenty years (Jebel Sahro, Jebel Siroua, the desert and Merzouga, Mgoun, along the coast, and Toubkal), and I can attest to his professionalism. The treks are very well organized, comfortable, with luggage transport, excellent food, and above all, a friendly and attentive guide and a team always ready to please.\n\nJust a little tip: a lightweight inflatable mattress is a great addition to the ones provided. Enjoy your trek with Mohammed!",
  },
  {
    id: "marie-christine-wall",
    author: "Marie Christine Wall",
    initial: "M",
    avatarBg: "bg-[#455A64]",
    reviewCount: "3 reviews",
    rating: 5,
    date: "2 weeks ago",
    text: "A week-long trip with CAFGI in June 2025. Delicious food, efficient muleteers. Mohamed, the guide, set a steady and rather slow pace which allowed the entire group to reach the summit of Toubkal without difficulty. Thank you to the whole team.",
  },
  {
    id: "gorete-matias",
    author: "Gorete Matias",
    initial: "G",
    avatarBg: "bg-[#4A148C]",
    reviewCount: "9 reviews",
    rating: 5,
    date: "3 weeks ago",
    text: "Mohamed and his team are excellent professionals. The entire trek to Toubkal was superbly organized.\n\nA memorable experience!",
  },
  {
    id: "luisa-piccinini",
    author: "Luisa Piccinini",
    initial: "L",
    avatarBg: "bg-[#8D6E63]",
    reviewCount: "2 reviews",
    rating: 5,
    date: "3 weeks ago",
    text: "Went on a trek two years ago with a CAF group. Great experience. Thanks to the whole team. Luisa",
  },
];

export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/f91WPmdf9oBbfjFD6?g_st=ic";

// Duplicated list to enable smooth infinite loop sliding
const carouselReviews = [...googleReviews, ...googleReviews];

export default function GoogleReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide every 4 seconds (4000ms)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % googleReviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? googleReviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % googleReviews.length);
  };

  return (
    <section className="overflow-hidden border-y border-amber-200/60 bg-[#faf6ee] pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-900 shadow-sm">
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Avis Vérifiés Google Maps</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Ce que disent nos randonneurs
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Découvrez les retours authentiques publiés sur notre profil Google Maps par les voyageurs accompagnés par Mohamed et son équipe.
          </p>

          {/* Rating Badge */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-stone-200 bg-white px-6 py-3.5 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-1 text-amber-500">
              <span className="font-display text-2xl font-black text-slate-900 mr-1.5">5.0</span>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
              Avis 100% Vérifiés
            </span>
            <div className="h-4 w-px bg-slate-200" />
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 transition hover:text-orange-900 hover:underline"
            >
              Voir la fiche Google Maps
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* 3-Card Carousel Container */}
        <div
          className="relative mt-12 mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Controls */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Avis précédent"
            className="absolute -left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-stone-200 bg-white text-slate-700 shadow-lg transition hover:bg-orange-600 hover:text-white lg:-left-5"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Avis suivant"
            className="absolute -right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-stone-200 bg-white text-slate-700 shadow-lg transition hover:bg-orange-600 hover:text-white lg:-right-5"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl py-4">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {carouselReviews.map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
                >
                  <article className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)]">
                    <div>
                      {/* Author Info */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-black text-white shadow-sm ${review.avatarBg}`}
                          >
                            {review.initial}
                          </div>
                          <div>
                            <h3 className="font-display text-base font-extrabold text-slate-900">
                              {review.author}
                            </h3>
                            <p className="text-xs text-slate-400">{review.reviewCount}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[0.68rem] font-bold text-emerald-800">
                          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                          Vérifié
                        </div>
                      </div>

                      {/* Stars & Date */}
                      <div className="mt-4 flex items-center justify-between border-b border-stone-100 pb-3">
                        <div className="flex text-amber-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-slate-400">{review.date}</span>
                      </div>

                      {/* Review Text */}
                      <div className="relative mt-4">
                        <Quote className="absolute -left-1 -top-2 h-6 w-6 text-amber-200/60" aria-hidden="true" />
                        <p className="relative z-10 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="mt-6 flex justify-center items-center gap-2">
            {googleReviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Aller à l'avis ${index + 1}`}
                className={`h-2.5 transition-all rounded-full ${
                  currentIndex % googleReviews.length === index
                    ? "w-8 bg-orange-600"
                    : "w-2.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer Callout to Google Maps */}
        <div className="mt-10 text-center">
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:border-orange-600 hover:bg-orange-50 hover:text-orange-800"
          >
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Consulter tous les avis directement sur Google Maps
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
