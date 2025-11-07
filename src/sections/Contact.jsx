import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';
import { contact } from '../data/portfolioData.js';

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <SectionHeading
        id="contact-title"
        eyebrow="Contact"
        title="Start a collaboration or request documentation"
        description={contact.availabilityMessage}
      />
      <div className="contact-grid">
        <div className="contact-details">
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
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
