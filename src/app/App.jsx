import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import ProjectPage from '../pages/ProjectPage.jsx'

import Masthead from '../ui/Masthead.jsx'
import Footer from '../ui/Footer.jsx'

import Hero from '../sections/Hero.jsx'
import Work from '../sections/Work.jsx'
import About from '../sections/About.jsx'
import Path from '../sections/Path.jsx'
import Skills from '../sections/Skills.jsx'
import Contact from '../sections/Contact.jsx'

function Home() {
  return (
    <main id="main">
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
  const { pathname, hash } = useLocation()

  // With a hash, scroll to that section once it exists; otherwise go to the top.
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    })
    return () => cancelAnimationFrame(id)
  }, [pathname, hash])

  return (
    <>
      <Masthead />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
