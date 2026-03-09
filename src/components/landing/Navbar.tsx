import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Caso de éxito", href: "#caso" },
  { label: "Nosotros", href: "#nosotros" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-14">
        <a href="#" className="flex items-center gap-2.5 group">
          <img src={logo} alt="L&R Solutions" className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105" />
          <span className="font-display font-semibold text-sm text-foreground">L&R Solutions</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-muted/50 relative group"
            >
              {l.label}
              <span className="absolute bottom-0 left-3 right-3 h-px bg-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
          <motion.a
            href="#contacto"
            className="ml-3 gradient-bg text-primary-foreground px-4 py-1.5 rounded-lg text-sm font-medium hover:shadow-[0_0_20px_hsl(200,80%,55%,0.3)] transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contactanos
          </motion.a>
        </div>

        <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container flex flex-col gap-1 py-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-muted/50"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="gradient-bg text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium text-center mt-2"
              >
                Contactanos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
