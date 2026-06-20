import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Path from './components/Path.jsx'
import Certs from './components/Certs.jsx'
import Mulearn from './components/Mulearn.jsx'
import Languages from './components/Languages.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ToTop from './components/ToTop.jsx'
import { useTheme } from './hooks/useTheme.js'
import { useScrolled } from './hooks/useScrolled.js'
import { useReveal } from './hooks/useReveal.js'

export default function App() {
  const { toggle } = useTheme()
  const { scrolled, showTop } = useScrolled()
  useReveal()

  return (
    <>
      <Nav scrolled={scrolled} onToggleTheme={toggle} />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Path />
      <Certs />
      <Mulearn />
      <Languages />
      <Faq />
      <Contact />
      <Footer />
      <ToTop show={showTop} />
    </>
  )
}
