import SectionHeading from '../components/SectionHeading.jsx';
import { experience } from '../data/portfolioData.js';

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <SectionHeading
        id="experience-title"
        eyebrow="Experience"
        title="Experience & applied training"
        description="Roles and programs that strengthened my ability to design resilient infrastructure and deliver connected products."
      />
      <div className="experience-timeline">
        {experience.map((item) => (
          <article key={item.company} className="experience-card">
            <header>
              <h3>{item.role}</h3>
              <span className="experience-period">{item.period}</span>
            </header>
            <p className="experience-company">{item.company}</p>
            <ul>
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
