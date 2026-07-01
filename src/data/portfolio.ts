import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export type ProjectCategory = "React" | "JavaScript" | "TypeScript";

export interface Project {
  titulo: string;
  descricao: string;
  imagem: string;
  github: string;
  demo: string;
  tecnologias: ProjectCategory[];
  tags: string[];
}

// TODO: Substituir pelos projetos reais do Juliano
export const projects: Project[] = [
  {
    titulo: "Landing Page Corporativa",
    descricao:
      "Landing page responsiva com foco em conversão, animações suaves e performance otimizada.",
    imagem: project1,
    github: "https://github.com/julianobitello",
    demo: "https://example.com",
    tecnologias: ["React", "TypeScript"],
    tags: ["Landing", "Responsivo"],
  },
  {
    titulo: "Dashboard Administrativo",
    descricao:
      "Painel de controle com gráficos interativos, filtros dinâmicos e integração com API REST.",
    imagem: project2,
    github: "https://github.com/julianobitello",
    demo: "https://example.com",
    tecnologias: ["React", "TypeScript"],
    tags: ["Dashboard", "API"],
  },
  {
    titulo: "Sistema de Gestão",
    descricao: "Aplicação web completa em Angular com formulários complexos e validação avançada.",
    imagem: project3,
    github: "https://github.com/julianobitello",
    demo: "https://example.com",
    tecnologias: ["TypeScript"],
    tags: ["SPA"],
  },
  {
    titulo: "App de Tarefas",
    descricao:
      "Aplicativo de gestão de tarefas com drag and drop, persistência local e tema escuro.",
    imagem: project4,
    github: "https://github.com/julianobitello",
    demo: "https://example.com",
    tecnologias: ["React", "JavaScript"],
    tags: ["UX", "Produtividade"],
  },
  {
    titulo: "Portfólio Interativo",
    descricao: "Site portfólio com animações em Framer Motion, scroll reveal e design premium.",
    imagem: project5,
    github: "https://github.com/julianobitello",
    demo: "https://example.com",
    tecnologias: ["React", "TypeScript"],
    tags: ["Portfólio", "Motion"],
  },
  {
    titulo: "E-commerce Front-End",
    descricao: "Interface de loja virtual com carrinho persistente, filtros e checkout responsivo.",
    imagem: project6,
    github: "https://github.com/julianobitello",
    demo: "https://example.com",
    tecnologias: ["React", "JavaScript"],
    tags: ["E-commerce", "UI"],
  },
];

export const filters = ["Todos", "React", "Angular", "JavaScript", "TypeScript"] as const;

export interface ExperienceItem {
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
  itens: string[];
}

export const experiencias: ExperienceItem[] = [
  {
    cargo: "Front-End Developer",
    empresa: "Delta Global",
    periodo: "Maio 2022 — Maio 2025",
    descricao:
      "Desenvolvimento de páginas responsivas e aplicações web com foco em performance, qualidade e atendimento aos critérios de aceitação.",
    itens: [
      "Páginas responsivas com React, HTML5 e CSS3",
      "Manutenção e evolução com JavaScript e JQuery",
      "Participação em projetos internos",
      "Garantia de qualidade e performance",
    ],
  },
  {
    cargo: "Front-End Developer",
    empresa: "Hygia Saúde",
    periodo: "Junho 2021 — Maio 2022",
    descricao:
      "Criação de Landing Pages e interfaces web em parceria com designers, com foco em experiência do usuário e acessibilidade.",
    itens: [
      "Landing Pages e interfaces web",
      "Desenvolvimento com React, JavaScript, HTML5 e CSS3",
      "Trabalho em conjunto com o time de design",
      "Foco em UX e acessibilidade",
    ],
  },
];

export interface EducationItem {
  curso: string;
  instituicao: string;
  periodo: string;
}

export const formacao: EducationItem[] = [
  {
    curso: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    instituicao: "Faculdade Estácio",
    periodo: "2021 — 2023",
  },
];

export interface Testimonial {
  nome: string;
  cargo: string;
  texto: string;
}

export const testimonials: Testimonial[] = [
  {
    nome: "Ana Souza",
    cargo: "Product Manager",
    texto:
      "Entregou a interface com qualidade impressionante. Atenção aos detalhes e código extremamente limpo.",
  },
  {
    nome: "Carlos Mendes",
    cargo: "CTO, Tech Startup",
    texto:
      "Profissional excepcional. Transformou nosso protótipo em um produto real com performance acima do esperado.",
  },
  {
    nome: "Marina Lima",
    cargo: "Founder",
    texto:
      "Comunicação clara, prazos cumpridos e resultado visualmente impecável. Já é meu desenvolvedor de confiança.",
  },
];

export const contato = {
  telefone: "+55 51 99578-7015",
  email: "julianobitello@gmail.com",
  github: "https://github.com/julianobitello",
  linkedin: "https://www.linkedin.com/in/juliano-bitello-886889145/",
  localizacao: "Cachoeirinha - RS",
};
