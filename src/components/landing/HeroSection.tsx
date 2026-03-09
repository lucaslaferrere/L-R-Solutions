import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-14 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(200,80%,55%,0.12),transparent_60%)]" />
      </div>
      <motion.div
        className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-[100px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 -right-40 w-96 h-96 rounded-full bg-secondary/5 blur-[100px]"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs text-muted-foreground mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse-glow" />
            <span className="font-mono">Desarrollo de software a medida</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Tu negocio merece{" "}
            <span className="gradient-text">tecnología que trabaje por vos</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mt-6 leading-relaxed"
          >
            Somos el ibuprofeno tecnológico para tu dolor de cabeza.
            Transformamos procesos manuales en sistemas inteligentes que ahorran tiempo y hacen crecer tu negocio.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mt-10"
          >
            <motion.a
              href="#contacto"
              className="gradient-bg text-primary-foreground px-6 py-3 rounded-xl font-medium shadow-btn hover:shadow-glow transition-all flex items-center justify-center gap-2 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Hablemos
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#servicios"
              className="px-6 py-3 rounded-xl font-medium border border-border bg-card hover:bg-muted transition-all flex items-center justify-center gap-2 text-sm text-foreground"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Terminal size={16} />
              Ver servicios
            </motion.a>
          </motion.div>

          {/* Code block decoration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-16 mx-auto max-w-xl"
          >
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-card">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">terminal</span>
              </div>
              <div className="p-4 font-mono text-xs sm:text-sm text-left space-y-1">
                <div className="flex gap-2">
                  <span className="text-muted-foreground">$</span>
                  <motion.span
                    className="text-secondary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    lrsolutions init --tu-negocio
                  </motion.span>
                </div>
                <motion.div
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  ✓ Relevamiento completado
                </motion.div>
                <motion.div
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  ✓ Diseño UX/UI listo
                </motion.div>
                <motion.div
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.6 }}
                >
                  ✓ Sistema desplegado
                </motion.div>
                <motion.div
                  className="text-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                >
                  → Tu negocio, simplificado. 🚀
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px glow-line" />
    </section>
  );
};

export default HeroSection;
