import { motion } from "framer-motion";
import {
  Layout, Code2, BarChart3, Plug, Bug, Gauge,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Layout, title: "Landing Pages", desc: "Páginas de alta conversão com design moderno e performance impecável." },
  { icon: Code2, title: "Sistemas Web", desc: "Aplicações completas em React, escaláveis e com código limpo." },
  { icon: BarChart3, title: "Dashboards", desc: "Painéis administrativos com visualização de dados em tempo real." },
  { icon: Plug, title: "Integração com APIs", desc: "Consumo eficiente de APIs REST e tratamento robusto de estados." },
  { icon: Bug, title: "Correção de Bugs", desc: "Diagnóstico preciso e correções definitivas no seu front-end." },
  { icon: Gauge, title: "Otimização", desc: "Melhoria de Core Web Vitals, bundle size e tempo de carregamento." },
];

export function Services() {
  return (
    <section id="servicos" className="section-pad relative">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Serviços
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Como posso <span className="gradient-text">ajudar você</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="card-elevated card-elevated-hover group p-6"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
