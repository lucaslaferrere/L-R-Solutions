import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, X } from "lucide-react";

const commands = [
  { label: "Ir a Servicios", section: "servicios", shortcut: "S" },
  { label: "Ir a Proceso", section: "proceso", shortcut: "P" },
  { label: "Ir a Caso de éxito", section: "caso", shortcut: "C" },
  { label: "Ir a Nosotros", section: "nosotros", shortcut: "N" },
  { label: "Ir a Contacto", section: "contacto", shortcut: "K" },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = query
    ? commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))
    : commands;

  const navigate = useCallback((section: string) => {
    setOpen(false);
    setQuery("");
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg z-50 px-4"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <div className="rounded-xl border border-border bg-card shadow-[0_0_60px_hsl(200,80%,55%,0.15)] overflow-hidden">
              {/* Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <Search size={16} className="text-muted-foreground shrink-0" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar sección..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none font-mono"
                />
                <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X size={14} />
                </button>
              </div>

              {/* Results */}
              <div className="p-2">
                {filtered.length === 0 ? (
                  <p className="text-xs text-muted-foreground text-center py-6 font-mono">No encontrado</p>
                ) : (
                  filtered.map((cmd) => (
                    <button
                      key={cmd.section}
                      onClick={() => navigate(cmd.section)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-150 group text-left"
                    >
                      <span className="text-sm text-foreground group-hover:text-primary font-mono">{cmd.label}</span>
                      <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </button>
                  ))
                )}
              </div>

              {/* Footer hint */}
              <div className="px-4 py-2 border-t border-border flex items-center gap-3">
                <span className="text-[10px] font-mono text-muted-foreground">↵ navegar</span>
                <span className="text-[10px] font-mono text-muted-foreground">ESC cerrar</span>
                <span className="ml-auto text-[10px] font-mono text-muted-foreground">⌘K / Ctrl+K</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
