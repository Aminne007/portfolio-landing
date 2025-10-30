import ThemeToggle from './ThemeToggle.jsx';
import { profile } from '../data/portfolioData.js';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <a className="brand" href="#hero">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">{profile.name}</span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <a className="availability" href={profile.heroCTA.secondaryHref}>
            {profile.availability}
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
