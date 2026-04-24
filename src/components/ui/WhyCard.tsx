// src/components/ui/WhyCard.tsx
"use client";

import { motion } from "framer-motion";
import { WhyCard as WhyCardType } from "@/types";

interface Props {
  card: WhyCardType;
  index: number; // para escalonar las animaciones
}

export default function WhyCard({ card, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      // delay escalonado: la card 0 aparece primero, luego la 1, etc.
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass rounded-2xl p-6 text-center cursor-default
                 transition-all duration-300 group"
      style={{
        // Glow sutil al hacer hover — se logra con box-shadow en inline style
        // porque Tailwind no soporta box-shadow dinámico con opacidad
      }}
    >
      <span className="text-4xl mb-4 block">{card.emoji}</span>
      <h3 className="text-sm font-semibold text-text-primary mb-2 
                     group-hover:text-rose-DEFAULT transition-colors duration-300">
        {card.title}
      </h3>
      <p className="text-xs text-text-muted leading-relaxed">
        {card.description}
      </p>
    </motion.div>
  );
}