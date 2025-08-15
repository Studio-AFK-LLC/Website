import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <section className="py-20 bg-primary min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy — Studio AFK</h1>
        <p className="text-text-secondary mb-4">This site describes Studio AFK's general privacy practices. For details about specific apps, please visit the individual app privacy pages linked from each project.</p>

        <h2 className="text-xl font-semibold mt-6">Information we collect</h2>
        <ul className="list-disc ml-6 text-text-secondary">
          <li>Device identifiers and analytics data</li>
          <li>Crash reports and performance metrics</li>
          <li>Contact information when you provide it</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Third parties</h2>
        <p className="text-text-secondary">We may use third-party services for analytics, hosting, crash reporting, and payment processing. Specific services used by each app are described on that app's privacy page.</p>

        <h2 className="text-xl font-semibold mt-6">Contact</h2>
        <p className="text-text-secondary">For privacy questions contact <a href="mailto:privacy@studioafk.com" className="text-accent">privacy@studioafk.com</a></p>

        <Link to="/" className="mt-8 inline-block text-accent">← Back to home</Link>
      </div>
    </section>
  );
}

export default Privacy;
