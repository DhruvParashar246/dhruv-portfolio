// app/page.tsx
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "AI-Overview Confidence Meter",
    subtitle: "Chrome Extension • Local LLM scoring • Embeddings",
    description:
      "Scores Google AI Overview answers against top SERP evidence using semantic overlap + heuristics. Lightweight overlay UI with caching.",
    tags: ["TypeScript", "Ollama", "Embeddings", "Manifest V3"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Real-Time Tennis Shot Tracker",
    subtitle: "Computer Vision • YOLOv8 • Docker",
    description:
      "Tracks ball + player, estimates shot speed/spin, and renders live overlays. Built for hackathon setting with reproducible pipelines.",
    tags: ["Python", "YOLOv8", "Docker", "OpenCV"],
    links: { demo: "#", github: "#" },
  },
  {
    title: "FIPL Auction Platform",
    subtitle: "Full-stack • Real-time bidding • Next.js",
    description:
      "Fantasy IPL auction platform with dynamic sets, bidding logic, and admin controls. Built to run an actual league smoothly.",
    tags: ["Next.js", "TypeScript", "Postgres", "WebSockets"],
    links: { demo: "#", github: "#" },
  },
];

export default function Home() {
  return (
    <div className="page">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />
      <div className="grain" />

      <Navbar />

      <main className="container">
        {/* HERO */}
        <section className="hero">
          <div className="heroBadge">CS @ Rutgers • Math minor • Class of 2027</div>

          <h1 className="heroTitle">
            Dhruv <span className="heroAccent">Parashar</span>
          </h1>

          <p className="heroSubtitle">
            I build ML + web products — computer vision pipelines, automation agents, and
            full-stack apps. I like shipping clean UX with measurable impact.
          </p>

          <div className="heroCtas">
            <a className="btnPrimary" href="#projects">
              View Projects
            </a>
            <a className="btnSecondary" href="#contact">
              Contact
            </a>
            <a className="btnGhost" href="/Dhruv_Parashar_Resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>

          <div className="heroMeta">
            <div className="metaPill">📍 New Brunswick, NJ</div>
            <div className="metaPill">⚡ Interested in SWE / ML internships</div>
            <div className="metaPill">🧠 Mechanistic interpretability + agents</div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Projects</h2>
            <p className="sectionSubtitle">
              A few things I’ve built recently. (We can swap these for your exact portfolio list next.)
            </p>
          </div>

          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Experience</h2>
            <p className="sectionSubtitle">High-signal highlights (not walls of text).</p>
          </div>

          <div className="card">
            <div className="cardTop">
              <div>
                <div className="cardTitle">Learning Assistant — Calculus (Rutgers)</div>
                <div className="cardSubtitle">Mentoring, study groups, pedagogy-driven instruction</div>
              </div>
              <div className="chip">2024–Present</div>
            </div>
            <ul className="bullets">
              <li>Lead weekly sessions for ~18 students; emphasize intuition + problem decomposition.</li>
              <li>Use structured coaching + reflective prompts to build durable understanding.</li>
            </ul>
          </div>

          <div className="card">
            <div className="cardTop">
              <div>
                <div className="cardTitle">Software Engineering Intern — DP Data Solutions</div>
                <div className="cardSubtitle">Microservices, CI/CD improvements, reliability</div>
              </div>
              <div className="chip">2025</div>
            </div>
            <ul className="bullets">
              <li>Improved developer workflows and deployment stability across services.</li>
              <li>Built automation to reduce manual overhead and speed up iteration.</li>
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Contact</h2>
            <p className="sectionSubtitle">Open to internships + collaborations.</p>
          </div>

          <div className="contactRow">
            <a className="contactCard" href="mailto:dhruvparashar246@gmail.com">
              <div className="contactLabel">Email</div>
              <div className="contactValue">dhruvparashar246@gmail.com</div>
            </a>
            <a className="contactCard" href="https://github.com/DhruvParashar246" target="_blank" rel="noreferrer">
              <div className="contactLabel">GitHub</div>
              <div className="contactValue">DhruvParashar246</div>
            </a>
            <a className="contactCard" href="#" target="_blank" rel="noreferrer">
              <div className="contactLabel">LinkedIn</div>
              <div className="contactValue">Add your link</div>
            </a>
          </div>
        </section>

        <footer className="footer">
          <div>© {new Date().getFullYear()} Dhruv Parashar</div>
          <div className="footerRight">Built with Next.js • Deployed on Vercel</div>
        </footer>
      </main>
    </div>
  );
}
