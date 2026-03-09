import { motion } from "framer-motion";
import { Users, BarChart3, Package, Star } from "lucide-react";
import TiltCard from "./TiltCard";

const metrics = [
  { icon: Users, value: "10", label: "Vendedores usando el sistema" },
  { icon: BarChart3, value: "100%", label: "Control de ventas" },
  { icon: Package, value: "Stock", label: "En tiempo real" },
  { icon: Star, value: "5★", label: "Satisfacción del cliente" },
];

const CaseStudySection = () => {
  return (
    <section id="caso" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,hsl(155,60%,50%,0.06),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

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
            Caso de éxito
            <span className="w-8 h-px bg-secondary/50" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            <span className="gradient-text">Vartan Sports</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm">
            Sistema de gestión integral para un local de indumentaria deportiva.
            Control total de ventas, stock, comisiones y clientes en una sola plataforma.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <TiltCard className="group h-full">
                <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-secondary/30 hover:shadow-[0_0_30px_hsl(155,60%,50%,0.08)] transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-3 group-hover:bg-secondary/10 group-hover:shadow-[0_0_15px_hsl(155,60%,50%,0.1)] transition-all duration-300">
                    <m.icon size={20} className="text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <motion.span
                    className="text-2xl font-display font-bold gradient-text"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {m.value}
                  </motion.span>
                  <span className="text-xs text-muted-foreground mt-1">{m.label}</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <TiltCard className="max-w-2xl mx-auto group">
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 relative hover:border-primary/20 hover:shadow-[0_0_40px_hsl(200,80%,55%,0.06)] transition-all duration-300">
              <div className="absolute -top-3 left-8 px-2 bg-background text-xs font-mono text-muted-foreground">testimonial</div>
              <div className="absolute top-4 right-6 text-4xl font-display text-primary/10">"</div>
              <p className="text-sm italic text-muted-foreground leading-relaxed mb-4 relative">
                "Antes llevábamos todo en cuadernos y perdíamos tiempo. Ahora con el sistema de L&R,
                tenemos todo organizado y cada vendedor puede trabajar de forma independiente.
                Nos cambió la forma de trabajar."
              </p>
              <p className="font-display font-semibold text-sm gradient-text">— Equipo Vartan Sports</p>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
