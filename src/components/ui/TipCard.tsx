// src/components/ui/TipCard.tsx
"use client";

import { motion } from "framer-motion";
import { Tip } from "@/types";

interface Props {
  tip: Tip;
  index: number;
}

export default function TipCard({ tip, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass rounded-2xl overflow-hidden group cursor-pointer
                 border border-rose-DEFAULT/10 
                 hover:border-rose-neon/30 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="h-24 flex items-center justify-center text-4xl"
           style={{ background: "linear-gradient(135deg, #2e1b3a, #241530)" }}>
        <span className="transition-transform duration-300 group-hover:scale-110">
          {tip.emoji}
        </span>
      </div>

      {/* Cuerpo */}
      <div className="p-5">
        <span className="text-rose-DEFAULT text-xs font-semibold 
                          tracking-wider uppercase">
          {tip.category}
        </span>
        <h3 className="text-sm font-semibold text-text-primary mt-2 mb-2
                       leading-snug group-hover:text-rose-DEFAULT 
                       transition-colors duration-300">
          {tip.title}
        </h3>
        <p className="text-xs text-text-muted leading-relaxed">
          {tip.excerpt}
        </p>
      </div>

      {/* Footer */}
      <div className="px-5 pb-4 flex items-center justify-between
                      border-t border-rose-DEFAULT/8 pt-3">
        <span className="text-xs text-text-muted">{tip.date}</span>
        <span className="text-xs text-rose-DEFAULT font-medium
                          group-hover:translate-x-1 transition-transform duration-200">
          Leer más →
        </span>
      </div>
    </motion.article>
  );
}