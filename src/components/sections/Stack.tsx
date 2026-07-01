import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiAngular,
  SiJquery,
  SiGit,
  SiGithub,
  SiVite,
  SiAxios,
} from "react-icons/si";
import type { IconType } from "react-icons";

const techs: { name: string; icon: IconType; color: string; level: number }[] = [
  { name: "React", icon: SiReact, color: "#61DAFB", level: 70 },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 50 },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 85 },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 95 },
  { name: "CSS3", icon: SiCss, color: "#1572B6", level: 95 },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8", level: 50 },
  { name: "Git", icon: SiGit, color: "#F05032", level: 90 },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF", level: 90 },
  { name: "Axios", icon: SiAxios, color: "#5A29E4", level: 70 },
];

export function Stack() {
  return (
    <section id="stack" className="section-pad relative">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Stack</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Tecnologias que <span className="gradient-text">domino</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {techs.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -6 }}
                className="card-elevated card-elevated-hover group flex flex-col items-center justify-center gap-3 p-6"
              >
                <Icon
                  size={36}
                  style={{ color: t.color }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-sm font-medium text-foreground/90">{t.name}</span>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${t.level}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.04, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
