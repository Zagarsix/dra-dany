// src/components/ui/SectionHeader.tsx
"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;        // "Nuestros tratamientos"
  title: string;      // puede incluir <span> para el acento
  titleAccent?: string; // palabra que va en color rose
}

export default function SectionHeader({ tag, title, titleAccent }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      // once: true → la animación solo ocurre una vez al hacer scroll
      // margin: "-80px" → empieza a animar 80px antes de entrar al viewport
      transition={{ duration: 0.6 }}
    >
      {/* Etiqueta pequeña superior */}
      <span className="inline-block text-rose-DEFAULT text-xs font-semibold 
                        tracking-[3px] uppercase mb-3">
        ✦ {tag}
      </span>

      {/* Título principal */}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
        {titleAccent ? (
          <>
            {title}{" "}
            <span className="text-rose-DEFAULT neon-text">{titleAccent}</span>
          </>
        ) : (
          title
        )}
      </h2>

      {/* Línea divisoria con gradiente */}
      <div className="w-16 h-0.5 mx-auto mt-4 rounded-full"
           style={{ background: "linear-gradient(90deg, #c9627e, #d4a96a)" }} />
    </motion.div>
  );
}