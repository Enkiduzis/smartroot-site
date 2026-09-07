"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Code2,
  Network,
  Glasses,
  CheckCircle,
  Layers,
  ArrowRight,
} from "lucide-react";
import { TECHNOLOGIES_DATA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Code2,
  Network,
  Glasses,
};

export default function Technology() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="tecnologia" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            Competências Técnicas &amp; Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tecnologia por trás das nossas soluções
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Uma abordagem holística que integra engenharia eletrônica, arquitetura de software em nuvem e interfaces imersivas.
          </p>
        </div>

        {/* Tab selection for quick inspection */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {TECHNOLOGIES_DATA.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Layers;
            const isSelected = activeTab === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? "bg-primary text-white shadow-md shadow-primary/25 scale-[1.02]"
                    : "bg-surface text-slate-700 hover:bg-slate-200/70 border border-slate-200/80"
                }`}
              >
                <Icon className={`h-4 w-4 ${isSelected ? "text-white" : "text-primary"}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Technology Focus Highlight */}
        <div className="bg-gradient-to-br from-slate-900 via-[#0B2545] to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold">
                Domínio em Destaque
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {TECHNOLOGIES_DATA[activeTab].title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {TECHNOLOGIES_DATA[activeTab].description}
              </p>
              <div className="pt-2">
                <Button asChild variant="cta" size="default" className="font-semibold">
                  <Link href="#contato">
                    Consultar Viabilidade Técnica
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {TECHNOLOGIES_DATA[activeTab].skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5 hover:bg-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="h-7 w-7 rounded-lg bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-100">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Cards Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNOLOGIES_DATA.map((tech, index) => {
            const IconComponent = iconMap[tech.iconName] || Layers;
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  onClick={() => setActiveTab(index)}
                  className={`h-full cursor-pointer transition-all duration-300 ${
                    activeTab === index
                      ? "border-primary ring-2 ring-primary/20 shadow-md"
                      : "border-slate-200/80 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{tech.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{tech.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tech.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                          {skill}
                        </span>
                      ))}
                      {tech.skills.length > 3 && (
                        <span className="text-[11px] font-medium text-primary px-1.5 py-0.5">
                          +{tech.skills.length - 3} mais
                        </span>
                      )}
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
