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
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px border-t border-dashed border-border" />
              )}
              <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <s.icon size={18} className="text-primary-foreground" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{s.num}</span>
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
