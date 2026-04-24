// src/components/ui/ServiceCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Service } from "@/types";

interface Props {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl overflow-hidden cursor-default group
                 border border-rose-DEFAULT/10 
                 hover:border-rose-neon/50 transition-all duration-400"
      style={{
        // Al hover, el box-shadow se activa via CSS group-hover
        // porque Framer Motion no maneja bien box-shadow con gradiente
      }}
    >
      {/* ── IMAGEN (30% superior de la card) ── */}
      <div className="relative h-32 overflow-hidden"
           style={{ background: `linear-gradient(135deg, #2e1b3a, #241530)` }}>
        
        {/* Imagen real — cuando la tengas, reemplaza el placeholder */}
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-5xl transition-transform duration-500
                           group-hover:scale-110">
            {service.emoji}
          </span>
        </div>
        
        {/* Cuando tengas imágenes reales, descomenta esto y comenta el div de arriba:
        <Image
          src={service.imagePath}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        */}

        {/* Glow de fondo que se intensifica al hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                        transition-opacity duration-500"
             style={{
               background: "radial-gradient(circle at center, rgba(255,107,157,0.25), transparent 70%)"
             }} />

        {/* Badge opcional (Popular, Nuevo) */}
        {service.badge && (
          <span className="absolute top-3 right-3 bg-rose-dark/90 text-white
                           text-xs font-semibold px-2.5 py-1 rounded-full">
            {service.badge}
          </span>
        )}
      </div>

      {/* ── CUERPO ── */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-text-primary mb-2
                       group-hover:text-rose-DEFAULT transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-xs text-text-muted leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* ── FOOTER CON PRECIO ── */}
      <div className="px-5 pb-5 pt-3 border-t border-rose-DEFAULT/10
                      flex items-center justify-between">
        <span className="text-gold-neon font-bold text-base">
          {service.price}
        </span>
        <span className="bg-rose-dark/20 text-rose-DEFAULT text-xs
                         px-3 py-1 rounded-full border border-rose-dark/20">
          {service.priceDetail}
        </span>
      </div>
    </motion.div>
  );
}