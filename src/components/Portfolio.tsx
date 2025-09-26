import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Section from './Section';

const Portfolio: React.FC = () => {
  type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    github?: string;
  };

  const projects: Project[] = [
    {
      title: 'RuStudio - Clothing Brand',
      description: 'Modern e-commerce website development with integrated payment systems, inventory management, and social media marketing campaign that increased online sales by 150%.',
      image: 'https://lunaro-assests.s3.eu-north-1.amazonaws.com/Screenshot+2025-09-26+081429.png',
      tags: ['Website Development', 'E-commerce', 'SEO'],
      link: 'https://www.rustudioofficial.com',
      github: undefined // Add github link if available
    },
    {
      title: 'TechStartup Analytics Dashboard',
      description: 'Comprehensive data analysis platform with real-time metrics, user behavior tracking, and automated SEO reporting for a growing technology startup.',
      image: 'https://lunaro-assests.s3.eu-north-1.amazonaws.com/Dashboard+picture.jpg',
      tags: ['Data Analysis', 'Dashboard', 'Analytics'],
      link: '#',
      github: undefined // Add github link if available
    },
    {
      title: 'Interoceanic Partners - Consulting Firm',
      description: 'Complete digital transformation including website development, local SEO optimization, and data-driven marketing strategies.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Website Development', 'Social Media', 'Local SEO'],
      link: 'http://www.interoceanicpartners.com/',
      github: undefined // Add github link if available
    },
    {
      title: 'Doha Fantasy Cakes - Bakery',
      description: 'Professional website development and strategic SEO services that improved online visibility by 200% and order bookings.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Website Development', 'SEO Services', 'Food Industry'],
      link: 'https://dohafantasycakes.com/',
      github: undefined // Add github link if available
    }
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  // --- Carousel Dragging Logic for MD and up ---
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current || window.innerWidth < 768) return; // Only enable on desktop
    isDragging.current = true;
    startPos.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.cursor = 'grabbing';
    carouselRef.current.style.scrollSnapType = 'none';
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 768) return;
    isDragging.current = false;
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
      carouselRef.current.style.scrollSnapType = 'x mandatory';
    }
  };

  const onMouseUp = () => {
    if (window.innerWidth < 768) return;
    isDragging.current = false;
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
      carouselRef.current.style.scrollSnapType = 'x mandatory';
      updateActiveDot();
    }
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !carouselRef.current || window.innerWidth < 768) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startPos.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };
  // --- END Carousel Dragging Logic ---

  // --- Dot Navigation Logic for MD and up ---
  const updateActiveDot = useCallback(() => {
    if (!carouselRef.current || window.innerWidth < 768) return; // Only update dots on desktop

    const scrollPos = carouselRef.current.scrollLeft;
    // Calculate visible width - taking into account the p-4 (16px) on each side of the container's inner elements.
    // The actual "slide" is w-full in the carousel, effectively 100% of the viewport minus main container padding.
    const containerWidth = carouselRef.current.offsetWidth;
    // For 1-card-per-view carousel (desktop), the slide width is the container width itself
    const slideWidth = containerWidth; 
    
    // We want to snap to each "project card". Since each card is inside a div with p-4 on all sides,
    // and the carousel container also has global px-4, let's simplify.
    // For a single item taking 100% width, the "snap point" is simply the start of each project.
    let currentDot = Math.round(scrollPos / slideWidth);

    // Ensure currentDot does not exceed bounds
    currentDot = Math.max(0, Math.min(currentDot, projects.length - 1));
    setActiveDot(currentDot);
  }, [projects.length]);

  const scrollToDot = (index: number) => {
    if (!carouselRef.current || window.innerWidth < 768) return; // Only scroll on desktop
    const slideWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth',
    });
    setActiveDot(index);
  };

  useEffect(() => {
    const handleScroll = () => updateActiveDot();
    const currentCarousel = carouselRef.current;

    if (currentCarousel && window.innerWidth >= 768) { // Attach listeners only on desktop
      currentCarousel.addEventListener('scroll', handleScroll);
      currentCarousel.addEventListener('touchend', handleScroll);
      currentCarousel.addEventListener('mouseup', handleScroll);
      updateActiveDot();
    }

    const handleResize = () => {
      // Re-evaluate carousel/grid visibility and dot state on resize
      if (window.innerWidth >= 768) {
        if (currentCarousel) {
          currentCarousel.addEventListener('scroll', handleScroll);
          currentCarousel.addEventListener('touchend', handleScroll);
          currentCarousel.addEventListener('mouseup', handleScroll);
        }
        updateActiveDot();
      } else {
        // Clean up listeners if switching to mobile view
        if (currentCarousel) {
          currentCarousel.removeEventListener('scroll', handleScroll);
          currentCarousel.removeEventListener('touchend', handleScroll);
          currentCarousel.removeEventListener('mouseup', handleScroll);
        }
        setActiveDot(0); // Reset active dot on mobile
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (currentCarousel) {
        currentCarousel.removeEventListener('scroll', handleScroll);
        currentCarousel.removeEventListener('touchend', handleScroll);
        currentCarousel.removeEventListener('mouseup', handleScroll);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [updateActiveDot]);
  // --- END Dot Navigation Logic ---

  return (
    <Section id="portfolio" className="md:min-h-screen bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Our Success Stories
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their digital presence through innovative website development, strategic social media marketing, and data-driven SEO services.
          </p>
        </div>
        
        {/* Mobile Layout (Default grid, visible on screens < md) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:hidden">
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
                      target="_blank" // Added target="_blank" for external links
                      rel="noopener noreferrer" // Added rel for security
                      className="p-2 bg-slate-900/80 rounded-full text-white hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
                      aria-label={`View ${project.title} project`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank" // Added target="_blank" for external links
                      rel="noopener noreferrer" // Added rel for security
                      className="p-2 bg-slate-900/80 rounded-full text-white hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed text-sm line-clamp-4"> {/* Added line-clamp-4 for consistent height */}
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

        {/* Desktop Carousel Layout (Hidden on screens < md, visible on md and up) */}
        <div
          ref={carouselRef}
          className="hidden md:flex overflow-x-scroll no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing pb-6"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full p-4 snap-center" // Each project card takes full width of the carousel view
            >
              <article className="group flex flex-col h-full rounded-2xl overflow-hidden bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-900/80 rounded-full text-white hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
                        aria-label={`View ${project.title} project`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
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
                  <p className="text-slate-300 mb-4 leading-relaxed text-sm line-clamp-4">
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
              </article>
            </div>
          ))}
        </div>

        {/* Dots Navigation (Visible only on desktop where carousel is active) */}
        <div className="hidden md:flex justify-center mt-6 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToDot(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeDot
                  ? 'bg-blue-500'
                  : 'bg-slate-500/50 hover:bg-slate-400'
              } transition-colors`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;