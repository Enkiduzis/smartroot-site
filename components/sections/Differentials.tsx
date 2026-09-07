"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Boxes,
  Rocket,
  BrainCircuit,
  Maximize2,
  Handshake,
} from "lucide-react";
import { DIFFERENTIALS_DATA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Boxes,
  Rocket,
  BrainCircuit,
  Maximize2,
  Handshake,
};

export default function Differentials() {
  return (
    <section className="py-20 lg:py-28 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            Vantagens Competitivas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Por que escolher a SmartRoot?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Combinamos solidez técnica com flexibilidade de engenharia para entregar soluções que geram valor estratégico real desde o primeiro dia.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DIFFERENTIALS_DATA.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="h-full border border-slate-200/90 rounded-2xl bg-white hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-7">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
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
