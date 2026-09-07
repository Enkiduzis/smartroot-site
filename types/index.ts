export interface NavItem {
  label: string;
  href: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface HistoryMilestone {
  period: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  applications: string[];
  features: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  logo?: string;
  features: string[];
  status: "Em Produção" | "Disponível" | "Lançamento";
}

export interface TechCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  metrics?: string;
}

export interface ClientItem {
  id: string;
  name: string;
  segment: string;
  logo: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
