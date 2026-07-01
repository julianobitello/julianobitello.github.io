import { motion } from "framer-motion";
import { Check } from "lucide-react";
import illustration from "@/assets/about-illustration.jpg";

const foco = [
  "Performance",
  "Usabilidade",
  "Acessibilidade",
  "Componentização",
  "Organização de código",
  "Boas práticas",
  "Versionamento com Git",
];

const perfil = [
  "Proativo",
  "Colaborativo",
  "Atenção aos detalhes",
  "Aprendizado contínuo",
  "Facilidade para trabalhar em equipe",
];

export function About() {
  return (
    <section id="sobre" className="section-pad relative">
      <div className="container-tight grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div
            aria-hidden
            className="absolute -inset-3 rounded-3xl opacity-40 blur-2xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src={illustration}
              alt="Workspace de desenvolvedor"
              width={800}
              height={700}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Sobre mim
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Construo interfaces que <span className="gradient-text">encantam</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Desenvolvedor Front-End com experiência na criação de Landing Pages,
            interfaces responsivas e aplicações web. Trabalho com React,
            JavaScript, HTML5, CSS3, JQuery e Angular, sempre buscando entregar
            soluções modernas, performáticas e bem estruturadas.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/90">
                Foco
              </h3>
              <ul className="space-y-2">
                {foco.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-foreground/85">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check size={12} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/90">
                Perfil
              </h3>
              <ul className="space-y-2">
                {perfil.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-foreground/85">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check size={12} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
