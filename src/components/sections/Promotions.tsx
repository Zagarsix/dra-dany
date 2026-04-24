// src/components/sections/Promotions.tsx
"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import PromoRow from "@/components/ui/PromoRow";
import { promotions } from "@/data/promotions";

interface Props {
  onScrollToContact: () => void;
}

export default function Promotions({ onScrollToContact }: Props) {
  return (
    <section
      id="promociones"
      className="py-20 px-4"
      style={{ background: "linear-gradient(135deg, rgba(36,21,48,0.5), #1a1020)" }}
    >
      <div className="max-width-container">
        <SectionHeader tag="Ofertas especiales" title="Nuestras" titleAccent="Promociones" />
        <div className="max-w-4xl mx-auto">
          {promotions.map((promo, i) => (
            <PromoRow
              key={promo.id}
              promo={promo}
              index={i}
              onCta={onScrollToContact}
            />
          ))}
        </div>
      </div>
    </section>
  );
}