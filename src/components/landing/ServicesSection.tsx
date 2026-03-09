import { motion } from "framer-motion";
import { Monitor, Globe, Wrench, LayoutDashboard, ArrowUpRight } from "lucide-react";

const services = [
  { icon: LayoutDashboard, title: "Sistemas de gestión", desc: "Software a medida para controlar ventas, stock, clientes, comisiones y todo lo que tu negocio necesite." },
  { icon: Monitor, title: "Aplicaciones web", desc: "Plataformas modernas, rápidas y seguras accesibles desde cualquier dispositivo." },
  { icon: Globe, title: "Páginas web", desc: "Sitios atractivos, responsivos y optimizados para que tu marca tenga presencia online." },
  { icon: Wrench, title: "Mantenimiento y soporte", desc: "Te acompañamos después de la entrega con soporte continuo y mejoras." },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,hsl(200,80%,55%,0.04),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-secondary uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-secondary/50" />
            Nuestros servicios
            <span className="w-8 h-px bg-secondary/50" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            Soluciones que{" "}
            <span className="gradient-text">impulsan tu negocio</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
            Incluimos UX/UI, relevamiento, diseño, desarrollo, pruebas e implementación. Todo el proceso, de principio a fin.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                <s.icon size={20} className="text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display font-semibold text-sm">{s.title}</h3>
                  <ArrowUpRight size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
