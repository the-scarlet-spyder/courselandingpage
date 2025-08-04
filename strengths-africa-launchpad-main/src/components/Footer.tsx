import { Instagram, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <img src="/flyers/logo.png" alt="Strengths Africa Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="font-bold text-xl">Strengths Africa</span>
            </div>
            <p className="text-secondary-foreground/80">
              Empowering professionals with cutting-edge training programs for the future-ready workplace.
            </p>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect With Us</h4>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://www.instagram.com/strengthsafrica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@strengthsafrica</span>
              </a>
              <a 
                href="https://www.strengthsafrica.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>www.strengthsafrica.com</span>
              </a>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Contact</h4>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white w-full md:w-auto"
              onClick={() => window.open('https://wa.me/09040002224', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © 2024 Strengths Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;