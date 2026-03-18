import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Database, Cloud, Globe, Cpu, FileSpreadsheet, BarChart3 } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";

const techStack = ["React", "Node.js", "PostgreSQL", "Python", "TypeScript", "Tu solución"];

const TypewriterBadge = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % techStack.length);
        setVisible(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-mono text-primary">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      <AnimatePresence mode="wait">
        {visible && (
          <motion.span
            key={techStack[index]}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
          >
            {techStack[index]}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

const orbitNodes = [
  { icon: Database, label: "Database", angle: 0 },
  { icon: Cloud, label: "Cloud", angle: 60 },
  { icon: Globe, label: "Web App", angle: 120 },
  { icon: FileSpreadsheet, label: "Excel", angle: 180 },
  { icon: BarChart3, label: "Analytics", angle: 240 },
  { icon: Cpu, label: "API", angle: 300 },
];

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-2 mb-8"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse-glow" />
                <span className="font-mono">Desarrollo de software a medida</span>
              </span>
              <TypewriterBadge />
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight"
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
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mt-6 leading-relaxed"
            >
              Somos el ibuprofeno tecnológico para tu dolor de cabeza.
              Transformamos procesos manuales en sistemas inteligentes que ahorran tiempo y hacen crecer tu negocio.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-10"
            >
              <motion.a
                href="#contacto"
                className="gradient-bg text-primary-foreground px-6 py-3 rounded-xl font-medium shadow-btn hover:shadow-glow transition-all flex items-center justify-center gap-2 text-sm"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Hablemos
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#servicios"
                className="px-6 py-3 rounded-xl font-medium border border-border bg-card hover:bg-muted hover:border-primary/30 transition-all flex items-center justify-center gap-2 text-sm text-foreground"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Terminal size={16} />
                Ver servicios
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[420px]">
              {/* Orbital rings */}
              <div className="absolute inset-0 rounded-full border border-border/30" />
              <div className="absolute inset-8 rounded-full border border-border/20" />
              <div className="absolute inset-16 rounded-full border border-border/10" />

              {/* Animated ring glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent, hsl(200, 80%, 55%, 0.15), transparent, hsl(155, 60%, 50%, 0.1), transparent)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Data flow lines - animated dashes */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 420">
              {orbitNodes.map((node, i) => {
                  const angle = (i * 60 - 90) * (Math.PI / 180);
                  const cx = 210 + 170 * Math.cos(angle);
                  const cy = 210 + 170 * Math.sin(angle);
                  const isHighlighted = node.label === "Database" || node.label === "Excel";
                  return (
                    <motion.line
                      key={i}
                      x1="210" y1="210" x2={cx} y2={cy}
                      stroke={isHighlighted ? "url(#lineGradHighlight)" : "url(#lineGrad)"}
                      strokeWidth={isHighlighted ? 2 : 1}
                      strokeDasharray={isHighlighted ? "6 3" : "4 4"}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: isHighlighted ? 0.8 : 0.4 }}
                      transition={{ delay: 1 + i * 0.15, duration: 0.8 }}
                    />
                  );
                })}
                <defs>
                  <radialGradient id="lineGrad" cx="210" cy="210" r="170" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="hsl(200, 80%, 55%)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(155, 60%, 50%)" stopOpacity="0.3" />
                  </radialGradient>
                  <radialGradient id="lineGradHighlight" cx="210" cy="210" r="170" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="hsl(200, 80%, 55%)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="hsl(155, 60%, 50%)" stopOpacity="0.7" />
                  </radialGradient>
                </defs>
              </svg>

              {/* Data flow particles */}
              {orbitNodes.map((_, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const ex = 170 * Math.cos(angle);
                const ey = 170 * Math.sin(angle);
                return (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_hsl(200,80%,55%)]"
                    style={{ left: "50%", top: "50%", marginLeft: -3, marginTop: -3 }}
                    animate={{
                      x: [0, ex, 0],
                      y: [0, ey, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: 1.5 + i * 0.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}

              {/* Center hub */}
<div className="absolute inset-0 flex items-center justify-center">
  <motion.img
    src="/favicon.png"
    alt="L&R"
    className="w-16 h-16 object-contain"
    animate={{ filter: ["drop-shadow(0 0 8px hsl(200,80%,55%,0.3))", "drop-shadow(0 0 16px hsl(200,80%,55%,0.6))", "drop-shadow(0 0 8px hsl(200,80%,55%,0.3))"] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />
</div>

              {/* Orbit nodes */}
              {orbitNodes.map((node, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const x = 210 + 170 * Math.cos(angle) - 24;
                const y = 210 + 170 * Math.sin(angle) - 24;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 rounded-xl border border-border bg-card/80 backdrop-blur-sm flex flex-col items-center justify-center gap-0.5 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(200,80%,55%,0.15)] transition-all duration-300 cursor-default"
                    style={{ left: x, top: y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.15, y: -2 }}
                  >
                    <node.icon size={16} className="text-primary" />
                    <span className="text-[8px] font-mono text-muted-foreground">{node.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Code block decoration - below on all screens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 mx-auto max-w-xl lg:hidden"
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
              <motion.div className="text-muted-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
                ✓ Relevamiento completado
              </motion.div>
              <motion.div className="text-muted-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
                ✓ Diseño UX/UI listo
              </motion.div>
              <motion.div className="text-muted-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}>
                ✓ Sistema desplegado
              </motion.div>
              <motion.div className="text-primary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}>
                → Tu negocio, simplificado. 🚀
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px glow-line" />
    </section>
  );
};

export default HeroSection;
