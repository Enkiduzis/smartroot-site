"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (isHomePage) {
        const sections = NAVIGATION_LINKS.map((link) => link.href.replace("/#", "").replace("#", ""));
        const current = sections.find((section) => {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            return rect.top <= 120 && rect.bottom >= 120;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Se não estiver na home, o header deve ter fundo escuro sólido fixo (#0B2545)
  // pois as páginas internas podem ter fundos claros como slate-50 ou brancos
  const headerBgClass = isHomePage
    ? scrolled
      ? "bg-[#0B2545]/95 backdrop-blur-md shadow-md border-b border-white/10 py-3.5"
      : "bg-[#0B2545]/90 md:bg-transparent md:backdrop-blur-none py-5"
    : "bg-[#0B2545] shadow-md border-b border-white/10 py-3.5";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="SmartRoot Início"
          >
            <div className="relative w-44 sm:w-52 h-11 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/images/logo/smartroot-logo-white.png"
                alt="Logo SmartRoot - Tecnologia & Inovação"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Menu principal">
            {NAVIGATION_LINKS.map((link) => {
              const targetHref = link.href.startsWith("#") ? `/${link.href}` : link.href;
              const sectionId = link.href.replace("/#", "").replace("#", "");
              const isActive = isHomePage && activeSection === sectionId;
              
              return (
                <Link
                  key={link.label}
                  href={targetHref}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white font-semibold bg-white/10"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              asChild
              variant="cta"
              size="default"
              className="group shadow-sm hover:shadow-md transition-all font-semibold"
            >
              <Link href="/#contato">
                <span>Fale com um Especialista</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              asChild
              variant="cta"
              size="sm"
              className="sm:hidden text-xs font-semibold px-2.5 h-8"
            >
              <Link href="/#contato">
                <PhoneCall className="h-3.5 w-3.5 mr-1" />
                Contato
              </Link>
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-white hover:bg-white/10"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu de navegação"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Overlay Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0B2545] border-b border-white/10 shadow-2xl p-6 transition-all animate-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-2" aria-label="Menu móvel">
            {NAVIGATION_LINKS.map((link) => {
              const targetHref = link.href.startsWith("#") ? `/${link.href}` : link.href;
              return (
                <Link
                  key={link.label}
                  href={targetHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/10 mt-2">
              <Button
                asChild
                variant="cta"
                className="w-full justify-center h-12 text-base font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/#contato">
                  Fale com um Especialista
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
