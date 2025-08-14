import { useState } from 'react';

// Project data from ReadMe
const projects = [
  {
    name: "JustRemindMe",
    description: "Simple, flexible reminder service (SMS + Email).",
    category: "Utility",
    color: "bg-green-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
      </svg>
    ),
  },
  {
    name: "PrivyConverter",
    description: "PDF-to-Google Docs converter with clean formatting.",
    category: "Utility",
    color: "bg-blue-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    name: "LINA",
    description: "Basal body temperature tracking web app.",
    category: "Health",
    color: "bg-pink-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    name: "The Soothology Channel",
    description: "High-quality nature ambience and ASMR content for relaxation and focus (youtube channel partner).",
    category: "Content",
    color: "bg-red-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    name: "PrivyTracker",
    description: "Airline/flight tracker with an emphasis on baggage cutoff times.",
    category: "Travel",
    color: "bg-yellow-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.5a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zm1.5 3a1 1 0 011-1h5.5a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h5.5a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h2a1 1 0 110 2H7a1 1 0 01-1-1z"></path>
      </svg>
    ),
  },
  {
    name: "LegalEase",
    description: "AI-powered legal document converter. Converts legal buzzwords, jargon, nonesense into easy to read, easy to understand, natural langange.",
    category: "AI",
    color: "bg-purple-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    name: "Time Capsule",
    description: "Messaging app to yourself for emtional, inspirational messages. Works for weddings, anniversaries, personal growth.",
    category: "Social",
    color: "bg-indigo-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    name: "ProjectHub",
    description: "Social media/forum for entepreneurs to showcase their projects, ideas, and MVPs. Could function as a marketplace for entrepreneurs.",
    category: "Social",
    color: "bg-teal-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
      </svg>
    ),
  },
];

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
          {filteredProjects.map((project, index) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
