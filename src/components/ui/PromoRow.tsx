// src/components/ui/PromoRow.tsx
"use client";

import { motion } from "framer-motion";
import { Promotion } from "@/types";

interface Props {
  promo: Promotion;
  index: number;  // índice para alternar imagen izq/der
  onCta: () => void; // callback para scroll a Contacto
}

export default function PromoRow({ promo, index, onCta }: Props) {
  // Si el índice es par → imagen izquierda, texto derecha
  // Si el índice es impar → texto izquierda, imagen derecha
  const isImageLeft = index % 2 === 0;

  const imageBlock = (
    <div className="relative rounded-2xl overflow-hidden h-52
                    border border-rose-DEFAULT/15"
         style={{ background: "linear-gradient(135deg, #2e1b3a, #1a1020)" }}>
      <div className="w-full h-full flex items-center justify-center text-5xl">
        {promo.emoji}
      </div>
      {/* Overlay de gradiente */}
      <div className="absolute inset-0 opacity-40"
           style={{ background: "linear-gradient(135deg, rgba(201,98,126,0.2), rgba(212,169,106,0.1))" }} />
    </div>
  );

  const textBlock = (
    <div>
      <h3 className="text-xl font-bold text-text-primary mb-2">
        {promo.title}
        {promo.badge && (
          <span className="ml-3 inline-block bg-gold-neon/15 border border-gold-neon/30
                           text-gold-neon text-xs font-semibold
                           px-3 py-1 rounded-full align-middle">
            {promo.badge}
          </span>
        )}
      </h3>
      <p className="text-sm text-text-muted leading-relaxed mb-4">
        {promo.description}
      </p>
      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-2xl font-extrabold text-gradient">
          {promo.price}
        </span>
        <span className="text-sm text-text-muted line-through">
          {promo.originalPrice}
        </span>
      </div>
      <motion.button
        onClick={onCta}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="px-6 py-2.5 rounded-full font-semibold text-sm text-white
                   transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #c9627e, #a0405e)",
          boxShadow: "0 0 20px rgba(255,107,157,0.3)",
        }}
      >
        {promo.ctaText}
      </motion.button>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: isImageLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center
                 py-10 border-b border-rose-DEFAULT/8 last:border-b-0"
    >
      {isImageLeft ? (
        <>{imageBlock}{textBlock}</>
      ) : (
        // En móvil siempre la imagen va arriba
        <>
          <div className="md:hidden">{imageBlock}</div>
          <div className="hidden md:block">{textBlock}</div>
          <div className="hidden md:block">{imageBlock}</div>
          <div className="md:hidden">{textBlock}</div>
        </>
      )}
    </motion.div>
  );
}