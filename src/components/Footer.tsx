
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-medium">Marie Joseph Kossonou</h3>
            <p className="text-sm text-muted-foreground">Développeuse Polyvalente en Technologies Web et Mobile</p>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <span>© {currentYear} - Tous droits réservés</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Créé avec <Heart size={14} className="mx-1 text-primary" /> et passion
            </span>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/10">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#profile" className="text-sm hover:text-primary transition-colors">Profil</a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">Compétences</a>
            <a href="#experience" className="text-sm hover:text-primary transition-colors">Expérience</a>
            <a href="#education" className="text-sm hover:text-primary transition-colors">Formation</a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">Projets</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
