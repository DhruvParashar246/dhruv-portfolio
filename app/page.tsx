import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Leadership } from "@/components/leadership"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Leadership />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
