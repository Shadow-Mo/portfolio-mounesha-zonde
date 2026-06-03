"use client"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Writing from "@/components/Writing"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Writing />
      <Contact />
    </div>
  )
}
