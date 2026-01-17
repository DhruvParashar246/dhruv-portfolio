export const data = {
  name: "Dhruv Parashar",
  headline: "Software Engineer • ML/Computer Vision • Full-stack",
  summary:
    "I’m a CS major at Rutgers (Math minor) who builds end-to-end products — from model pipelines to production web apps. I care about measurable impact, clean UX, and fast iteration.",

  contact: {
    email: "dhruvparashar246@gmail.com",
    linkedin: "https://linkedin.com/in/dhruvparashar-/",
    github: "https://github.com/DhruvParashar246",
  },

  skills: {
    languages: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
    frameworks: ["Next.js", "React", "Node.js", "FastAPI", "Tailwind"],
    tools: ["Docker", "Postgres", "AWS/Azure", "Git", "Linux"],
  },

  experience: [
    {
      org: "Wayfair",
      title: "Software Engineer Intern",
      when: "May 2025 – Present",
      bullets: [
        "Built 5+ AI workflows in n8n using Python/APIs/scraping to automate design & trend insights.",
        "Developed agents for trend discovery, competitor monitoring, and content generation across 50+ brands.",
        "Worked in an agile microservice environment with reviews + documentation for reliability.",
      ],
    },
    {
      org: "DP Data Solutions",
      title: "Software Engineer Intern",
      when: "Jan 2025 – May 2025",
      bullets: [
        "Optimized backend microservice features, improving API execution ~20% and stabilizing workflows.",
        "Built automation/integrations in Python/TypeScript cutting 15+ hours of manual work per sprint.",
        "Expanded tests + refined CI to reduce regressions and improve code quality.",
      ],
    },
    {
      org: "Algoverse",
      title: "Undergraduate Researcher (Interpretability)",
      when: "Dec 2024 – Feb 2025",
      bullets: [
        "Built pipelines to analyze transformer behavior and interpretability signals across checkpoints.",
        "Measured model stability via cosine similarity metrics; analyzed QK interpretability patterns.",
      ],
    },
  ],

  projects: [
    {
      name: "Tennis RT",
      stack: "Python • YOLOv8 • OpenCV • Docker • Streamlit",
      oneLiner: "Real-time tennis analytics pipeline from raw video.",
      bullets: [
        "Computer vision pipeline using YOLOv8 + pose estimation to analyze tennis footage.",
        "Metrics for speed, spin, trajectory, and mechanics for player comparisons.",
      ],
      links: ["GitHub: (add link)", "Demo: (add link)"],
    },
    {
      name: "FreshCam",
      stack: "TensorFlow.js • React Native • FastAPI",
      oneLiner: "Mobile app that predicts produce freshness in seconds.",
      bullets: [
        "Classifies produce into ripeness stages with a confidence score.",
        "Built for food-waste reduction and accessibility (e.g., colorblind users).",
      ],
      links: ["GitHub: (add link)", "Demo: (add link)"],
    },
    {
      name: "Shadow Striker",
      stack: "Python • Computer Vision • Web",
      oneLiner: "Guess-the-player game using silhouettes generated from match footage.",
      bullets: [
        "Library of 50+ cricketers; CV pipeline with detection + GrabCut silhouettes.",
      ],
      links: ["GitHub: (add link)", "Demo: (add link)"],
    },
  ],
} as const;
