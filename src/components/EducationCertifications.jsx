import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const EducationCertifications = () => {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="section-container bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-12">Education & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="card p-8 animate-slide-in-left">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <GraduationCap size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-dark-800 mb-2">Education</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`${index > 0 ? 'border-t border-gray-100 pt-5' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      index === 0
                        ? 'bg-gradient-to-br from-primary-100 to-primary-200 text-primary-700'
                        : 'bg-gradient-to-br from-gray-100 to-gray-200 text-dark-600'
                    }`}>
                      {index === 0 ? <GraduationCap size={20} /> : <BookOpen size={18} />}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-dark-800 ${index === 0 ? 'text-lg' : 'text-base'}`}>
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 font-semibold text-sm mt-1">
                        {edu.institution}
                      </p>
                      {edu.cgpa && (
                        <p className="text-sm text-dark-700 font-medium mt-1">
                          CGPA: {edu.cgpa}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-dark-500 mt-2">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-primary-500" />
                          <span className="text-xs">{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-primary-500" />
                          <span className="text-xs">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-primary-50 rounded-lg p-4 mt-4">
                <p className="text-sm text-dark-700">
                  <span className="font-semibold">Focus Areas:</span> AI-driven Systems, Project Management, 
                  Data Analysis, Prompt Engineering, and Software Development
                </p>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="card p-8 animate-slide-in-right">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <Award size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-dark-800 mb-2">Certifications</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="border-l-4 border-primary-600 pl-4 py-2 hover:bg-primary-50 transition-colors duration-300 rounded-r-lg"
                >
                  <h4 className="text-lg font-bold text-dark-800 mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-primary-600 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2 text-dark-600 mb-2">
                    <Calendar size={14} />
                    <span className="text-xs">{cert.date}</span>
                  </div>
                  <p className="text-sm text-dark-600">
                    {cert.description}
                  </p>
                </div>
              ))}

              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-4 mt-6 border border-primary-200">
                <p className="text-sm text-dark-700 text-center">
                  <span className="font-semibold">Continuously learning</span> and expanding 
                  expertise in AI, project management, and emerging technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
