function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-icon">💻</span>
        <span className="project-category">{project.category}</span>
      </div>

      <h3>{project.title}</h3>

      <p className="project-description">
        {project.description}
      </p>

      <div className="tech-stack">
        {project.techStack.map((tech) => (
          <span className="tech-tag" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>

        <a href={project.demoLink} target="_blank" rel="noreferrer">
          Live Demo ↗
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;

