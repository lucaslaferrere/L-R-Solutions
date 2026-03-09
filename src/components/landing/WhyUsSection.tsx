import { motion } from "framer-motion";
import { Zap, Target, Heart, Users, BadgeDollarSign, Compass } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Velocidad", desc: "Entregamos rápido sin sacrificar calidad." },
  { icon: Compass, title: "Pensamos con vos", desc: "Te ayudamos a definir objetivos y requerimientos para encontrar la solución más efectiva y eficaz." },
  { icon: Target, title: "Metodología profesional", desc: "Aplicamos lo que aprendemos en la UTN con rigor." },
  { icon: Heart, title: "Perfeccionismo", desc: "Cada detalle importa, no nos conformamos con poco." },
  { icon: Users, title: "Acompañamiento", desc: "No te dejamos solo. Estamos con vos en todo el proceso." },
  { icon: BadgeDollarSign, title: "Precios accesibles", desc: "Soluciones profesionales pensadas para PyMEs." },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,hsl(155,60%,50%,0.05),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-secondary uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-secondary/50" />
            ¿Por qué nosotros?
            <span className="w-8 h-px bg-secondary/50" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            Lo que nos{" "}
            <span className="gradient-text">hace diferentes</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-[0_0_30px_hsl(200,80%,55%,0.08)] transition-all duration-300 overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(200,80%,55%,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_hsl(200,80%,55%,0.1)] transition-all duration-300">
                  <r.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
