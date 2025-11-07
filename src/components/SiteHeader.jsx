import ThemeToggle from './ThemeToggle.jsx';
import { profile } from '../data/portfolioData.js';

export default function SiteHeader({ currentPath, navLinks = [] }) {
  return (
    <header className="site-header">
      <div className="container">
        <a className="brand" href="#/">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">{profile.name}</span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a
                  href={`#${link.path}`}
                  aria-current={currentPath === link.path ? 'page' : undefined}
                >
                  {link.label}
                </a>
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
