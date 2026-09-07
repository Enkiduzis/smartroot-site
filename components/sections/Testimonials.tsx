"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            Validação de Mercado
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            O que nossos parceiros dizem
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Depoimentos reais de executivos e líderes técnicos que vivenciaram a entrega de valor das soluções SmartRoot.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col justify-between p-8 border border-slate-200/90 rounded-2xl bg-surface hover:bg-white hover:border-primary/40 hover:shadow-xl transition-all duration-300 relative group">
                <Quote className="h-10 w-10 text-primary/15 absolute top-6 right-6 transition-colors group-hover:text-primary/25" />

                <div>
                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-8">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-primary/20">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                    <p className="text-xs font-semibold text-primary">{item.company}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
