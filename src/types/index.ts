// src/types/index.ts
// ── SERVICIO ODONTOLÓGICO / ESTÉTICO ────────────────────────
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;           // "Desde $350.000" — string para flexibilidad
  priceDetail: string;     // "por sesión", "por diente", etc.
  emoji: string;           // placeholder visual hasta tener imagen real
  imagePath: string;       // ruta relativa: "/images/services/ortodoncia.jpg"
  badge?: string;          // opcional: "Popular", "Nuevo"
  gradientFrom: string;    // color Tailwind para el fondo de la card
  gradientTo: string;
}

// ── PROMOCIÓN ───────────────────────────────────────────────
export interface Promotion {
  id: string;
  title: string;
  description: string;
  price: string;           // precio promocional
  originalPrice: string;   // precio tachado
  badge?: string;          // "-30%", "Limitado", "Nuevo"
  emoji: string;
  imagePath: string;
  ctaText: string;         // texto del botón
}

// ── ARTÍCULO / TIP ───────────────────────────────────────────
export interface Tip {
  id: string;
  category: string;        // "Higiene Dental", "Estética Facial"
  title: string;
  excerpt: string;         // resumen corto
  imagePath: string;
  emoji: string;
  date: string;            // "Abril 2025"
  readTime: string;        // "3 min de lectura"
}

// ── CARD "¿POR QUÉ ELEGIRNOS?" ──────────────────────────────
export interface WhyCard {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

// ── ÍTEM DEL CARRUSEL ────────────────────────────────────────
export interface CarouselItem {
  id: string;
  label: string;
  imagePath: string;       // "/images/carousel/slide-1.jpg"
  emoji: string;           // fallback si no hay imagen
}

// ── DATOS DEL FORMULARIO DE CONTACTO ────────────────────────
// Esto lo usamos tanto en el cliente (React Hook Form)
// como en el servidor (Route Handler)
export interface ContactFormData {
  nombre: string;
  apellido: string;
  email: string;
  whatsapp: string;
  servicio: string;
  mensaje: string;
}