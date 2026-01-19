"use client"

import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function About() {
  return (
    <section id="about" className="py-24">
      <ScrollReveal>
        <h2 className="mb-12 text-center text-3xl font-bold text-primary">About Me</h2>
      </ScrollReveal>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Photo - moved to left side for better visual balance */}
        <ScrollReveal delay={100} direction="left">
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
            <div className="relative w-[320px] md:w-[380px] aspect-[3/4]">
              <div className="relative h-full w-full overflow-hidden rounded-lg border-2 border-primary/30 transition-transform hover:scale-[1.02] shadow-lg shadow-primary/10">
                <Image src="/dhruv.jpg" alt="Dhruv Parashar" fill className="object-cover" />
                {/* Overlay glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-50" />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />
            </div>
          </div>
        </ScrollReveal>

        {/* Text content */}
        <div className="flex-1 space-y-5 text-muted-foreground">
          <ScrollReveal delay={200}>
            <p className="leading-relaxed text-base">
              I'm a passionate Computer Science student at Rutgers University with a unique blend of technical expertise
              and creative expression. Currently pursuing my Bachelor's degree while building a diverse portfolio of
              experiences across technology and software engineering.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="leading-relaxed text-base">
              My journey spans from building AI-powered applications at <span className="text-primary">Wayfair</span>,
              to developing custom software solutions at <span className="text-primary">DP Data Solutions</span>, to
              conducting cutting-edge AI interpretability research at <span className="text-primary">Algoverse</span>.
              This unique combination gives me a distinctive perspective on how technology can solve real-world
              problems.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="leading-relaxed text-base">
              I'm particularly passionate about artificial intelligence, machine learning, and the intersection of
              technology with practical applications. Currently seeking opportunities to apply my technical skills while
              bringing fresh, innovative perspectives to challenging problems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-3 text-foreground">
                <Phone size={18} className="text-primary" />
                <span>(848) 247-9907</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Mail size={18} className="text-primary" />
                <span>dhruv@dparashar.com</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <MapPin size={18} className="text-primary" />
                <span>New Brunswick, NJ</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
