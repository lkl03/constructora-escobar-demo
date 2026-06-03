"use client";

import { useEffect, useState } from "react";

const WA_NUMBER = "5493484394782";
const WA_TEXT = encodeURIComponent(
  "Hola, quiero consultar por un proyecto."
);
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
        <span aria-hidden className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 blur-md -z-10 group-hover:opacity-70 transition-opacity" />
        <svg
          aria-hidden
          viewBox="0 0 32 32"
          className="h-7 w-7"
          fill="currentColor"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39-.078 0-.155-.04-.273-.118-.86-.45-1.682-.93-2.385-1.633-.703-.703-1.183-1.524-1.633-2.385-.078-.118-.118-.195-.118-.273 0-.43 1.39-1.146 1.39-1.518 0-.078-.04-.156-.078-.234-.118-.234-1.05-2.34-1.245-2.81-.156-.39-.273-.39-.547-.39-.078 0-.156 0-.273-.04-.273 0-.703.078-1.094.469-.39.39-1.484 1.448-1.484 3.516s1.523 4.062 1.719 4.336c.195.273 2.969 4.687 7.305 6.523 1.034.448 1.841.715 2.47.917.93.295 1.776.252 2.444.155.745-.111 2.295-.94 2.62-1.84.323-.9.323-1.665.226-1.84-.097-.176-.36-.272-.71-.428z" />
          <path d="M27.46 4.54C24.45 1.53 20.48 0 16.27 0 7.58 0 .5 7.08.5 15.77c0 2.78.72 5.49 2.09 7.88L.36 32l8.55-2.24c2.3 1.26 4.89 1.93 7.36 1.93h.01c8.69 0 15.77-7.08 15.77-15.77 0-4.21-1.62-8.18-4.63-11.18zM16.28 28.97h-.01c-2.2 0-4.36-.6-6.24-1.71l-.45-.27-4.74 1.24 1.26-4.62-.29-.46c-1.23-1.96-1.88-4.23-1.88-6.55 0-6.78 5.52-12.3 12.3-12.3 3.29 0 6.37 1.28 8.69 3.61 2.32 2.32 3.6 5.41 3.6 8.69-.01 6.78-5.53 12.3-12.24 12.3z" />
        </svg>
      </a>

      {/* Back to top */}
      <a
        href="#top"
        aria-label="Volver arriba"
        aria-hidden={!showTop}
        tabIndex={showTop ? 0 : -1}
        className={`fixed bottom-5 right-[5.25rem] sm:bottom-6 sm:right-24 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink-950 text-ink-50 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] btn-base hover:bg-brand-500 hover:text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50 ${
          showTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        style={{ transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out" }}
      >
        <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
      </a>
    </>
  );
}
