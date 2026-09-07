"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Sparkles, Filter } from "lucide-react";
import { PROJECTS_DATA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", "Automação Inteligente", "Internet das Coisas", "Tecnologia Educacional", "Segurança Inteligente"];

  const filteredProjects =
    selectedCategory === "Todos"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            <FolderGit2 className="h-3.5 w-3.5" />
            Cases &amp; Soluções Entregues
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Projetos que desenvolvemos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conheça algumas das soluções customizadas desenvolvidas e implantadas pela SmartRoot para indústrias, condomínios corporativos e instituições de ensino.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-sm"
                  : "bg-surface text-slate-600 hover:bg-slate-200/80 border border-slate-200/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col justify-between overflow-hidden border border-slate-200/90 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 group">
                <div>
                  {/* Image Container */}
                  <div className="relative w-full h-64 bg-slate-900 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="hero" className="bg-slate-900/80 border-cyan-400/40 text-cyan-300">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Body */}
                  <CardContent className="p-7">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Impact Metric if available */}
                    {project.metrics && (
                      <div className="mb-5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{project.metrics}</span>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Tecnologias Utilizadas:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>

                {/* Footer link */}
                <div className="p-7 pt-0 flex justify-end">
                  <Button asChild variant="link" className="group/link text-primary font-semibold p-0">
                    <Link href="#contato">
                      <span>Conversar sobre este projeto</span>
                      <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
