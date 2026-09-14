import {
  NavItem,
  Differential,
  HistoryMilestone,
  SolutionItem,
  ProductItem,
  TechCategory,
  ProjectItem,
  ClientItem,
  TestimonialItem,
} from "@/types";

export const SITE_METADATA = {
  title: "SmartRoot | Tecnologia, Automação e Soluções Inteligentes",
  description:
    "A SmartRoot desenvolve soluções tecnológicas inovadoras em automação, Internet das Coisas (IoT), sistemas inteligentes e tecnologia educacional.",
  tagline: "Tecnologia que Conecta Ideias, Espaços e Pessoas.",
  contactEmail: "contato@smartroot.com.br",
  contactPhone: "+55(85)3067-7461",
  contactAddress: "Rua Monsenhor Bruno, 1137, Sala 1423 - Fortaleza, CE, Brasil",
  workingHours: "Segunda a Sexta, das 09h às 18h",
};

export const NAVIGATION_LINKS: NavItem[] = [
  { label: "Início", href: "#hero" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Produtos", href: "#produtos" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

export const HERO_DATA = {
  badge: "Inovação em Hardware, Software e IoT",
  titleHighlight: "Ideias, Espaços e Pessoas.",
  description:
    "A SmartRoot desenvolve soluções inteligentes que unem automação, conectividade, Internet das Coisas e tecnologia educacional para transformar ambientes e criar novas experiências com máxima confiabilidade.",
  socialProof: "Mais de 80 soluções implantadas e sistemas operando em tempo real em múltiplos setores.",
  primaryCTA: {
    label: "Conheça nossas soluções",
    href: "#solucoes",
  },
  secondaryCTA: {
    label: "Fale com a SmartRoot",
    href: "#contato",
  },
  featuredCard: {
    tag: "Conheça a SmartRoot",
    headline: "Transformando ambientes com sistemas inteligentes de ponta a ponta.",
    statusText: "Sensores e dispositivos ativos",
    latency: "12ms latência média",
    connectivity: "99.98% Uptime",
  },
};

export const ABOUT_DATA = {
  title: "Conheça a SmartRoot",
  subtitle: "Tecnologia orientada a propósitos reais e inovação contínua",
  descriptionParagraphs: [
    "A SmartRoot nasceu com o propósito de transformar desafios em soluções tecnológicas inteligentes. Acreditamos que a tecnologia deve ser acessível, conectada e capaz de gerar impactos reais no cotidiano de pessoas e organizações.",
    "Nossa atuação combina desenvolvimento de software de alta performance, engenharia de hardware, Internet das Coisas (IoT), automação de ponta e tecnologias educacionais para criar produtos e sistemas sob medida.",
    "Trabalhamos para conectar pessoas, dispositivos e ambientes, desenvolvendo soluções integradas que tornam processos industriais, corporativos e educacionais significativamente mais eficientes, seguros e inteligentes.",
  ],
  differentials: [
    {
      id: "diff-1",
      title: "Inovação",
      description:
        "Buscamos constantemente novas tecnologias e abordagens para resolver problemas complexos com agilidade e inteligência.",
      iconName: "Lightbulb",
    },
    {
      id: "diff-2",
      title: "Tecnologia Personalizada",
      description:
        "Desenvolvemos soluções 100% sob medida e adaptadas à realidade operacional e estratégica de cada projeto.",
      iconName: "Cpu",
    },
    {
      id: "diff-3",
      title: "Integração Total",
      description:
        "Conectamos hardware, software embarcado, sensores de precisão e plataformas em nuvem em um único ecossistema fluido.",
      iconName: "Layers",
    },
    {
      id: "diff-4",
      title: "Impacto Real",
      description:
        "Criamos tecnologia com foco em eficiência produtiva, retenção de aprendizado e transformação digital sustentável.",
      iconName: "TrendingUp",
    },
  ] as Differential[],
};

export const HISTORY_DATA: HistoryMilestone[] = [
  {
    period: "O Início",
    badge: "Fundação",
    title: "A Gênese da Engenharia Integrada",
    description:
      "A SmartRoot surgiu a partir da busca incansável por soluções tecnológicas capazes de resolver problemas reais utilizando integração nativa entre software, hardware e conectividade de ponta.",
    highlights: [
      "Primeiros protótipos de telemetria",
      "P&D em microcontroladores e firmware",
      "Primeiros clientes de automação",
    ],
  },
  {
    period: "Evolução",
    badge: "Expansão de Domínios",
    title: "Consolidação de IoT e Sistemas Inteligentes",
    description:
      "Com o desenvolvimento contínuo de projetos desafiadores, a empresa expandiu sua expertise técnica para automação predial, sistemas embarcados de baixa potência, plataformas em nuvem e tecnologias educacionais imersivas.",
    highlights: [
      "Plataformas IoT modulares em tempo real",
      "Simuladores e ambientes de aprendizagem imersiva",
      "Parcerias estratégicas com polos tecnológicos",
    ],
  },
  {
    period: "Hoje & Futuro",
    badge: "Liderança e Escala",
    title: "Conectando o Presente ao Futuro",
    description:
      "Atualmente, a SmartRoot atua como parceira estratégica no desenvolvimento de ecossistemas tecnológicos inovadores, conectando automação, inteligência de dados e segurança de nível industrial em todo o território nacional.",
    highlights: [
      "Operações conectadas com alta disponibilidade",
      "Engenharia proprietária de ponta a ponta",
      "Inovação contínua com IA e sensores de próxima geração",
    ],
  },
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  
  {
    id: "sol-educacao",
    title: "Tecnologia Educacional",
    subtitle: "Educação e Treinamento Digital",
    badge: "EdTech & Simulações",
    description:
      "Desenvolvimento de ferramentas e simuladores digitais de última geração para enriquecer e potencializar experiências de aprendizagem.",
    iconName: "GraduationCap",
    applications: [
      "Plataformas educacionais interativas e gamificadas",
      "Simulações técnicas de procedimentos de engenharia",
      "Jogos sérios (Serious Games) para capacitação",
      "Ambientes virtuais para laboratórios práticos",
      "Treinamentos digitais com métricas de retenção",
    ],
    features: [
      "Dashboards de progresso e avaliação pedagógica",
      "Compatibilidade com realidade mista e web interativa",
      "Relatórios de conformidade e horas de treinamento",
    ],
  },
  {
    id: "sol-automacao",
    title: "Automação Inteligente",
    subtitle: "Automação e Ambientes Conectados",
    badge: "Smart Environments",
    description:
      "Desenvolvemos soluções completas para automatizar, orquestrar e monitorar ambientes com máxima segurança e controle centralizado.",
    iconName: "Home",
    applications: [
      "Automação de condomínios e edifícios corporativos",
      "Controle inteligente de energia, climatização e iluminação",
      "Monitoramento contínuo de status ambiental e segurança",
      "Gestão centralizada de atuadores e dispositivos",
      "Sistemas conectados com redundância operacional",
    ],
    features: [
      "Painel web e mobile em tempo real",
      "Roteamento de gatilhos e alertas automatizados",
      "Integração nativa com protocolos BACnet, MQTT e Modbus",
    ],
  },
  {
    id: "sol-iot",
    title: "Internet das Coisas (IoT)",
    subtitle: "IoT e Monitoramento Inteligente",
    badge: "Conectividade & Sensores",
    description:
      "Desenvolvimento de sistemas integrados capazes de coletar, processar e transmitir informações críticas em ambientes de missão.",
    iconName: "Wifi",
    applications: [
      "Sensores de precisão para grandezas físicas",
      "Telemetria avançada de ativos e máquinas",
      "Monitoramento remoto de instalações críticas",
      "Coleta e ingestão de dados em tempo real",
      "Dashboards analíticos de alta performance",
    ],
    features: [
      "Transmissão via LoRaWAN, Wi-Fi 6, BLE e NB-IoT",
      "Edge computing com processamento local",
      "Armazenamento seguro em nuvem criptografada",
    ],
  },
  {
    id: "sol-seguranca",
    title: "Segurança e Controle de Acesso",
    subtitle: "Segurança Inteligente e Gerenciamento",
    badge: "Proteção Crítica",
    description:
      "Tecnologias robustas voltadas para elevar os padrões de segurança física e lógica, com monitoramento ativo e rastreabilidade total.",
    iconName: "ShieldCheck",
    applications: [
      "Controle de acesso biométrico e por RFID",
      "Identificação e autenticação multifator",
      "Monitoramento perimetral e detecção de intrusão",
      "Sensores de presença, portas e temperatura",
      "Gestão remota de credenciais e permissões",
    ],
    features: [
      "Auditoria completa de acessos com logs imutáveis",
      "Integração com sistemas legados e catracas",
      "Notificações instantâneas de segurança",
    ],
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "prod-smartmoodle",
    name: "SmartMoodle",
    category: "Integração ERP & Moodle",
    description:
      "Ferramenta genérica e customizável para sincronização automática e bidirecional de dados entre sistemas de gestão acadêmica (ERP) e o ecossistema Moodle via APIs de Web Service.",
    image: "/images/products/smartmoodle.svg",
    logo: "/images/products/logos/logo-smartmoodle.png",
    status: "Disponível",
    features: [
      "Conexão com Oracle, MySQL, SQL Server e PostgreSQL",
      "Compatível com servidores Linux e Windows",
      "Execução automatizada via Crontab / Agendador",
      "Licenciamento perpétuo e suporte na implantação",
    ],
  },
  {
    id: "prod-selecion-payment",
    name: "Selection and Payment",
    category: "Plugin Moodle para Seleção e Pagamentos",
    description:
      "Plugin corporativo para Moodle que gerencia todo o ciclo de seleções públicas, barema com pontuação automática, recursos, convocação e folha mensal de bolsas com assinatura digital.",
    image: "/images/products/selecion-payment.svg",
    logo: "/images/products/logos/logo-selection-payment.png",
    status: "Disponível",
    features: [
      "Editais com barema dinâmico e auto-registro",
      "Bancas avaliadoras com fases de deferimento e mérito",
      "Atribuição de tarefas vinculadas a salas do Moodle",
      "Folha de pagamento com QR Code e conformidade LGPD",
    ],
  },
  {
    id: "prod-smartnonstop",
    name: "SmartNonStop",
    category: "Infraestrutura de Alta Disponibilidade",
    description:
      "Arquitetura de missão crítica sem ponto único de falha (Zero Downtime) para Moodle, aplicações web e APIs, com cluster distribuído de 6 VPS e banco multi-mestre.",
    image: "/images/products/smartnonstop.svg",
    logo: "/images/products/logos/logo-smartnonstop.png",
    status: "Disponível",
    features: [
      "Cluster com 6 VPS (3 Managers + 3 Workers ativos)",
      "DNS Load Balance Cloudflare com Health Check ativo",
      "MariaDB Galera Cluster multi-mestre e ProxySQL",
      "Orquestração via Docker Swarm e Portainer.io CE",
    ],
  },
  {
    id: "prod-smartmeter",
    name: "SmartMeter",
    category: "Telemetria IoT & Medição Inteligente",
    description:
      "Plataforma inteligente de telemetria e monitoramento contínuo de grandezas elétricas e ambientais com sensores de alta precisão e envio de dados via protocolos IoT.",
    image: "/images/products/smartmeter.svg",
    logo: "/images/products/logos/logo-smartmeter.png",
    status: "Disponível",
    features: [
      "Medição em tempo real de tensão, corrente e potência",
      "Transmissão contínua via MQTT e redes LoRaWAN",
      "Alertas imediatos de surto e desvios operacionais",
      "Histórico analítico em nuvem para eficiência energética",
    ],
  },
  {
    id: "prod-pcb-design",
    name: "Projetos e Design de Circuitos (PCB)",
    category: "Engenharia Eletrônica & Hardware",
    description:
      "Do esquemático ao arquivo Gerber finalizado: projetamos placas de circuito impresso otimizadas para desempenho, alta velocidade, integridade de sinal e fabricabilidade.",
    image: "/images/products/pcb-design.svg",
    status: "Disponível",
    features: [
      "Esquemático profissional e documentação completa",
      "Roteamento multicamadas de alta velocidade",
      "Arquivos Gerber prontos para envio à fábrica",
      "Revisão DFM para fabricação e seleção de componentes",
    ],
  },
  {
    id: "prod-firmware-iot",
    name: "Firmware e Sistemas Personalizados",
    category: "Sistemas Embarcados & IoT",
    description:
      "Desenvolvimento de firmware sob medida do bare-metal ao RTOS para dispositivos inteligentes com telemetria, protocolos industriais e capacidade de atualização remota (OTA).",
    image: "/images/products/firmware-iot.svg",
    status: "Disponível",
    features: [
      "Microcontroladores STM32, ESP32, AVR, PIC e RISC-V",
      "Protocolos I²C, SPI, UART, RS485, Modbus e MQTT",
      "Dispositivos IoT conectados com telemetria contínua",
      "Capacidade de atualização remota de firmware (OTA)",
    ],
  },
  {
    id: "prod-saas-software",
    name: "Aplicações Web & Plataformas SaaS",
    category: "Fábrica de Software Sob Medida",
    description:
      "Do MVP ao produto em escala: desenvolvemos plataformas completas, sistemas corporativos e APIs REST com infraestrutura preparada para produção e UX de alta adoção.",
    image: "/images/products/saas-software.svg",
    status: "Disponível",
    features: [
      "Back-end robusto, escalável e arquitetura segura",
      "APIs REST e conexões seguras entre sistemas",
      "Painéis e dashboards em tempo real para decisão",
      "Bancos de dados escaláveis com alta performance",
    ],
  },
  {
    id: "prod-prototipagem-lotes",
    name: "Protótipos Próprios & Fabricação de Lotes",
    category: "Prototipagem & Manufatura sob Encomenda",
    description:
      "Transformamos ideias em protótipos físicos funcionais dentro de casa (PoC) com iteração ágil e oferecemos a fabricação de lotes sob encomenda sem estoque mínimo obrigatório.",
    image: "/images/products/prototipagem-lotes.svg",
    status: "Disponível",
    features: [
      "Prova de Conceito (PoC) rápida de hardware e firmware",
      "Montagem e validação em bancada profissional",
      "Fabricação sob demanda sem estoque mínimo obrigatório",
      "Continuidade do projeto com quem desenvolveu cada detalhe",
    ],
  },
];

export const TECHNOLOGIES_DATA: TechCategory[] = [
  {
    title: "Hardware",
    description: "Engenharia de precisão para dispositivos confiáveis e de alta eficiência.",
    iconName: "Cpu",
    skills: [
      "Sistemas embarcados",
      "Microcontroladores (ESP32, STM32, ARM)",
      "Sensores de precisão",
      "Dispositivos IoT proprietários",
      "Prototipagem rápida",
      "Engenharia eletrônica & PCBs",
    ],
  },
  {
    title: "Software",
    description: "Aplicações robustas, seguras e com foco em performance e usabilidade.",
    iconName: "Code2",
    skills: [
      "Sistemas web modernos",
      "Plataformas digitais em nuvem",
      "Aplicações móveis e responsivas",
      "APIs RESTful e gRPC",
      "Dashboards analíticos em tempo real",
      "Sistemas de gestão e auditoria",
    ],
  },
  {
    title: "Conectividade",
    description: "Protocolos seguros e confiáveis para comunicação em escala.",
    iconName: "Network",
    skills: [
      "Redes IoT (LoRaWAN, Zigbee)",
      "Wi-Fi 6 & Ethernet industrial",
      "Bluetooth Low Energy (BLE)",
      "Redes mesh de sensores",
      "Comunicação máquina-a-máquina (M2M)",
      "Protocolos MQTT, WebSocket e CoAP",
    ],
  },
  {
    title: "Experiências Digitais",
    description: "Interfaces inovadoras para educação, simulação e engajamento.",
    iconName: "Glasses",
    skills: [
      "Realidade aumentada (AR)",
      "Realidade virtual (VR)",
      "Simulações físicas interativas",
      "Jogos sérios (Serious Games)",
      "Plataformas educacionais",
      "Digital Twins e modelos 3D",
    ],
  },
];

export const DIFFERENTIALS_DATA = [
  {
    id: "diff-custom",
    title: "Soluções Personalizadas",
    description:
      "Cada projeto é desenhado e construído de acordo com suas necessidades estratégicas e restrições operacionais específicas.",
    iconName: "Sparkles",
  },
  {
    id: "diff-integrated",
    title: "Tecnologia Integrada",
    description:
      "Eliminamos gargalos ao unir em um só time engenharia de hardware, desenvolvimento de software e conectividade de rede.",
    iconName: "Boxes",
  },
  {
    id: "diff-innovative",
    title: "Desenvolvimento Inovador",
    description:
      "Empregamos as metodologias e padrões técnicos mais avançados do mercado para garantir eficiência e longevidade.",
    iconName: "Rocket",
  },
  {
    id: "diff-multidisciplinary",
    title: "Visão Multidisciplinar",
    description:
      "União sinérgica entre especialistas em ciência da computação, engenharia de automação, eletrônica e design instrucional.",
    iconName: "BrainCircuit",
  },
  {
    id: "diff-scalability",
    title: "Alta Escalabilidade",
    description:
      "Arquiteturas modulares e flexíveis, preparadas para expandir e acompanhar o ritmo de crescimento do seu negócio.",
    iconName: "Maximize2",
  },
  {
    id: "diff-support",
    title: "Suporte e Parceria Contínua",
    description:
      "Construímos relações tecnológicas duradouras com manutenção evolutiva, monitoramento proativo e atendimento próximo.",
    iconName: "Handshake",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Monitoramento e Automação para Ambientes Conectados",
    category: "Automação Inteligente",
    description:
      "Sistema integrado de monitoramento e automação predial com controle preditivo de energia, qualidade do ar e atuadores inteligentes em condomínio corporativo de grande porte.",
    image: "/images/projects/automacao-ambientes.svg",
    technologies: ["IoT", "Sensores", "Software", "Cloud", "Edge Computing"],
    metrics: "Redução de 28% no consumo elétrico de climatização",
  },
  {
    id: "proj-2",
    title: "Rede de Telemetria IoT de Baixo Consumo (LoRaWAN)",
    category: "Internet das Coisas",
    description:
      "Implantação de rede com centenas de nós sensores para monitoramento remoto de temperatura, umidade e vibração com autonomia de bateria superior a 4 anos.",
    image: "/images/projects/rede-telemetria-lora.svg",
    technologies: ["LoRaWAN", "STM32", "Firmware", "MQTT", "Time-Series DB"],
    metrics: "+150 nós ativos com 99.98% de entrega de pacotes",
  },
  {
    id: "proj-3",
    title: "Simulador de Treinamento Técnico para Operações Industriais",
    category: "Tecnologia Educacional",
    description:
      "Plataforma imersiva de treinamento prático para operadores industriais com simulação física de painéis elétricos, protocolos de segurança e avaliação automatizada.",
    image: "/images/projects/simulador-treinamento.svg",
    technologies: ["WebXR", "3D Engines", "Gamificação", "Next.js", "Analytics"],
    metrics: "45% de ganho de tempo na qualificação técnica",
  },
  {
    id: "proj-4",
    title: "Ecossistema de Segurança e Controle de Acesso Corporativo",
    category: "Segurança Inteligente",
    description:
      "Controle de acesso perimetral unificado integrando catracas biométricas, reconhecimento facial criptografado, crachás digitais e auditoria em tempo real.",
    image: "/images/projects/seguranca-corporativa.svg",
    technologies: ["Biometria", "RFID", "Criptografia", "APIs", "Dashboards"],
    metrics: "Tempo médio de validação inferior a 0.3s por usuário",
  },
];

export const CLIENTS_DATA: ClientItem[] = [
  { id: "cl-1", name: "Longevidade Saudável", segment: "Educação a distância em Saúde", logo: "/images/clients/client-1.svg" },
  { id: "cl-2", name: "UNILAB Virtual", segment: "Educação a distância em ambito federal", logo: "/images/clients/client-2.svg" },
  { id: "cl-3", name: "Condomínio Boulevard Dom Luís", segment: "Automação de gestão condominial", logo: "/images/clients/client-3.svg" },
  
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    quote:
      "A SmartRoot nos ajudou a transformar uma ideia complexa de telemetria em uma solução tecnológica funcional, escalável e inovadora. O nível de integração entre hardware e software superou todas as nossas expectativas.",
    name: "Rodrigo Mendonça",
    role: "Diretor de Operações e Engenharia",
    company: "Nexus Indústrias",
    avatar: "/images/team/avatar-1.svg",
    rating: 5,
  },
  {
    id: "test-2",
    quote:
      "A automação implementada pela equipe da SmartRoot reduziu nossos custos operacionais de forma palpável logo no primeiro trimestre, com confiabilidade técnica absoluta e suporte ágil.",
    name: "Camila Guimarães",
    role: "Gestora de Facilities & Inovação",
    company: "Alpha Condomínios",
    avatar: "/images/team/avatar-2.svg",
    rating: 5,
  },
  {
    id: "test-3",
    quote:
      "Os simuladores educacionais desenvolvidos revolucionaram a capacitação técnica dos nossos técnicos. O aprendizado prático em ambiente controlado elevou o padrão de segurança das nossas equipes.",
    name: "Prof. Marcos Vasconcelos",
    role: "Coordenador de Treinamento Corporativo",
    company: "EducaTech Global",
    avatar: "/images/team/avatar-3.svg",
    rating: 5,
  },
];

export const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/smarroot/", iconName: "Linkedin" },
  { name: "Instagram", href: "https://www.instagram.com/smartroot_sh/", iconName: "Instagram" },
  { name: "YouTube", href: "https://www.youtube.com/@smartroot-com-br", iconName: "Youtube" },
];
