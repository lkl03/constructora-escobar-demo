"use client";

import { useState, type FormEvent } from "react";

const REQUIRED_FIELDS = [
  "nombre",
  "email",
  "telefono",
  "mensaje",
  "obra",
  "localidad",
  "provincia",
] as const;

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
  const [isValid, setIsValid] = useState(false);

  function checkValidity(form: HTMLFormElement) {
    const fd = new FormData(form);
    setIsValid(
      REQUIRED_FIELDS.every((k) => String(fd.get(k) ?? "").trim() !== "")
    );
  }

  function onInput(e: FormEvent<HTMLFormElement>) {
    checkValidity(e.currentTarget);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const allFilled = REQUIRED_FIELDS.every(
      (k) => String(fd.get(k) ?? "").trim() !== ""
    );
    if (!allFilled) {
      // surface the first invalid native control
      if (form.reportValidity) form.reportValidity();
      return;
    }
    setStatus("submitting");

    const nombre = String(fd.get("nombre") ?? "");
    const email = String(fd.get("email") ?? "");
    const tel = String(fd.get("telefono") ?? "");
    const mensaje = String(fd.get("mensaje") ?? "");
    const obra = String(fd.get("obra") ?? "");
    const localidad = String(fd.get("localidad") ?? "");
    const provincia = String(fd.get("provincia") ?? "");

    const subject = encodeURIComponent(
      `Consulta de presupuesto — ${nombre}`
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
      onInput={onInput}
      onChange={onInput}
      className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5"
    >
      {/* TUS DATOS */}
      <fieldset className="space-y-4">
        <legend className="text-xs uppercase tracking-[0.18em] text-brand-500 font-semibold mb-3 block">
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
            rows={4}
            placeholder="Tu mensaje *"
            className="w-full rounded-xl bg-ink-900/60 border border-ink-800 px-4 py-3 text-ink-50 placeholder:text-ink-500 outline-none transition-colors duration-300 ease-in-out focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40 resize-y min-h-[110px]"
          />
        </div>
      </fieldset>

      {/* DATOS DEL PROYECTO */}
      <fieldset className="space-y-4">
        <legend className="text-xs uppercase tracking-[0.18em] text-brand-500 font-semibold mb-3 block">
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

          <div className="provincia-wrapper relative">
            <label htmlFor="provincia" className="sr-only">
              Provincia
            </label>
            <select
              id="provincia"
              name="provincia"
              required
              defaultValue=""
              className="provincia-select w-full rounded-xl bg-ink-950 border border-ink-800 px-4 py-3 pr-10 text-ink-50 outline-none transition-colors duration-300 ease-in-out focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40 appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Provincia *
              </option>
              {PROVINCIAS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <span
              aria-hidden
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-400"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </div>
        </div>

        <div className="pt-1">
          <button
            type="submit"
            aria-disabled={!isValid || status === "submitting"}
            className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold border-2 cursor-pointer btn-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${
              isValid
                ? "bg-brand-500 border-brand-500 text-ink-950 hover:bg-transparent hover:text-white hover:border-white"
                : "bg-brand-500/25 border-brand-500/30 text-ink-50/40"
            }`}
          >
            {status === "submitting" ? "Enviando…" : "Enviar consulta"}
            <span aria-hidden>→</span>
          </button>
          {!isValid && (
            <p className="mt-3 text-xs text-ink-400 text-center">
              Completá todos los campos para habilitar el envío.
            </p>
          )}
          {status === "sent" && (
            <p role="status" className="mt-3 text-sm text-brand-400">
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
