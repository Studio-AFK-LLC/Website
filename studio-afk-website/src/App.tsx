import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import PrinciplesSection from './sections/PrinciplesSection'
import ContactSection from './sections/ContactSection'

function App() {
  // Add dark mode class to html element
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

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

export default App
