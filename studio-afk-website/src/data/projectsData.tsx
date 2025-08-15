import quickEscapeIcon from '../assets/quick-escape-artist-black-background.png';

const projects = [
  {
    id: 'just-remind-me',
    name: 'JustRemindMe',
    description: 'Simple, flexible reminder service (SMS + Email).',
    category: 'Utility',
    color: 'bg-green-500',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
      </svg>
    ),
  },
  {
    id: 'privy-converter',
    name: 'PrivyConverter',
    description: 'PDF-to-Google Docs converter with clean formatting.',
    category: 'Utility',
    color: 'bg-blue-500',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    id: 'lina',
    name: 'LINA',
    description: 'Basal body temperature tracking web app.',
    category: 'Health',
    color: 'bg-pink-500',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    id: 'soothology-channel',
    name: 'The Soothology Channel',
    description: 'High-quality nature ambience and ASMR content for relaxation and focus (youtube channel partner).',
    category: 'Content',
    color: 'bg-red-500',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    id: 'privy-tracker',
    name: 'PrivyTracker',
    description: 'Airline/flight tracker with an emphasis on baggage cutoff times.',
    category: 'Travel',
    color: 'bg-yellow-500',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.5a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zm1.5 3a1 1 0 011-1h5.5a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h5.5a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h2a1 1 0 110 2H7a1 1 0 01-1-1z"></path>
      </svg>
    ),
  },
  {
    id: 'legalease',
    name: 'LegalEase',
    description: 'AI-powered legal document converter. Converts legal buzzwords, jargon, nonesense into easy to read, easy to understand, natural langange.',
    category: 'AI',
    color: 'bg-purple-500',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    id: 'time-capsule',
    name: 'Time Capsule',
    description: 'Messaging app to yourself for emtional, inspirational messages. Works for weddings, anniversaries, personal growth.',
    category: 'Social',
    color: 'bg-indigo-500',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    id: 'quick-escape-artist',
    name: 'Quick Escape Artist',
    description: 'Fun novelty app that produces fake calls and texts to help you escape awkward situations.',
    category: 'Fun',
    color: 'bg-amber-400',
    icon: (
      <img src={quickEscapeIcon} alt="Quick Escape Artist icon" className="w-8 h-8 object-contain" />
    ),
    // If you upload a per-app privacy file to src/assets (e.g. quick-escape-privacy.html or .md), set privacyFile to that filename
  // points to the uploaded markdown privacy file in the repo root `privacy-policies/`
  privacyFile: 'quick-escape-artist-privacy-policy.md',
  },
  {
    id: 'projecthub',
    name: 'ProjectHub',
    description: 'Social media/forum for entepreneurs to showcase their projects, ideas, and MVPs. A Marketplace for buyers to discover and support innovative projects.',
    category: 'Social',
    color: 'bg-teal-500',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
      </svg>
    ),
  },
];

export default projects;
