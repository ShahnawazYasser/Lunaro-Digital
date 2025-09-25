import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Rocket, Stars } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.7 } // at least 70% of hero must be visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"
    >
      <AnimatedBackground />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
          <div className="flex items-center justify-center mb-6">
            <Rocket className="text-blue-400 w-12 h-12 mr-4 animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
              Lunaro
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-blue-200 mb-4 font-light">
            Shaping Your Digital Presence
          </p>

          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your business with cutting-edge website development,
            strategic social media marketing, powerful SEO services, and
            data-driven insights that propel your digital growth.
          </p>

          <button
            onClick={scrollToAbout}
            className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
          >
            <span className="flex items-center">
              Let's Build Together
              <Stars className="ml-2 w-5 h-5 group-hover:animate-spin transition-transform" />
            </span>
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-400 animate-bounce hover:text-blue-300 transition-colors"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;