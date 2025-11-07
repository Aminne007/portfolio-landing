import SectionHeading from '../components/SectionHeading.jsx';
import { experience } from '../data/portfolioData.js';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-title">
      <div className="shell section-shell">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Experience & applied training"
          description="Roles and programs that strengthened my ability to design resilient infrastructure and deliver connected products."
        />
        <div className="experience-grid">
          {experience.map((item) => (
            <article key={item.company} className="experience-card">
              <header>
                <div className="experience-role">
                  <h3>{item.role}</h3>
                  <span className="experience-period">{item.period}</span>
                </div>
                <p className="experience-company">{item.company}</p>
              </header>
              <ul className="experience-points">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
