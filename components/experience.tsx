"use client"

import { ScrollReveal } from "./scroll-reveal"

const experiences = [
  {
    company: "IBM",
    role: "Incoming Software Engineer Intern",
    location: "San Jose, CA",
    period: "Sept 2026 – Dec 2026",
    description: [],
    tools: [],
    upcoming: true,
  },
  {
    company: "ADP",
    role: "Incoming Software Engineer Intern",
    location: "Roseland, NJ",
    period: "Jun 2026 – Aug 2026",
    description: [],
    tools: [],
    upcoming: true,
  },
  {
    company: "Department of Agriculture, Food, and Resource Economics",
    role: "Team Lead & Data Science Extern",
    location: "New Brunswick, NJ",
    period: "Jan 2026 – May 2026",
    description: [
      "Led a policy research project across 16 SADC countries, managing cross-functional workflows and all project deliverables",
      "Analyzed 10+ socioeconomic metrics to isolate key drivers of child stunting, using insights to test regional policy",
      "Applied regression analysis to quantify event-driven outcome shifts, turning complex datasets into clear visualizations",
    ],
    tools: ["Python", "Regression Analysis", "Data Science", "Policy Research"],
  },
  {
    company: "Rutgers University Mathematics Department",
    role: "Learning Assistant",
    location: "New Brunswick, NJ",
    period: "Sept 2025 – May 2026",
    description: [
      "Supporting Calculus 1 instruction through 2 weekly meetings with 18 first-year students to bolstering understanding",
      "Designing collaborative activities to promote active learning, improving students' performance on assessments by 15%",
      "Analyzed weekly performance trends to identify common challenges, adapting activities to boost student comprehension",
    ],
    tools: ["Teaching", "Mathematics", "Mentoring"],
  },
  {
    company: "Algoverse",
    role: "Undergraduate Researcher",
    location: "Remote",
    period: "Jul 2025 – Dec 2025",
    description: [
      "Built pipeline to reverse engineer AI models, using 4 interpretability methods to recover step-by-step transformer logic",
      "Measured model stability via Mean Diagonal and Max Off-Diagonal Cosine Similarity across SAE checkpoints for 4 tasks",
      "Deeply analyzed QK Interpretability by examining the Query and Key vertices of 64 latents in a 41D transformer model",
    ],
    tools: ["Python", "Machine Learning", "Transformers", "AI Interpretability"],
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
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-medium text-foreground">
                      {exp.role} <span className="text-primary">@ {exp.company}</span>
                    </h3>
                    {exp.upcoming && (
                      <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary">
                        upcoming
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <p className="font-mono text-sm text-muted-foreground">{exp.period}</p>
              </div>

              {exp.description.length > 0 && (
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
              )}

              {exp.tools.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
