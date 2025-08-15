import { useParams, Link } from 'react-router-dom';
import projects from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container-custom py-20">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <p className="text-text-secondary mt-4">We couldn't find that project.</p>
        <Link to="/" className="mt-6 inline-block text-accent">Back to home</Link>
      </div>
    );
  }

  return (
    <section className="py-20 bg-primary min-h-screen">
      <div className="container-custom">
        <div className="mb-6 flex items-center gap-4">
          <div className={`p-3 rounded-lg ${project.color} bg-opacity-20`}>
            {project.icon}
          </div>
          <h1 className="text-3xl font-bold">{project.name}</h1>
        </div>
        <p className="text-text-secondary max-w-3xl">{project.description}</p>

        {/* Placeholder for extended content */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p className="text-text-secondary">More details about {project.name} will go here.</p>
        </div>

        <Link to="/" className="mt-8 inline-block text-accent">← Back to home</Link>
      </div>
    </section>
  );
}

export default ProjectDetail;
