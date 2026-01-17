"use client"

import { ScrollReveal } from "./scroll-reveal"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C/C++", "C#", "SQL", "R", "Kotlin", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Next.js", "React", "Node.js", "Express.js", "Flask", "TensorFlow", "OpenCV", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    skills: ["AWS", "Azure", "MongoDB", "PostgreSQL", "DynamoDB", "Git", "Docker", "Jira", "Unix"],
  },
  {
    title: "Concepts",
    skills: [
      "Software Engineering",
      "Machine Learning",
      "Computer Vision",
      "Frontend Development",
      "Backend Development",
      "Agile Methodologies",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <ScrollReveal>
        <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-foreground">
          Skills & Technologies
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>
      </ScrollReveal>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category, index) => (
          <ScrollReveal key={category.title} delay={index * 100} direction={index % 2 === 0 ? "left" : "right"}>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-sm text-foreground transition-all hover:border-primary hover:bg-primary/10 hover:scale-105"
                  >
                    {skill}
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
