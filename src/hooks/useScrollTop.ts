// src/hooks/useScrollTop.ts
"use client";

import { useState, useEffect } from "react";

export function useScrollTop(threshold = 0.3): boolean {
  // threshold: el porcentaje de scroll (0.3 = 30%) a partir del cual
  // se muestra el botón.
  
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculamos qué porcentaje de la página se ha scrolleado
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const percentage = scrolled / total;

      setShowButton(percentage > threshold);
    };

    // Agregamos el listener y lo removemos al desmontar
    // para evitar memory leaks
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return showButton;
}