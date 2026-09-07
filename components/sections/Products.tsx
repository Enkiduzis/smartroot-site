"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { PRODUCTS_DATA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ProductItem } from "@/types";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <section id="produtos" className="py-20 lg:py-28 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            Portfólio Oficial • Da Ideia ao Produto
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Produtos &amp; Soluções SmartRoot
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Entregamos soluções completas — do código ao circuito — com foco em desempenho, escalabilidade, alta disponibilidade e qualidade de fabricação.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col justify-between overflow-hidden border border-slate-200/90 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 group">
                <div>
                  {/* Product Image Box */}
                  <div className="relative w-full h-52 bg-slate-900 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 right-3.5">
                      <Badge
                        variant={
                          product.status === "Em Produção"
                            ? "default"
                            : product.status === "Disponível"
                            ? "success"
                            : "warning"
                        }
                        className="shadow-sm font-semibold text-xs"
                      >
                        {product.status}
                      </Badge>
                    </div>

                    {product.logo && (
                      <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-md border border-slate-200/80 flex items-center">
                        <div className="relative h-6 w-28 sm:w-32">
                          <Image
                            src={product.logo}
                            alt={`Logo ${product.name}`}
                            fill
                            className="object-contain object-left"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <CardContent className="p-6">
                    {product.logo && (
                      <div className="mb-3.5 bg-slate-50 border border-slate-100 rounded-xl p-2.5 inline-flex items-center shadow-xs">
                        <div className="relative h-8 w-40 sm:w-48">
                          <Image
                            src={product.logo}
                            alt={`Logomarca oficial ${product.name}`}
                            fill
                            className="object-contain object-left"
                          />
                        </div>
                      </div>
                    )}
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Principais Funcionalidades:
                      </p>
                      {product.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                          <div className="h-4 w-4 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </div>
                          <span className="font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* Bottom CTA Button */}
                <div className="p-6 pt-0">
                  <Button
                    onClick={() => setSelectedProduct(product)}
                    variant="outline"
                    className="w-full justify-center group/btn hover:bg-primary hover:text-white hover:border-primary font-semibold transition-all"
                  >
                    <span>Conheça o produto</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
          <DialogHeader>
            <div className="inline-flex items-center gap-2 mb-2">
              <Badge variant="default">{selectedProduct.category}</Badge>
              <Badge variant="outline">{selectedProduct.status}</Badge>
            </div>
            {selectedProduct.logo && (
              <div className="relative h-10 w-48 mb-2 bg-slate-50 border border-slate-100 rounded-xl p-2 inline-flex items-center">
                <Image
                  src={selectedProduct.logo}
                  alt={`Logomarca oficial ${selectedProduct.name}`}
                  fill
                  className="object-contain object-left"
                />
              </div>
            )}
            <DialogTitle className="text-2xl">{selectedProduct.name}</DialogTitle>
            <DialogDescription>Especificações Técnicas e Integração</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 my-4">
            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedProduct.description}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Recursos Integrados
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedProduct.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2 rounded-lg">
                    <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <Button variant="outline" onClick={() => setSelectedProduct(null)}>
              Fechar
            </Button>
            <Button asChild onClick={() => setSelectedProduct(null)}>
              <Link href="#contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Dialog>
      )}
    </section>
  );
}
