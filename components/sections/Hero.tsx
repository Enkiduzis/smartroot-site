"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Shield, Activity } from "lucide-react";
import { HERO_DATA } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center bg-hero-deep text-white pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Dynamic Background Ambient Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/25 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] bg-cyan-400/15 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
        {/* Subtle geometric dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <motion.div
            className="lg:col-span-7 flex flex-col space-y-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md w-fit">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-cyan-200">
                {HERO_DATA.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              Tecnologia que Conecta{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-300">
                {HERO_DATA.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 leading-relaxed font-normal max-w-2xl">
              {HERO_DATA.description}
            </p>

            {/* Social proof bar */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-amber-300/90 bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-2.5 w-fit">
              <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
              <span>{HERO_DATA.socialProof}</span>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                asChild
                variant="cta"
                size="lg"
                className="group font-bold text-base shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-transform"
              >
                <Link href={HERO_DATA.primaryCTA.href}>
                  <span>{HERO_DATA.primaryCTA.label}</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outlineWhite"
                size="lg"
                className="font-medium text-base hover:scale-[1.02] transition-transform"
              >
                <Link href={HERO_DATA.secondaryCTA.href}>
                  {HERO_DATA.secondaryCTA.label}
                </Link>
              </Button>
            </div>

            {/* Micro badges below CTAs */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-lg">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-cyan-300 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Arquitetura Segura</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Telemetria 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">P&amp;D Integrado</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Hero Video Card */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none group">
              {/* Outer soft glow border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-primary rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-500" />

              {/* Video Player Wrapper */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-slate-950 aspect-video">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/nQmEWdItWaQ?rel=0&amp;modestbranding=1"
                  title="SmartRoot - Vídeo Institucional"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Floating Interactive Micro-Badge */}
              <div className="mt-3 bg-slate-950/85 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <p className="text-xs font-semibold text-white">Ecossistema Operacional SmartRoot</p>
                    <p className="text-[11px] text-slate-400">Software, Hardware &amp; Soluções Sob Medida</p>
                  </div>
                </div>
                <Link
                  href="#produtos"
                  className="text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-1"
                >
                  Ver Produtos
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Wave / Transition Divider */}
      <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}
