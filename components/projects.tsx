"use client"

import { Github, ExternalLink, Brain, Users, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const featuredProjects = [
  {
    title: "Tennis RT",
    icon: Brain,
    description:
      "A real-time computer vision pipeline using YOLOv8 and MediaPipe Pose to process and analyze tennis footage. Engineered metric modules for speed, spin, trajectory, and arm mechanics, enabling comparison with 15+ years of ATP data.",
    tags: ["Computer Vision", "YOLOv8", "Python", "OpenCV", "Streamlit"],
    language: "Python",
    github: "https://github.com/Namitagr1/realtime-tennis-analysis",
    external: "https://www.youtube.com/watch?v=JfQ-oh6Lux8",
  },
  {
    title: "FreshCam",
    icon: Users,
    description:
      "A mobile app that analyzes produce freshness in under 5 seconds, supporting food-waste reduction and colorblind users. Trained a TensorFlow.js model to classify produce into 3 distinct ripeness stages with confidence scores.",
    tags: ["TensorFlow.js", "React Native", "Mobile App", "Machine Learning", "FastAPI"],
    language: "JavaScript",
    github: "https://github.com/DhruvParashar246/FreshCam",
    external: "https://www.youtube.com/watch?v=UC_AIyz9VFw",
  },
  {
    title: "Shadow Striker",
    icon: ShieldCheck,
    description:
      "A web application featuring a library of 50+ professional cricketers where users guess the silhouetted batsman. Built a CV pipeline using YOLO to detect objects across 100+ frames per shot, using GrabCut for detailed silhouettes.",
    tags: ["Computer Vision", "YOLO", "GrabCut", "Web Development", "Python"],
    language: "Python",
    github: "https://github.com/DhruvParashar246/cricket_guess_game",
    external: "https://github.com/DhruvParashar246/cricket_guess_game",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <ScrollReveal>
        <h2 className="mb-10 text-center text-3xl font-bold text-foreground">
          <span className="text-primary">Featured</span> Projects
        </h2>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 100}>
            <div className="group flex h-full flex-col rounded-lg border border-border/50 bg-secondary/30 transition-all duration-300 hover:border-primary/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5">
              {/* Icon Area */}
              <div className="flex h-40 items-center justify-center rounded-t-lg bg-primary/5 transition-colors group-hover:bg-primary/10">
                <project.icon
                  className="h-16 w-16 text-primary/70 transition-transform group-hover:scale-110"
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-bold text-foreground">{project.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Language Badge */}
                <div className="mb-4">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {project.language}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2 text-sm text-primary transition-all hover:bg-primary/10 hover:scale-105"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-muted-foreground/30 px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
