import { Instagram, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="L&R Solutions" className="h-8 w-8 object-contain" />
            <span className="font-display font-semibold text-sm text-foreground">L&R Solutions</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:lrsolutionspartners@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://www.instagram.com/lrsolutionsar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/lrsolutionspartners/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Hecho con 💙 por L&R Solutions · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
