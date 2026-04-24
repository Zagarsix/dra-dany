// src/components/ui/BackToTop.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollTop } from "@/hooks/useScrollTop";

export default function BackToTop() {
  // Usamos nuestro hook. El botón aparece cuando se scrollea > 30%
  const show = useScrollTop(0.3);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // AnimatePresence permite animar la entrada Y salida del componente
    // cuando show cambia de true a false
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 left-8 z-50 w-11 h-11 rounded-xl
                     flex items-center justify-center
                     border border-rose-dark/30
                     text-rose-DEFAULT cursor-pointer
                     animate-glowPulse"
          style={{
            background: "linear-gradient(135deg, #c9627e, #a0405e)",
            boxShadow: "0 0 25px rgba(255,107,157,0.4)",
          }}
          aria-label="Volver arriba"
        >
          <ArrowUp size={18} strokeWidth={2.5} className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}