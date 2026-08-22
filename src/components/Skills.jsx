import React from 'react';
import { Target, TestTube, Wrench, Terminal, Brain } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Languages & Technical Stack",
      icon: <Terminal className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      skills: skills["Languages & Technical Stack"]
    },
    {
      title: "AI & Prompt Engineering",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-violet-500 to-purple-500",
      skills: skills["AI & Prompt Engineering"]
    },
    {
      title: "Testing & Quality Support",
      icon: <TestTube className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      skills: skills["Testing & Quality Support"]
    },
    {
      title: "Project Management & Delivery",
      icon: <Target className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      skills: skills["Project Management & Delivery"]
    },
    {
      title: "Computer & Productivity Tools",
      icon: <Wrench className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      skills: skills["Computer & Productivity Tools"]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-4">Skills & Expertise</h2>
        <p className="text-center text-dark-600 text-lg mb-12 max-w-2xl mx-auto">
          A comprehensive skill set spanning AI & prompt engineering, project management, data analysis, and technical development
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`card p-8 animate-slide-up ${categoryIndex === skillCategories.length - 1 ? 'md:col-span-2 md:max-w-lg md:mx-auto' : ''}`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark-800">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
