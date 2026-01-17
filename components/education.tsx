"use client"

import { GraduationCap, Award } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Education() {
  return (
    <section id="education" className="py-24">
      <ScrollReveal>
        <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-foreground">
          Education
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="rounded-lg border border-border/50 bg-secondary/30 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground">Rutgers University - New Brunswick</h3>
                <p className="text-muted-foreground">Bachelor of Science in Computer Science</p>
                <p className="text-sm text-muted-foreground">Minor in Data Science</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm text-muted-foreground">Sept 2023 – May 2027</p>
              <p className="text-sm text-primary">GPA: 3.9/4.0</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div>
              <p className="mb-2 font-medium text-foreground">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures",
                  "Algorithms",
                  "Computer Architecture",
                  "Software Engineering",
                  "Discrete Mathematics",
                  "Linear Algebra",
                  "Probability & Statistics",
                ].map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm text-foreground transition-all hover:border-primary hover:bg-primary/10"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-primary" />
                <span className="text-sm text-foreground">Dean's List</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-primary" />
                <span className="text-sm text-foreground">National Merit Scholar</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
