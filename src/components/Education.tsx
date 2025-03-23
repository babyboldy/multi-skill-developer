
import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
            Académique
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Formation</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mon parcours académique et ma formation continue.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-xl p-8 animate-on-scroll shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start">
              <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Baccalauréat Français - Option Scientifique</h3>
                <p className="text-muted-foreground mb-4">Obtention du diplôme avec une solide formation en sciences et technologies.</p>
                
                <div className="mt-6">
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Formation Continue</h4>
                      <p className="text-foreground/80">
                        Je me forme continuellement à travers des ressources en ligne, des tutoriels et des cours spécialisés pour rester à jour avec les dernières technologies et pratiques de développement.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Développement Mobile</h5>
                      <p className="text-sm text-foreground/80">Flutter, React Native, développement d'applications iOS et Android.</p>
                    </div>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Développement Web</h5>
                      <p className="text-sm text-foreground/80">HTML/CSS, JavaScript, frameworks modernes.</p>
                    </div>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Backend & Bases de Données</h5>
                      <p className="text-sm text-foreground/80">Python, Django, SQL, conception d'API.</p>
                    </div>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Design & UI/UX</h5>
                      <p className="text-sm text-foreground/80">Figma, principes de design, prototypage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
