import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, GitFork, Calendar } from 'lucide-react';
import { portfolioData, GITHUB_API } from '../data/portfolioData';

const Projects = () => {
  const { featuredProjects } = portfolioData;
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGithubRepos();
  }, []);

  const fetchGithubRepos = async () => {
    try {
      const response = await fetch(GITHUB_API.reposUrl);
      const data = await response.json();
      
      // Sort by updated date and limit
      const sortedRepos = data
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, GITHUB_API.maxRepos);
      
      setGithubRepos(sortedRepos);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="projects" className="section-container bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-4">Featured Projects</h2>
        <p className="text-center text-dark-600 text-lg mb-12 max-w-2xl mx-auto">
          Showcasing project management expertise, automation systems, and development work
        </p>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-dark-800 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-gradient-to-b from-primary-600 to-accent-500 rounded-full"></span>
            Highlighted Work
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="card card-hover p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-dark-800 leading-tight">
                    {project.title}
                  </h4>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.category.includes('Analytics')
                      ? 'bg-blue-100 text-blue-700'
                      : project.category.includes('Vision')
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <p className="text-dark-600 mb-4">{project.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-dark-600">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-md text-xs font-medium border border-primary-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    <Github size={18} />
                    View on GitHub
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Repositories */}
        <div>
          <h3 className="text-2xl font-bold text-dark-800 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-gradient-to-b from-primary-600 to-accent-500 rounded-full"></span>
            More from GitHub
          </h3>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
              <p className="text-dark-600 mt-4">Loading repositories...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {githubRepos.map((repo, index) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover p-6 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Github className="text-dark-700" size={24} />
                    <ExternalLink className="text-dark-400" size={16} />
                  </div>
                  
                  <h4 className="font-bold text-dark-800 mb-2 truncate">
                    {repo.name}
                  </h4>
                  
                  <p className="text-sm text-dark-600 mb-4 line-clamp-2 min-h-[2.5rem]">
                    {repo.description || 'No description available'}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-dark-500">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-primary-500 rounded-full"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={12} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} />
                      {repo.forks_count}
                    </span>
                  </div>
                  
                  <div className="mt-3 flex items-center gap-1 text-xs text-dark-500">
                    <Calendar size={12} />
                    Updated {formatDate(repo.updated_at)}
                  </div>
                </a>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github size={20} />
              View All Repositories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
