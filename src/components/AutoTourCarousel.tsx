"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type AutoTourCarouselProps = {
  id: string;
  label: string;
  itemCount: number;
  children: ReactNode;
};

export default function AutoTourCarousel({
  id,
  label,
  itemCount,
  children,
}: AutoTourCarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const trackId = `${id}-track`;

  const getItems = useCallback(() => {
    const track = trackRef.current;
    if (!track) return [];

    return Array.from(track.querySelectorAll<HTMLElement>("[data-carousel-item]"));
  }, []);

  const getMaximumIndex = useCallback(() => {
    const track = trackRef.current;
    const items = getItems();
    if (!track || items.length === 0) return 0;

    const itemWidth = items[0].getBoundingClientRect().width;
    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
    const visibleItems = Math.max(
      1,
      Math.floor((track.clientWidth + gap) / (itemWidth + gap)),
    );

    return Math.max(0, itemCount - visibleItems);
  }, [getItems, itemCount]);

  const scrollToIndex = useCallback(
    (requestedIndex: number, announce = false) => {
      const track = trackRef.current;
      const items = getItems();
      if (!track || items.length === 0) return;

      const nextIndex = Math.min(
        Math.max(requestedIndex, 0),
        getMaximumIndex(),
      );
      const target = items[nextIndex];

      track.scrollTo({
        left: target.offsetLeft - items[0].offsetLeft,
        behavior: reducedMotion ? "auto" : "smooth",
      });
      setActiveIndex(nextIndex);

      if (announce) {
        setAnnouncement(
          `Programmes ${nextIndex + 1} à ${Math.min(
            itemCount,
            nextIndex + Math.max(1, itemCount - getMaximumIndex()),
          )} sur ${itemCount}.`,
        );
      }
    },
    [getItems, getMaximumIndex, itemCount, reducedMotion],
  );

  const move = useCallback(
    (direction: -1 | 1, announce = false) => {
      const maximumIndex = getMaximumIndex();
      const nextIndex =
        direction === 1
          ? activeIndex >= maximumIndex
            ? 0
            : activeIndex + 1
          : activeIndex <= 0
            ? maximumIndex
            : activeIndex - 1;

      scrollToIndex(nextIndex, announce);
    },
    [activeIndex, getMaximumIndex, scrollToIndex],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function syncMotionPreference() {
      setReducedMotion(mediaQuery.matches);
    }

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);
    return () => mediaQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    function syncPageVisibility() {
      setPageVisible(!document.hidden);
    }

    syncPageVisibility();
    document.addEventListener("visibilitychange", syncPageVisibility);
    return () =>
      document.removeEventListener("visibilitychange", syncPageVisibility);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function keepActiveCardVisible() {
      scrollToIndex(Math.min(activeIndex, getMaximumIndex()));
    }

    window.addEventListener("resize", keepActiveCardVisible);
    return () => window.removeEventListener("resize", keepActiveCardVisible);
  }, [activeIndex, getMaximumIndex, scrollToIndex]);

  useEffect(() => {
    if (
      userPaused ||
      hoverPaused ||
      reducedMotion ||
      !isInView ||
      !pageVisible
    ) {
      return;
    }

    const timer = window.setInterval(() => move(1), 2000);
    return () => window.clearInterval(timer);
  }, [
    hoverPaused,
    isInView,
    move,
    pageVisible,
    reducedMotion,
    userPaused,
  ]);

  useEffect(
    () => () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    },
    [],
  );

  function syncActiveCard() {
    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const track = trackRef.current;
      const items = getItems();
      if (!track || items.length === 0) return;

      const nearestIndex = items.reduce((closest, item, index) => {
        const firstOffset = items[0].offsetLeft;
        const currentDistance = Math.abs(
          item.offsetLeft - firstOffset - track.scrollLeft,
        );
        const closestDistance = Math.abs(
          items[closest].offsetLeft - firstOffset - track.scrollLeft,
        );

        return currentDistance < closestDistance ? index : closest;
      }, 0);

      setActiveIndex(Math.min(nearestIndex, getMaximumIndex()));
    });
  }

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carrousel"
      aria-label={label}
      className="relative mt-8"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocusCapture={() => setUserPaused(true)}
    >
      <button
        type="button"
        onClick={() => {
          setUserPaused(true);
          move(-1, true);
        }}
        aria-controls={trackId}
        aria-label={`Afficher les programmes précédents de ${label}`}
        className="absolute left-1 top-24 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/95 text-white shadow-[0_8px_24px_rgba(15,23,42,0.22)] backdrop-blur-sm transition-[background-color,border-color,color,transform] hover:scale-105 hover:border-orange-500 hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2 sm:-left-5 sm:top-28 sm:h-11 sm:w-11 lg:top-[7rem]"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>

      <div
        ref={trackRef}
        id={trackId}
        aria-live="off"
        onScroll={syncActiveCard}
        onPointerDown={() => setUserPaused(true)}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => {
          setUserPaused(true);
          move(1, true);
        }}
        aria-controls={trackId}
        aria-label={`Afficher les programmes suivants de ${label}`}
        className="absolute right-1 top-24 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/95 text-white shadow-[0_8px_24px_rgba(15,23,42,0.22)] backdrop-blur-sm transition-[background-color,border-color,color,transform] hover:scale-105 hover:border-orange-500 hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2 sm:-right-5 sm:top-28 sm:h-11 sm:w-11 lg:top-[7rem]"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
    </div>
  );
}
