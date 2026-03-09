import { motion } from "framer-motion";
import { MessageSquare, Search, Code, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "01", title: "Nos contactás", desc: "Nos contás tu situación y qué necesitás. Sin compromiso, solo una charla." },
  { icon: Search, num: "02", title: "Analizamos y diseñamos", desc: "Relevamos tu negocio, diagnosticamos los problemas y diseñamos la solución ideal." },
  { icon: Code, num: "03", title: "Desarrollamos con agilidad", desc: "Armamos un prototipo funcional y lo vamos evolucionando con tu feedback constante." },
  { icon: Rocket, num: "04", title: "Implementamos y acompañamos", desc: "Ponemos todo en marcha y te seguimos acompañando con soporte y mejoras." },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,hsl(155,60%,50%,0.04),transparent)]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-primary/50" />
            Nuestro proceso
            <span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            ¿Cómo{" "}
            <span className="gradient-text">trabajamos?</span>
          </h2>
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Connection line behind cards */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px">
            <motion.div
              className="h-full w-full"
              style={{ background: "linear-gradient(90deg, hsl(200,80%,55%,0.3), hsl(155,60%,50%,0.3))" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-[0_0_30px_hsl(200,80%,55%,0.08)] transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center relative group-hover:shadow-[0_0_20px_hsl(200,80%,55%,0.2)] transition-shadow duration-300">
                    <s.icon size={18} className="text-primary-foreground" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground/60">{s.num}</span>
                </div>
                <h3 className="font-display font-semibold text-sm mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
