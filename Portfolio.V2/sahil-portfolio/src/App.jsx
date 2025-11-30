import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lenis from '@studio-freight/lenis'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'

import { Toaster } from 'react-hot-toast'

export default function App() {
  useEffect(() => {
    AOS.init()

  }, [])

  return (
    <div className="bg-slate-950 text-slate-300 font-outfit">
      <Toaster position="top-center" reverseOrder={false} />
      <CustomCursor />
      <ScrollProgress />
      <div className="max-w-6xl mx-auto px-4">
        <Navbar />
        <main>
          <Hero />
          <section className="my-12" />
          <About />
          <section className="my-12" />
          <Projects />
          <section className="my-12" />
          <Resume />
          <section className="my-12" />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}