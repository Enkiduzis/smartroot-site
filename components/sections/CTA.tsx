"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Highlighted Banner with Gradient & Circuit Elements */}
        <div className="relative rounded-3xl bg-hero-deep p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl border border-white/10">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-cyan-200">
                Pronto para Elevar seu Nível Tecnológico?
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Tem uma ideia?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-300">
                Vamos transformar em tecnologia.
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 leading-relaxed font-normal">
              Nossa equipe multidisciplinar pode ajudar você a desenvolver soluções digitais, sistemas inteligentes, produtos conectados e experiências tecnológicas inovadoras de alta precisão.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                variant="cta"
                size="lg"
                className="w-full sm:w-auto font-bold text-base shadow-xl shadow-amber-500/25 hover:scale-105 transition-all"
              >
                <Link href="#contato">
                  <span>Fale com um Especialista</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outlineWhite"
                size="lg"
                className="w-full sm:w-auto font-semibold text-base"
              >
                <Link href="#solucoes">
                  Ver Todas as Soluções
                </Link>
              </Button>
            </div>

            {/* Micro badges below CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-cyan-300" />
                Prototipagem Rápida
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-emerald-400" />
                Acordo de Confidencialidade (NDA)
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu className="h-4 w-4 text-amber-400" />
                Engenharia de Ponta a Ponta
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
