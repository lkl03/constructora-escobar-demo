"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type LightboxImage = {
  src: string;
  alt: string;
  label: string;
};

type LightboxProps = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export default function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const next = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  const prev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    if (index === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, onClose, next, prev]);

  if (index === null || !mounted) return null;
  const img = images[index];

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Obra ${index + 1} de ${images.length}: ${img.label}`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 backdrop-blur-sm p-4 sm:p-8"
      style={{ animation: "fadeIn 200ms ease-out" }}
    >
      {/* Top bar */}
      <div className="absolute top-3 right-3 sm:top-5 sm:right-5 flex items-center gap-3 z-10">
        <span className="text-xs sm:text-sm font-mono text-ink-300 select-none">
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
        <button
          ref={closeBtnRef}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Cerrar"
          className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-brand-500 text-ink-950 btn-base hover:bg-ink-50 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      {/* Prev */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Anterior"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-ink-50/10 text-ink-50 backdrop-blur btn-base hover:bg-brand-500 hover:text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
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
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* Image */}
      <figure
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[calc(100vh-6rem)] max-w-[min(100vw-4rem,1400px)] flex items-center justify-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="max-h-[calc(100vh-6rem)] max-w-full w-auto h-auto rounded-2xl object-contain shadow-2xl animate-[zoomIn_240ms_ease-out]"
          style={{ animation: "zoomIn 240ms ease-out" }}
        />
        <figcaption className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
          <span className="inline-block bg-brand-500 text-ink-950 text-xs sm:text-sm font-semibold tracking-wide px-3 py-1.5 rounded-full">
            {img.label}
          </span>
        </figcaption>
      </figure>

      {/* Next */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Siguiente"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-ink-50/10 text-ink-50 backdrop-blur btn-base hover:bg-brand-500 hover:text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );

  return createPortal(overlay, document.body);
}
