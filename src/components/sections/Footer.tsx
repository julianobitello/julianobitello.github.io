import { Github, Linkedin, Mail } from "lucide-react";
import { contato } from "@/data/portfolio";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container-tight grid gap-8 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">
            <span className="gradient-text">Juliano Bitello</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Front-End Developer</p>
          <p className="mt-1 text-xs text-muted-foreground">{contato.localizacao}</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm">
          <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
            Links rápidos
          </span>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
            Redes
          </span>
          <div className="mt-3 flex items-center gap-4 text-muted-foreground">
            <a href={contato.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary">
              <Github size={18} />
            </a>
            <a href={contato.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${contato.email}`} aria-label="Email" className="transition-colors hover:text-primary">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="container-tight mt-8 border-t border-white/5 pt-6 text-center text-xs text-muted-foreground">
        © {year} Juliano Bitello — Todos os direitos reservados.
      </div>
    </footer>
  );
}
