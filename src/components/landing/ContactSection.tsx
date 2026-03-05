import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta de ${form.name}`);
    const body = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:lrsolutionspartners@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contacto" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Contacto</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            ¿Listo para{" "}
            <span className="gradient-text">simplificar tu negocio?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Contanos tu situación y te armamos una propuesta a medida. Sin compromiso.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-background rounded-2xl p-8 shadow-card border border-border/50 space-y-5"
        >
          <div>
            <label className="text-sm font-medium mb-1.5 block">Nombre</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none transition"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none transition"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Mensaje</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none transition resize-none"
              placeholder="Contanos sobre tu negocio y qué necesitás..."
            />
          </div>
          <button
            type="submit"
            className="w-full gradient-bg text-primary-foreground py-3.5 rounded-xl font-semibold shadow-btn hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Send size={18} /> Enviar mensaje
          </button>
          <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Mail size={14} /> O escribinos directamente a lrsolutionspartners@gmail.com
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
