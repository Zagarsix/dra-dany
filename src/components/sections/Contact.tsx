// src/components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/ui/ContactForm";

const contactItems = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Nueva Providencia 1881, Providencia, Santiago",
    sub: "Metro Pedro de Valdivia, salida Sur",
  },
  {
    icon: Phone,
    label: "WhatsApp / Teléfono",
    value: "+56 9 XXXX XXXX",
    sub: null,
  },
  {
    icon: Mail,
    label: "Email",
    value: "dany.pacheco.a@gmail.com",
    sub: null,
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a Viernes: 9:00 – 19:00 hrs",
    sub: "Sábados con previa coordinación",
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 px-4"
      style={{ background: "linear-gradient(135deg, rgba(36,21,48,0.5), #1a1020)" }}
    >
      <div className="max-width-container">
        <SectionHeader tag="Escríbenos" title="¿Lista para tu" titleAccent="nueva sonrisa?" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* ── INFO + MAPA ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Información de contacto
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Completa el formulario y te contactaremos a la brevedad.
              También puedes escribirnos por WhatsApp o Instagram.
            </p>

            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center
                                   flex-shrink-0 bg-rose-dark/15 border border-rose-dark/20">
                    <Icon size={16} className="text-rose-DEFAULT" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">{label}</p>
                    <p className="text-sm text-text-primary font-medium">{value}</p>
                    {sub && <p className="text-xs text-text-muted">{sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* ── MAPA GOOGLE MAPS (iFrame estático) ── */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-rose-DEFAULT/15"
                 style={{ height: "220px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8!2d-70.6097!3d-33.4274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6b8b6f!2sAv.+Nueva+Providencia+1881%2C+Providencia%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses!2scl!4v1699999999999"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(200deg)" }}
                // filter: invert + hue-rotate = mapa oscuro que combina con nuestra paleta
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Dra. Daniela Pacheco"
              />
            </div>
            <p className="text-xs text-text-muted mt-2 text-center">
              📍 Metro Pedro de Valdivia, salida Sur
            </p>
          </motion.div>

          {/* ── FORMULARIO ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}