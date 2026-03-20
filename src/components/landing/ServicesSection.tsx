import { motion } from "framer-motion";
import { Monitor, Globe, Wrench, LayoutDashboard, ArrowUpRight, Bot } from "lucide-react";
import TiltCard from "./TiltCard";

const services = [
  { icon: LayoutDashboard, title: "Sistemas de gestión", desc: "Software a medida para controlar ventas, stock, clientes, comisiones y todo lo que tu negocio necesite." },
  { icon: Monitor, title: "Aplicaciones web", desc: "Plataformas modernas, rápidas y seguras accesibles desde cualquier dispositivo." },
  { icon: Globe, title: "Páginas web", desc: "Sitios atractivos, responsivos y optimizados para que tu marca tenga presencia online." },
  { icon: Wrench, title: "Mantenimiento y soporte", desc: "Te acompañamos después de la entrega con soporte continuo y mejoras." },
  { icon: Bot, title: "Agentes Virtuales con IA", desc: "Agentes conversacionales disponibles 24/7 que atienden clientes, responden consultas y automatizan procesos repetitivos, integrándose a tus sistemas existentes." },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,hsl(200,80%,55%,0.04),transparent)]" />
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <TiltCard className="group h-full">
                <div className="relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-[0_0_30px_hsl(200,80%,55%,0.08)] transition-all duration-300 flex gap-4 overflow-hidden h-full">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[radial-gradient(circle,hsl(200,80%,55%,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:shadow-[0_0_20px_hsl(200,80%,55%,0.2)] transition-shadow duration-300">
                    <s.icon size={20} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0 relative">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display font-semibold text-sm">{s.title}</h3>
                      <ArrowUpRight size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
