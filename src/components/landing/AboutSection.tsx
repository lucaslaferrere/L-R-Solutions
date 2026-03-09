import { motion } from "framer-motion";
import { GraduationCap, Heart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_80%,hsl(200,80%,55%,0.04),transparent)]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-primary/50" />
              Sobre nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-6">
              Somos Lucas y Belén,{" "}
              <span className="gradient-text">los que están detrás de L&R</span>
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
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

            {/* Code-style detail */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 rounded-lg border border-border bg-card/50 p-3 font-mono text-xs text-muted-foreground"
            >
              <span className="text-primary/60">const</span> <span className="text-secondary">founders</span> = [<span className="text-foreground/80">"Lucas"</span>, <span className="text-foreground/80">"Belén"</span>];
              <br />
              <span className="text-primary/60">const</span> <span className="text-secondary">mission</span> = <span className="text-foreground/80">"simplificar negocios"</span>;
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid gap-3"
          >
            {[
              { icon: GraduationCap, title: "Formación universitaria", desc: "Aplicamos metodologías y conocimientos de ingeniería de software de la UTN." },
              { icon: Heart, title: "Pasión genuina", desc: "No hacemos esto por obligación. Lo hacemos porque nos encanta crear soluciones." },
              { icon: Lightbulb, title: "Mentalidad emprendedora", desc: "Entendemos tu negocio porque también somos emprendedores construyendo el nuestro." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group flex gap-4 p-5 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-[0_0_30px_hsl(200,80%,55%,0.08)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_hsl(200,80%,55%,0.1)] transition-all duration-300">
                  <item.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
