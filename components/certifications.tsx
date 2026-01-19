"use client"

import { ExternalLink, Brain, Shield, Building2 } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const certificationCategories = [
  {
    title: "Artificial Intelligence & Machine Learning",
    icon: Brain,
    certs: [
      "Google Intro to GenAI",
      "IBM AI Engineering",
      "Microsoft AI & ML Engineering",
      "UPenn AI & ML Essentials",
      "IBM Generative AI for Executives and Business Leaders",
      "IBM AI Developer",
      "IBM Generative AI Engineering",
    ],
  },
  {
    title: "FinTech & Software Engineering",
    icon: Building2,
    certs: [
      "Meta Introduction to Front-End Development",
      "Goldman Sachs FinTech Engineering",
      "JPMorgan Chase Software Engineering",
      "Deloitte FinTech Engineering",
    ],
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <ScrollReveal>
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-foreground">
            <span className="text-primary">Key</span> Certifications
          </h2>
          <a
            href="https://www.dropbox.com/scl/fo/x4hqok8tl213uiab2tdit/AHrFjAO4uRFlebkLYLgaM_o?rlkey=4t4eyxvniho68hyct0vtsgvri&st=0o3a7xx3&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-muted-foreground/30 px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-105"
          >
            <ExternalLink size={16} />
            View All Certificates
          </a>
        </div>
      </ScrollReveal>

      <div className="space-y-8">
        {certificationCategories.map((category, index) => (
          <ScrollReveal key={category.title} delay={index * 100}>
            <div className="rounded-lg border border-border/50 bg-secondary/30 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <h3 className="mb-4 text-lg font-semibold text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.certs.map((cert, certIndex) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary transition-all hover:border-primary hover:bg-primary/10 hover:scale-105"
                    style={{ animationDelay: `${certIndex * 50}ms` }}
                  >
                    <category.icon size={14} />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
