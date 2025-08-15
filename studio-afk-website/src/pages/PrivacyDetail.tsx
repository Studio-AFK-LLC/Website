import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projectsData';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

// We'll use `marked` + `DOMPurify` for secure markdown rendering.

const PrivacyDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [mdHtml, setMdHtml] = useState<string | null>(null);

  useEffect(() => {
    if (!project || !project.privacyFile) return;

    const file = project.privacyFile;
    if (file.endsWith('.md')) {
      fetch(`/privacy-policies/${file}`)
        .then(r => {
          if (!r.ok) throw new Error('Fetch failed');
          return r.text();
        })
        .then(md => {
          const raw = String(marked.parse(md));
          const clean = DOMPurify.sanitize(raw);
          setMdHtml(clean);
        })
        .catch(() => setMdHtml('<p>Unable to load privacy document.</p>'));
    }
  }, [project]);

  if (!project) {
    return (
      <div className="container-custom py-20">
        <h2 className="text-2xl font-bold">Privacy page not found</h2>
        <p className="text-text-secondary mt-4">We couldn't find that app's privacy information.</p>
        <Link to="/privacy" className="mt-6 inline-block text-accent">Back to site privacy</Link>
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
          <h1 className="text-3xl font-bold">{project.name} — Privacy</h1>
        </div>

        <div className="mb-4 text-sm text-text-secondary">
          <strong>Canonical URL:</strong>{' '}
          <code className="bg-secondary px-2 py-1 rounded">{typeof window !== 'undefined' ? `${window.location.origin}/privacy/${project.id}` : `/privacy/${project.id}`}</code>
        </div>

        {project.privacyFile ? (
          <div className="mt-6">
            <p className="text-text-secondary mb-4">This app provides its own privacy document.</p>
            {project.privacyFile.endsWith('.html') && (
              <div className="w-full h-[60vh] border bg-secondary rounded-md overflow-hidden">
                <iframe src={`/assets/${project.privacyFile}`} title={`${project.name} privacy`} className="w-full h-full border-0 bg-white" />
              </div>
            )}

            {project.privacyFile.endsWith('.md') && (
              <div className="prose max-w-none text-text-secondary bg-secondary p-6 rounded-md" dangerouslySetInnerHTML={{ __html: mdHtml ?? '<p>Loading...</p>' }} />
            )}
          </div>
        ) : (
          <div className="mt-6 text-text-secondary">
            <p>{project.name} uses the Studio AFK privacy practices. Summary: this app collects minimal analytics and crash data to improve service. For specific details, contact <a href="mailto:privacy@studioafk.com" className="text-accent">privacy@studioafk.com</a>.</p>
          </div>
        )}

        <div className="mt-8 flex items-center justify-center gap-6">
          <Link to="/privacy" className="inline-flex items-center gap-2 text-accent px-3 py-2 rounded-md hover:bg-accent/10" aria-label="Site Privacy Policy">Site Privacy Policy</Link>
          <Link to="/" className="inline-flex items-center gap-2 text-accent px-3 py-2 rounded-md hover:bg-accent/10" aria-label="Back to home">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PrivacyDetail;
