import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validação básica dos dados recebidos
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    // Se houver uma chave da Resend configurada nas variáveis de ambiente
    if (process.env.RESEND_API_KEY) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Contato SmartRoot <onboarding@resend.dev>",
            to: ["contato@smartroot.com.br"],
            reply_to: email,
            subject: `[Contato Site] ${subject || "Nova mensagem"} - ${name}`,
            text: `Novo contato recebido pelo site SmartRoot:\n\nNome: ${name}\nEmpresa: ${company || "Não informada"}\nE-mail: ${email}\nTelefone: ${phone}\nAssunto: ${subject}\n\nMensagem:\n${message}`,
          }),
        });

        if (!res.ok) {
          console.error("Resend API error:", await res.text());
        }
      } catch (emailErr) {
        console.error("Falha ao enviar via Resend:", emailErr);
      }
    }

    // Retorna confirmação de processamento
    return NextResponse.json({
      success: true,
      message: "Contato registrado com sucesso.",
      data: { name, email, phone, subject },
    });
  } catch (error) {
    console.error("Erro na API de contato:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno ao processar contato." },
      { status: 500 }
    );
  }
}
