import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';
import Section from './Section';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Focused on delivering digital solutions that drive real business growth and online success.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals specializing in web development, digital marketing, and data analysis.'
    },
    {
      icon: TrendingUp,
      title: 'Growth-Oriented',
      description: 'Strategic approach to building and optimizing your digital presence for maximum impact.'
    }
  ];

  return (
    <Section id="about" className="bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Lunaro?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            At Lunaro, we believe every business deserves a stellar digital presence. Our comprehensive digital solutions combine innovative website development with strategic social media marketing, powerful SEO services, and actionable data analysis to help your business reach new heights in the digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <feature.icon className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;