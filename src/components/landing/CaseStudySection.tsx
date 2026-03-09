import { motion } from "framer-motion";
import { Users, BarChart3, Package, Star } from "lucide-react";

const metrics = [
  { icon: Users, value: "10", label: "Vendedores usando el sistema" },
  { icon: BarChart3, value: "100%", label: "Control de ventas" },
  { icon: Package, value: "Stock", label: "En tiempo real" },
  { icon: Star, value: "5★", label: "Satisfacción del cliente" },
];

const CaseStudySection = () => {
  return (
    <section id="caso" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,hsl(155,60%,50%,0.06),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-3">
                <m.icon size={20} className="text-primary" />
              </div>
              <span className="text-2xl font-display font-bold gradient-text">{m.value}</span>
              <span className="text-xs text-muted-foreground mt-1">{m.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-xl border border-border bg-card p-8 relative"
        >
          <div className="absolute -top-3 left-8 px-2 bg-background text-xs font-mono text-muted-foreground">testimonial</div>
          <p className="text-sm italic text-muted-foreground leading-relaxed mb-4">
            "Antes llevábamos todo en cuadernos y perdíamos tiempo. Ahora con el sistema de L&R,
            tenemos todo organizado y cada vendedor puede trabajar de forma independiente.
            Nos cambió la forma de trabajar."
          </p>
          <p className="font-display font-semibold text-sm gradient-text">— Equipo Vartan Sports</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
