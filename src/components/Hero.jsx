import React from 'react';
import { Github, Mail, MapPin, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-accent-500 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
          </div>

          {/* Title */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-dark-700 mb-4">
              {personal.title}
            </h2>
          </div>

          {/* Location */}
          <div className="animate-slide-up flex items-center justify-center gap-2 text-dark-600 mb-8" style={{ animationDelay: '0.3s' }}>
            <MapPin size={20} className="text-primary-600" />
            <span className="text-lg">{personal.location}</span>
          </div>

          {/* Introduction */}
          <div className="animate-slide-up mb-12" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              {personal.intro}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.5s' }}>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github size={20} />
              View GitHub
            </a>
            <button
              onClick={scrollToContact}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Get in Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-primary-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
