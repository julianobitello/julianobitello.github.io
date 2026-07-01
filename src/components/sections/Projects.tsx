import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projetos" className="section-pad relative">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Portfólio
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Projeto <span className="gradient-text">em destaque</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Um trabalho real que representa minha abordagem no desenvolvimento de
            interfaces modernas, responsivas e funcionais.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-xl gap-6">
          {projects.map((p) => (
            <motion.article
              key={p.titulo}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35 }}
              className="card-elevated card-elevated-hover group overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden bg-white">
                <img
                  src={p.imagem}
                  alt={p.titulo}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold">{p.titulo}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.descricao}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tecnologias.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-primary-glow px-3 py-2 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    <ExternalLink size={14} /> Ver projeto
                  </a>
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-white/10"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
