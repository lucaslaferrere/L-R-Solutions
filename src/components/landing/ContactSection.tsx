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
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,hsl(200,80%,55%,0.06),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-primary/50" />
            Contacto
            <span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            ¿Listo para{" "}
            <span className="gradient-text">simplificar tu negocio?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            Contanos tu situación y te armamos una propuesta a medida. Sin compromiso.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto rounded-xl border border-border bg-card p-8 space-y-4"
        >
          <div>
            <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Nombre</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition placeholder:text-muted-foreground/50"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition placeholder:text-muted-foreground/50"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Mensaje</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition resize-none placeholder:text-muted-foreground/50"
              placeholder="Contanos sobre tu negocio y qué necesitás..."
            />
          </div>
          <button
            type="submit"
            className="w-full gradient-bg text-primary-foreground py-2.5 rounded-lg font-medium shadow-btn hover:shadow-glow transition-all flex items-center justify-center gap-2 text-sm"
          >
            <Send size={16} /> Enviar mensaje
          </button>
          <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Mail size={12} /> O escribinos directamente a lrsolutionspartners@gmail.com
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
