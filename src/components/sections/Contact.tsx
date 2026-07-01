import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { contato } from "@/data/portfolio";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Mensagem enviada! Retorno em breve.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  const channels = [
    { icon: Phone, label: "Telefone", value: contato.telefone, href: `tel:${contato.telefone.replace(/\D/g, "")}` },
    { icon: Mail, label: "Email", value: contato.email, href: `mailto:${contato.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "/in/juliano-bitello", href: contato.linkedin },
    { icon: Github, label: "GitHub", value: "@julianobitello", href: contato.github },
    { icon: MapPin, label: "Localização", value: contato.localizacao, href: "#" },
  ];

  return (
    <section id="contato" className="section-pad relative">
      <div className="container-tight grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Contato
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Vamos criar <span className="gradient-text">algo incrível</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Tem uma ideia, projeto ou vaga em mente? Envie uma mensagem e respondo em até 24h.
          </p>

          <div className="mt-8 space-y-3">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.06]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm text-foreground/90">
                      {c.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={onSubmit}
          className="card-elevated space-y-4 p-6 sm:p-8"
        >
          <div>
            <label htmlFor="nome" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Nome
            </label>
            <input
              id="nome"
              required
              type="text"
              placeholder="Seu nome"
              className="w-full rounded-lg border border-white/10 bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              required
              type="email"
              placeholder="voce@email.com"
              className="w-full rounded-lg border border-white/10 bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="msg" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Mensagem
            </label>
            <textarea
              id="msg"
              required
              rows={5}
              placeholder="Conte um pouco sobre seu projeto..."
              className="w-full resize-none rounded-lg border border-white/10 bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            <Send size={16} />
            {sending ? "Enviando..." : "Enviar mensagem"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
