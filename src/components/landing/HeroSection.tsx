import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="gradient-hero min-h-screen flex items-center pt-16 overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card w-fit">
              <Sparkles size={16} className="text-secondary" />
              <span className="text-sm font-medium text-muted-foreground">Desarrollo de software a medida</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Tu negocio merece{" "}
              <span className="gradient-text">tecnología que trabaje por vos</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Somos el ibuprofeno tecnológico para tu dolor de cabeza. 
              Transformamos procesos manuales en sistemas inteligentes que ahorran tiempo y hacen crecer tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#contacto"
                className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-semibold shadow-btn hover:opacity-90 transition-all flex items-center justify-center gap-2 text-base"
              >
                Hablemos <ArrowRight size={18} />
              </a>
              <a
                href="#servicios"
                className="px-8 py-3.5 rounded-xl font-semibold border border-border bg-card hover:shadow-card-hover transition-all flex items-center justify-center gap-2 text-base text-foreground"
              >
                <Code2 size={18} /> Ver servicios
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-20 scale-110" />
              <img
                src={logo}
                alt="L&R Solutions Logo"
                className="relative w-80 h-80 object-contain animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
