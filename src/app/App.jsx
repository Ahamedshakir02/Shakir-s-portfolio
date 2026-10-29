import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation, useNavigationType } from 'react-router-dom'
import ProjectPage from '../pages/ProjectPage.jsx'

import Nav from '../ui/Nav.jsx'
import Footer from '../ui/Footer.jsx'

import Hero from '../sections/Hero.jsx'
import Work from '../sections/Work.jsx'
import About from '../sections/About.jsx'
import Path from '../sections/Path.jsx'
import Skills from '../sections/Skills.jsx'
import Contact from '../sections/Contact.jsx'

import { useTheme } from '../hooks/useTheme.js'

function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Path />
      <Skills />
      <Contact />
    </main>
  )
}

export default function App() {
  const { theme, toggle } = useTheme()
  const { pathname, hash } = useLocation()
  const navType = useNavigationType()

  // The location owns the scroll position: a hash scrolls to its section,
  // anything else starts at the top. Back and forward (POP) are left to the
  // browser, which puts the reader back where they were.
  useEffect(() => {
    if (navType === 'POP') return
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    })
    return () => cancelAnimationFrame(id)
  }, [pathname, hash, navType])

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-10 focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Nav theme={theme} onToggleTheme={toggle} />
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
