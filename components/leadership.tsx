"use client"

import { Users, Trophy, Mic } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const activities = [
  {
    icon: Users,
    title: "Co-creator and COO",
    role: "StockMate",
    description: "Developed an educational and social web platform to improve financial literacy with 2000+ users.",
  },
  {
    icon: Trophy,
    title: "Hackathon Competitor",
    role: "Multiple Events",
    description: "Competed in various hackathons, building innovative solutions under time constraints.",
  },
  {
    icon: Mic,
    title: "Calculus Learning Assistant",
    role: "Peer Mentor",
    description: "Led weekly study sessions for 18 first-year students, improving their assessment performance by 15%.",
  },
]

export function Leadership() {
  return (
    <section id="leadership" className="py-24">
      <ScrollReveal>
        <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-foreground">
          Leadership & Activities
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, index) => (
          <ScrollReveal key={activity.title} delay={index * 100}>
            <div className="h-full rounded-lg border border-border/50 bg-secondary/30 p-6 transition-all duration-300 hover:border-primary/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform group-hover:scale-110">
                <activity.icon className="text-primary" size={24} />
              </div>
              <h3 className="mb-1 text-lg font-medium text-foreground">{activity.title}</h3>
              <p className="mb-2 font-mono text-sm text-primary">{activity.role}</p>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
