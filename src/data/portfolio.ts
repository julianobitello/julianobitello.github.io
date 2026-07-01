import projectManagementSystem from "@/assets/project-management-system.png";

export type ProjectCategory = "React" | "JavaScript" | "TypeScript";

export interface Project {
  titulo: string;
  descricao: string;
  imagem: string;
  github?: string;
  demo: string;
  tecnologias: ProjectCategory[];
  tags: string[];
}

export const projects: Project[] = [
  {
    titulo: "Project Management System",
    descricao:
      "Sistema de gerenciamento de projetos com interface web para organizar tarefas, acompanhar demandas e visualizar o andamento do trabalho.",
    imagem: projectManagementSystem,
    demo: "https://project-management-system-pi-five.vercel.app/",
    tecnologias: ["React", "TypeScript"],
    tags: ["Gestao", "Produtividade"],
  },
];

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
