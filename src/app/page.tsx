"use client"
import Preloader from "@/components/Preloader"
import Hero from "@/components/Hero"
import TechMarquee from "@/components/TechMarquee"
import ScrollProgress from "@/components/ScrollProgress"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Writing from "@/components/Writing"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <Preloader />
      <ScrollProgress />
      <Hero />
      <TechMarquee />
      <Skills />
      <Experience />
      <Projects />
      <Writing />
      <Contact />
      <Footer />
    </div>
  )
}
