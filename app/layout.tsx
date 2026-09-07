import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_METADATA } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smartroot.com.br"),
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  keywords: [
    "SmartRoot",
    "Automação Predial",
    "Internet das Coisas",
    "IoT",
    "Sistemas Inteligentes",
    "Tecnologia Educacional",
    "Hardware e Software",
    "Telemetria",
    "Controle de Acesso",
    "Engenharia Eletrônica",
  ],
  authors: [{ name: "SmartRoot Tecnologia" }],
  creator: "SmartRoot",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://smartroot.com.br",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    siteName: "SmartRoot",
    images: [
      {
        url: "/images/hero/smartroot-hero-tech.svg",
        width: 1200,
        height: 630,
        alt: "SmartRoot - Tecnologia, Automação e Soluções Inteligentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: ["/images/hero/smartroot-hero-tech.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
