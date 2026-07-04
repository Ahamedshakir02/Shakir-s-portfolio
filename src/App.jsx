import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
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
import Preloader from './components/Preloader.jsx'
import Choreography from './components/Choreography.jsx'
import SmoothScroll from './lib/SmoothScroll.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import { useTheme } from './hooks/useTheme.js'
import { useScrolled } from './hooks/useScrolled.js'
import { useReveal } from './hooks/useReveal.js'

function Home() {
  return (
    <>
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
    </>
  )
}

export default function App() {
  const { toggle } = useTheme()
  const { scrolled, showTop } = useScrolled()
  const { pathname, hash } = useLocation()
  useReveal(pathname)

  // Reset scroll on route change (unless landing on an in-page anchor).
  useEffect(() => {
    if (hash) return
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <SmoothScroll>
      <Preloader />
      <Choreography pathname={pathname} />
      <Nav scrolled={scrolled} onToggleTheme={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <ToTop show={showTop} />
    </SmoothScroll>
  )
}
