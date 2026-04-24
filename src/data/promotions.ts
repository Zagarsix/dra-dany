// src/data/promotions.ts
import { Promotion } from "@/types";

export const promotions: Promotion[] = [
  {
    id: "pack-sonrisa",
    title: "Pack Sonrisa Completa",
    description:
      "Blanqueamiento profesional + limpieza ultrasónica + revisión general. Todo lo que necesitas para una sonrisa radiante en una sola visita. Resultados visibles desde el primer día.",
    price: "$189.000",
    originalPrice: "$270.000",
    badge: "-30%",
    emoji: "✨🦷",
    imagePath: "/images/promos/pack-sonrisa.jpg",
    ctaText: "Quiero esta promo",
  },
  {
    id: "combo-estetica",
    title: "Combo Estética Facial",
    description:
      "Botox + relleno de labios en una sola sesión. Rejuvenece tu rostro con resultados naturales y duraderos hasta 12 meses. Consulta de diagnóstico gratuita incluida.",
    price: "$380.000",
    originalPrice: "$480.000",
    badge: "Nuevo",
    emoji: "💉✨",
    imagePath: "/images/promos/combo-estetica.jpg",
    ctaText: "Reservar ahora",
  },
  {
    id: "carillas-express",
    title: "Carillas Express",
    description:
      "2 carillas de composite con diseño digital de sonrisa gratuito. Transforma tu sonrisa en una sola cita. Solo 10 cupos disponibles este mes.",
    price: "$220.000",
    originalPrice: "$320.000",
    badge: "Limitado",
    emoji: "💎🏆",
    imagePath: "/images/promos/carillas-express.jpg",
    ctaText: "¡Lo quiero!",
  },
  {
    id: "primera-vez",
    title: "Primera Consulta Gratis",
    description:
      "Si es tu primera vez con la Dra. Daniela, la consulta de diagnóstico no tiene costo. Incluye radiografía digital y plan de tratamiento personalizado.",
    price: "¡GRATIS!",
    originalPrice: "$35.000",
    badge: "Bienvenida",
    emoji: "🎁🦷",
    imagePath: "/images/promos/primera-vez.jpg",
    ctaText: "Agendar ahora",
  },
  {
    id: "pack-familiar",
    title: "Pack Familiar",
    description:
      "Trae a tu familia y obtén un 20% de descuento en consultas generales para todos los integrantes. Válido para grupos de 3 personas o más.",
    price: "20% OFF",
    originalPrice: "Precio normal",
    badge: "Familia",
    emoji: "👨‍👩‍👧‍👦",
    imagePath: "/images/promos/pack-familiar.jpg",
    ctaText: "Consultar disponibilidad",
  },
  {
    id: "mantenimiento",
    title: "Plan Mantenimiento Anual",
    description:
      "2 controles anuales + 2 limpiezas profesionales + revisiones con descuento incluidas. El mejor plan para cuidar tu inversión dental todo el año.",
    price: "$180.000",
    originalPrice: "$260.000",
    badge: "-31%",
    emoji: "📅🦷",
    imagePath: "/images/promos/mantenimiento.jpg",
    ctaText: "Suscribirme",
  },
];