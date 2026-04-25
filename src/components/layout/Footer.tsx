// src/components/layout/Footer.tsx
"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "Inicio",              href: "#inicio" },
  { label: "Conoce a Dra. Daniela", href: "#conoce" },
  { label: "Servicios",           href: "#servicios" },
  { label: "Promociones",         href: "#promociones" },
  { label: "Dra. Dany Tips",      href: "#tips" },
  { label: "Contacto",            href: "#contacto" },
];

const interestLinks = [
  "Política de privacidad",
  "Términos de servicio",
  "Preguntas frecuentes",
];

// Iconos SVG inline para redes sociales
// Usamos SVG propio para tener el gradiente real de Instagram
const SocialIcon = ({ type }: { type: "ig" | "li" | "wa" | "gm" }) => {
  const icons = {
    ig: (
      // Instagram — ícono SVG simplificado
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    li: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    wa: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
    gm: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    ),
  };

  return icons[type];
};

const socialLinks = [
  { type: "ig" as const,  label: "Instagram", href: "https://instagram.com/",  hoverStyle: { background: "linear-gradient(135deg, #405DE6, #C13584, #FD1D1D, #FCAF45)", color: "white" } },
  { type: "li" as const,  label: "LinkedIn",  href: "https://linkedin.com/",   hoverStyle: { background: "#0A66C2", color: "white" } },
  { type: "wa" as const,  label: "WhatsApp",  href: "https://wa.me/56912345678", hoverStyle: { background: "#25D366", color: "white" } },
  { type: "gm" as const,  label: "Gmail",     href: "mailto:dany.pacheco.a@gmail.com", hoverStyle: { background: "#EA4335", color: "white" } },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="border-t border-rose-DEFAULT/10 pt-12 pb-6 px-4"
      style={{ background: "rgba(15, 8, 20, 0.97)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* ── GRID PRINCIPAL ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Columna 1: Marca */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center
                               text-sm font-bold text-white"
                   style={{ background: "linear-gradient(135deg, #c9627e, #d4a96a)" }}>
                DP
              </div>
              <span className="font-bold text-text-primary">
                Dra. <span className="text-rose-DEFAULT">Daniela</span>
              </span>
            </div>
            <p className="text-text-muted text-xs leading-relaxed mb-4">
              Odontología y Estética Facial de vanguardia en Santiago de Chile.
              Tu bienestar y confianza son nuestra prioridad.
            </p>
            <p className="text-text-muted text-xs mb-1">
              📍 Av. Nueva Providencia 1881, Of. X<br />
              Providencia, Santiago
            </p>
            <p className="text-text-muted text-xs">
              📞 +56 9 XXXX XXXX
            </p>

            {/* Redes sociales */}
            <div className="flex gap-2 mt-4">
              {socialLinks.map(({ type, label, href, hoverStyle }) => (
                <motion.a
                  key={type}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, ...hoverStyle }}
                  transition={{ duration: 0.2 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center
                             text-[#888] border border-white/10
                             bg-white/4 transition-colors duration-300"
                >
                  <SocialIcon type={type} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-muted hover:text-rose-DEFAULT text-xs
                               transition-colors duration-200 bg-transparent
                               border-none cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              {["Ortodoncia Invisible", "Blanqueamiento", "Carillas Dentales",
                "Rellenos Faciales", "Toxina Botulínica", "Consulta General"].map(s => (
                <li key={s}>
                  <button
                    onClick={() => scrollToSection("#servicios")}
                    className="text-text-muted hover:text-rose-DEFAULT text-xs
                               transition-colors duration-200 bg-transparent
                               border-none cursor-pointer text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Información */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Información
            </h4>
            <ul className="space-y-2">
              {interestLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-text-muted hover:text-rose-DEFAULT text-xs
                                          transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA mini */}
            <div className="mt-6 p-4 rounded-xl border border-rose-DEFAULT/15"
                 style={{ background: "rgba(201,98,126,0.08)" }}>
              <p className="text-xs text-text-muted mb-2">
                ¿Lista para transformar tu sonrisa?
              </p>
              <button
                onClick={() => scrollToSection("#contacto")}
                className="w-full py-2 rounded-full text-xs font-semibold text-white
                           border-none cursor-pointer transition-all duration-300
                           hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #c9627e, #a0405e)" }}
              >
                Agenda tu cita →
              </button>
            </div>
          </div>
        </div>

        {/* ── LÍNEA + CRÉDITOS ── */}
        <div className="glow-line mb-4" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-text-muted">
            © 2025 Dra. Daniela Pacheco. Todos los derechos reservados.
          </p>
          <p className="text-xs text-text-muted">
            Diseñado y desarrollado por{" "}
            <a href="https://github.com/Zagarsix"
               target="_blank" rel="noopener noreferrer"
               className="text-rose-DEFAULT hover:underline">
              Zagarsix
            </a>{" "}
            · Santiago, Chile
          </p>
        </div>
      </div>
    </footer>
  );
}