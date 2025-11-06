import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';
import { projects } from '../data/portfolioData.js';


export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        eyebrow="Projects"
        title="Data-driven engineering initiatives"
        description="A snapshot of robotics, IoT, and software projects that combine disciplined delivery with measurable outcomes."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-media" aria-hidden="true">
              {project.image ? (
                <img src={project.image} alt="" />
              ) : (
                <div className="project-placeholder">Add project visual</div>
              )}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-stats" aria-label={`${project.title} quick facts`}>
                {project.stats.map((stat) => (
                  <li key={stat.label}>
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                  </li>
                ))}
              </ul>
              <div className="project-meta">
                <span className="meta-label">Stack</span>
                <ul className="project-tags">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <Button href={project.cta.href} variant="ghost" className="project-link">
                {project.cta.label}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
