import { motion } from "framer-motion";
import { Zap, Target, Heart, Users, BadgeDollarSign } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Velocidad", desc: "Entregamos rápido sin sacrificar calidad." },
  { icon: Target, title: "Metodología profesional", desc: "Aplicamos lo que aprendemos en la UTN con rigor." },
  { icon: Heart, title: "Perfeccionismo", desc: "Cada detalle importa, no nos conformamos con poco." },
  { icon: Users, title: "Acompañamiento", desc: "No te dejamos solo. Estamos con vos en todo el proceso." },
  { icon: BadgeDollarSign, title: "Precios accesibles", desc: "Soluciones profesionales pensadas para PyMEs." },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">¿Por qué nosotros?</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            Lo que nos{" "}
            <span className="gradient-text">hace diferentes</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-shadow border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <r.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
