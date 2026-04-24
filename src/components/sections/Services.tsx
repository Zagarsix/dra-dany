// src/components/sections/Services.tsx
"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-4 bg-dark">
      <div className="max-width-container">
        <SectionHeader tag="Nuestros tratamientos" title="Servicios" titleAccent="Especializados" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}