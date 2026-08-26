import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import ProjectPage from '../pages/ProjectPage.jsx'

import Nav from '../ui/Nav.jsx'
import Footer from '../ui/Footer.jsx'
import ToTop from '../ui/ToTop.jsx'

import Hero from '../sections/Hero.jsx'
import Stats from '../sections/Stats.jsx'
import About from '../sections/About.jsx'
import Skills from '../sections/Skills.jsx'
import Work from '../sections/Work.jsx'
import Path from '../sections/Path.jsx'
import Certs from '../sections/Certs.jsx'
import Mulearn from '../sections/Mulearn.jsx'
import Languages from '../sections/Languages.jsx'
import Contact from '../sections/Contact.jsx'

import Preloader from '../motion/Preloader.jsx'
import Choreography from '../motion/Choreography.jsx'
import Curtain from '../motion/Curtain.jsx'
import SmoothScroll from '../motion/SmoothScroll.jsx'
import { useReveal } from '../motion/useReveal.js'

import { useTheme } from '../hooks/useTheme.js'
import { useScrolled } from '../hooks/useScrolled.js'

function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Work />
      <Path />
      <Certs />
      <Mulearn />
      <Languages />
      <Contact />
    </main>
  )
}

export default function App() {
  const { toggle } = useTheme()
  const { scrolled, showTop } = useScrolled()
  const { pathname, hash } = useLocation()
  useReveal(pathname)

  // Reset scroll on route change, unless we're landing on an in-page anchor.
  useEffect(() => {
    if (hash) return
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <SmoothScroll>
      <Preloader />
      <Curtain pathname={pathname} />
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
