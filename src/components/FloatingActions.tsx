"use client";

import { useEffect, useState } from "react";

const WA_NUMBER = "5493484394782";
const WA_TEXT = encodeURIComponent("Hola, quiero consultar por un proyecto.");
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp FAB */}
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] btn-base hover:bg-[#1ebe5b] hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50 animate-float"
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 blur-md -z-10 group-hover:opacity-70 transition-opacity"
        />
        <svg
          aria-hidden
          viewBox="0 0 32 32"
          className="h-7 w-7"
          fill="currentColor"
        >
          <path d="M16.004 3C8.82 3 3 8.82 3 16.004c0 2.29.6 4.522 1.741 6.49L3 29l6.66-1.738a13.04 13.04 0 0 0 6.344 1.62h.005C23.184 28.882 29 23.062 29 15.879 29 12.4 27.65 9.13 25.198 6.677 22.745 4.224 19.477 3 16.004 3Zm0 23.78h-.004a10.78 10.78 0 0 1-5.49-1.503l-.394-.234-3.953 1.031 1.053-3.85-.256-.396a10.766 10.766 0 0 1-1.65-5.824c0-5.964 4.857-10.82 10.822-10.82 2.892 0 5.612 1.127 7.66 3.175a10.768 10.768 0 0 1 3.18 7.652c-.002 5.965-4.857 10.77-10.968 10.77Zm5.93-8.073c-.325-.163-1.92-.948-2.218-1.056-.298-.108-.514-.163-.73.163-.218.325-.838 1.056-1.028 1.272-.19.218-.38.245-.704.082-.325-.163-1.37-.505-2.61-1.61-.965-.86-1.616-1.924-1.805-2.249-.19-.325-.02-.5.142-.66.146-.146.325-.38.488-.57.163-.19.218-.325.326-.543.108-.218.054-.408-.027-.57-.082-.164-.73-1.762-1-2.41-.264-.633-.531-.547-.73-.557-.19-.01-.408-.012-.625-.012-.218 0-.57.082-.87.408-.298.325-1.137 1.11-1.137 2.708 0 1.598 1.164 3.14 1.327 3.358.163.218 2.29 3.495 5.547 4.9.775.334 1.378.534 1.85.683.777.247 1.483.212 2.04.128.622-.092 1.92-.785 2.19-1.543.27-.758.27-1.408.19-1.543-.082-.135-.298-.218-.624-.38Z" />
        </svg>
      </a>

      {/* Back to top */}
      <div
        className={`fixed bottom-5 right-[5.25rem] sm:bottom-6 sm:right-24 z-50 transition-all duration-300 ease-in-out ${
          showTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <a
          href="#top"
          aria-label="Volver arriba"
          tabIndex={showTop ? 0 : -1}
          className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-ink-950 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] btn-base hover:bg-brand-400 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50"
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>

          {/* Tooltip (desktop only) */}
          <span
            role="tooltip"
            className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 hidden md:flex items-center whitespace-nowrap rounded-md bg-ink-950 px-3 py-1.5 text-xs font-medium text-ink-50 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out shadow-lg"
          >
            Volver arriba
            <span
              aria-hidden
              className="absolute left-full top-1/2 -translate-y-1/2 -ml-px border-y-4 border-y-transparent border-l-4 border-l-ink-950"
            />
          </span>
        </a>
      </div>
    </>
  );
}
