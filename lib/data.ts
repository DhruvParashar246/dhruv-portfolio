export const profile = {
  name: "Dhruv Parashar",
  headline:
    "CS @ Rutgers (Math minor). I build ML + web products — computer vision pipelines, automation agents, and full-stack apps. I like shipping clean UX with measurable impact.",
  location: "New Brunswick, NJ",
  grad: "Class of 2027",
  links: {
    github: "https://github.com/DhruvParashar246",
    linkedin: "https://linkedin.com/in/dhruvparashar-/",
    email: "mailto:dhruvparashar246@gmail.com",
    resume: "/Dhruv_Parashar_Resume.pdf",
  },
};

export const education = [
  {
    school: "Rutgers University – New Brunswick",
    degree: "B.S. in Computer Science, Minor in Mathematics",
    when: "May 2027",
    where: "New Brunswick, NJ",
    highlights: [
      "GPA: 3.8/4.0",
      "National Merit Scholar",
      "Dean’s List: Fall 2024, Spring 2025",
      "Coursework: DSA, ML, Computer Architecture, OOP, Statistics, Discrete Math",
    ],
  },
];

export const experience = [
  {
    company: "Wayfair",
    role: "Software Engineer Intern",
    when: "May 2025 – Present",
    where: "Boston, MA",
    bullets: [
      "Built 5+ AI workflows in n8n using Python, APIs, and web scraping to automate design & trend insights.",
      "Developed 3 AI agents for trend discovery, competitor monitoring, and content generation across 50+ e-commerce brands.",
      "Worked in an agile microservice environment with code reviews and documentation to ensure reliability.",
    ],
  },
  {
    company: "DP Data Solutions",
    role: "Software Engineer Intern",
    when: "Jan 2025 – May 2025",
    where: "North Brunswick, NJ",
    bullets: [
      "Developed and optimized backend features in a microservice, improving API execution time by ~20%.",
      "Built Python + TypeScript automation scripts & integrations, eliminating 15+ hours of manual work per sprint.",
      "Expanded unit/integration tests and refined CI pipelines, cutting regressions by ~30%.",
    ],
  },
  {
    company: "Algoverse",
    role: "Undergraduate Researcher",
    when: "Dec 2024 – Feb 2025",
    where: "Palo Alto, CA",
    bullets: [
      "Built a pipeline to reverse engineer transformer behavior using multiple interpretability methods.",
      "Measured model stability via cosine-similarity metrics across SAE checkpoints over 4 tasks.",
      "Analyzed QK interpretability by examining query/key vertices across 64 latents in a 41D transformer model.",
    ],
  },
  {
    company: "Rutgers University Mathematics Department",
    role: "Learning Assistant (Calculus I)",
    when: "Sept 2024 – Dec 2024",
    where: "New Brunswick, NJ",
    bullets: [
      "Led 2 weekly sessions with ~18 first-year students to strengthen conceptual understanding.",
      "Designed collaborative activities to promote active learning; improved assessment performance by ~15%.",
      "Analyzed weekly performance trends and adapted instruction to target common misconceptions.",
    ],
  },
];

export const projects = [
  {
    title: "Tennis RT",
    subtitle: "Python • YOLOv8 • OpenCV • Docker • Streamlit",
    description:
      "Real-time computer vision pipeline to process tennis footage and extract speed/spin/trajectory + biomechanics.",
    bullets: [
      "Built a real-time pipeline using YOLOv8 + MediaPipe Pose to analyze tennis footage.",
      "Engineered metric modules (speed, spin, trajectory, arm mechanics) and compared against ATP-era baselines.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/DhruvParashar246" },
    ],
    tags: ["Computer Vision", "YOLOv8", "Docker", "OpenCV"],
  },
  {
    title: "FreshCam",
    subtitle: "TensorFlow.js • React Native • FastAPI",
    description:
      "Mobile app that estimates produce freshness fast, supporting food-waste reduction and accessibility.",
    bullets: [
      "Analyzes produce freshness in <5s with an on-device model + backend support.",
      "Classifies produce into 3 ripeness stages and returns a confidence score.",
    ],
    links: [],
    tags: ["TensorFlow.js", "React Native", "FastAPI"],
  },
  {
    title: "Shadow Striker",
    subtitle: "Python • CV • GrabCut • Web",
    description:
      "Guess-the-silhouette cricket game with a library of 50+ pro players.",
    bullets: [
      "Built a library game experience with player silhouettes and guesses.",
      "CV pipeline: YOLO over 100+ frames/shot + GrabCut for detailed silhouettes.",
    ],
    links: [],
    tags: ["Computer Vision", "YOLO", "GrabCut"],
  },
];

export const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "HTML/CSS", "Kotlin", "Java", "SQL", "PostgreSQL", "C#", "C", "C++", "R"],
  frameworks: ["Next.js", "React", "Node.js", "Express.js", "Flask", "OpenCV", "Tailwind"],
  tools: ["AWS", "Azure", "MongoDB", "Postgres", "DynamoDB", "Jira", "Jupyter", "Git", "Unix"],
  concepts: ["Software Engineering", "Frontend", "Backend", "Machine Learning", "Computer Vision", "Agile"],
  spoken: ["English (Fluent)", "Hindi (Fluent)", "Marathi (Fluent)", "French (Limited)"],
};

export const certifications = [
  "JPMorgan Chase Software Engineering",
  "Deloitte FinTech Engineering",
  "Google Intro to GenAI",
  "IBM AI Engineering",
  "Microsoft AI & ML Engineering",
  "UPenn AI & ML Essentials",
];
