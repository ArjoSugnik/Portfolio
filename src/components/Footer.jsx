import React from 'react';
import { Heart, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const personal = {
    name: "Sugnik Tarafder",
    email: "sugnik.11sc.2020@gmail.com",
    github: "https://github.com/ArjoSugnik",
    linkedin: "https://www.linkedin.com/in/sugnik-tarafder/",
    instagram: "https://www.instagram.com/tarafdersugnik/"
  };

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              {personal.name}
            </h3>
            <p className="text-gray-400 text-sm">
              IT Project Management Enthusiast | Data Analysis | Prompt Engineering | AI-assisted Technical Coordination
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-primary-400">About</a></li>
              <li><a href="#skills" className="hover:text-primary-400">Skills</a></li>
              <li><a href="#projects" className="hover:text-primary-400">Projects</a></li>
              <li><a href="#hackathons" className="hover:text-primary-400">Hackathons</a></li>
              <li><a href="#contact" className="hover:text-primary-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-700 hover:bg-primary-600 rounded-lg flex items-center justify-center hover:scale-110 transition"
              >
                <Github size={20} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-700 hover:bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-700 hover:bg-pink-600 rounded-lg flex items-center justify-center hover:scale-110 transition"
              >
                <Instagram size={20} />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="w-10 h-10 bg-dark-700 hover:bg-accent-600 rounded-lg flex items-center justify-center hover:scale-110 transition"
              >
                <Mail size={20} />
              </a>
            </div>

            <p className="text-sm text-gray-400">
              {personal.email}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} {personal.name}. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Built with <Heart size={16} className="text-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
