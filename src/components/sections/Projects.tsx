import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects, filters } from "@/data/portfolio";

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");

  const filtered = useMemo(
    () =>
      active === "Todos"
        ? projects
        : projects.filter((p) => p.tecnologias.includes(active as never)),
    [active]
  );

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
            Projetos <span className="gradient-text">selecionados</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Uma seleção dos trabalhos que melhor representam minha abordagem.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                active === f
                  ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                layout
                key={p.titulo}
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="card-elevated card-elevated-hover group overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.imagem}
                    alt={p.titulo}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold">{p.titulo}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {p.descricao}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tecnologias.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {t}
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
                      <ExternalLink size={14} /> Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-white/10"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
