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
    <section id="caso" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Caso de éxito</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            <span className="gradient-text">Vartan Sports</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sistema de gestión integral para un local de indumentaria deportiva. 
            Control total de ventas, stock, comisiones y clientes en una sola plataforma.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-background shadow-card border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <m.icon size={22} className="text-primary-foreground" />
              </div>
              <span className="text-3xl font-display font-bold gradient-text">{m.value}</span>
              <span className="text-sm text-muted-foreground mt-1">{m.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-background rounded-2xl p-8 shadow-card border border-border/50 text-center"
        >
          <p className="text-lg italic text-foreground leading-relaxed mb-4">
            "Antes llevábamos todo en cuadernos y perdíamos tiempo. Ahora con el sistema de L&R, 
            tenemos todo organizado y cada vendedor puede trabajar de forma independiente. 
            Nos cambió la forma de trabajar."
          </p>
          <p className="font-display font-semibold gradient-text">— Equipo Vartan Sports</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
