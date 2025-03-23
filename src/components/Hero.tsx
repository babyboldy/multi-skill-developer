
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row md:items-center">
          <div className="md:w-3/5 mt-10 md:mt-0">
            <div className="animate-on-scroll">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
                Développement Web & Mobile
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-foreground">
                Marie Joseph Kossonou
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
                Développeuse Polyvalente en Technologies Web et Mobile
              </h2>
              <p className="text-base md:text-lg text-foreground/80 max-w-xl mb-8">
                Développeuse passionnée et polyvalente avec 2 ans d'expérience dans le secteur de la tech, 
                spécialisée dans le développement d'applications mobiles, web et la personnalisation d'Odoo.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                >
                  Me contacter
                </a>
                <a
                  href="#skills"
                  className="px-6 py-3 bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  Voir mes compétences
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center animate-on-scroll">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/lovable-uploads/7b2e77eb-d58b-4ad3-9b92-b3c4ca745881.png"
                alt="Marie Joseph Kossonou"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
