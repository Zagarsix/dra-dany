// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Conoce a Dra. Dany", href: "#conoce" },
    { label: "Servicios", href: "#servicios" },
    { label: "Promociones", href: "#promociones" },
    { label: "Dra. Dany Tips", href: "#tips" },
    { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Detectamos scroll para cambiar la opacidad del navbar
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToSection = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
                  ${scrolled
                    ? "bg-dark/90 backdrop-blur-xl border-b border-rose/20 shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-4 h-[70px] flex items-center justify-between">
                {/* ── LOGO ── */}
                <a
                    href="#inicio"
                    onClick={e => { e.preventDefault(); scrollToSection("#inicio"); }}
                    className="flex items-center gap-2.5 z-10"
                >
                    {/* Logo PNG — cuando lo tengas, reemplaza el placeholder 
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center
                        text-xl font-bold text-white"
                        style={{
                            background: "linear-gradient(135deg, #c9627e, #d4a96a)",
                            boxShadow: "0 0 20px rgba(255,107,157,0.4)",
                        }}
                    >
                        DP
                    </div>*/}
        
          <Image src="/logo-dd.png" alt="Dra. Daniela Pacheco" width={40} height={40} />
          
                    <span className="text-lg font-bold text-text-primary hidden sm:block">
                        Dra. <span className="text-rose+"
                            style={{ textShadow: "0 0 15px rgba(255,107,157,0.5)" }}>
                            Dany
                        </span>
                    </span>
                </a>

                {/* ── LINKS DESKTOP ── */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map(link => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            className="text-text-muted hover:text-text-primary text-sm px-3 py-2
                         rounded-lg transition-all duration-300 relative group
                         bg-transparent border-none cursor-pointer whitespace-nowrap"
                        >
                            {link.label}
                            {/* Underline animado al hover */}
                            <span className="absolute bottom-1 left-3 right-3 h-px
                                bg-rose scale-x-0 group-hover:scale-x-100
                                transition-transform duration-300 rounded-full" />
                        </button>
                    ))}

                    {/* CTA Button */}
                    <motion.button
                        onClick={() => scrollToSection("#contacto")}
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        className="ml-3 px-5 py-2.5 rounded-full text-sm font-bold text-white
                       border-none cursor-pointer transition-all duration-300"
                        style={{
                            background: "linear-gradient(135deg, #c9627e, #a0405e)",
                            boxShadow: "0 0 20px rgba(255,107,157,0.3)",
                        }}
                    >
                        ¡Agenda ahora!
                    </motion.button>
                </div>

                {/* ── HAMBURGER MOBILE ── */}
                <button
                    onClick={() => setMenuOpen(v => !v)}
                    className="lg:hidden text-text-primary bg-transparent border-none
                     cursor-pointer p-1"
                    aria-label="Abrir menú"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* ── MENÚ MOBILE ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden overflow-hidden"
                        style={{ background: "rgba(26,16,32,0.97)", backdropFilter: "blur(20px)" }}
                    >
                        <div className="px-4 py-4 space-y-1 border-t border-rose/15">
                            {navLinks.map(link => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className="block w-full text-left text-text-muted hover:text-text-primary
                             text-sm px-3 py-3 rounded-lg hover:bg-rose-dark/10
                             transition-all duration-200 bg-transparent border-none cursor-pointer"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection("#contacto")}
                                className="w-full mt-2 py-3 rounded-full text-sm font-bold text-white
                           border-none cursor-pointer"
                                style={{ background: "linear-gradient(135deg, #c9627e, #a0405e)" }}
                            >
                                ¡Agenda ahora!
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}