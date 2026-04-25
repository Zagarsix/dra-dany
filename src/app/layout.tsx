// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // la variable CSS que usamos en globals.css
  display: "swap",
});

// Metadata para SEO — aparece en Google y en la pestaña del navegador
export const metadata: Metadata = {
  title: "Dra. Daniela Pacheco | Odontología y Estética Facial — Santiago",
  description:
    "Especialista en ortodoncia invisible, blanqueamiento dental, carillas de porcelana, rellenos faciales y botox en Providencia, Santiago de Chile.",
  keywords: [
    "dentista providencia", "odontología santiago", "estética facial santiago",
    "ortodoncia invisible", "blanqueamiento dental", "carillas porcelana",
    "botox facial", "rellenos faciales", "dra daniela pacheco",
  ],
  openGraph: {
    title: "Dra. Daniela Pacheco | Odontología y Estética Facial",
    description: "Tratamientos odontológicos y de estética facial en Santiago, Chile.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}