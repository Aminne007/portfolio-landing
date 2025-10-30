import SectionHeading from '../components/SectionHeading.jsx';
import { about } from '../data/portfolioData.js';

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <SectionHeading
        id="about-title"
        eyebrow="About"
        title="Crafting resilient products with precision and empathy"
        description={about.summary}
      />
      <div className="about-grid">
        <ul className="about-stats" aria-label="Professional highlights">
          {about.highlights.map((item) => (
            <li key={item.label}>
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </li>
          ))}
        </ul>
        <div className="about-services">
          {about.services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
