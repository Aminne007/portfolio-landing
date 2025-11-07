import SectionHeading from '../components/SectionHeading.jsx';
import { skills } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="shell section-shell">
        <SectionHeading
          id="skills-title"
          eyebrow="Capabilities"
          title="Technical domains & ongoing growth"
          description="Core engineering stacks, supporting tools, and the programs that keep me learning."
        />
        <div className="skills-layout">
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
          <div className="skills-callouts">
            {skills.callouts.map((callout) => (
              <article key={callout.title} className="callout-card">
                <h3>{callout.title}</h3>
                <ul>
                  {callout.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
