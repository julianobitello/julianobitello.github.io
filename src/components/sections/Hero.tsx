import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, FolderGit2 } from "lucide-react";
import { Particles } from "@/components/Particles";
import { contato } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <Particles />

      <div className="container-tight relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Disponível para novos projetos · {contato.localizacao}
          </div>

          <h1 className="text-balance font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="gradient-text">Juliano Bitello</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-foreground/90">Front-End Developer</p>

          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            Desenvolvedor Front-End com sólida experiência em HTML, CSS e JavaScript, especializado
            na criação de interfaces modernas, responsivas e performáticas utilizando React.
            Apaixonado por desenvolvimento web, experiência do usuário e boas práticas de
            programação.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              <FolderGit2 size={16} />
              Ver Projetos
            </a>
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:bg-white/10"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href={contato.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:bg-white/10"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={contato.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:bg-white/10"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:bg-white/10"
            >
              <Mail size={16} /> Contato
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div
            aria-hidden
            className="absolute -inset-3 rounded-full opacity-60 blur-2xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div
            className="group relative h-[250px] w-[250px] rounded-full p-[3px] transition-transform duration-500 hover:scale-105 sm:h-[280px] sm:w-[280px]"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-card">
              <img
                src="/src/assets/eu.png"
                alt="Foto de Juliano Bitello"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
