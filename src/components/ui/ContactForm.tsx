// src/components/ui/ContactForm.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { ContactFormData } from "@/types";
import { services } from "@/data/services";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "", apellido: "", email: "",
    whatsapp: "", servicio: "", mensaje: "",
  });

  // Handler genérico para todos los inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error en el servidor");

      setStatus("success");
      // Limpiamos el formulario tras éxito
      setFormData({
        nombre: "", apellido: "", email: "",
        whatsapp: "", servicio: "", mensaje: "",
      });
    } catch {
      setStatus("error");
    }
  };

  // Clases reutilizables para inputs
  const inputClass = `w-full px-4 py-3 rounded-xl text-sm text-text-primary
    placeholder:text-text-muted/50 outline-none transition-all duration-300
    bg-dark-2/60 border border-rose-DEFAULT/15
    focus:border-rose-DEFAULT focus:shadow-[0_0_15px_rgba(255,107,157,0.1)]`;

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-8 text-center"
      >
        <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-text-muted text-sm">
          La Dra. Daniela recibirá tu solicitud por email y WhatsApp.
          Te contactaremos a la brevedad.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-rose-DEFAULT text-sm hover:underline"
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    );
  }

  return (
    <div className="glass rounded-2xl p-7 border border-rose-DEFAULT/15">
      <h3 className="text-lg font-semibold text-text-primary mb-6">
        Agenda tu cita
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre + Apellido */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-text-muted mb-1.5">
              Nombre <span className="text-rose-DEFAULT">*</span>
            </label>
            <input
              type="text" name="nombre" value={formData.nombre}
              onChange={handleChange} required placeholder="Tu nombre"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs text-text-muted mb-1.5">
              Apellido
            </label>
            <input
              type="text" name="apellido" value={formData.apellido}
              onChange={handleChange} placeholder="Tu apellido"
              className={inputClass}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs text-text-muted mb-1.5">
            Email <span className="text-rose-DEFAULT">*</span>
          </label>
          <input
            type="email" name="email" value={formData.email}
            onChange={handleChange} required placeholder="tu@email.com"
            className={inputClass}
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label className="block text-xs text-text-muted mb-1.5">
            WhatsApp
          </label>
          <input
            type="tel" name="whatsapp" value={formData.whatsapp}
            onChange={handleChange} placeholder="+56 9 XXXX XXXX"
            className={inputClass}
          />
        </div>

        {/* Servicio */}
        <div>
          <label className="block text-xs text-text-muted mb-1.5">
            Servicio de interés <span className="text-rose-DEFAULT">*</span>
          </label>
          <select
            name="servicio" value={formData.servicio}
            onChange={handleChange} required
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>Selecciona un servicio...</option>
            {services.map(s => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
            <option value="Otro">Otro / Consulta general</option>
          </select>
        </div>

        {/* Mensaje */}
        <div>
          <label className="block text-xs text-text-muted mb-1.5">
            Mensaje <span className="text-rose-DEFAULT">*</span>
          </label>
          <textarea
            name="mensaje" value={formData.mensaje}
            onChange={handleChange} required rows={4}
            placeholder="Cuéntanos en qué podemos ayudarte..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Error */}
        {status === "error" && (
          <div className="flex items-center gap-2 text-red-400 text-sm">
            <AlertCircle size={16} />
            <span>Error al enviar. Por favor, intenta nuevamente.</span>
          </div>
        )}

        {/* Botón submit */}
        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3.5 rounded-full font-semibold text-sm text-white
                     flex items-center justify-center gap-2
                     disabled:opacity-60 disabled:cursor-not-allowed
                     transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #c9627e, #a0405e)",
            boxShadow: "0 0 25px rgba(255,107,157,0.3)",
          }}
        >
          {status === "loading" ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white 
                               rounded-full animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send size={16} />
              Enviar mensaje
            </>
          )}
        </motion.button>

        <p className="text-xs text-text-muted/60 text-center">
          Recibirás confirmación por email · Respondemos en menos de 24 hrs
        </p>
      </form>
    </div>
  );
}