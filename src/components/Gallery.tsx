"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import Lightbox, { type LightboxImage } from "@/components/Lightbox";

type GalleryProps = {
  images: LightboxImage[];
};

const BENTO_SPAN = [
  "col-span-2 md:col-span-4 row-span-3",
  "col-span-2 md:col-span-2 row-span-2",
  "col-span-1 md:col-span-2 row-span-2",
  "col-span-1 md:col-span-2 row-span-2",
  "col-span-1 md:col-span-3 row-span-2",
  "col-span-1 md:col-span-3 row-span-2",
];

export default function Gallery({ images }: GalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="mt-14 grid grid-cols-2 md:grid-cols-6 auto-rows-[120px] sm:auto-rows-[140px] gap-3 sm:gap-4">
        {images.map((obra, i) => (
          <Reveal
            key={obra.src}
            delay={i * 80}
            className={BENTO_SPAN[i] ?? "col-span-2 md:col-span-2 row-span-2"}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ampliar imagen: ${obra.label}`}
              className="group relative block h-full w-full overflow-hidden rounded-2xl bg-ink-200 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={obra.src}
                alt={obra.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-ink-50 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-sm font-semibold tracking-wide bg-brand-500 text-ink-950 px-3 py-1.5 rounded-full">
                  {obra.label}
                </span>
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-50/15 backdrop-blur text-ink-50"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6" />
                    <path d="M9 21H3v-6" />
                    <path d="M21 3l-7 7" />
                    <path d="M3 21l7-7" />
                  </svg>
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox
        images={images}
        index={active}
        onClose={() => setActive(null)}
        onIndexChange={setActive}
      />
    </>
  );
}
