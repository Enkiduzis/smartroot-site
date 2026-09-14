"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CLIENTS_DATA } from "@/lib/constants";
import { Handshake } from "lucide-react";

export default function Clients() {
  return (
    <section id="clientes" className="py-20 lg:py-24 bg-surface border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            <Handshake className="h-3.5 w-3.5" />
            Parcerias Estratégicas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Quem confia na SmartRoot
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Empresas, indústrias, polos de inovação e instituições que escolheram nossa engenharia para modernizar suas operações.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-6">
          {CLIENTS_DATA.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.07 }}
              className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-primary/40 transition-all group"
            >
              <div className="relative w-28 h-12 mb-2 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={client.logo}
                  alt={`Logo do cliente parceiro ${client.name}`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-slate-800">{client.name}</span>
              <span className="text-[10px] text-slate-500">{client.segment}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
