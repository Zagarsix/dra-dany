// src/components/ui/Carousel.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselItem } from "@/types";

interface Props {
  items: CarouselItem[];
  autoPlayInterval?: number; // ms, default 4500
}

export default function Carousel({ items, autoPlayInterval = 4500 }: Props) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = derecha, -1 = izquierda

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent((index + items.length) % items.length);
  }, [items.length]);

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval);
    // Limpiamos el intervalo al desmontar o cuando "next" cambie
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  // Variantes de animación para el slide
  // direction determina si el nuevo slide viene de la derecha o izquierda
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      {/* Contenedor del carrusel */}
      <div className="relative rounded-2xl overflow-hidden h-72 md:h-80
                      border border-rose-DEFAULT/25"
           style={{ boxShadow: "0 0 60px rgba(255,107,157,0.15)" }}>
        
        {/* Slides con AnimatePresence para manejar entrada/salida */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 flex items-center justify-center flex-col gap-3"
            style={{ background: "linear-gradient(135deg, #2e1b3a, #241530)" }}
          >
            <span className="text-6xl">{items[current].emoji}</span>
            <span className="text-rose-light font-semibold text-sm
                              drop-shadow-lg">
              {items[current].label}
            </span>

            {/* Gradient overlay inferior */}
            <div className="absolute inset-x-0 bottom-0 h-1/3"
                 style={{ background: "linear-gradient(to top, rgba(26,16,32,0.7), transparent)" }} />
          </motion.div>
        </AnimatePresence>

        {/* Botones de navegación */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                     w-9 h-9 rounded-full flex items-center justify-center
                     border border-rose-DEFAULT/30 text-rose-DEFAULT
                     bg-dark/70 hover:bg-rose-dark/40 transition-all duration-300"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                     w-9 h-9 rounded-full flex items-center justify-center
                     border border-rose-DEFAULT/30 text-rose-DEFAULT
                     bg-dark/70 hover:bg-rose-dark/40 transition-all duration-300"
          aria-label="Siguiente slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dots de navegación */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`rounded-full transition-all duration-300 border-none cursor-pointer
                        ${i === current
                          ? "w-5 h-2 bg-rose-DEFAULT"
                          : "w-2 h-2 bg-rose-DEFAULT/30 hover:bg-rose-DEFAULT/60"
                        }`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}