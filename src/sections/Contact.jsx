import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';
import { contact } from '../data/portfolioData.js';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="shell section-shell">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Start a collaboration or request documentation"
          description={contact.availabilityMessage}
        />
        <div className="contact-grid">
          <div className="contact-details">
            <h3>Direct channels</h3>
            <dl>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{contact.location}</dd>
              </div>
            </dl>
          </div>
          <form className="contact-form" aria-label="Contact form">
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Enter your name" autoComplete="name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="Enter your email" autoComplete="email" />
            </div>
            <div className="form-row">
              <label htmlFor="message">Project details</label>
              <textarea id="message" name="message" rows="5" placeholder="Share a quick overview"></textarea>
            </div>
            <div className="form-actions">
              <Button href={null} type="submit" onClick={(event) => event.preventDefault()}>
                Send inquiry
              </Button>
              <Button href={contact.calendlyHref} variant="secondary">
                Book a call
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
