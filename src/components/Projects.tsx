
import React, { useState } from 'react';
import { Code, Smartphone, Globe, Database } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  technologies: string[];
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Application de Gestion des Tâches",
      category: "mobile",
      icon: Smartphone,
      description: "Application Flutter permettant de gérer des tâches quotidiennes avec des fonctionnalités de rappel et de catégorisation.",
      technologies: ["Flutter", "Dart", "Firebase"]
    },
    {
      id: 2,
      title: "Portfolio Professionnel",
      category: "web",
      icon: Globe,
      description: "Site web responsive présentant mon parcours et mes compétences, avec une interface intuitive et moderne.",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "Module de Gestion des Stocks Odoo",
      category: "erp",
      icon: Database,
      description: "Personnalisation d'Odoo pour la gestion des stocks avec des fonctionnalités adaptées aux besoins spécifiques.",
      technologies: ["Python", "Odoo", "PostgreSQL"]
    },
    {
      id: 4,
      title: "API de Services Web",
      category: "backend",
      icon: Code,
      description: "Développement d'une API RESTful pour faciliter l'intégration entre différents services web.",
      technologies: ["Python", "Django", "REST API"]
    },
    {
      id: 5,
      title: "Application de Suivi Sportif",
      category: "mobile",
      icon: Smartphone,
      description: "Application mobile pour suivre les performances sportives, avec visualisation de statistiques.",
      technologies: ["Flutter", "Dart", "Charts"]
    },
    {
      id: 6,
      title: "Plateforme E-commerce",
      category: "web",
      icon: Globe,
      description: "Site e-commerce avec fonctionnalités de panier, paiement et gestion des produits.",
      technologies: ["HTML", "CSS", "JavaScript", "Python"]
    }
  ];
  
  const filterButtons = [
    { id: 'all', label: 'Tous' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'web', label: 'Web' },
    { id: 'backend', label: 'Backend' },
    { id: 'erp', label: 'ERP' }
  ];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
            Réalisations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets et Réalisations</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Une sélection de projets que j'ai développés, démontrant mes compétences techniques.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterButtons.map(button => (
            <button
              key={button.id}
              onClick={() => setActiveFilter(button.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === button.id 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'bg-secondary text-foreground/70 hover:bg-secondary/80'
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.id}
                className="animate-on-scroll glass rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-primary/10 rounded-lg text-primary inline-block mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium bg-secondary px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
