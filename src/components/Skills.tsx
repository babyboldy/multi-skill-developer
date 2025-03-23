
import React from 'react';
import { Command, Layout, Smartphone, Server, Figma, Star } from 'lucide-react';

const SkillCard = ({ 
  icon: Icon, 
  title, 
  skills, 
  delay 
}: { 
  icon: React.ElementType; 
  title: string; 
  skills: string[]; 
  delay: number;
}) => (
  <div 
    className="animate-on-scroll tech-stack-item glass rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-center mb-4">
      <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center text-foreground/80">
          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      icon: Smartphone,
      title: "Développement Mobile",
      skills: ["Flutter", "Dart", "Applications iOS & Android"],
      delay: 100
    },
    {
      icon: Layout,
      title: "Développement Web",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      delay: 200
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Python", "Django", "Odoo (ERP)", "API REST"],
      delay: 300
    },
    {
      icon: Figma,
      title: "Design",
      skills: ["Figma", "UI/UX", "Prototypes", "Maquettes"],
      delay: 400
    },
    {
      icon: Star,
      title: "Qualités",
      skills: ["Travailleuse", "Rigoureuse", "Collaborative", "Adaptable"],
      delay: 500
    },
    {
      icon: Command,
      title: "Outils",
      skills: ["Git", "VS Code", "Postman", "Linux"],
      delay: 600
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences Techniques</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mes compétences couvrent un large éventail de technologies pour le développement web et mobile.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              delay={category.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
