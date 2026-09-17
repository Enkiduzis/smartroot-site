import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Cpu, Sparkles, CheckCircle2, MonitorCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Pastas Comerciais SmartRoot | Materiais de Apresentação & Vendas",
  description:
    "Pastas personalizadas para o time comercial da SmartRoot apresentar soluções digitais e engenharia técnica especializada com clareza e impacto.",
};

export default function ComercialHubPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Breadcrumb & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Recursos Oficiais para Vendas &amp; Engenharia
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Pastas Comerciais <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">Personalizadas</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Selecione a pasta adequada ao perfil do seu cliente. Nossos materiais foram projetados para conduzir reuniões comerciais de alto nível, responder objeções e demonstrar domínio técnico com máxima clareza.
          </p>
        </div>

        {/* The 2 Commercial Folders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Produtos Digitais */}
          <div className="flex flex-col justify-between rounded-3xl p-8 sm:p-10 bg-slate-900/90 border border-blue-500/30 shadow-2xl backdrop-blur-xl relative group hover:border-blue-500/60 transition-all duration-300 hover:shadow-blue-500/10 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Pasta 01 • Gestores &amp; Decisores
                </span>
                <span className="text-xs text-slate-400 font-mono">10 min de pitch</span>
              </div>

              <div className="h-14 w-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Produtos Digitais &amp; Gestão
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Pasta comercial estruturada com foco em <strong className="text-white">problema, solução e ROI</strong>. Ideal para apresentar a reitores, diretores de TI corporativa e coordenadores de processos seletivos.
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-800/80 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>SmartMoodle:</strong> Sincronização automática ERP &times; Moodle</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>Selection and Payment:</strong> Editais, baremas, recursos e folha QR</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>Software Sob Medida:</strong> Modernização, portais e sistemas SaaS</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>Roteiro Comercial:</strong> Argumentário, FAQs e quebra de objeções</span>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-6 rounded-2xl shadow-lg shadow-blue-600/30 group/btn">
              <Link href="/comercial/produtos-digitais" className="flex items-center justify-center gap-2">
                <span>Abrir Pasta de Produtos Digitais</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Card 2: Engenharia & Técnico */}
          <div className="flex flex-col justify-between rounded-3xl p-8 sm:p-10 bg-slate-900/90 border border-cyan-500/30 shadow-2xl backdrop-blur-xl relative group hover:border-cyan-500/60 transition-all duration-300 hover:shadow-cyan-500/10 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Pasta 02 • CTOs, Engenheiros &amp; Especialistas
                </span>
                <span className="text-xs text-slate-400 font-mono">Arquitetura profunda</span>
              </div>

              <div className="h-14 w-14 rounded-2xl bg-cyan-600/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                <Cpu className="w-7 h-7" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Engenharia &amp; Domínio Técnico
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Pasta técnica detalhada com diagramas de topologia, especificações de componentes e conformidade industrial. Perfeita para reuniões com <strong className="text-white">CTOs, arquitetos de nuvem e engenheiros</strong>.
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-800/80 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>SmartNonStop:</strong> Cluster 6 VPS, MariaDB Galera &amp; Cloudflare Zero-Downtime</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>SmartMeter IoT:</strong> Telemetria industrial com LoRaWAN, Modbus e MQTT</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Design de PCB:</strong> Multicamadas, revisão DFM, integridade e Gerbers</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Firmware &amp; Lotes:</strong> Bare-metal / RTOS com OTA seguro e manufatura</span>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-6 rounded-2xl shadow-lg shadow-cyan-600/30 group/btn">
              <Link href="/comercial/engenharia-tecnica" className="flex items-center justify-center gap-2">
                <span>Abrir Pasta de Engenharia Técnica</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Sales Tips Bar */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 shrink-0">
              <MonitorCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white">Pronto para Apresentação em Tela ou Exportação em PDF</p>
              <p className="text-slate-400 text-xs">
                Todas as páginas incluem modo interativo de reunião e botão para gerar PDF formatado para envio ao cliente.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button asChild variant="outline" size="sm" className="border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-200">
              <Link href="/#produtos">Ver Portfólio Geral</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
