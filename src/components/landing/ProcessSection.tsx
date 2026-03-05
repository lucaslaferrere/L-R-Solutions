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
    <section id="proceso" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(210, 20%, 98%) 0%, hsl(200, 30%, 94%) 100%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Nuestro proceso</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            ¿Cómo{" "}
            <span className="gradient-text">trabajamos?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px border-t-2 border-dashed border-border" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-5 relative">
                  <s.icon size={32} className="text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                    {s.num}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
