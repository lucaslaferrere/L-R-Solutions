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
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(200, 80%, 10%) 0%, hsl(200, 60%, 18%) 50%, hsl(155, 40%, 15%) 100%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">El problema</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 text-white">
            ¿Te sentís identificado con{" "}
            <span className="gradient-text">alguno de estos problemas?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm shadow-card hover:bg-white/10 transition-all border border-white/10 group"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <p.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-white">{p.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
