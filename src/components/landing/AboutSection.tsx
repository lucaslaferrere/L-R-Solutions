import { motion } from "framer-motion";
import { GraduationCap, Heart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Sobre nosotros</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-6">
              Somos Lucas y Belén,{" "}
              <span className="gradient-text">los que están detrás de L&R</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">L&R</strong> viene de nuestros apellidos: <strong className="text-foreground">Laferrère & Romeo</strong>. 
                Somos estudiantes de Ingeniería en Sistemas de la Información en la UTN 
                y apasionados por la tecnología desde siempre.
              </p>
              <p>
                Arrancamos con una idea simple: usar lo que aprendemos en la carrera para ayudar 
                a negocios reales a resolver problemas reales. Y acá estamos, convirtiendo esa idea en realidad.
              </p>
              <p>
                Somos jóvenes, pero eso no nos quita profesionalismo. Al contrario: 
                le sumamos energía, velocidad y una obsesión por hacer las cosas bien.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {[
              { icon: GraduationCap, title: "Formación universitaria", desc: "Aplicamos metodologías y conocimientos de ingeniería de software de la UTN." },
              { icon: Heart, title: "Pasión genuina", desc: "No hacemos esto por obligación. Lo hacemos porque nos encanta crear soluciones." },
              { icon: Lightbulb, title: "Mentalidad emprendedora", desc: "Entendemos tu negocio porque también somos emprendedores construyendo el nuestro." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card shadow-card border border-border/50">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
