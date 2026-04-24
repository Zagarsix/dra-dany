// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Carousel from "@/components/ui/Carousel";
import WhyCard from "@/components/ui/WhyCard";
import { carouselItems } from "@/data/carousel";
import { whyUsCards } from "@/data/whyUs";

interface Props {
  onScrollToContact: () => void;
  onScrollToServices: () => void;
}

export default function Hero({ onScrollToContact, onScrollToServices }: Props) {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center
                 pt-24 pb-16 px-4 relative"
      style={{
        background: `
          radial-gradient(ellipse at 50% 0%, rgba(201,98,126,0.12) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 80%, rgba(212,169,106,0.08) 0%, transparent 50%),
          #1a1020
        `,
      }}
    >
      {/* ── CONTENIDO CENTRAL ── */}
      <motion.div
        className="text-center max-w-2xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block bg-rose-dark/15 border border-rose-dark/40
                     text-rose-DEFAULT text-xs font-semibold tracking-widest
                     uppercase px-4 py-1.5 rounded-full mb-5"
        >
          ✦ Odontología & Estética Facial
        </motion.span>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5
                        text-text-primary">
          Tu{" "}
          <span className="text-gradient neon-text">
            sonrisa perfecta
          </span>
          <br />
          comienza aquí
        </h1>

        <p className="text-base md:text-lg text-text-muted max-w-xl mx-auto 
                      mb-8 leading-relaxed">
          Tratamientos odontológicos y de estética facial de alta calidad.
          Tecnología de vanguardia y atención personalizada para tu bienestar.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap">
          <motion.button
            onClick={onScrollToContact}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full font-bold text-sm text-white
                       transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #c9627e, #a0405e)",
              boxShadow: "0 0 30px rgba(255,107,157,0.35)",
            }}
          >
            📅 Agendar cita
          </motion.button>

          <motion.button
            onClick={onScrollToServices}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full font-bold text-sm text-text-primary
                       border border-rose-DEFAULT/40 bg-transparent
                       hover:border-rose-DEFAULT hover:bg-rose-DEFAULT/8
                       transition-all duration-300"
          >
            Conoce más... →
          </motion.button>
        </div>
      </motion.div>

      {/* ── CARRUSEL ── */}
      <Carousel items={carouselItems} />

      {/* ── GRID ¿POR QUÉ ELEGIRNOS? ── */}
      <div className="w-full max-w-5xl mt-20">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-rose-DEFAULT text-xs font-semibold 
                            tracking-[3px] uppercase">
            ✦ ¿Por qué elegirnos?
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-2">
            Lo que nos hace{" "}
            <span className="text-rose-DEFAULT neon-text">diferentes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {whyUsCards.map((card, i) => (
            <WhyCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}