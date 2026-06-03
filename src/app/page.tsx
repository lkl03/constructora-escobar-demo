import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import FloatingActions from "@/components/FloatingActions";

const COMO_TRABAJAMOS = [
  {
    n: "01",
    title: "Proyecto",
    body: "Planificación y planos para presentación en barrios privados y municipalidad.",
  },
  {
    n: "02",
    title: "Diseño",
    body: "Análisis del lote, estudios de factibilidad, presupuestos y cronograma de obra.",
  },
  {
    n: "03",
    title: "Dirección ejecutiva",
    body: "Supervisión integral del proyecto, desde la fundación hasta la entrega final.",
  },
];

const LO_QUE_HACEMOS = [
  {
    title: "Anteproyecto",
    body: "Analizamos las necesidades de cada obra, sean formales, funcionales, económicas o constructivas.",
  },
  {
    title: "Proyecto personalizado",
    body: "Sabemos que cada proyecto es único y por ello requiere una atención especial.",
  },
  {
    title: "Elaboración de planos",
    body: "Tenemos a disposición personal capacitado para el desarrollo de planos.",
  },
  {
    title: "Renders del proyecto",
    body: "Cada proyecto puede previsualizarse mediante una muestra digital parcial o total.",
  },
  {
    title: "Movimiento de suelo",
    body: "Preparamos y limpiamos el terreno para eliminar cualquier elemento que pueda entorpecer la obra.",
  },
  {
    title: "Platea de fundación",
    body: "Con materiales firmes, preparamos las bases para una sólida construcción posterior.",
  },
  {
    title: "Materiales",
    body: "A disposición de proveedores exclusivos que nos acompañan en cada proyecto.",
  },
  {
    title: "Construcción",
    body: "Cubrimos todas las tareas necesarias de la construcción apuntando a un excelente resultado final.",
  },
];

const OBRAS = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    alt: "Vivienda contemporánea con grandes ventanales",
    label: "Vivienda",
  },
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
    alt: "Fachada arquitectónica de hormigón",
    label: "Fachadas",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    alt: "Piscina exterior en jardín privado",
    label: "Piscinas",
  },
  {
    src: "https://images.unsplash.com/photo-1503594384566-461fe158e797?auto=format&fit=crop&w=1600&q=80",
    alt: "Interior cálido con doble altura",
    label: "Interiores",
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
    alt: "Casa moderna con terraza y madera natural",
    label: "Espacios cubiertos",
  },
];

const MARQUEE = [
  "Anteproyecto",
  "Proyecto personalizado",
  "Renders",
  "Movimiento de suelo",
  "Platea de fundación",
  "Materiales",
  "Construcción",
  "Dirección de obra",
  "Refacciones",
  "Piscinas",
];

