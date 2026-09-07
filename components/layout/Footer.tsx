"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
} from "lucide-react";
import {
  SITE_METADATA,
  NAVIGATION_LINKS,
  SOCIAL_LINKS,
} from "@/lib/constants";

const socialIcons: Record<string, React.ElementType> = {
  Linkedin,
  Instagram,
  Youtube,
  Github,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSolutions = [
    { label: "SmartMoodle (Integração ERP)", href: "#produtos" },
    { label: "Selecion and Payment (Plugin Moodle)", href: "#produtos" },
    { label: "SmartNonStop (Alta Disponibilidade)", href: "#produtos" },
    { label: "Design de Circuitos PCB & Hardware", href: "#produtos" },
    { label: "Firmware Embarcado & IoT", href: "#produtos" },
    { label: "Plataformas SaaS & Software", href: "#produtos" },
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800">
          {/* Column 1: Brand & Overview (Col 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="#hero" className="inline-block">
              <div className="relative w-48 sm:w-56 h-12">
                <Image
                  src="/images/logo/smartroot-logo-white.png"
                  alt="Logo SmartRoot"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Tecnologia, inovação e soluções inteligentes para conectar pessoas, ambientes e ideias com engenharia de alto padrão.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((item) => {
                const IconComponent = socialIcons[item.iconName] || Linkedin;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-200 flex items-center justify-center"
                    aria-label={`Acessar nosso perfil no ${item.name}`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Soluções (Col 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Soluções
            </h4>
            <ul className="space-y-2.5">
              {footerSolutions.map((sol, idx) => (
                <li key={idx}>
                  <Link
                    href={sol.href}
                    className="text-sm text-slate-400 hover:text-cyan-300 hover:translate-x-1 transition-all inline-block"
                  >
                    {sol.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contato Rápido (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contato Institucional
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <a href={`mailto:${SITE_METADATA.contactEmail}`} className="hover:text-white transition-colors">
                  {SITE_METADATA.contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={`tel:${SITE_METADATA.contactPhone.replace(/\D/g, "")}`} className="hover:text-white transition-colors">
                  {SITE_METADATA.contactPhone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SITE_METADATA.contactAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {SITE_METADATA.contactAddress}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; 2026 SmartRoot. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#hero" className="hover:text-slate-400 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#hero" className="hover:text-slate-400 transition-colors">
              Termos de Uso
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors focus:outline-none"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
