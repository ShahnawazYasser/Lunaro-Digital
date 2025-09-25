import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Section from './Section';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'EcoMart E-commerce Platform',
      description: 'Modern e-commerce website development with integrated payment systems, inventory management, and social media marketing campaign that increased online sales by 150%.',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Website Development', 'E-commerce', 'SEO'],
      link: '#',
      github: '#'
    },
    {
      title: 'TechStartup Analytics Dashboard',
      description: 'Comprehensive data analysis platform with real-time metrics, user behavior tracking, and automated SEO reporting for a growing technology startup.',
      image: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Data Analysis', 'Dashboard', 'Analytics'],
      link: '#',
      github: '#'
    },
    {
      title: 'Local Restaurant Digital Growth',
      description: 'Complete digital transformation including website development, social media management, local SEO optimization, and data-driven marketing strategies.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Website Development', 'Social Media', 'Local SEO'],
      link: '#'
    },
    {
      title: 'Healthcare Practice Online Presence',
      description: 'Professional website development and strategic SEO services that improved online visibility by 200% and patient appointment bookings.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Website Development', 'SEO Services', 'Healthcare'],
      link: '#'
    }
  ];

  return (
    <Section id="portfolio" className="bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Success Stories
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their digital presence through innovative website development, strategic social media marketing, and data-driven SEO services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - Lunaro digital solutions portfolio project showcasing ${project.tags.join(', ').toLowerCase()}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent group-hover:from-slate-900/60 transition-all duration-300"></div>
                
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.link && (
                    <a
                      href={project.link}
                      className="p-2 bg-slate-900/80 rounded-full text-white hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
                      aria-label={`View ${project.title} project`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="p-2 bg-slate-900/80 rounded-full text-white hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs text-blue-300 group-hover:bg-blue-600/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;