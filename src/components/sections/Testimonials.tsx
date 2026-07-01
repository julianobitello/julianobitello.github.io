import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";

export function Testimonials() {
  const [i, setI] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % total), 6000);
    return () => clearInterval(t);
  }, [total]);

  const t = testimonials[i];

  return (
    <section id="depoimentos" className="section-pad relative">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Depoimentos
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            O que dizem <span className="gradient-text">sobre mim</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="card-elevated relative overflow-hidden p-8 sm:p-12">
            <Quote className="absolute right-6 top-6 text-primary/20" size={64} />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-balance text-lg leading-relaxed text-foreground/90 sm:text-xl">
                  "{t.texto}"
                </p>
                <div className="mt-6">
                  <p className="font-display text-base font-semibold">{t.nome}</p>
                  <p className="text-sm text-muted-foreground">{t.cargo}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Anterior"
              onClick={() => setI((v) => (v - 1 + total) % total)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition-colors hover:border-primary/50 hover:bg-white/10"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Ir para ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === i ? "w-8 bg-primary" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Próximo"
              onClick={() => setI((v) => (v + 1) % total)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition-colors hover:border-primary/50 hover:bg-white/10"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
