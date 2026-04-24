// src/data/services.ts
import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "ortodoncia",
    title: "Ortodoncia Invisible",
    description:
      "Alineadores transparentes de alta tecnología para corrección dental discreta, cómoda y sin brackets metálicos.",
    price: "Desde $350.000",
    priceDetail: "mensual",
    emoji: "🦷",
    imagePath: "/images/services/ortodoncia.jpg",
    badge: "Popular",
    gradientFrom: "from-dark-3",
    gradientTo: "to-dark-2",
  },
  {
    id: "blanqueamiento",
    title: "Blanqueamiento Dental",
    description:
      "Tratamiento profesional con luz LED que ilumina tu sonrisa hasta 8 tonos en una sola sesión sin dañar el esmalte.",
    price: "$120.000",
    priceDetail: "por sesión",
    emoji: "✨",
    imagePath: "/images/services/blanqueamiento.jpg",
    gradientFrom: "from-[#2a1040]",
    gradientTo: "to-[#1a0e35]",
  },
  {
    id: "carillas",
    title: "Carillas de Porcelana",
    description:
      "Finas láminas cerámicas de alta estética que transforman forma, color y tamaño de tus dientes de forma permanente.",
    price: "Desde $180.000",
    priceDetail: "por diente",
    emoji: "💎",
    imagePath: "/images/services/carillas.jpg",
    gradientFrom: "from-[#1a0e40]",
    gradientTo: "to-[#2a1538]",
  },
  {
    id: "rellenos",
    title: "Rellenos Faciales",
    description:
      "Ácido hialurónico para dar volumen, hidratar y rejuvenecer tu rostro de forma natural con resultados inmediatos.",
    price: "Desde $250.000",
    priceDetail: "por zona",
    emoji: "💉",
    imagePath: "/images/services/rellenos.jpg",
    badge: "Nuevo",
    gradientFrom: "from-[#2a0e1e]",
    gradientTo: "to-[#3d1528]",
  },
  {
    id: "botox",
    title: "Toxina Botulínica",
    description:
      "Tratamiento seguro y preciso para suavizar líneas de expresión y lograr un aspecto fresco, descansado y natural.",
    price: "Desde $200.000",
    priceDetail: "por área",
    emoji: "💆",
    imagePath: "/images/services/botox.jpg",
    gradientFrom: "from-[#0e1e2a]",
    gradientTo: "to-[#152835]",
  },
  {
    id: "consulta",
    title: "Consulta General",
    description:
      "Diagnóstico integral con radiografías digitales incluidas y plan de tratamiento personalizado sin costo adicional.",
    price: "$35.000",
    priceDetail: "incluye Rx digital",
    emoji: "🏥",
    imagePath: "/images/services/consulta.jpg",
    gradientFrom: "from-[#0e2a1a]",
    gradientTo: "to-[#15351e]",
  },
];