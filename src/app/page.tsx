import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";

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
  "Anteproyecto",
  "Proyecto personalizado",
  "Elaboración de planos",
  "Renders del proyecto",
  "Movimiento de suelo",
  "Platea de fundación",
  "Materiales",
  "Construcción",
];

const OBRAS = [
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    alt: "Edificio residencial moderno con líneas limpias",
    label: "Residencial",
  },
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

export default function Home() {
  return (
    <>
      <Header />

      <main id="top" className="flex-1">
        {/* HERO */}
        <section className="relative isolate overflow-hidden pt-28 sm:pt-36 pb-24 sm:pb-32">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 -right-20 h-[36rem] w-[36rem] rounded-full bg-brand-500/25 blur-3xl" />
            <div className="absolute top-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-ink-900/5 blur-3xl" />
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
                    className="absolute inset-x-0 bottom-1 sm:bottom-2 h-3 sm:h-4 bg-brand-500/80 -z-0 rounded-sm"
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
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 text-ink-50 px-6 py-3.5 text-base font-medium hover:bg-ink-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50"
                >
                  Solicitar presupuesto
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#como-trabajamos"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent text-ink-900 px-6 py-3.5 text-base font-medium border border-ink-300 hover:border-ink-900 hover:bg-ink-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50"
                >
                  Cómo trabajamos
                </a>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <dl className="mt-20 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 border-t border-ink-200 pt-10">
                {[
                  { k: "+20", v: "Años de oficio" },
                  { k: "Escobar", v: "Buenos Aires, AR" },
                  { k: "Llave en mano", v: "Proyecto + obra" },
                  { k: "Atención", v: "Personalizada" },
                ].map((s) => (
                  <div key={s.v}>
                    <dt className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-950">
                      {s.k}
                    </dt>
                    <dd className="mt-1 text-sm text-ink-600">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* MARQUEE — services list */}
        <section
          aria-hidden
          className="border-y border-ink-200 bg-ink-950 text-ink-50 overflow-hidden"
        >
          <div className="flex whitespace-nowrap py-5 animate-marquee w-max">
            {[...MARQUEE, ...MARQUEE].map((label, i) => (
              <span
                key={i}
                className="px-8 text-lg sm:text-xl font-medium tracking-tight inline-flex items-center gap-8"
              >
                {label}
                <span className="text-brand-500">★</span>
              </span>
            ))}
          </div>
        </section>

        {/* COMO TRABAJAMOS */}
        <section id="como-trabajamos" className="py-24 sm:py-32 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-2 max-w-3xl">
                <span className="text-xs uppercase tracking-[0.18em] text-brand-700 font-semibold">
                  Cómo trabajamos
                </span>
                <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink-950">
                  Tres etapas, un mismo compromiso.
                </h2>
                <p className="mt-3 text-lg text-ink-700">
                  Comprendemos tus necesidades y tus intenciones de crecimiento.
                  Por eso nos comprometemos al 100% con cada proyecto.
                </p>
              </div>
            </Reveal>

            <ul className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMO_TRABAJAMOS.map((step, i) => (
                <Reveal key={step.n} as="li" delay={i * 100}>
                  <article className="group relative h-full rounded-2xl border border-ink-200 bg-white p-7 sm:p-8 transition-all duration-300 hover:border-ink-900 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono text-ink-400">
                        {step.n}
                      </span>
                      <span
                        aria-hidden
                        className="h-2 w-2 rounded-full bg-brand-500 transition-transform duration-300 group-hover:scale-150"
                      />
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold tracking-tight text-ink-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-ink-700 leading-relaxed">
                      {step.body}
                    </p>
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
                <span className="text-xs uppercase tracking-[0.18em] text-brand-400 font-semibold">
                  Lo que hacemos
                </span>
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
                <Reveal key={item} as="li" delay={i * 60}>
                  <div className="h-full bg-ink-950 p-6 sm:p-7 flex flex-col justify-between min-h-[140px] group transition-colors duration-300 hover:bg-ink-900">
                    <span className="text-xs font-mono text-ink-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-6 text-xl font-medium tracking-tight group-hover:text-brand-400 transition-colors">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* OBRAS / GALERIA */}
        <section id="obras" className="py-24 sm:py-32 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 max-w-5xl">
                <div>
                  <span className="text-xs uppercase tracking-[0.18em] text-brand-700 font-semibold">
                    Obras
                  </span>
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

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {OBRAS.map((obra, i) => (
                <Reveal
                  key={obra.src}
                  delay={i * 80}
                  className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
                >
                  <figure className="group relative overflow-hidden rounded-2xl bg-ink-200 aspect-[4/3]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={obra.src}
                      alt={obra.alt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-ink-50 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-sm font-medium tracking-wide bg-ink-950/60 backdrop-blur px-3 py-1.5 rounded-full">
                        {obra.label}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <p className="mt-10 text-sm text-ink-500 italic">
                Imágenes de referencia. La galería de obras propias se publicará
                próximamente.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA / CONTACTO */}
        <section id="contacto" className="py-24 sm:py-32 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="relative isolate overflow-hidden rounded-3xl bg-ink-950 px-6 sm:px-12 py-16 sm:py-20 text-ink-50">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-brand-500/30 blur-3xl"
                />
                <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] text-brand-400 font-semibold">
                      Contacto
                    </span>
                    <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
                      Contanos tu proyecto.
                    </h2>
                    <p className="mt-5 text-lg text-ink-300 max-w-xl">
                      Escuchamos cada idea con detalle. Respondemos con un
                      diagnóstico claro, un presupuesto honesto y un cronograma
                      realista.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <a
                      href="mailto:somos@constructoraescobar.com.ar?subject=Consulta%20de%20presupuesto"
                      className="group flex items-center justify-between gap-6 rounded-2xl bg-ink-900/60 hover:bg-ink-900 border border-ink-800 p-5 sm:p-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                    >
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-wider text-ink-400">
                          Escribinos
                        </div>
                        <div className="mt-1 text-base sm:text-lg font-medium break-all">
                          somos@constructoraescobar.com.ar
                        </div>
                      </div>
                      <span
                        aria-hidden
                        className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-ink-950 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>

                    <div className="rounded-2xl border border-ink-800 p-5 sm:p-6">
                      <div className="text-xs uppercase tracking-wider text-ink-400">
                        Dónde estamos
                      </div>
                      <div className="mt-1 text-base sm:text-lg font-medium">
                        Escobar, Buenos Aires — Argentina
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Constructora Escobar"
              width={518}
              height={105}
              className="h-7 w-auto"
            />
          </div>
          <p className="text-sm text-ink-600 max-w-md sm:text-right">
            © {new Date().getFullYear()} Constructora Escobar. Construimos tus
            sueños.
          </p>
        </div>
      </footer>
    </>
  );
}
