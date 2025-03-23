
import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const ExperienceCard = ({ 
  title, 
  period, 
  description, 
  delay 
}: { 
  title: string; 
  period: string; 
  description: string; 
  delay: number;
}) => (
  <div 
    className="animate-on-scroll glass rounded-xl p-6 hover:shadow-md transition-all duration-300"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="flex items-center text-muted-foreground mb-4">
      <Calendar size={16} className="mr-2" />
      <span className="text-sm">{period}</span>
    </div>
    <p className="text-foreground/80">{description}</p>
  </div>
);

const Experience = () => {
  const experienceItems = [
    {
      title: "Développeuse Polyvalente - Projets Personnels",
      period: "2 dernières années",
      description: "Conception et développement d'applications mobiles avec Flutter, création de sites web, et personnalisation d'Odoo pour divers projets personnels et collaboratifs.",
      delay: 100
    },
    {
      title: "Projets Collaboratifs",
      period: "En continu",
      description: "Participation à des projets open-source et collaboratifs pour développer mes compétences pratiques et m'immerger dans un environnement de travail d'équipe.",
      delay: 200
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
            Parcours
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expérience Professionnelle</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mon expérience acquise à travers des projets personnels et collaboratifs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceItems.map((item, index) => (
            <ExperienceCard 
              key={index}
              title={item.title}
              period={item.period}
              description={item.description}
              delay={item.delay * index}
            />
          ))}
        </div>
        
        <div className="mt-12 glass rounded-xl p-6 animate-on-scroll">
          <div className="flex items-start">
            <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4 mt-1">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Approche Professionnelle</h3>
              <p className="text-foreground/80">
                Bien que n'ayant pas encore d'expérience professionnelle officielle, j'ai acquis au cours de ces deux années une solide expérience en développant divers projets personnels et collaboratifs dans le domaine de la tech. J'ai mis en pratique mes compétences techniques et de design dans des contextes variés, adoptant une approche rigoureuse et professionnelle similaire à celle d'un environnement d'entreprise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
