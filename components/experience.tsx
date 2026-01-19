"use client"

import { ScrollReveal } from "./scroll-reveal"

const experiences = [
  {
    company: "Wayfair",
    role: "Software Engineer Intern",
    location: "Boston, MA",
    period: "May 2025 – Dec 2025",
    description: [
      "Built 5+ AI workflows in n8n using Python, APIs, and web scraping to automate design & trend insights for Wayfair",
      "Developed 3 AI agents for trend discovery, competitor monitoring, content generation across 50+ e-commerce brands",
      "Collaborated in an agile, microservice environment with code reviews & workflow documentation to ensure reliability",
    ],
    tools: ["Python", "n8n", "APIs", "Web Scraping", "AI/ML"],
  },
  {
    company: "DP Data Solutions",
    role: "Software Engineer Intern",
    location: "North Brunswick, NJ",
    period: "Jan 2025 – May 2025",
    description: [
      "Developed and optimized backend features in a microservice, improving API execution by 20% stabilizing data workflows",
      "Built Python and TypeScript based automation scripts & integrations eliminating 15+ hours of manual work per sprint",
      "Improved code quality by expanding unit/integration tests, refining CI pipelines, resolving errors, cutting regression 30%",
    ],
    tools: ["Python", "TypeScript", "Microservices", "CI/CD", "Testing"],
  },
  {
    company: "Algoverse",
    role: "Undergraduate Researcher",
    location: "Palo Alto, CA",
    period: "Dec 2024 – Feb 2025",
    description: [
      "Built pipeline to reverse engineer AI models, using 4 interpretability methods to recover step-by-step transformer logic",
      "Measured model stability via Mean Diagonal and Max Off-Diagonal Cosine Similarity across SAE checkpoints for 4 tasks",
      "Deeply analyzed QK Interpretability by examining the Query and Key vertices of 64 latents in a 41D transformer model",
    ],
    tools: ["Python", "Machine Learning", "Transformers", "AI Interpretability"],
  },
  {
    company: "Rutgers University",
    role: "Learning Assistant",
    location: "New Brunswick, NJ",
    period: "Sept 2024 – Dec 2024",
    description: [
      "Supporting Calculus 1 instruction through 2 weekly meetings with 18 first-year students to bolster understanding",
      "Designing collaborative activities to promote active learning, improving students' performance on assessments by 15%",
      "Analyzed weekly performance trends to identify common challenges, adapting activities to boost student comprehension",
    ],
    tools: ["Teaching", "Mathematics", "Mentoring"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <ScrollReveal>
        <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-foreground">
          Where I've Worked
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>
      </ScrollReveal>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ScrollReveal key={exp.company} delay={index * 100} direction={index % 2 === 0 ? "left" : "right"}>
            <div className="rounded-lg border border-border/50 bg-secondary/30 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-medium text-foreground">
                    {exp.role} <span className="text-primary">@ {exp.company}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <p className="font-mono text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-muted-foreground before:mt-1.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tools.map((tool) => (
                  <span key={tool} className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
