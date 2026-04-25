// src/app/page.tsx
// Componente raíz de la página. Importa todas las secciones
// y maneja el scroll hacia las secciones mediante refs.
"use client";

import { useRef } from "react";
import Navbar     from "@/components/layout/Navbar";
import Footer     from "@/components/layout/Footer";
import Hero       from "@/components/sections/Hero";
import About      from "@/components/sections/About";
import Services   from "@/components/sections/Services";
import Promotions from "@/components/sections/Promotions";
import Tips       from "@/components/sections/Tips";
import Contact    from "@/components/sections/Contact";
import BackToTop  from "@/components/ui/BackToTop";

export default function HomePage() {
  // scrollToContact y scrollToServices se pasan como props al Hero
  // para que los botones CTA del hero hagan scroll correcto
  const scrollToContact  = () => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  const scrollToServices = () => document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navbar />
      <main>
        <Hero
          onScrollToContact={scrollToContact}
          onScrollToServices={scrollToServices}
        />
        {/* Línea divisoria con glow */}
        <div className="glow-line" />
        <About />
        <div className="glow-line" />
        <Services />
        <div className="glow-line" />
        <Promotions onScrollToContact={scrollToContact} />
        <div className="glow-line" />
        <Tips />
        <div className="glow-line" />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}