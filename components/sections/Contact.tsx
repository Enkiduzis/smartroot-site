"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  MessageCircle,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Schema de validação com Zod
const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Por favor, informe seu nome completo (mínimo de 3 caracteres)."),
  company: z.string().optional(),
  email: z
    .string()
    .min(1, "O e-mail corporativo é obrigatório.")
    .email("Insira um endereço de e-mail válido."),
  phone: z
    .string()
    .min(8, "Informe um telefone ou WhatsApp com DDD para contato."),
  subject: z
    .string()
    .min(3, "Por favor, selecione ou informe o assunto principal."),
  message: z
    .string()
    .min(10, "A mensagem deve conter ao menos 10 caracteres detalhando a demanda."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const [sendMethod, setSendMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [copied, setCopied] = useState(false);

  const cleanPhone = SITE_METADATA.contactPhone.replace(/\D/g, "");

  const getWhatsAppMessage = (data: ContactFormData) => {
    return (
      `*Novo Contato via Site SmartRoot*\n\n` +
      `👤 *Nome:* ${data.name}\n` +
      (data.company ? `🏢 *Empresa:* ${data.company}\n` : "") +
      `📧 *E-mail:* ${data.email}\n` +
      `📱 *Telefone/WhatsApp:* ${data.phone}\n` +
      `📌 *Assunto:* ${data.subject}\n\n` +
      `💬 *Mensagem / Demanda:*\n${data.message}`
    );
  };

  const getEmailSubject = (data: ContactFormData) => {
    return `[Contato Site SmartRoot] ${data.subject} - ${data.name}`;
  };

  const getEmailBody = (data: ContactFormData) => {
    return (
      `Olá, equipe SmartRoot!\n\n` +
      `Gostaria de solicitar atendimento através do site institucional:\n\n` +
      `Nome: ${data.name}\n` +
      (data.company ? `Empresa: ${data.company}\n` : "") +
      `E-mail: ${data.email}\n` +
      `Telefone: ${data.phone}\n` +
      `Assunto: ${data.subject}\n\n` +
      `Mensagem / Demanda:\n${data.message}\n\n` +
      `Atenciosamente,\n${data.name}`
    );
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmittedData(data);
    setIsSubmitted(true);

    // 1. Registro em background na API
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch(() => {});
    } catch {}

    // 2. Acionamento direto do canal escolhido
    const text = getWhatsAppMessage(data);
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;

    const subject = getEmailSubject(data);
    const body = getEmailBody(data);
    const mailUrl = `mailto:${SITE_METADATA.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (sendMethod === "whatsapp") {
      window.open(waUrl, "_blank");
    } else {
      window.location.href = mailUrl;
    }
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            <MessageSquare className="h-3.5 w-3.5" />
            Canal Direto de Atendimento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Vamos conversar?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Entre em contato com a SmartRoot e descubra como podemos transformar sua ideia ou desafio em uma solução tecnológica funcional e escalável.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Informações Institucionais
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      E-mail Institucional
                    </h4>
                    <a
                      href={`mailto:${SITE_METADATA.contactEmail}`}
                      className="text-base font-semibold text-slate-900 hover:text-primary transition-colors block mt-0.5"
                    >
                      {SITE_METADATA.contactEmail}
                    </a>
                    <span className="text-xs text-slate-500">
                      Tempo médio de resposta &lt; 4 horas
                    </span>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Telefone &amp; WhatsApp
                    </h4>
                    <a
                      href={`https://wa.me/55${cleanPhone}?text=${encodeURIComponent("Olá, equipe SmartRoot! Gostaria de falar com um especialista.")}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-slate-900 hover:text-emerald-600 transition-colors block mt-0.5"
                    >
                      {SITE_METADATA.contactPhone}
                    </a>
                    <span className="text-xs text-slate-500">
                      Atendimento rápido via WhatsApp e telefone
                    </span>
                  </div>
                </div>

                {/* Localização */}
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Localização
                    </h4>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(SITE_METADATA.contactAddress)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors block mt-0.5 leading-snug"
                    >
                      {SITE_METADATA.contactAddress}
                    </a>
                    <span className="text-xs text-slate-500">
                      Centro de Engenharia e P&amp;D
                    </span>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Horário de Operação
                    </h4>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5">
                      {SITE_METADATA.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-md border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-cyan-300 text-sm font-bold">
                <Sparkles className="h-4 w-4" />
                <span>Atendimento Consultivo Especializado</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Nossos engenheiros e gerentes técnicos avaliam cada solicitação com confidencialidade e oferecem direcionamento de arquitetura sem compromisso.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="border border-slate-200/90 rounded-2xl bg-white shadow-md p-6 sm:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Envie uma Mensagem
              </h3>
              <p className="text-sm text-slate-600 mb-8">
                Preencha o formulário abaixo e receba o retorno de um dos nossos especialistas em soluções inteligentes.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nome */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Nome Completo <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      placeholder="Ex: Carlos Silva"
                      {...register("name")}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Empresa */}
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Empresa / Instituição
                    </label>
                    <Input
                      id="company"
                      placeholder="Ex: Indústrias Nexus Ltda"
                      {...register("company")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* E-mail */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      E-mail Corporativo <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="carlos@empresa.com.br"
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Telefone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Telefone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      placeholder="(11) 98765-4321"
                      {...register("phone")}
                      aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Assunto */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Assunto de Interesse <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    {...register("subject")}
                    className="flex h-11 w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm transition-all focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                    aria-invalid={errors.subject ? "true" : "false"}
                  >
                    <option value="">Selecione uma área...</option>
                    <option value="Automação Predial & Ambientes Conectados">Automação Predial &amp; Ambientes Conectados</option>
                    <option value="Projetos de IoT, Sensores e Telemetria">Projetos de IoT, Sensores e Telemetria</option>
                    <option value="Segurança e Controle de Acesso Inteligente">Segurança e Controle de Acesso Inteligente</option>
                    <option value="Tecnologia Educacional e Simuladores Digitais">Tecnologia Educacional e Simuladores Digitais</option>
                    <option value="Desenvolvimento Sob Medida (Hardware + Software)">Desenvolvimento Sob Medida (Hardware + Software)</option>
                    <option value="Outro assunto ou parceria comercial">Outro assunto ou parceria comercial</option>
                  </select>
                  {errors.subject && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Mensagem */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Detalhes da Mensagem / Desafio <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Conte-nos brevemente sobre sua ideia, os objetivos do projeto ou problemas operacionais que deseja resolver..."
                    {...register("message")}
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 text-base font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Enviar Mensagem
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog on successful submission */}
      {isSubmitted && (
        <Dialog open={isSubmitted} onOpenChange={setIsSubmitted}>
          <div className="text-center py-4 space-y-4">
            <div className="mx-auto w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <DialogTitle className="text-2xl font-bold text-slate-900">
              Mensagem Recebida com Sucesso!
            </DialogTitle>
            <DialogDescription className="text-base text-slate-600 max-w-sm mx-auto">
              Obrigado, <strong className="text-slate-900">{submittedData?.name}</strong>. Nossa equipe técnica entrará em contato pelo e-mail{" "}
              <strong className="text-slate-900">{submittedData?.email}</strong> em breve.
            </DialogDescription>
            <div className="pt-4">
              <Button onClick={() => setIsSubmitted(false)} className="w-full">
                Concluir
              </Button>
            </div>
          </div>
        </Dialog>
      )}
    </section>
  );
}
