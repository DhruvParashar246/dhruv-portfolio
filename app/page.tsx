import Navbar from "@/components/Navbar";
import MatrixBackground from "@/components/MatrixBackground";
import { profile, projects, experience, education, skills, certifications } from "@/lib/data";

function SectionHeader({ title, kicker }: { title: string; kicker?: string }) {
  return (
    <div className="sectionHeader">
      <h2 className="sectionTitle">{title}</h2>
      {kicker ? <div className="sectionKicker">{kicker}</div> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <MatrixBackground />
      <Navbar />

      <main className="container">
        {/* HERO */}
        <section className="hero">
          <div className="heroTop">
            <h1 className="heroName">
              <span>{profile.name}</span>
            </h1>
            <p className="heroTagline">{profile.headline}</p>

            <div className="pillRow">
              <div className="pill">📍 {profile.location}</div>
              <div className="pill">🎓 {profile.grad}</div>
              <div className="pill">🧠 ML + full-stack</div>
              <div className="pill">⚡ Shipping-focused</div>
            </div>

            <div className="btnRow">
              <a className="btn btnPrimary" href="#projects">
                View Projects
              </a>
              <a className="btn" href="#contact">
                Contact
              </a>
              <a
                className="btn"
                href={profile.links.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume (PDF)
              </a>
              <a className="btn" href={profile.links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="btn" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <SectionHeader title="Projects" kicker="A few things I’ve built recently." />
          <div className="grid2">
            {projects.map((p) => (
              <div key={p.title} className="glass card">
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 18, letterSpacing: "-0.01em" }}>{p.title}</h3>
                    <div className="muted small" style={{ marginTop: 6 }}>{p.subtitle}</div>
                  </div>
                </div>

                <p className="muted" style={{ marginTop: 12, lineHeight: 1.6 }}>{p.description}</p>

                <ul className="muted" style={{ marginTop: 12, paddingLeft: 18, lineHeight: 1.65 }}>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="pillRow">
                  {p.tags.map((t) => (
                    <span className="pill" key={t}>{t}</span>
                  ))}
                </div>

                {p.links.length ? (
                  <div className="btnRow">
                    {p.links.map((l) => (
                      <a key={l.href} className="btn" href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <SectionHeader title="Experience" kicker="Impact-focused work and research." />
          <div className="grid2">
            {experience.map((e) => (
              <div key={`${e.company}-${e.role}`} className="glass card">
                <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 18 }}>{e.role}</h3>
                    <div className="muted" style={{ marginTop: 6 }}>
                      <strong style={{ color: "rgba(255,255,255,0.90)" }}>{e.company}</strong> • {e.where}
                    </div>
                  </div>
                  <div className="pill">{e.when}</div>
                </div>

                <ul className="muted" style={{ marginTop: 14, paddingLeft: 18, lineHeight: 1.65 }}>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section">
          <SectionHeader title="Education" />
          <div className="grid2">
            {education.map((ed) => (
              <div key={ed.school} className="glass card">
                <h3 style={{ margin: 0, fontSize: 18 }}>{ed.school}</h3>
                <div className="muted" style={{ marginTop: 8 }}>
                  {ed.degree} • {ed.where}
                </div>
                <div className="pillRow">
                  <span className="pill">{ed.when}</span>
                </div>
                <ul className="muted" style={{ marginTop: 14, paddingLeft: 18, lineHeight: 1.65 }}>
                  {ed.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <SectionHeader title="Skills" kicker="Tools I’m comfortable shipping with." />
          <div className="grid3">
            <div className="glass card">
              <h3 style={{ margin: 0, fontSize: 16 }}>Languages</h3>
              <div className="pillRow">{skills.languages.map((s) => <span className="pill" key={s}>{s}</span>)}</div>
            </div>
            <div className="glass card">
              <h3 style={{ margin: 0, fontSize: 16 }}>Frameworks</h3>
              <div className="pillRow">{skills.frameworks.map((s) => <span className="pill" key={s}>{s}</span>)}</div>
            </div>
            <div className="glass card">
              <h3 style={{ margin: 0, fontSize: 16 }}>Tools & Platforms</h3>
              <div className="pillRow">{skills.tools.map((s) => <span className="pill" key={s}>{s}</span>)}</div>
            </div>
            <div className="glass card">
              <h3 style={{ margin: 0, fontSize: 16 }}>Concepts</h3>
              <div className="pillRow">{skills.concepts.map((s) => <span className="pill" key={s}>{s}</span>)}</div>
            </div>
            <div className="glass card">
              <h3 style={{ margin: 0, fontSize: 16 }}>Languages (Spoken)</h3>
              <div className="pillRow">{skills.spoken.map((s) => <span className="pill" key={s}>{s}</span>)}</div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="section">
          <SectionHeader title="Certifications" />
          <div className="glass card">
            <div className="pillRow">
              {certifications.map((c) => (
                <span className="pill" key={c}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section" style={{ paddingBottom: 86 }}>
          <SectionHeader title="Contact" kicker="Let’s build something." />
          <div className="grid2">
            <div className="glass card">
              <h3 style={{ margin: 0, fontSize: 16 }}>Email</h3>
              <p className="muted" style={{ marginTop: 10 }}>
                <a className="btn btnPrimary" href={profile.links.email}>dhruvparashar246@gmail.com</a>
              </p>
            </div>
            <div className="glass card">
              <h3 style={{ margin: 0, fontSize: 16 }}>Links</h3>
              <div className="btnRow">
                <a className="btn" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="btn" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="btn" href={profile.links.resume} target="_blank" rel="noopener noreferrer">Resume PDF</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
