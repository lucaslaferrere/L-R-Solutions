import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const floatingShapes = [
  { size: 80, x: "10%", y: "20%", delay: 0, duration: 7 },
  { size: 60, x: "85%", y: "15%", delay: 1.5, duration: 8 },
  { size: 50, x: "75%", y: "70%", delay: 0.8, duration: 6 },
  { size: 40, x: "20%", y: "75%", delay: 2, duration: 9 },
  { size: 30, x: "50%", y: "10%", delay: 1, duration: 7.5 },
];

const HeroSection = () => {
  return (
    <section className="gradient-hero min-h-screen flex items-center pt-16 overflow-hidden relative">
      {/* Animated floating shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/10 bg-primary/5"
          style={{ width: shape.size, height: shape.size, left: shape.x, top: shape.y }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: shape.duration, repeat: Infinity, delay: shape.delay, ease: "easeInOut" }}
        />
      ))}

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/8 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/8 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card w-fit"
            >
              <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Sparkles size={16} className="text-secondary" />
              </motion.div>
              <span className="text-sm font-medium text-muted-foreground">Desarrollo de software a medida</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {"Tu negocio merece ".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.025, duration: 0.3 }}
                >
                  {char}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="gradient-text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                tecnología que trabaje por vos
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Somos el ibuprofeno tecnológico para tu dolor de cabeza.
              Transformamos procesos manuales en sistemas inteligentes que ahorran tiempo y hacen crecer tu negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <motion.a
                href="#contacto"
                className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-semibold shadow-btn hover:opacity-90 transition-all flex items-center justify-center gap-2 text-base"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 30px -8px hsl(200 80% 42% / 0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                Hablemos <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight size={18} /></motion.span>
              </motion.a>
              <motion.a
                href="#servicios"
                className="px-8 py-3.5 rounded-xl font-semibold border border-border bg-card hover:shadow-card-hover transition-all flex items-center justify-center gap-2 text-base text-foreground"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Code2 size={18} /> Ver servicios
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-20 scale-110"
                animate={{ opacity: [0.15, 0.3, 0.15], scale: [1.1, 1.2, 1.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Orbiting dots */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full gradient-bg"
                  style={{ top: "50%", left: "50%" }}
                  animate={{
                    x: [Math.cos((i * 2 * Math.PI) / 3) * 160, Math.cos((i * 2 * Math.PI) / 3 + Math.PI) * 160, Math.cos((i * 2 * Math.PI) / 3) * 160],
                    y: [Math.sin((i * 2 * Math.PI) / 3) * 160, Math.sin((i * 2 * Math.PI) / 3 + Math.PI) * 160, Math.sin((i * 2 * Math.PI) / 3) * 160],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                />
              ))}
              <motion.img
                src={logo}
                alt="L&R Solutions Logo"
                className="relative w-80 h-80 object-contain drop-shadow-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
