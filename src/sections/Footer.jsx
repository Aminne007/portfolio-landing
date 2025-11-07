import { profile } from '../data/portfolioData.js';
import { navLinks } from '../data/navigation.js';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav aria-label="Footer">
          <ul className="footer-nav">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a href={`#${link.path}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
        <p className="footer-note">Portfolio curated to spotlight robotics, IoT, and secure network engineering initiatives delivered from {profile.location}.</p>
      </div>
    </footer>
  );
}
