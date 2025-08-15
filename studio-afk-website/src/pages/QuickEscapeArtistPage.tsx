import { Link } from 'react-router-dom';

const QuickEscapeArtistPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto bg-secondary p-8 rounded-xl border border-accent/20">
          <h1 className="text-4xl font-bold mb-4">Quick Escape Artist</h1>
          <p className="text-slate-300 mb-6">
            Quick Escape Artist is a fun novelty app that generates believable fake calls and texts to help you gracefully exit awkward situations.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Features</h2>
          <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
            <li>Schedule fake calls with custom caller names and ringtones.</li>
            <li>Predefined text message templates for fast escapes.</li>
            <li>Privacy-first: no personal data required to run the app.</li>
            <li>Lightweight and low-permission by design.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Get the App</h2>
          <p className="text-slate-300 mb-6">Demo / Download coming soon.</p>

          <Link to="/" className="btn btn-outline inline-block">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickEscapeArtistPage;
