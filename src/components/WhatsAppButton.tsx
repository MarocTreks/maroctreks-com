export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M16.04 3A12.84 12.84 0 0 0 5.16 22.65L3.36 29l6.52-1.71A12.9 12.9 0 1 0 16.04 3Zm0 23.57c-1.9 0-3.76-.51-5.38-1.47l-.38-.23-3.87 1.02 1.03-3.77-.25-.39a10.66 10.66 0 1 1 8.85 4.84Zm5.85-7.98c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1.01 1.27-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.55 9.55 0 0 1-1.78-2.21c-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.57 1.14 3.08 1.3 3.29.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.77 2.17-1.52.27-.74.27-1.38.19-1.51-.08-.14-.29-.22-.61-.38Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/212667591933?text=Bonjour%20Maroc%20Treks%2C%20je%20souhaite%20organiser%20un%20trek%20au%20Maroc."
      target="_blank"
      rel="noreferrer"
      aria-label="Contact MarocTreks Team sur WhatsApp"
      className="fixed bottom-3 right-3 z-50 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#128C7E] px-3.5 text-white shadow-[0_10px_30px_rgba(15,23,42,0.28)] ring-3 ring-white/90 transition-[transform,background-color] hover:scale-[1.02] hover:bg-[#0f766e] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366] sm:bottom-7 sm:right-7 sm:h-14 sm:px-4 sm:ring-4"
    >
      <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="whitespace-nowrap text-[0.6875rem] font-extrabold sm:text-xs">
        Contact MarocTreks Team
      </span>
    </a>
  );
}
