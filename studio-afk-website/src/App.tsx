import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import PrinciplesSection from './sections/PrinciplesSection'
import ContactSection from './sections/ContactSection'
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.tsx'))
import Privacy from './pages/Privacy'
import PrivacyDetail from './pages/PrivacyDetail'

function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PrinciplesSection />
      <ContactSection />
    </Layout>
  )
}

function App() {
  // Add dark mode class to html element
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/:id"
          element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
              <ProjectDetail />
            </Suspense>
          }
        />
        {/* Legacy redirects: support older privacy URL patterns and app routes */}
        <Route path="/apps/:id/privacy" element={<RedirectToPrivacy />} />
        <Route path="/privacy/:id.html" element={<RedirectToPrivacy />} />
        <Route path="/privacy/:id.md" element={<RedirectToPrivacy />} />
        <Route path="/old/privacy/:id" element={<RedirectToPrivacy />} />
  <Route path="/privacy" element={<Privacy />} />
  <Route path="/privacy/:id" element={<PrivacyDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

function RedirectToPrivacy() {
  const { id } = useParams();
  if (!id) return <Navigate to="/privacy" replace />;
  return <Navigate to={`/privacy/${id}`} replace />;
}

export default App
