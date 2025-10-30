import SectionHeading from '../components/SectionHeading.jsx';
import { skills } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <SectionHeading
        id="skills-title"
        eyebrow="Capabilities"
        title="Where I bring the most value"
        description="A blend of technical execution, systems thinking, and collaborative leadership."
      />
      <div className="skills-grid">
        <div className="skills-categories">
          {skills.categories.map((category) => (
            <article key={category.title} className="skill-card">
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="skills-testimonials">
          {skills.testimonials.map((testimonial) => (
            <blockquote key={testimonial.name}>
              <p>{testimonial.quote}</p>
              <footer>
                <span className="testimonial-name">{testimonial.name}</span>
                <span className="testimonial-role">{testimonial.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
