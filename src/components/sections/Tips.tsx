// src/components/sections/Tips.tsx
"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import TipCard from "@/components/ui/TipCard";
import { tips } from "@/data/tips";

export default function Tips() {
  return (
    <section id="tips" className="py-20 px-4 bg-dark">
      <div className="max-width-container">
        <SectionHeader tag="Contenido educativo" title="Dra. Daniela" titleAccent="Tips" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <TipCard key={tip.id} tip={tip} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}