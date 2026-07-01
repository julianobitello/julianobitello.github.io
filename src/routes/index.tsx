import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juliano Bitello — Front-End Developer" },
      {
        name: "description",
        content:
          "Portfólio de Juliano Bitello, Front-End Developer em Cachoeirinha - RS. React, TypeScript, JavaScript, Angular. Interfaces modernas, responsivas e performáticas.",
      },
      { property: "og:title", content: "Juliano Bitello — Front-End Developer" },
      {
        property: "og:description",
        content:
          "Front-End Developer especializado em React, TypeScript, JavaScript e Angular.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Services />
      <Testimonials />
      <Stats />
      <Contact />
      <Footer />
      <BackToTop />
      <Toaster theme="dark" position="bottom-right" />
    </main>
  );
}
