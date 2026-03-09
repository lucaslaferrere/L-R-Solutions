import { motion } from "framer-motion";
import { FileSpreadsheet, Clock, HelpCircle, AlertTriangle } from "lucide-react";

const problems = [
  { icon: FileSpreadsheet, title: "¿Llevás todo en Excel o en un cuaderno?", desc: "Perdés información, tiempo y control de tu negocio." },
  { icon: HelpCircle, title: "¿No sabés cuánto vendiste este mes?", desc: "Sin datos claros, es imposible tomar buenas decisiones." },
  { icon: Clock, title: "¿Perdés horas en tareas manuales?", desc: "Tu tiempo vale, y repetir procesos a mano te frena." },
  { icon: AlertTriangle, title: "¿No tenés idea de tu stock real?", desc: "Vender lo que no tenés o acumular de más te cuesta plata." },
];

const ProblemsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-primary/50" />
            El problema
            <span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            ¿Te sentís identificado con{" "}
            <span className="gradient-text">alguno de estos problemas?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <p.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-2 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
