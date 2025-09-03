import { useRef, useState } from 'react'
import { useGSAPAnimations } from './hooks/useGSAPAnimations'
import Navigation from './components/Navigation'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ExperienceSection from './components/sections/ExperienceSection'
import ContactSection from './components/sections/ContactsSection'
import './App.css'


function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const { scrollToSection } = useGSAPAnimations(contactRef, setActiveSection, heroRef, aboutRef, skillsRef, experienceRef, projectsRef)


  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection ref={heroRef} />
      <AboutSection ref={aboutRef} />
      <SkillsSection ref={skillsRef} />
      <ExperienceSection ref={experienceRef} />
      <ContactSection ref={contactRef} />
    </div>
  )
}

export default App