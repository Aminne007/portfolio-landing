import { profile } from '../data/portfolioData.js';
import { navLinks } from '../data/navigation.js';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-mark" aria-hidden="true" />
            <div>
              <p className="footer-name">{profile.name}</p>
              <p className="footer-role">{profile.focusArea}</p>
              <p className="footer-response">{profile.responseTime}</p>
            </div>
          </div>
          <div className="footer-links">
            <h3>Navigate</h3>
            <nav aria-label="Footer">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <a href={`#${link.path}`}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="footer-contact">
            <h3>Connect</h3>
            <ul>
              <li>
                <a href={profile.heroCTA.primaryHref}>
                  {profile.heroCTA.primaryLabel}
                </a>
              </li>
              <li>
                <a href={profile.heroCTA.secondaryHref}>Portfolio highlights</a>
              </li>
              <li>{profile.location}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
          <p className="footer-note">
            Portfolio curated to spotlight robotics, IoT, and secure network engineering initiatives delivered from {profile.location}.
          </p>
        </div>
      </div>
    </footer>
  );
}
