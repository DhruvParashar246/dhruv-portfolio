"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center py-20 text-center">
      <ScrollReveal delay={100}>
        <h1 className="mb-4 text-5xl font-bold text-foreground sm:text-6xl md:text-7xl lg:text-8xl">Dhruv Parashar</h1>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="mb-8 text-lg text-muted-foreground md:text-xl">
          AI Enthusiast | Software Engineer | Problem Solver
        </p>
      </ScrollReveal>

      {/* Key Badges */}
      <ScrollReveal delay={300}>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-primary/50 bg-primary/10 px-4 py-2 font-mono text-sm text-primary">
            Rutgers University
          </span>
          <span className="rounded-full border border-primary/50 bg-primary/10 px-4 py-2 font-mono text-sm text-primary">
            Class of 2027
          </span>
          <span className="rounded-full border border-primary/50 bg-primary/10 px-4 py-2 font-mono text-sm text-primary">
            Computer Science
          </span>
        </div>
      </ScrollReveal>

      {/* Social Buttons */}
      <ScrollReveal delay={400}>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/dhruvparashar-/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary bg-transparent px-5 py-3 font-mono text-sm text-primary transition-all hover:bg-primary/10 hover:scale-105"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com/DhruvParashar246"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary bg-transparent px-5 py-3 font-mono text-sm text-primary transition-all hover:bg-primary/10 hover:scale-105"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="mailto:dhruv@dparashar.com"
            className="inline-flex items-center gap-2 rounded-md border border-primary bg-transparent px-5 py-3 font-mono text-sm text-primary transition-all hover:bg-primary/10 hover:scale-105"
          >
            <Mail size={18} />
            Email
          </a>
        </div>
      </ScrollReveal>
    </section>
  )
}
