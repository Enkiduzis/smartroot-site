# SmartRoot — Site Institucional de Alta Tecnologia

Site institucional moderno, responsivo e de alta performance desenvolvido para a **SmartRoot**, empresa de tecnologia especializada em Automação Inteligente, IoT, Segurança Crítica, Engenharia de Hardware/Software e Soluções Educacionais.

Inspirado na organização visual, elegância corporativa e modernidade da [BRISA](https://www.brisabr.com.br/), com identidade tecnológica própria (tons de azul corporativo, ciano luminoso e âmbar de inovação).

---

## 🚀 Stack Tecnológica

- **Framework**: Next.js 15+ (App Router)
- **Linguagem**: TypeScript (Strict Mode)
- **Estilização**: Tailwind CSS com Design Tokens customizados
- **Componentes**: Primitivas no padrão shadcn/ui (Button, Card, Input, Textarea, Badge, Dialog)
- **Ícones**: Lucide React
- **Animações**: Framer Motion (Scroll reveal, transições suaves e micro-interações)
- **Formulários**: React Hook Form + Zod (Validação de tipo e formato com feedback em modal)

---

## 📂 Estrutura do Projeto

```text
smartroot/
├── app/
│   ├── layout.tsx              # SEO, metatags OpenGraph, fontes e estrutura global
│   ├── page.tsx                # Orquestração das seções institucionais
│   └── globals.css             # Tokens CSS, temas e utilitários
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Header sticky com glassmorphism, menu mobile e CTAs
│   │   └── Footer.tsx          # Rodapé completo multi-colunas
│   ├── sections/
│   │   ├── Hero.tsx            # Hero com copy de impacto e card tecnológico inspirado na BRISA
│   │   ├── About.tsx           # Propósito institucional e cards de pilares
│   │   ├── History.tsx         # Linha do tempo interativa dos marcos da SmartRoot
│   │   ├── Solutions.tsx       # 4 pilares de atuação com modal informativo
│   │   ├── Products.tsx        # Catálogo de produtos (RootSense, SmartFacility, EduSimulate)
│   │   ├── Technology.tsx      # Matriz interativa de competências técnicas (Hardware, Software, etc.)
│   │   ├── Differentials.tsx   # 6 diferenciais competitivos
│   │   ├── Projects.tsx        # Galeria filtrável por categorias com métricas
│   │   ├── Clients.tsx         # Grade de clientes parceiros institucionais
│   │   ├── Testimonials.tsx    # Depoimentos com avaliação e identificação
│   │   ├── CTA.tsx             # Banner de conversão comercial
│   │   └── Contact.tsx         # Formulário com validação Zod e cartões de contato
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── badge.tsx
│       └── dialog.tsx
├── lib/
│   ├── utils.ts                # Função cn (clsx + tailwind-merge)
│   └── constants.ts            # Centralização de dados, textos e navegação
├── public/
│   └── images/
│       ├── logo/               # SVGs oficiais (versão clara e escura)
│       ├── hero/               # Mockup do ecossistema conectado
│       ├── products/           # Ilustrações dos produtos proprietários
│       ├── projects/           # Cases e projetos entregues
│       ├── clients/            # Logos dos parceiros
│       └── team/               # Avatares para depoimentos
├── types/
│   └── index.ts                # Tipagens TypeScript completas
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 💻 Como Executar o Projeto

### Pré-requisitos
Node.js 18+ ou 20+ instalado.

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar em ambiente de desenvolvimento
```bash
npm run dev
```
Acesse no navegador: `http://localhost:3000`

### 3. Build para produção
```bash
npm run build
npm run start
```
