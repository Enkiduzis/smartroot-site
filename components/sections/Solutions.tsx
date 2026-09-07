"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Wifi,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SOLUTIONS_DATA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SolutionItem } from "@/types";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Home,
  Wifi,
  ShieldCheck,
  GraduationCap,
};

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            Áreas de Atuação
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Soluções que conectam o presente ao futuro
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Serviços de engenharia tecnológica abrangentes projetados para resolver desafios operacionais complexos e acelerar a transformação digital da sua organização.
          </p>
        </div>

        {/* Solutions Grid (Visual hierarchy inspired by BRISA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SOLUTIONS_DATA.map((solution, index) => {
            const IconComponent = iconMap[solution.iconName] || Wifi;
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col justify-between p-6 sm:p-7 border border-slate-200/90 rounded-2xl bg-white hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div>
                    {/* Header Icon + Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className="text-[11px] font-medium text-slate-600">
                        {solution.badge}
                      </Badge>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-3">
                      {solution.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                  </div>

                  {/* Call to action "Saiba mais ->" */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedSolution(solution)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group/btn"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Details Modal */}
      {selectedSolution && (
        <Dialog open={!!selectedSolution} onOpenChange={(open) => !open && setSelectedSolution(null)}>
          <DialogHeader>
            <div className="inline-flex items-center gap-2 mb-2">
              <Badge variant="default">{selectedSolution.badge}</Badge>
            </div>
            <DialogTitle>{selectedSolution.title}</DialogTitle>
            <DialogDescription>{selectedSolution.subtitle}</DialogDescription>
          </DialogHeader>

          <div className="space-y-5 my-4">
            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedSolution.description}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Aplicações Práticas
              </h4>
              <ul className="space-y-2">
                {selectedSolution.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Diferenciais Técnicos
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedSolution.features.map((feat, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-700">
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <Button variant="outline" onClick={() => setSelectedSolution(null)}>
              Fechar
            </Button>
            <Button asChild onClick={() => setSelectedSolution(null)}>
              <Link href="#contato">
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Dialog>
      )}
    </section>
  );
}
