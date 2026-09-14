"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const cleanPhone = SITE_METADATA.contactPhone.replace(/\D/g, "");
  const defaultMessage = encodeURIComponent(
    "Olá, equipe SmartRoot! Gostaria de tirar dúvidas sobre as soluções de hardware, software e automação."
  );
  const whatsappUrl = `https://wa.me/55${cleanPhone}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">
      {/* Balloon popover preview */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-start justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Atendimento SmartRoot</p>
                <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online via WhatsApp
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Fechar balão"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 my-3 leading-relaxed">
            Olá! Como podemos ajudar o seu projeto hoje? Fale diretamente com nossa equipe técnica ou comercial.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Iniciar conversa
          </a>
        </div>
      )}

      {/* Main floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Conversar no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white" />
        </span>
        <MessageCircle className="h-7 w-7" />
      </button>
    </div>
  );
}
