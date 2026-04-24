// src/components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <section
      id="conoce"
      className="py-20 px-4"
      style={{ background: "linear-gradient(135deg, rgba(36,21,48,0.8), #1a1020)" }}
    >
      <div className="max-width-container">
        <SectionHeader tag="La profesional" title="Conoce a" titleAccent="Dra. Daniela" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center
                        max-w-4xl mx-auto">
          {/* ── FOTO ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden
                       border border-rose-DEFAULT/20 md:col-span-1"
            style={{ boxShadow: "0 0 40px rgba(255,107,157,0.15)" }}
          >
            {/* Placeholder — reemplaza con <Image> cuando tengas la foto */}
            <div className="w-full h-full flex items-center justify-center
                             text-8xl"
                 style={{ background: "linear-gradient(135deg, #2e1b3a, #241530)" }}>
              👩‍⚕️
            </div>
            {/* Overlay inferior */}
            <div className="absolute inset-x-0 bottom-0 h-1/3"
                 style={{ background: "linear-gradient(to top, rgba(201,98,126,0.3), transparent)" }} />

            {/* al agregar foto real, usar esto:
            <Image
              src="/images/dra-daniela.jpg"
              alt="Dra. Daniela Pacheco"
              fill className="object-cover"
            />
            */}
          </motion.div>

          {/* ── TEXTO ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-1">
              Dra. Daniela{" "}
              <span className="text-rose-DEFAULT">Pacheco</span>
            </h2>
            <p className="text-rose-DEFAULT/80 text-sm mb-4">
              Cirujano Dentista · Especialista en Estética Facial
            </p>

            {/* Tags de especialidades */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["Odontología General", "Ortodoncia", "Estética Dental", "Botox Médico"].map(tag => (
                <span key={tag}
                      className="bg-rose-dark/15 border border-rose-dark/25
                                 text-rose-DEFAULT text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-text-muted text-sm leading-relaxed mb-3">
              Egresada con distinción de la Facultad de Odontología de la Universidad Diego Portales, con más de una
              década de ejercicio clínico. Su formación de postgrado en estética facial
              la posiciona como una de las profesionales más completas de su área,
              combinando salud bucal y armonía facial en cada tratamiento.
            </p>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Ha participado en congresos internacionales y mantiene actualización
              constante en los procedimientos más modernos y seguros disponibles
              actualmente para garantizar los mejores resultados a sus pacientes.
            </p>

            {/* Cita en cursiva */}
            <blockquote
              className="border-l-2 border-rose-dark pl-4 py-2
                          rounded-r-xl"
              style={{ background: "rgba(232,160,176,0.06)" }}
            >
              <p className="italic text-rose-light text-sm leading-relaxed">
                "Mi filosofía es simple: cada paciente merece sentirse seguro,
                escuchado y completamente satisfecho con su sonrisa. Eso es lo que
                me apasiona de esta profesión."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}