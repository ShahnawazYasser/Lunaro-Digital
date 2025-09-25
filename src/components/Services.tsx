import React from 'react';
import { Globe, Share2, BarChart3 } from 'lucide-react';
import Section from './Section';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description:
        'Custom website development using modern technologies. We create responsive, fast-loading websites that convert visitors into customers and enhance your online presence.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Performance Optimization', 'Custom Development'],
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description:
        'Comprehensive social media management and marketing strategies. We help build your brand presence across platforms and engage with your target audience effectively.',
      features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting'],
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description:
        'Comprehensive data analysis and reporting services. Transform your business data into actionable insights that drive informed decision-making and strategic growth.',
      features: ['Performance Metrics', 'User Behavior Analysis', 'Conversion Tracking', 'Custom Dashboards'],
    },
  ];

  return (
    <Section 
      id="services" 
      // ❌ remove full-screen on mobile, ✅ keep it on desktop+
      className="bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen lg:h-screen flex flex-col justify-center py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Digital Solutions
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            Comprehensive digital services designed to accelerate your business growth through strategic online presence and data-driven marketing approaches.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 
              hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 mb-4 rounded-xl bg-blue-600/20 border border-blue-500/30 
                group-hover:bg-blue-600/30 transition-colors duration-300">
                  <service.icon className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base mb-4">{service.description}</p>
                <ul className="space-y-1 text-sm md:text-base">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;