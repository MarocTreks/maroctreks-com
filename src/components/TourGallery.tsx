"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { isCloudinaryImage, type TourMediaImage } from "@/lib/tour-media";

export default function TourGallery({
  images,
  heading,
}: {
  images: TourMediaImage[];
  heading: string;
}) {
  const stripRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const selectedImage = images[selectedIndex];

  function openImage(index: number, trigger: HTMLButtonElement) {
    lastTriggerRef.current = trigger;
    setSelectedIndex(index);
    setIsOpen(true);
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function showPrevious() {
    setSelectedIndex((current) => (current - 1 + images.length) % images.length);
  }

  function showNext() {
    setSelectedIndex((current) => (current + 1) % images.length);
  }

  function scrollThumbnails(direction: -1 | 1) {
    stripRef.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  }

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function changeImage(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedIndex((current) => (current - 1 + images.length) % images.length);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedIndex((current) => (current + 1) % images.length);
      }
    }

    window.addEventListener("keydown", changeImage);
    return () => window.removeEventListener("keydown", changeImage);
  }, [images.length, isOpen]);

  if (images.length === 0) return null;

  return (
    <section id="photos" aria-labelledby="photos-title" className="scroll-mt-28 border-t border-slate-200 pt-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-700">Le circuit en images</p>
          <h3 id="photos-title" className="mt-1 font-display text-xl font-bold text-brand-slate">
            {heading}
          </h3>
        </div>

        <div className="hidden gap-2 sm:flex" aria-label="Faire défiler les photos">
          <button
            type="button"
            onClick={() => scrollThumbnails(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-orange-300 hover:text-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2"
            aria-label="Photos précédentes"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollThumbnails(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-orange-300 hover:text-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2"
            aria-label="Photos suivantes"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={stripRef}
        className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [scrollbar-color:#cbd5e1_transparent] [scrollbar-width:thin]"
      >
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={(event) => openImage(index, event.currentTarget)}
            aria-haspopup="dialog"
            aria-label={`Agrandir la photo ${index + 1} sur ${images.length} : ${image.alt}`}
            className="group relative h-24 w-36 shrink-0 snap-start overflow-hidden rounded-md border border-slate-200 bg-slate-100 shadow-sm transition-[border-color,transform] hover:border-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2 sm:h-28 sm:w-40"
          >
            <Image
              src={image.src}
              alt=""
              fill
              unoptimized={isCloudinaryImage(image.src)}
              sizes="160px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" aria-hidden="true" />
            <span className="absolute bottom-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-sm" aria-hidden="true">
              <Expand className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="tour-photo-title"
        aria-describedby="tour-photo-caption"
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onClose={() => {
          setIsOpen(false);
          window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
        className="m-auto max-h-none max-w-none overflow-visible bg-transparent p-0 text-white backdrop:bg-slate-950/90 focus:outline-none"
      >
        {isOpen && selectedImage && (
          <div className="relative flex max-h-[92vh] w-[min(94vw,80rem)] flex-col overflow-hidden rounded-lg border border-white/15 bg-slate-950 shadow-2xl">
            <h3 id="tour-photo-title" className="sr-only">Photo du circuit en grand format</h3>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeDialog}
              className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/75 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              aria-label="Fermer la photo"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="relative h-[min(72vh,50rem)] w-full bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                unoptimized={isCloudinaryImage(selectedImage.src)}
                sizes="94vw"
                className="object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 sm:left-5"
                    aria-label="Afficher la photo précédente"
                  >
                    <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 sm:right-5"
                    aria-label="Afficher la photo suivante"
                  >
                    <ChevronRight className="h-6 w-6" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            <div className="flex items-start justify-between gap-5 border-t border-white/10 px-4 py-4 sm:px-6">
              <p id="tour-photo-caption" className="text-sm leading-relaxed text-slate-200">
                {selectedImage.alt}
              </p>
              <p className="shrink-0 text-xs font-bold tabular-nums text-orange-300" aria-live="polite">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