const PRETITLE =
  "text-xs uppercase tracking-[0.18em] text-brand-500 font-semibold";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />

      <main id="top" className="flex-1">
        {/* HERO */}
        <section className="relative isolate overflow-hidden pt-28 sm:pt-36 pb-24 sm:pb-32">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 -right-20 h-[36rem] w-[36rem] rounded-full bg-brand-500/25 blur-3xl animate-blob" />
            <div className="absolute top-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-brand-500/10 blur-3xl animate-blob-alt" />
          </div>

          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-ink-600">
                <span className="inline-flex h-2 w-2 rounded-full bg-brand-500" />
                Escobar, Buenos Aires · Más de 20 años de oficio
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-ink-950 leading-[0.95]">
                Construimos
                <br />
                <span className="text-ink-500">tus </span>
                <span className="relative inline-block">
                  <span className="relative z-10">sueños</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 sm:bottom-2 h-3 sm:h-4 bg-brand-500/80 -z-0 rounded-sm animate-highlight"
                  />
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-2xl text-lg sm:text-xl text-ink-700 leading-relaxed">
                Iniciamos hace más de veinte años con un objetivo claro:
                ofrecerte los mejores servicios para construir el tuyo. Cada
                cliente tiene un norte particular, y nuestro trabajo es
                escucharte, entender y evaluar tus necesidades para
                materializarlas.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 text-ink-50 px-6 py-3.5 text-base font-medium btn-base hover:bg-brand-500 hover:text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50"
                >
                  Solicitar presupuesto
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#como-trabajamos"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent text-ink-900 px-6 py-3.5 text-base font-medium border border-ink-300 btn-base hover:border-brand-500 hover:bg-brand-500 hover:text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50"
                >
                  Cómo trabajamos
                </a>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <dl className="mt-20 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 border-t border-ink-200 pt-10 text-center">
                {[
                  { k: "+20", v: "Años de oficio", accent: true },
                  { k: "Escobar", v: "Buenos Aires, AR" },
                  { k: "Llave en mano", v: "Proyecto + obra" },
                  { k: "Atención", v: "Personalizada", accent: true },
                ].map((s) => (
                  <div key={s.v} className="flex flex-col items-center">
                    <dt
                      className={`text-2xl sm:text-3xl font-semibold tracking-tight ${
                        s.accent ? "text-brand-500" : "text-ink-950"
                      }`}
                    >
                      {s.k}
                    </dt>
                    <dd className="mt-1 text-sm text-ink-600">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* MARQUEE */}
        <section
          aria-hidden
          className="border-y border-brand-600/30 bg-brand-500 text-ink-950 overflow-hidden"
        >
          <div className="flex whitespace-nowrap py-5 animate-marquee w-max">
            {[...MARQUEE, ...MARQUEE].map((label, i) => (
              <span
                key={i}
                className="px-8 text-lg sm:text-xl font-semibold tracking-tight inline-flex items-center gap-8"
              >
                {label}
                <span className="text-ink-950">★</span>
              </span>
            ))}
          </div>
        </section>

        {/* COMO TRABAJAMOS */}
        <section id="como-trabajamos" className="py-24 sm:py-32 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-2 max-w-3xl">
                <span className={PRETITLE}>Cómo trabajamos</span>
                <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink-950">
                  Tres etapas, un mismo compromiso.
                </h2>
                <p className="mt-3 text-lg text-ink-700">
                  Comprendemos tus necesidades y tus intenciones de crecimiento.
                  Por eso nos comprometemos al 100% con cada proyecto.
                </p>
              </div>
            </Reveal>

            <ul className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-200 rounded-2xl overflow-hidden border border-ink-200">
              {COMO_TRABAJAMOS.map((step, i) => (
                <Reveal key={step.n} as="li" delay={i * 100}>
                  <article className="h-full bg-white p-7 sm:p-8 flex flex-col justify-between min-h-[220px] group btn-base hover:bg-ink-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-ink-400">
                        {step.n}
                      </span>
                      <span
                        aria-hidden
                        className="h-2 w-2 rounded-full bg-brand-500 btn-base group-hover:scale-150"
                      />
                    </div>
                    <div className="mt-10">
                      <h3 className="text-2xl font-semibold tracking-tight text-ink-950 btn-base group-hover:text-brand-600">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-ink-700 leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* LO QUE HACEMOS */}
        <section
          id="lo-que-hacemos"
          className="py-24 sm:py-32 bg-ink-950 text-ink-50 scroll-mt-24"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="max-w-3xl">
                <span className={PRETITLE}>Lo que hacemos</span>
                <h2 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">
                  Del primer trazo a la última terminación.
                </h2>
                <p className="mt-4 text-lg text-ink-300">
                  Acompañamos cada etapa del proceso. Definimos el alcance,
                  optimizamos el presupuesto y ejecutamos la obra con el equipo
                  propio.
                </p>
              </div>
            </Reveal>

            <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-800 rounded-2xl overflow-hidden border border-ink-800">
              {LO_QUE_HACEMOS.map((item, i) => (
                <Reveal key={item.title} as="li" delay={i * 60}>
                  <div className="h-full bg-ink-950 p-6 sm:p-7 flex flex-col min-h-[220px] group btn-base hover:bg-ink-900">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-ink-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden
                        className="h-2 w-2 rounded-full bg-brand-500 btn-base group-hover:scale-150"
                      />
                    </div>
                    <div className="mt-auto pt-8">
                      <h3 className="text-xl font-semibold tracking-tight btn-base group-hover:text-brand-400">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-400 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* OBRAS / BENTO */}
        <section id="obras" className="py-24 sm:py-32 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 max-w-5xl">
                <div>
                  <span className={PRETITLE}>Obras</span>
                  <h2 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-ink-950">
                    Lo que materializamos.
                  </h2>
                </div>
                <p className="text-ink-700 max-w-md">
                  Interiores, fachadas, piscinas, superficies, espacios
                  cubiertos y remodelaciones. Cada proyecto es único.
                </p>
              </div>
            </Reveal>

            {/* Bento grid: 6 columnas, 4 filas en desktop */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-6 auto-rows-[120px] sm:auto-rows-[140px] gap-3 sm:gap-4">
              {/* Large feature — top left */}
              <BentoTile
                obra={OBRAS[0]}
                className="col-span-2 md:col-span-4 row-span-3"
                delay={0}
              />
              {/* Top right tall */}
              <BentoTile
                obra={OBRAS[1]}
                className="col-span-2 md:col-span-2 row-span-2"
                delay={80}
              />
              {/* Middle right */}
              <BentoTile
                obra={OBRAS[2]}
                className="col-span-1 md:col-span-2 row-span-2"
                delay={160}
              />
              {/* Bottom left */}
              <BentoTile
                obra={OBRAS[3]}
                className="col-span-1 md:col-span-2 row-span-2"
                delay={240}
              />
              {/* Bottom middle */}
              <BentoTile
                obra={OBRAS[4]}
                className="col-span-2 md:col-span-2 row-span-2"
                delay={320}
              />
            </div>
          </div>
        </section>

        {/* CTA / CONTACTO */}
        <section id="contacto" className="py-24 sm:py-32 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="relative isolate overflow-hidden rounded-3xl bg-ink-950 px-6 sm:px-12 py-14 sm:py-20 text-ink-50">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-brand-500/30 blur-3xl animate-blob"
                />
                <div className="relative grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
                  <div>
                    <span className={PRETITLE}>Contacto</span>
                    <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
                      Contanos sobre tu proyecto.
                    </h2>
                    <p className="mt-5 text-lg text-ink-300 max-w-xl">
                      Escuchamos cada idea con detalle. Respondemos con un
                      diagnóstico claro, un presupuesto honesto y un cronograma
                      realista.
                    </p>

                    <dl className="mt-10 space-y-5 text-sm">
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-ink-500">
                          Email
                        </dt>
                        <dd className="mt-1">
                          <a
                            href="mailto:somos@constructoraescobar.com.ar"
                            className="text-base font-medium text-ink-50 hover:text-brand-500 transition-colors duration-300 ease-in-out break-all"
                          >
                            somos@constructoraescobar.com.ar
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-ink-500">
                          WhatsApp
                        </dt>
                        <dd className="mt-1">
                          <a
                            href="https://wa.me/5493484394782"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium text-ink-50 hover:text-brand-500 transition-colors duration-300 ease-in-out"
                          >
                            +54 9 348 439-4782
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-ink-500">
                          Dónde estamos
                        </dt>
                        <dd className="mt-1 text-base font-medium">
                          Escobar, Buenos Aires — Argentina
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink-950 text-ink-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
            <div>
              <Image
                src="/logo-footer.png"
                alt="Constructora Escobar"
                width={518}
                height={105}
                className="h-9 sm:h-10 w-auto"
              />
              <h3 className="mt-8 text-2xl sm:text-3xl font-semibold tracking-tight">
                Estamos para vos.
              </h3>
              <p className="mt-4 max-w-xl text-ink-300 leading-relaxed">
                Cada cliente tiene su objetivo particular. Nuestro objetivo es
                escucharte, entender y evaluar tus necesidades, el camino más
                seguro para encontrar una solución a tu medida.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 content-start text-sm">
              <div>
                <div className="text-xs uppercase tracking-wider text-ink-500">
                  Contacto
                </div>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href="mailto:somos@constructoraescobar.com.ar"
                      className="text-ink-200 hover:text-brand-500 transition-colors duration-300 ease-in-out break-all"
                    >
                      somos@constructoraescobar.com.ar
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/5493484394782"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-200 hover:text-brand-500 transition-colors duration-300 ease-in-out"
                    >
                      +54 9 348 439-4782
                    </a>
                  </li>
                  <li className="text-ink-200">Escobar, Buenos Aires</li>
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-ink-500">
                  Sitio
                </div>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href="#como-trabajamos"
                      className="text-ink-200 hover:text-brand-500 transition-colors duration-300 ease-in-out"
                    >
                      Cómo trabajamos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#lo-que-hacemos"
                      className="text-ink-200 hover:text-brand-500 transition-colors duration-300 ease-in-out"
                    >
                      Lo que hacemos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#obras"
                      className="text-ink-200 hover:text-brand-500 transition-colors duration-300 ease-in-out"
                    >
                      Obras
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contacto"
                      className="text-ink-200 hover:text-brand-500 transition-colors duration-300 ease-in-out"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-ink-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-ink-400">
            <p>© {year} Constructora Escobar. Construimos tus sueños.</p>
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full border border-ink-800 px-4 py-2 btn-base hover:bg-brand-500 hover:text-ink-950 hover:border-brand-500"
            >
              Volver arriba
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5" />
                <path d="m5 12 7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Eterlab credit sub-footer */}
        <div
          className="bg-[#212121]"
          style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
        >
          <div className="mx-auto w-full max-w-screen-2xl px-4 py-2 sm:px-6 lg:px-8">
            <p className="footer-credit text-center text-xs text-white/80">
              ©{year} | diseñado y desarrollado por{" "}
              <a
                href="https://eterlab.co/"
                target="_blank"
                rel="noreferrer"
                className="italic text-white/90 transition-colors hover:text-white"
              >
                eterlab.
              </a>
            </p>
          </div>
        </div>
      </footer>

      <FloatingActions />
    </>
  );
}

type BentoTileProps = {
  obra: { src: string; alt: string; label: string };
  className?: string;
  delay?: number;
};

function BentoTile({ obra, className = "", delay = 0 }: BentoTileProps) {
  return (
    <Reveal delay={delay} className={className}>
      <figure className="group relative h-full w-full overflow-hidden rounded-2xl bg-ink-200">
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
        <figcaption className="absolute left-4 bottom-4 right-4 flex items-center justify-between text-ink-50 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-sm font-semibold tracking-wide bg-brand-500 text-ink-950 px-3 py-1.5 rounded-full">
            {obra.label}
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
