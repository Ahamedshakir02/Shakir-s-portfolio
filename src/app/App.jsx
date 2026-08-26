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
import Mulearn from '../sections/Mulearn.jsx'
import Languages from '../sections/Languages.jsx'
import Contact from '../sections/Contact.jsx'

import Preloader from '../motion/Preloader.jsx'
import Choreography from '../motion/Choreography.jsx'
import Curtain from '../motion/Curtain.jsx'
import SmoothScroll from '../motion/SmoothScroll.jsx'
import { useReveal } from '../motion/useReveal.js'

import { useLoadGate } from './loadGate.js'
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
      <Mulearn />
      <Languages />
      <Contact />
    </main>
  )
}

export default function App() {
  const gateOpen = useLoadGate((s) => s.open)
  const { toggle } = useTheme()
  const { scrolled, showTop } = useScrolled()
  const { pathname, hash } = useLocation()
  useReveal(pathname)

  // The location owns the scroll position. With a hash we scroll to that
  // section; without one we go to the top. Previously a hash only suppressed
  // the reset and nothing scrolled to the target, so a shared "/#work" link
  // opened at the top of the page.
  useEffect(() => {
    if (!gateOpen) return // don't scroll underneath the preloader

    if (!hash) {
      if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true })
      else window.scrollTo(0, 0)
      return
    }

    // Wait a frame so the target exists after a route change.
    const id = requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1))
      if (!target) return
      if (window.__lenis) window.__lenis.scrollTo(target, { offset: -10 })
      else target.scrollIntoView({ behavior: 'smooth' })
    })
    return () => cancelAnimationFrame(id)
  }, [pathname, hash, gateOpen])

  return (
    <SmoothScroll>
      <Preloader />
      <Curtain pathname={pathname} />
      <Choreography pathname={pathname} />
      {/* While the preloader is up the page underneath is hidden but was still
          tabbable and still in the accessibility tree, so a keyboard or screen
          reader user could reach a page they cannot see. `inert` closes that,
          the same way it does for the mobile nav sheet. */}
      <div inert={gateOpen ? undefined : ''}>
        <Nav scrolled={scrolled} onToggleTheme={toggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <ToTop show={showTop} />
      </div>
    </SmoothScroll>
  )
}
