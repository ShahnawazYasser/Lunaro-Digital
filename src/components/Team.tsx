import React from 'react';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import Section from './Section';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Shahnawaz Yasser',
      role: 'Solutions Architect & Founder',
      bio: 'Front-end developer with 4+ years of experience in modern web technologies. Specializes in React, Wordpress, Shopify',
      image: 'https://lunaro-assests.s3.eu-north-1.amazonaws.com/Screenshot+2025-09-28+092526.png',
      social: {
        linkedin: 'https://linkedin.com/in/Shahnawaz-Yasser',
        github: 'https://github.com/ShahnawazYasser',
        instagram: 'https://www.instagram.com/shahnawaz_yasser/'
      }
    },
    {
      name: 'Saifullah Khan',
      role: 'Marketing Strategist',
      bio: 'SEO and social media marketing expert with proven track record of growing brands online. 3+ years in digital strategy and content marketing.',
      image: 'https://lunaro-assests.s3.eu-north-1.amazonaws.com/Screenshot+2025-09-28+091422.png',
      social: {
        linkedin: 'https://linkedin.com/in/Saifullah-Khan',
        instagram: 'https://www.instagram.com/rana.khan24/'
      }
    },
    {
      name: 'Shahjahan Khan',
      role: 'Data Scientist',
      bio: 'Data scientist with expertise in web analytics, conversion optimization, and business intelligence. Transforms complex data into actionable insights.',
      image: 'https://lunaro-assests.s3.eu-north-1.amazonaws.com/Screenshot+2025-09-28+091031.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/shahjahan-khan-pf/',
        github: 'https://github.com/shahjahanburki/'
      }
    }
  ];

  return (
    <Section id="team" className="min-h-screen lg:h-screen bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our talented professionals bring years of experience in digital strategy, web development, and online marketing to help your business thrive in the digital space.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role} at Lunaro Digital Solutions`}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-slate-600 group-hover:border-blue-400 transition-colors duration-300 group-hover:scale-105 transform"
                />
                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-tr from-blue-600/20 to-transparent group-hover:from-blue-600/40 transition-all duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-blue-400 font-medium mb-4">{member.role}</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">{member.bio}</p>
              
              <div className="flex justify-center space-x-4">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.social.instagram && (
                  <a href={member.social.instagram} className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Team;