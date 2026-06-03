"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#lo-que-hacemos", label: "Lo que hacemos" },
  { href: "#obras", label: "Obras" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink-50/85 backdrop-blur-md border-b border-ink-200/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <a
            href="#top"
            aria-label="Constructora Escobar — inicio"
            className="flex items-center gap-2 shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Constructora Escobar"
              width={518}
              height={105}
              priority
              className="h-8 sm:h-10 w-auto"
            />
          </a>

          <nav
            aria-label="Principal"
            className="hidden md:flex items-center gap-1"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-ink-700 hover:text-brand-500 rounded-md transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-ink-950 text-ink-50 px-4 py-2 text-sm font-medium btn-base hover:bg-brand-500 hover:text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50"
            >
              Solicitar presupuesto
              <span aria-hidden>→</span>
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-md text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="md:hidden bg-ink-50/95 backdrop-blur-md border-t border-ink-200/70"
      >
        <nav aria-label="Móvil" className="px-5 py-4 flex flex-col gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-base text-ink-800 rounded-md transition-colors duration-300 ease-in-out hover:bg-ink-100 hover:text-brand-500"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-ink-950 text-ink-50 px-4 py-3 text-base font-medium btn-base hover:bg-brand-500 hover:text-ink-950"
          >
            Solicitar presupuesto
          </a>
        </nav>
      </div>
    </header>
  );
}
