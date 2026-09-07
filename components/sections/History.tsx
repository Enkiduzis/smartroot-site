"use client";

import React from "react";
import { motion } from "framer-motion";
import { HISTORY_DATA } from "@/lib/constants";
import { Calendar, Check, Milestone, Compass } from "lucide-react";

export default function History() {
  return (
    <section id="historia" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            <Milestone className="h-3.5 w-3.5" />
            Trajetória de Inovação
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nossa História
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Uma jornada contínua de evolução tecnológica, integrando novas fronteiras de hardware, software e inteligência artificial.
          </p>
        </div>

        {/* Modern Interactive Timeline */}
        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute top-8 bottom-8 left-1/2 w-0.5 bg-gradient-to-b from-primary via-cyan-500 to-primary/30 -translate-x-1/2" />

          <div className="space-y-12">
            {HISTORY_DATA.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={milestone.period}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-1/2">
                    <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                          <Calendar className="h-3.5 w-3.5" />
                          {milestone.period}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                          {milestone.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                        {milestone.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                        {milestone.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 pt-3 border-t border-slate-100">
                        {milestone.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                            <div className="h-4 w-4 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
                              <Check className="h-2.5 w-2.5 stroke-[3]" />
                            </div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-2xl bg-white border-2 border-primary text-primary shadow-md z-10 shrink-0">
                    <Compass className="h-5 w-5 animate-pulse" />
                  </div>

                  {/* Empty side for balanced grid */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
