"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Cpu,
  Layers,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { ABOUT_DATA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Cpu,
  Layers,
  TrendingUp,
};

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            Identidade Institucional
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {ABOUT_DATA.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            {ABOUT_DATA.subtitle}
          </p>
        </div>

        {/* Two Column Presentation: Narrative + Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Detailed Mission & Vision Narrative */}
          <motion.div
            className="lg:col-span-6 space-y-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              {ABOUT_DATA.descriptionParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Button asChild variant="default" size="default" className="font-semibold">
                <Link href="#historia">
                  <span>Conheça Nossa Trajetória</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="default">
                <Link href="#contato">Fale com a Diretoria</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Key Value Propositions & Metrics */}
          <motion.div
            className="lg:col-span-6 bg-surface p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Nossos Compromissos Fundamentais
            </h3>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">
                  01
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900">Engenharia Multidisciplinar</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Eliminamos a distância entre código e circuito, projetando firmware, hardware e plataformas web em simbiose.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-cyan-500/15 text-cyan-700 flex items-center justify-center shrink-0 font-bold">
                  02
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900">Segurança &amp; Confiabilidade</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Criptografia em nível de dispositivo e redundância para operações críticas sem interrupções.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                  03
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900">Foco em Resultados Tangíveis</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Métricas claras de redução de custos, automação de tarefas manuais e elevação dos índices de segurança.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Differentials Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_DATA.differentials.map((diff, index) => {
            const IconComponent = iconMap[diff.iconName] || Lightbulb;
            return (
              <motion.div
                key={diff.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border-slate-200/80 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {diff.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
