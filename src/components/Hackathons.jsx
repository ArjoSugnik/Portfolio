import React from 'react';
import { Trophy, Users, ExternalLink, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hackathons = () => {
  const { hackathons } = portfolioData;

  return (
    <section id="hackathons" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-4">Hackathon Experience</h2>
        <p className="text-center text-dark-600 text-lg mb-12 max-w-2xl mx-auto">
          Led cross-functional teams in competitive hackathons, achieving Top 20 finalist positions
        </p>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="card p-6 text-center animate-slide-up">
            <div className="text-4xl font-bold text-gradient mb-2">{hackathons.length}</div>
            <div className="text-sm text-dark-600">Hackathons</div>
          </div>
          <div className="card p-6 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-gradient">2</div>
            <div className="text-sm text-dark-600">Top 20 Finishes</div>
          </div>
          <div className="card p-6 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-gradient">4</div>
            <div className="text-sm text-dark-600">Team Members</div>
          </div>
          <div className="card p-6 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-gradient">100%</div>
            <div className="text-sm text-dark-600">Leadership</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-primary-500 to-accent-500 transform md:-translate-x-1/2"></div>

          {/* Hackathon Cards */}
          <div className="space-y-12">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col animate-slide-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-primary-600 rounded-full transform md:-translate-x-1/2 z-10"></div>

                {/* Card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="card p-6 card-hover">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-dark-800 mb-2">
                          {hackathon.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-dark-600 mb-2">
                          <Trophy className="text-accent-500" size={16} />
                          <span className="font-semibold">{hackathon.achievement}</span>
                        </div>
                      </div>
                      <Award className="text-primary-600" size={32} />
                    </div>

                    {/* Role and Project */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-dark-700">
                        <Users size={16} className="text-primary-600" />
                        <span className="font-medium">{hackathon.role}</span>
                      </div>
                      <p className="text-sm text-dark-600 pl-6">
                        {hackathon.description}
                      </p>
                    </div>

                    {/* Project Info */}
                    <div className="bg-primary-50 rounded-lg p-4 mb-4">
                      <div className="text-sm text-dark-600 mb-1">Project Built:</div>
                      <div className="font-bold text-primary-700">{hackathon.project}</div>
                      <div className="text-xs text-dark-500 mt-2">
                        Team Size: {hackathon.teamSize} developers
                      </div>
                    </div>

                    {/* Dashboard Link */}
                    {hackathon.dashboardUrl && (
                      <a
                        href={hackathon.dashboardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors text-sm"
                      >
                        View Dashboard
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-16 card p-8 bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200">
          <h3 className="text-2xl font-bold text-dark-800 mb-6 text-center">Key Leadership Skills Demonstrated</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Users className="text-primary-600" size={28} />
              </div>
              <h4 className="font-semibold text-dark-800 mb-2">Team Coordination</h4>
              <p className="text-sm text-dark-600">Led cross-functional teams of 4 developers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Trophy className="text-accent-500" size={28} />
              </div>
              <h4 className="font-semibold text-dark-800 mb-2">Competitive Success</h4>
              <p className="text-sm text-dark-600">Achieved Top 20 finalist positions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Award className="text-primary-600" size={28} />
              </div>
              <h4 className="font-semibold text-dark-800 mb-2">Project Delivery</h4>
              <p className="text-sm text-dark-600">Delivered functional projects under tight deadlines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
