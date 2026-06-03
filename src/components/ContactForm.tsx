"use client";

import { useState, type FormEvent } from "react";

const PROVINCIAS = [
  "Buenos Aires",
  "Ciudad Autónoma de Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
];

const EMAIL = "somos@constructoraescobar.com.ar";

type Status = "idle" | "submitting" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "");
    const email = String(data.get("email") ?? "");
    const tel = String(data.get("telefono") ?? "");
    const mensaje = String(data.get("mensaje") ?? "");
    const obra = String(data.get("obra") ?? "");
    const localidad = String(data.get("localidad") ?? "");
    const provincia = String(data.get("provincia") ?? "");

    const subject = encodeURIComponent(
      `Consulta de presupuesto — ${nombre || "Sin nombre"}`
    );
    const body = encodeURIComponent(
      [
        "TUS DATOS",
        `Nombre: ${nombre}`,
        `Email: ${email}`,
        `Teléfono: ${tel}`,
        "",
        "Mensaje:",
        mensaje,
        "",
        "DATOS DEL PROYECTO",
        `¿Qué querés construir?: ${obra}`,
        `Localidad: ${localidad}`,
        `Provincia: ${provincia}`,
      ].join("\n")
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8"
    >
      {/* TUS DATOS */}
      <fieldset className="space-y-5">
        <legend className="text-xs uppercase tracking-[0.18em] text-brand-500 font-semibold mb-4 block">
          Tus datos
        </legend>

        <Field
          label="Tu nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
        />
        <Field
          label="Tu email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field
          label="Tu número de teléfono"
          name="telefono"
          type="tel"
          required
          autoComplete="tel"
        />

        <div>
          <label htmlFor="mensaje" className="sr-only">
            Tu mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            rows={5}
            placeholder="Tu mensaje *"
            className="w-full rounded-xl bg-ink-900/60 border border-ink-800 px-4 py-3 text-ink-50 placeholder:text-ink-500 outline-none transition-colors duration-300 ease-in-out focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40 resize-y min-h-[120px]"
          />
        </div>
      </fieldset>

      {/* DATOS DEL PROYECTO */}
      <fieldset className="space-y-5">
        <legend className="text-xs uppercase tracking-[0.18em] text-brand-500 font-semibold mb-4 block">
          Datos del proyecto
        </legend>

        <Field
          label="¿Qué querés construir?"
          name="obra"
          type="text"
          required
        />

        <div className="space-y-3">
          <span className="block text-xs font-medium uppercase tracking-wider text-ink-400">
            Localización
          </span>
          <Field
            label="Localidad"
            name="localidad"
            type="text"
            required
            autoComplete="address-level2"
          />

          <div>
            <label htmlFor="provincia" className="sr-only">
              Provincia
            </label>
            <select
              id="provincia"
              name="provincia"
              required
              defaultValue=""
              className="w-full rounded-xl bg-ink-900/60 border border-ink-800 px-4 py-3 text-ink-50 outline-none transition-colors duration-300 ease-in-out focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40 appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23a8a29e%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-no-repeat bg-[right_1rem_center]"
            >
              <option value="" disabled>
                Provincia *
              </option>
              {PROVINCIAS.map((p) => (
                <option key={p} value={p} className="bg-ink-950 text-ink-50">
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 text-ink-950 px-7 py-3.5 text-base font-semibold btn-base hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Enviando…" : "Enviar consulta"}
            <span aria-hidden>→</span>
          </button>
          {status === "sent" && (
            <p
              role="status"
              className="mt-3 text-sm text-brand-400"
            >
              Abrimos tu cliente de mail con la consulta lista para enviar.
            </p>
          )}
        </div>
      </fieldset>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: "text" | "email" | "tel";
  required?: boolean;
  autoComplete?: string;
};

function Field({ label, name, type, required, autoComplete }: FieldProps) {
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={`${label}${required ? " *" : ""}`}
        className="w-full rounded-xl bg-ink-900/60 border border-ink-800 px-4 py-3 text-ink-50 placeholder:text-ink-500 outline-none transition-colors duration-300 ease-in-out focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40"
      />
    </div>
  );
}
