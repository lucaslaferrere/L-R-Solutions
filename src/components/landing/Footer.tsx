import { Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_100%,hsl(200,80%,55%,0.03),transparent)]" />
      <div className="container relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="L&R Solutions" className="h-8 w-8 object-contain" />
            <span className="font-display font-semibold text-sm text-foreground">L&R Solutions</span>
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: "mailto:lrsolutionspartners@gmail.com", icon: Mail, label: "Email" },
              { href: "https://www.instagram.com/lrsolutionsar", icon: Instagram, label: "Instagram" },
              { href: "https://www.linkedin.com/company/lrsolutionspartners/", icon: Linkedin, label: "LinkedIn" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-9 h-9 rounded-lg border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-[0_0_15px_hsl(200,80%,55%,0.1)] transition-all duration-300"
                aria-label={link.label}
                whileHover={{ y: -2 }}
              >
                <link.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            Hecho con 💙 por L&R Solutions · © {new Date().getFullYear()}
          </p>
          <span className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-secondary"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Sistema operativo · 99.9% uptime
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
