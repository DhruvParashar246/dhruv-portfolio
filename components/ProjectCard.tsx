// components/ProjectCard.tsx
type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links?: { demo?: string; github?: string };
};

export default function ProjectCard({ project }: { project: Project }) {
  const { title, subtitle, description, tags, links } = project;

  return (
    <article className="projectCard">
      <div className="projectGlow" />
      <div className="projectBody">
        <div className="projectTitle">{title}</div>
        <div className="projectSubtitle">{subtitle}</div>
        <p className="projectDesc">{description}</p>

        <div className="tagRow">
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="projectLinks">
          {links?.github && (
            <a className="link" href={links.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
          {links?.demo && (
            <a className="link" href={links.demo} target="_blank" rel="noreferrer">
              Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
