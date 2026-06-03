import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Constructora Escobar — Construimos tus sueños",
  description:
    "Más de 20 años proyectando, diseñando y construyendo obras en Escobar y la zona norte de Buenos Aires. Anteproyecto, dirección ejecutiva y construcción llave en mano.",
  metadataBase: new URL("https://constructora-escobar-demo.vercel.app"),
  openGraph: {
    title: "Constructora Escobar — Construimos tus sueños",
    description:
      "Más de 20 años proyectando, diseñando y construyendo obras en Escobar.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${inter.variable} h-full antialiased`}
    >
      <body
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
        className="min-h-full flex flex-col bg-ink-50 text-ink-900"
      >
        {children}
      </body>
    </html>
  );
}
