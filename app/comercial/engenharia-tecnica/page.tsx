"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Printer,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Server,
  Activity,
  Layers,
  ShieldCheck,
  Zap,
  Radio,
  FileCode2,
  Workflow,
  Sparkles,
  Award,
  Clock,
  Terminal,
  ArrowRight,
  HardDrive
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PastaEngenhariaTecnica() {
  const [activeTab, setActiveTab] = useState<"smartnonstop" | "smartmeter" | "pcb" | "firmware">("smartnonstop");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 print:pt-4 print:pb-0 print:bg-white print:text-slate-900">
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
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/60">
              Pasta Comercial 02 • Engenharia &amp; Especialistas Técnicos
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              onClick={handlePrint}
              variant="default"
              size="sm"
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold flex items-center gap-2 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Salvar PDF</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Cover / Header Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-[#0B2545] to-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-10 border border-cyan-500/30">
          <div className="absolute -right-16 -top-16 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              Caderno de Especificações Técnicas &amp; Arquitetura
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Engenharia de Hardware, IoT &amp; Alta Disponibilidade
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Infraestruturas resilientes de missão crítica com Zero Downtime, telemetria industrial multi-protocolo, design de PCBs multicamadas e desenvolvimento de firmware sob medida.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">99.99%</p>
                <p className="text-xs text-slate-400 mt-1">SLA SmartNonStop</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">6 VPS</p>
                <p className="text-xs text-slate-400 mt-1">Cluster distribuído Swarm</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">LoRaWAN</p>
                <p className="text-xs text-slate-400 mt-1">Telemetria de longo alcance</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">DFM</p>
                <p className="text-xs text-slate-400 mt-1">Pronto para fabricação fabril</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation (Interactive for Pitch Deck) */}
        <div className="flex border-b border-slate-800 mb-10 overflow-x-auto no-print">
          <button
            onClick={() => setActiveTab("smartnonstop")}
            className={`pb-4 px-6 text-sm sm:text-base font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === "smartnonstop"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-100"
            }`}
          >
            <span>1. SmartNonStop (Zero Downtime)</span>
          </button>
          <button
            onClick={() => setActiveTab("smartmeter")}
            className={`pb-4 px-6 text-sm sm:text-base font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === "smartmeter"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-100"
            }`}
          >
            <span>2. SmartMeter &amp; Telemetria IoT</span>
          </button>
          <button
            onClick={() => setActiveTab("pcb")}
            className={`pb-4 px-6 text-sm sm:text-base font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === "pcb"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-100"
            }`}
          >
            <span>3. Design de PCB &amp; Hardware</span>
          </button>
          <button
            onClick={() => setActiveTab("firmware")}
            className={`pb-4 px-6 text-sm sm:text-base font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === "firmware"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-slate-100"
            }`}
          >
            <span>4. Firmware &amp; Lotes de Produção</span>
          </button>
        </div>

        {/* SECTION 1: SMARTNONSTOP */}
        <div className={activeTab === "smartnonstop" ? "block mb-16" : "hidden print:block mb-16"}>
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl print:bg-white print:border-slate-300 print:text-slate-900 mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800 print:border-slate-200 mb-8">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-48 sm:w-56 bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <Image
                    src="/images/products/logos/logo-smartnonstop.png"
                    alt="Logo SmartNonStop"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <Badge variant="outline" className="text-cyan-400 bg-cyan-950/40 border-cyan-800 print:text-cyan-700">
                  Arquitetura de Missão Crítica
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400 print:text-slate-600">
                <Server className="w-4 h-4 text-cyan-400" />
                <span>Topologia: <strong>Cluster Distribuído com 6 VPS Ativos</strong></span>
              </div>
            </div>

            {/* Architectural Pitch */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 print:bg-slate-50 print:border-slate-200">
                <h3 className="font-bold text-lg text-white print:text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                  <span>Por que servidores monolíticos falham?</span>
                </h3>
                <p className="text-sm text-slate-300 print:text-slate-700 leading-relaxed mb-3">
                  Quando uma instituição ou empresa hospeda seu Moodle ou aplicação crítica em uma única VPS ou servidor dedicado, qualquer pico de requisições concorrentes, kernel panic ou manutenção de banco derruba toda a operação.
                </p>
                <p className="text-xs text-slate-400 print:text-slate-500 font-mono">
                  SPOF (Single Point of Failure) &bull; Quedas em períodos de provas &bull; Perda de dados em corrupção de tabelas.
                </p>
              </div>

              <div className="bg-slate-950/80 border border-cyan-500/30 rounded-2xl p-6 print:bg-cyan-50/50 print:border-cyan-200">
                <h3 className="font-bold text-lg text-cyan-400 print:text-cyan-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <span>A Abordagem SmartNonStop</span>
                </h3>
                <p className="text-sm text-slate-300 print:text-slate-700 leading-relaxed mb-3">
                  O SmartNonStop descentraliza cada camada da aplicação em nós independentes. Se um servidor queimar ou sofrer pane física de hardware no datacenter, a requisição é redirecionada em milissegundos sem o usuário final sequer notar.
                </p>
                <p className="text-xs text-cyan-300 print:text-cyan-700 font-mono">
                  Zero Downtime real &bull; Failover automático &bull; Replicação síncrona de escrita.
                </p>
              </div>
            </div>

            {/* Topology Blueprint */}
            <h3 className="text-xl font-bold text-white print:text-slate-900 mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              Camadas da Topologia de Alta Disponibilidade:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <div className="text-xs font-mono text-cyan-400 mb-2 font-bold uppercase">Camada 01 &bull; Borda &amp; DNS</div>
                <h4 className="font-bold text-base text-white print:text-slate-900 mb-2">Cloudflare DNS Load Balancing</h4>
                <p className="text-xs text-slate-300 print:text-slate-600 leading-relaxed mb-3">
                  Roteamento inteligente de tráfego com Health Checks a cada 5 segundos. Mitigação automática de ataques DDoS de camada 3, 4 e 7.
                </p>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded">SSL/TLS 1.3 &bull; WAF Avançado</span>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <div className="text-xs font-mono text-cyan-400 mb-2 font-bold uppercase">Camada 02 &bull; Aplicação</div>
                <h4 className="font-bold text-base text-white print:text-slate-900 mb-2">Docker Swarm Distribuído</h4>
                <p className="text-xs text-slate-300 print:text-slate-600 leading-relaxed mb-3">
                  Orquestração entre 3 nós Managers e 3 nós Workers. Escalabilidade horizontal automática de contêineres PHP/Nginx sob alta demanda.
                </p>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded">GlusterFS / NFS Redundante</span>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <div className="text-xs font-mono text-cyan-400 mb-2 font-bold uppercase">Camada 03 &bull; Dados</div>
                <h4 className="font-bold text-base text-white print:text-slate-900 mb-2">MariaDB Galera + ProxySQL</h4>
                <p className="text-xs text-slate-300 print:text-slate-600 leading-relaxed mb-3">
                  Banco de dados multi-mestre com replicação síncrona em 3 nós. ProxySQL faz a segregação transparente de leituras e escritas com caching de queries.
                </p>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded">Zero perda de transações (ACID)</span>
              </div>
            </div>

            {/* Monitoring & SRE */}
            <div className="p-6 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs sm:text-sm text-slate-300 print:bg-cyan-50 print:text-slate-800 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
                <span><strong>Painel de Gestão &amp; SRE:</strong> Inclui Portainer.io CE com RBAC, dashboards de telemetria de CPU/RAM/Disco e alertas instantâneos no Telegram/Slack da equipe de infraestrutura.</span>
              </div>
              <Badge className="bg-cyan-500 text-slate-950 font-bold">Produção Homologada</Badge>
            </div>
          </div>
        </div>

        {/* SECTION 2: SMARTMETER & IOT */}
        <div className={activeTab === "smartmeter" ? "block mb-16 page-break" : "hidden print:block mb-16 page-break"}>
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl print:bg-white print:border-slate-300 print:text-slate-900 mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800 print:border-slate-200 mb-8">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-48 sm:w-56 bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <Image
                    src="/images/products/logos/logo-smartmeter.png"
                    alt="Logo SmartMeter"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <Badge variant="outline" className="text-emerald-400 bg-emerald-950/40 border-emerald-800 print:text-emerald-700">
                  Hardware &bull; IoT &bull; Telemetria
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400 print:text-slate-600">
                <Radio className="w-4 h-4 text-emerald-400" />
                <span>Comunicação: <strong>LoRaWAN 915 MHz &bull; MQTT &bull; Modbus</strong></span>
              </div>
            </div>

            {/* Technical Capabilities */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 print:bg-slate-50 print:border-slate-200">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white print:text-slate-900 mb-2">Grandezas Elétricas RMS</h4>
                <p className="text-xs text-slate-400 print:text-slate-600 leading-relaxed">
                  Leitura precisa de Tensão (V), Corrente (A), Fator de Potência (&phi;), Potência Ativa (kW), Reativa (kVAR) e Frequência (Hz) com transformadores de corrente bipartidos não invasivos.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 print:bg-slate-50 print:border-slate-200">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white print:text-slate-900 mb-2">Edge Computing &amp; Buffer</h4>
                <p className="text-xs text-slate-400 print:text-slate-600 leading-relaxed">
                  Microcontrolador interno processa médias móveis e detecção de anomalias no dispositivo. Em caso de queda de rede, armazena até 30 dias de dados em memória não volátil e retransmite ao restabelecer.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 print:bg-slate-50 print:border-slate-200">
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                  <Radio className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white print:text-slate-900 mb-2">Transmissão Multi-Rede</h4>
                <p className="text-xs text-slate-400 print:text-slate-600 leading-relaxed">
                  Total flexibilidade de topologia: opera via gateways LoRaWAN privados para longas distâncias (até 5km em campo), Wi-Fi industrial corporativo ou redes móveis 4G/NB-IoT.
                </p>
              </div>
            </div>

            {/* Industrial Applications Table */}
            <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 print:bg-slate-100 print:border-slate-300">
              <h4 className="font-bold text-white print:text-slate-900 text-sm mb-4">Aplicações Técnicas Principais:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 print:text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Rateio preciso de energia em condomínios comerciais e galpões industriais</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Monitoramento de temperatura, vibração e sobrecarga em transformadores</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Detecção de fuga de corrente e desbalanço de fases em bancos de capacitores</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Integração nativa com SCADA industrial via Modbus TCP ou Broker MQTT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: PCB DESIGN */}
        <div className={activeTab === "pcb" ? "block mb-16 page-break" : "hidden print:block mb-16 page-break"}>
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl print:bg-white print:border-slate-300 print:text-slate-900 mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800 print:border-slate-200 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white print:text-slate-900">
                  Projetos &amp; Design de Circuitos Impressos (PCB)
                </h2>
                <p className="text-slate-400 text-sm mt-1 print:text-slate-600">
                  Do esquemático eletrônico aos pacotes Gerber finais para fabricação em larga escala.
                </p>
              </div>
              <Badge variant="outline" className="text-cyan-400 bg-cyan-950/40 border-cyan-800 print:text-cyan-800">
                Engenharia Eletrônica Rigorosa
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              <div className="border border-slate-800 rounded-2xl p-5 bg-slate-950 print:bg-slate-50 print:border-slate-200">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase block mb-1">01 &bull; Esquemático</span>
                <h4 className="font-bold text-white print:text-slate-900 text-sm mb-2">Seleção de Componentes</h4>
                <p className="text-xs text-slate-400 print:text-slate-600 leading-relaxed">
                  Dimensionamento térmico, cálculo de tolerâncias e verificação de ciclo de vida (evitando componentes obsoletos).
                </p>
              </div>

              <div className="border border-slate-800 rounded-2xl p-5 bg-slate-950 print:bg-slate-50 print:border-slate-200">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase block mb-1">02 &bull; Roteamento</span>
                <h4 className="font-bold text-white print:text-slate-900 text-sm mb-2">Multicamadas &amp; RF</h4>
                <p className="text-xs text-slate-400 print:text-slate-600 leading-relaxed">
                  Impedância controlada para antenas de RF, casamento de pistas diferenciais e planos de terra contínuos.
                </p>
              </div>

              <div className="border border-slate-800 rounded-2xl p-5 bg-slate-950 print:bg-slate-50 print:border-slate-200">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase block mb-1">03 &bull; DFM / DFA</span>
                <h4 className="font-bold text-white print:text-slate-900 text-sm mb-2">Revisão de Fabricabilidade</h4>
                <p className="text-xs text-slate-400 print:text-slate-600 leading-relaxed">
                  Adequação aos limites de máquinas Pick and Place, perfil de pasta de solda e painelização com mouse bites ou V-Score.
                </p>
              </div>

              <div className="border border-slate-800 rounded-2xl p-5 bg-slate-950 print:bg-slate-50 print:border-slate-200">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase block mb-1">04 &bull; Pacote Gerber</span>
                <h4 className="font-bold text-white print:text-slate-900 text-sm mb-2">Entregáveis Oficiais</h4>
                <p className="text-xs text-slate-400 print:text-slate-600 leading-relaxed">
                  Gerbers RS-274X, Excellon Drill, Pick &amp; Place CPL, BOM com links de distribuidores (Mouser, DigiKey, JLCPCB).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: FIRMWARE & BATCH PRODUCTION */}
        <div className={activeTab === "firmware" ? "block mb-16 page-break" : "hidden print:block mb-16 page-break"}>
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl print:bg-white print:border-slate-300 print:text-slate-900 mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800 print:border-slate-200 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white print:text-slate-900">
                  Firmware Embarcado &amp; Manufatura sob Encomenda
                </h2>
                <p className="text-slate-400 text-sm mt-1 print:text-slate-600">
                  Desenvolvimento do bare-metal a sistemas operacionais de tempo real (FreeRTOS / Zephyr).
                </p>
              </div>
              <Badge variant="outline" className="text-emerald-400 bg-emerald-950/40 border-emerald-800 print:text-emerald-800">
                Do Código à Bancada
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <h4 className="font-bold text-base text-white print:text-slate-900 mb-3 flex items-center gap-2">
                  <FileCode2 className="w-5 h-5 text-cyan-400" />
                  <span>Capacidades de Firmware:</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 print:text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">&bull;</span>
                    <span><strong>Famílias:</strong> STM32 (ARM Cortex-M0/M4/M7), ESP32-S3/C3, Nordic nRF52/53, PIC e RISC-V.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">&bull;</span>
                    <span><strong>Protocolos:</strong> I&sup2;C, SPI, UART, RS-485, Modbus RTU/TCP, CAN Bus e MQTT com TLS 1.3.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">&bull;</span>
                    <span><strong>Segurança:</strong> Armazenamento seguro de chaves em Hardware Crypto, Flash Encryption e Secure Boot.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">&bull;</span>
                    <span><strong>OTA (Over-The-Air):</strong> Particionamento duplo de flash (A/B) com rollback automático em caso de falha de gravação.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <h4 className="font-bold text-base text-white print:text-slate-900 mb-3 flex items-center gap-2">
                  <HardDrive className="w-5 h-5 text-cyan-400" />
                  <span>Prototipagem &amp; Lotes Sem Estoque Mínimo:</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700 leading-relaxed mb-4">
                  Evite o risco financeiro de encomendar 10.000 peças na China antes de validar o produto no mercado brasileiro. Montamos protótipos funcionais (PoC) para testes de bancada e homologação.
                </p>
                <div className="space-y-2 text-xs text-slate-400 print:text-slate-600 font-mono">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Lotes piloto de 10 a 500 unidades com controle de qualidade individual.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Gravação de firmware e testes funcionais (JTAG/SWD) em bancada própria.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Callout Closer */}
        <div className="mt-12 bg-slate-900 rounded-3xl p-8 border border-slate-800 text-center max-w-3xl mx-auto shadow-xl print:hidden">
          <h3 className="text-xl font-bold text-white mb-2">Deseja Agendar um Alinhamento de Engenharia?</h3>
          <p className="text-sm text-slate-400 mb-6">
            Nossa equipe de engenharia eletrônica e arquitetura de software está à disposição para analisar diagramas, esquemáticos e discutir requisitos de SLA.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold">
              <a href="https://wa.me/558530677461?text=Olá!%20Gostaria%20de%20um%20alinhamento%20técnico%20de%20engenharia%20com%20a%20SmartRoot" target="_blank" rel="noopener noreferrer">
                Falar com Engenharia no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:text-white">
              <Link href="/comercial/produtos-digitais">
                Ver Pasta de Produtos Digitais &rarr;
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
