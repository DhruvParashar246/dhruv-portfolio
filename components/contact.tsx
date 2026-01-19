"use client"

import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-2xl text-center">
        <ScrollReveal>
          <p className="mb-4 font-mono text-primary">What's Next?</p>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">Get In Touch</h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mb-10 text-lg text-muted-foreground">
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question, want
            to collaborate on a project, or just want to say hi, I'll do my best to get back to you!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:dhruv@dparashar.com"
              className="inline-flex items-center gap-2 rounded-md border border-primary bg-transparent px-5 py-3 font-mono text-sm text-primary transition-all hover:bg-primary/10 hover:scale-105"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href="tel:+18482479907"
              className="inline-flex items-center gap-2 rounded-md border border-primary bg-transparent px-5 py-3 font-mono text-sm text-primary transition-all hover:bg-primary/10 hover:scale-105"
            >
              <Phone size={18} />
              Call
            </a>
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
          </div>
        </ScrollReveal>

        {/* Contact Details */}
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2 transition-colors hover:text-foreground">
              <MapPin size={16} className="text-primary" />
              <span>New Brunswick, NJ</span>
            </div>
            <div className="flex items-center gap-2 transition-colors hover:text-foreground">
              <Phone size={16} className="text-primary" />
              <span>(848) 247-9907</span>
            </div>
            <div className="flex items-center gap-2 transition-colors hover:text-foreground">
              <Mail size={16} className="text-primary" />
              <span>dhruv@dparashar.com</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
