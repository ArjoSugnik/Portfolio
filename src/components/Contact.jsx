import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center mb-4">Get In Touch</h2>
        <p className="text-center text-dark-600 text-lg mb-12 max-w-2xl mx-auto">
          Interested in discussing opportunities in Project Management, Data Analysis, Prompt Engineering, or AI-assisted Technical Coordination? Let's connect!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Email */}
          <a
            href={`mailto:${personal.email}`}
            className="card p-6 flex items-center gap-4 hover:shadow-xl transition-all duration-300 group animate-slide-in-left"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <div>
              <div className="text-sm text-dark-600">Email</div>
              <div className="font-semibold text-dark-800">{personal.email}</div>
            </div>
          </a>

          {/* Location */}
          <div className="card p-6 flex items-center gap-4 animate-slide-in-right">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center text-white">
              <MapPin size={24} />
            </div>
            <div>
              <div className="text-sm text-dark-600">Location</div>
              <div className="font-semibold text-dark-800">{personal.location}</div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mb-10 animate-slide-up">
          <h3 className="text-xl font-bold text-dark-800 mb-4">Connect on Social Media</h3>
          <div className="flex gap-4 justify-center">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all duration-300"
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sugnik-tarafder/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Open to Opportunities */}
        <div className="card p-6 bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 max-w-lg mx-auto animate-slide-up">
          <h4 className="font-bold text-dark-800 mb-3 text-center">Open to Opportunities</h4>
          <ul className="space-y-2 text-sm text-dark-600">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">✓</span>
              <span>Project Management & Coordination Roles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">✓</span>
              <span>Data Analysis & AI Positions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">✓</span>
              <span>Prompt Engineering & LLM Applications</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">✓</span>
              <span>Software Development & QA Roles</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
