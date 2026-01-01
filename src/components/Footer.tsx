import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 relative">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Robert Wilson Peremobowei. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-1">
              Built with <Heart size={12} className="text-primary fill-primary" /> using React & Tailwind CSS
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation" className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Back to Top */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="rounded-full"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
