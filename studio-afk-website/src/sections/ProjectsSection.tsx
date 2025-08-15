import { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projectsData';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section bg-primary relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-40 left-20 w-72 h-72 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-80 h-80 bg-highlight rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="text-accent">Projects</span></h2>
          <p className="text-text-secondary text-lg">
            Check out our current projects and innovations in development.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category 
                  ? 'bg-accent text-white' 
                  : 'bg-secondary text-text-secondary hover:bg-accent/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const card = (
              <div 
                key={index} 
                className="bg-secondary p-6 rounded-xl border border-accent/10 hover:border-accent/30 transition-all hover:transform hover:scale-105 group"
              >
                <div className={`${project.color} bg-opacity-20 p-3 rounded-lg inline-block mb-4`}>
                  <div className={`text-${project.color.split('-')[1]}-400`}>
                    {project.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.name}</h3>
                <p className="text-text-secondary">{project.description}</p>
                {project.privacyFile && (
                  <div className="mt-3">
                    <Link to={`/privacy/${project.id}`} aria-label={`${project.name} privacy`} className="text-sm text-accent hover:underline">Privacy</Link>
                  </div>
                )}
              </div>
            );

            return (
              <Link to={`/projects/${project.id}`} key={project.id} className="block">
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
