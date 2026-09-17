"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Printer,
  Share2,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  Zap,
  Server,
  FileCheck,
  Layers,
  ChevronRight,
  Database,
  Lock,
  Workflow,
  Sparkles,
  Award,
  Users,
  Clock,
  Coins
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PastaProdutosDigitais() {
  const [activeTab, setActiveTab] = useState<"smartmoodle" | "selection" | "saas" | "faq">("smartmoodle");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20 print:pt-4 print:pb-0 print:bg-white">
      {/* Top Action Bar (hidden on print) */}
      <div className="bg-slate-900 text-white py-3.5 px-4 sm:px-8 border-b border-slate-800 sticky top-[72px] z-40 backdrop-blur-md bg-slate-900/95 shadow-md no-print">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
              <Link href="/comercial" className="flex items-center gap-1.5">
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar ao Hub</span>
              </Link>
            </Button>
            <div className="h-4 w-px bg-slate-700 hidden sm:block" />
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-800/60">
              Pasta Comercial 01 • Produtos Digitais
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              onClick={handlePrint}
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary-light text-white font-semibold flex items-center gap-2 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Salvar PDF</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Cover / Header Banner */}
        <div className="bg-hero-deep text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden mb-10 border border-slate-800/80">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              Material de Apresentação Comercial
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Soluções Digitais &amp; Gestão Acadêmica Inteligente
            </h1>
            <p className="mt-4 text-slate-200 text-base sm:text-lg leading-relaxed">
              Elimine o retrabalho operacional, reduza custos de suporte e garanta conformidade com a LGPD através de ferramentas de sincronização automática e gestão de editais integradas ao Moodle.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/15">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-sky-300">+90%</p>
                <p className="text-xs text-slate-300 mt-1">Redução em tarefas manuais</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-sky-300">100%</p>
                <p className="text-xs text-slate-300 mt-1">Conformidade e auditoria LGPD</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-sky-300">Multi-DB</p>
                <p className="text-xs text-slate-300 mt-1">Oracle, Postgres, MySQL, SQL Server</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-sky-300">Perpétuo</p>
                <p className="text-xs text-slate-300 mt-1">Licenciamento flexível e definitivo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation (Interactive for Pitch Deck) */}
        <div className="flex border-b border-slate-200 mb-10 overflow-x-auto no-print">
          <button
            onClick={() => setActiveTab("smartmoodle")}
            className={`pb-4 px-6 text-sm sm:text-base font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === "smartmoodle"
                ? "border-primary text-primary"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <span>1. SmartMoodle (Integração ERP)</span>
          </button>
          <button
            onClick={() => setActiveTab("selection")}
            className={`pb-4 px-6 text-sm sm:text-base font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === "selection"
                ? "border-primary text-primary"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <span>2. Selection and Payment</span>
          </button>
          <button
            onClick={() => setActiveTab("saas")}
            className={`pb-4 px-6 text-sm sm:text-base font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === "saas"
                ? "border-primary text-primary"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <span>3. Fábrica de Software Sob Medida</span>
          </button>
          <button
            onClick={() => setActiveTab("faq")}
            className={`pb-4 px-6 text-sm sm:text-base font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === "faq"
                ? "border-primary text-primary"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span>Guia Comercial &amp; Objeções (FAQ)</span>
          </button>
        </div>

        {/* SECTION 1: SMARTMOODLE */}
        <div className={activeTab === "smartmoodle" ? "block mb-16" : "hidden print:block mb-16"}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100 mb-8">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-48 sm:w-56">
                  <Image
                    src="/images/products/logos/logo-smartmoodle.png"
                    alt="Logo SmartMoodle"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <Badge variant="outline" className="text-blue-700 bg-blue-50 border-blue-200">
                  Integração Acadêmica Oficial
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Tempo médio de implantação: <strong>3 a 7 dias úteis</strong></span>
              </div>
            </div>

            {/* Pitch Structure: O Problema x A Solução */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50/70 border border-red-200/80 rounded-2xl p-6">
                <div className="flex items-center gap-2.5 text-red-700 font-bold mb-3">
                  <AlertCircle className="w-5 h-5" />
                  <span>O Cenário de Dor do Cliente (O Problema)</span>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Secretarias e equipes de TI perdem semanas criando turmas, matrículas e usuários manualmente no Moodle.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Alunos matriculados no ERP que não conseguem acessar as aulas geram centenas de tickets de suporte nos primeiros dias.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Inconsistências críticas entre cancelamento de matrículas e notas lançadas em duplicidade.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6">
                <div className="flex items-center gap-2.5 text-emerald-800 font-bold mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>A Resposta SmartMoodle (A Solução)</span>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Sincronização 100% automática, agendada e transparente via Web Services oficiais do Moodle.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Criação instantânea de categorias, cursos, turmas, professores, tutores e matrículas de alunos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Retorno bidirecional de notas e frequências diretamente para o banco de dados acadêmico da instituição.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How it works 3-Step visual */}
            <h3 className="text-xl font-bold text-slate-900 mb-6">Como o SmartMoodle opera na prática:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative">
                <div className="h-8 w-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4 text-sm">
                  1
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Conexão Segura ao ERP</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Conecta-se ao banco de dados acadêmico (TOTVS RM, Sophia, Mentor, bancos legados ou customizados) com credenciais exclusivas de leitura/escrita.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative">
                <div className="h-8 w-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4 text-sm">
                  2
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Processamento Inteligente</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Valida regras de negócio, semestres vigentes, vinculação professor-disciplina e gera cargas em lotes sem sobrecarregar o servidor.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative">
                <div className="h-8 w-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4 text-sm">
                  3
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Injeção via Moodle API</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Utiliza os Core Web Services do Moodle, mantendo integridade referencial nativa, logs de auditoria e disparo de notificações aos alunos.
                </p>
              </div>
            </div>

            {/* Commercial Highlights Table */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
              <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-sky-400" />
                Diferenciais Comerciais para Apresentar ao Cliente:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                <div>
                  <p className="font-semibold text-sky-300">Licença Perpétua</p>
                  <p className="text-xs text-slate-400 mt-1">Sem mensalidades abusivas por quantidade de alunos matriculados.</p>
                </div>
                <div>
                  <p className="font-semibold text-sky-300">Zero Lock-in</p>
                  <p className="text-xs text-slate-400 mt-1">Código limpo, documentado e executável em servidores Windows ou Linux da instituição.</p>
                </div>
                <div>
                  <p className="font-semibold text-sky-300">Auditoria Completa</p>
                  <p className="text-xs text-slate-400 mt-1">Logs diários de sucesso e alertas por e-mail para falhas de rede ou cadastros incompletos.</p>
                </div>
                <div>
                  <p className="font-semibold text-sky-300">Implantação Chave na Mão</p>
                  <p className="text-xs text-slate-400 mt-1">Nossa engenharia realiza a configuração, testes em homologação e treinamento da equipe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: SELECTION AND PAYMENT */}
        <div className={activeTab === "selection" ? "block mb-16 page-break" : "hidden print:block mb-16 page-break"}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100 mb-8">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-48 sm:w-56">
                  <Image
                    src="/images/products/logos/logo-selection-payment.png"
                    alt="Logo Selection and Payment"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <Badge variant="outline" className="text-emerald-700 bg-emerald-50 border-emerald-200">
                  Plugin Oficial Moodle
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Compatibilidade: <strong>Moodle 3.9 até 4.x+</strong></span>
              </div>
            </div>

            {/* Pitch Structure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6">
                <div className="flex items-center gap-2.5 text-amber-800 font-bold mb-3">
                  <AlertCircle className="w-5 h-5" />
                  <span>O Gargalo Administrativo Atual</span>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Seleções públicas gerenciadas por e-mails e planilhas geram perda de prazos de recursos e processos judiciais.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Cálculo de baremas e pontuação de títulos feito manualmente demanda dias de comissões julgadoras.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Pagamento mensal de bolsas sem comprovação de atividades ou relatórios assinados, violando exigências de órgãos de controle.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-6">
                <div className="flex items-center gap-2.5 text-sky-900 font-bold mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>A Solução Selection and Payment</span>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>Tudo dentro do Moodle: formulários de inscrição customizados por edital e upload seguro de documentos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>Barema com pontuação automática prévia e ambiente restrito para a banca avaliadora deferir ou justificar notas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>Módulo de Recursos com prazos cronometrados e distribuição cega para revisores.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>Folha mensal automática com geração de recibos autenticados via QR Code criptográfico.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Workflow Pipeline */}
            <h3 className="text-xl font-bold text-slate-900 mb-6">O Ciclo Completo de um Edital em 4 Fases:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-xs">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Fase 1</span>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Publicação &amp; Inscrição</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Candidatos preenchem dados, anexam comprovantes e recebem comprovante autenticado no próprio Moodle.
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-xs">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Fase 2</span>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Bancas &amp; Recursos</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Avaliadores atribuem notas por critérios ponderados. Janela formal de contestação e deferimento com parecer técnico.
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-xs">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Fase 3</span>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Convocação &amp; Alocação</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Classificados são matriculados automaticamente nas salas de tutoria e cursos em que prestarão serviço.
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-xs">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Fase 4</span>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Folha &amp; Pagamentos QR</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Coordenadores homologam tarefas mensais e exportam folhas bancárias com assinatura e auditoria digital.
                </p>
              </div>
            </div>

            {/* Target Audience Note */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary shrink-0" />
                <span><strong>Para quem vender:</strong> Fundações de apoio, Universidades Federais/Estaduais, Secretarias de Educação e Polos EAD.</span>
              </div>
              <Badge className="bg-slate-900 text-white font-medium">Compliance Total</Badge>
            </div>
          </div>
        </div>

        {/* SECTION 3: FABRICA DE SOFTWARE & SAAS */}
        <div className={activeTab === "saas" ? "block mb-16 page-break" : "hidden print:block mb-16 page-break"}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Fábrica de Software &amp; Plataformas SaaS Sob Medida
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Desenvolvimento ágil de aplicações corporativas, modernização de legados e integrações críticas.
                </p>
              </div>
              <Badge variant="outline" className="text-indigo-700 bg-indigo-50 border-indigo-200">
                Engenharia de Software de Ponta a Ponta
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-blue-100 text-primary flex items-center justify-center mb-4">
                  <Workflow className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Modernização de Legados</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transformamos sistemas antigos em interfaces modernas, responsivas e integradas a APIs sem interromper as operações vigentes.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Dashboards &amp; Decisão em Tempo Real</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Criação de painéis gerenciais com visualização de dados de alto desempenho, relatórios automatizados e métricas operacionais.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Arquitetura Segura &amp; Cloud Native</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sistemas baseados em microsserviços ou monolitos modernos, com CI/CD, testes automatizados e segurança por design.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-bold text-lg mb-1">Precisa de um MVP ou sistema corporativo exclusivo?</h4>
                <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                  A SmartRoot entrega o ciclo completo: levantamento de requisitos, prototipação de alta fidelidade em Figma, desenvolvimento do back-end/front-end e infraestrutura em nuvem.
                </p>
              </div>
              <Button asChild className="bg-primary hover:bg-primary-light text-white font-semibold shrink-0">
                <Link href="#contato">Solicitar Escopo de Software</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* SECTION 4: COMERCIAL FAQ & OBJECTIONS GUIDE */}
        <div className={activeTab === "faq" ? "block mb-16 page-break" : "hidden print:block mb-16 page-break"}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Guia Rápido do Comercial: Perguntas Frequentes &amp; Objeções</h2>
                <p className="text-xs sm:text-sm text-slate-500">Respostas práticas para conduzir o cliente durante o fechamento da proposta.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <span className="text-primary font-mono">Q1:</span> "O SmartMoodle precisa alterar a estrutura do banco de dados do nosso ERP?"
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>Resposta recomendada:</strong> Não. O SmartMoodle respeita 100% a governança da sua instituição. Ele opera através de Views seguras ou consultas parametrizadas fornecidas pela sua equipe de TI, sem criar tabelas proprietárias nem modificar nenhuma regra nativa do seu ERP acadêmico.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <span className="text-primary font-mono">Q2:</span> "Qual é a política de licenciamento do SmartMoodle e do Selection and Payment?"
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>Resposta recomendada:</strong> O modelo padrão da SmartRoot é o de <strong>Licenciamento Perpétuo por Instância</strong> com pacote de suporte e horas de implantação/customização. Isso significa que o cliente não fica refém de aumentos abusivos com o crescimento do número de alunos. Planos anuais de manutenção evolutiva e atualização de versões do Moodle também estão disponíveis.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <span className="text-primary font-mono">Q3:</span> "O que acontece se a nossa versão do Moodle for atualizada?"
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>Resposta recomendada:</strong> Nossos produtos são desenvolvidos seguindo as diretrizes oficiais de desenvolvimento do Moodle (Moodle Coding Style &amp; APIs de Web Service). Caso a instituição decida migrar para versões mais recentes, o contrato de suporte contempla a homologação e adaptação prévia em ambiente de testes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                  <span className="text-primary font-mono">Q4:</span> "Como garantimos a segurança dos dados diante da LGPD?"
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>Resposta recomendada:</strong> As ferramentas operam integralmente dentro da infraestrutura do próprio cliente (on-premise ou nuvem privada contratada). Nenhum dado pessoal sensível dos seus alunos ou avaliadores transita por servidores externos da SmartRoot. Os logs de acesso e consentimento ficam arquivados na base da instituição.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Closer Footer */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-200 text-center max-w-3xl mx-auto shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Pronto para Agendar uma Demonstração Técnica?</h3>
          <p className="text-sm text-slate-600 mb-6">
            Nossos engenheiros de produto podem participar de uma conferência com a diretoria ou a equipe de TI da sua instituição para apresentar o fluxo ao vivo.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-light text-white font-semibold">
              <a href="https://wa.me/558530677461?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20das%20soluções%20digitais%20SmartRoot" target="_blank" rel="noopener noreferrer">
                Agendar Demonstração via WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-300">
              <Link href="/comercial/engenharia-tecnica">
                Ver Pasta Técnica &rarr;
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
