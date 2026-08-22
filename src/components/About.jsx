import React from 'react';
import { User, Briefcase, Code, FileText, Brain, BarChart3 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData;

  const highlights = [
    {
      icon: <User className="w-6 h-6" />,
      title: "CSE Graduate",
      description: "B.Tech CSE from HETC"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Project Management",
      description: "Agile/Scrum & delivery coordination"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Prompt Engineering",
      description: "GenAI, LLMs & prompt design"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analysis",
      description: "Analytics & business insights"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Skills",
      description: "Python, FastAPI & automation"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "QA & Testing",
      description: "API debugging & test automation"
    }
  ];

  return (
    <section id="about" className="section-container bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {about.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-dark-600 leading-relaxed animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card card-hover p-6 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center text-primary-700 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-dark-800 mb-2">{item.title}</h3>
                <p className="text-sm text-dark-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
