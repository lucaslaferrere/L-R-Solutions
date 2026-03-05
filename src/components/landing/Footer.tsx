import { Instagram, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="L&R Solutions" className="h-10 w-10 object-contain" />
            <span className="font-display font-bold text-lg text-background">L&R Solutions</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:lrsolutionspartners@gmail.com" className="text-background/60 hover:text-background transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://www.instagram.com/lrsolutionsar" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/lrsolutionspartners/" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/50">
            Hecho con 💙 por L&R Solutions · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
