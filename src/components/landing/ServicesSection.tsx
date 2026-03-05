import { motion } from "framer-motion";
import { Monitor, Globe, Wrench, LayoutDashboard } from "lucide-react";

const services = [
  { icon: LayoutDashboard, title: "Sistemas de gestión", desc: "Software a medida para controlar ventas, stock, clientes, comisiones y todo lo que tu negocio necesite." },
  { icon: Monitor, title: "Aplicaciones web", desc: "Plataformas modernas, rápidas y seguras accesibles desde cualquier dispositivo." },
  { icon: Globe, title: "Páginas web", desc: "Sitios atractivos, responsivos y optimizados para que tu marca tenga presencia online." },
  { icon: Wrench, title: "Mantenimiento y soporte", desc: "Te acompañamos después de la entrega con soporte continuo y mejoras." },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Nuestros servicios</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            Soluciones que{" "}
            <span className="gradient-text">impulsan tu negocio</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Incluimos UX/UI, relevamiento, diseño, desarrollo, pruebas e implementación. Todo el proceso, de principio a fin.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="gradient-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all border border-border/50 group text-center"
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <s.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
