import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiencias, formacao } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experiencia" className="section-pad relative">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Trajetória
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Experiência <span className="gradient-text">profissional</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div
            aria-hidden
            className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent"
          />

          <div className="space-y-8">
            {experiencias.map((e, i) => (
              <motion.div
                key={e.empresa}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-12"
              >
                <div
                  aria-hidden
                  className="absolute left-4 top-3 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-[var(--shadow-glow)]"
                >
                  <Briefcase size={14} />
                </div>

                <div className="card-elevated p-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {e.periodo}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold">
                    {e.cargo}
                  </h3>
                  <p className="text-sm text-muted-foreground">{e.empresa}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                    {e.descricao}
                  </p>
                  <ul className="mt-3 grid gap-1.5 text-sm text-foreground/80 sm:grid-cols-2">
                    {e.itens.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {formacao.map((f, i) => (
              <motion.div
                key={f.curso}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (experiencias.length + i) * 0.05 }}
                className="relative pl-12"
              >
                <div
                  aria-hidden
                  className="absolute left-4 top-3 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-[var(--shadow-glow)]"
                >
                  <GraduationCap size={14} />
                </div>
                <div className="card-elevated p-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {f.periodo}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold">{f.curso}</h3>
                  <p className="text-sm text-muted-foreground">{f.instituicao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
