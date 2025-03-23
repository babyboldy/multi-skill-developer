
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactItem = ({ 
  icon: Icon, 
  title, 
  content, 
  href 
}: { 
  icon: React.ElementType; 
  title: string; 
  content: string; 
  href?: string;
}) => (
  <div className="flex items-start animate-on-scroll">
    <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4">
      <Icon size={20} />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      {href ? (
        <a 
          href={href} 
          className="text-foreground/80 hover:text-primary transition-colors"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <p className="text-foreground/80">{content}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Me Contacter</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass rounded-xl p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <ContactItem 
                icon={Mail} 
                title="Email" 
                content="mariejosephkossonou@gmail.com" 
                href="mailto:mariejosephkossonou@gmail.com" 
              />
              <ContactItem 
                icon={Phone} 
                title="Téléphone" 
                content="0708642974" 
                href="tel:0708642974" 
              />
              <ContactItem 
                icon={MapPin} 
                title="Localisation" 
                content="2 plateaux Aghien" 
              />
              <ContactItem 
                icon={Github} 
                title="GitHub" 
                content="github.com/babyboldy" 
                href="https://github.com/babyboldy" 
              />
              <ContactItem 
                icon={Linkedin} 
                title="LinkedIn" 
                content="Marie Joseph Kossonou" 
                href="https://www.linkedin.com/in/marie-joseph-kossonou-4b3804291" 
              />
            </div>
            
            <form className="space-y-4 animate-on-scroll">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Votre nom"
                  className="w-full p-3 rounded-lg border border-border bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Votre email"
                  className="w-full p-3 rounded-lg border border-border bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Votre message"
                  className="w-full p-3 rounded-lg border border-border bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
