import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';
import Icon from './Icon.jsx';
import { profile } from '../data/portfolioData.js';

export default function SiteHeader({ currentPath, navLinks = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`site-header${isMenuOpen ? ' is-open' : ''}`}>
      <div className="shell header-shell">
        <a className="brand" href="#/">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-copy">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-role">{profile.focusArea}</span>
          </span>
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="nav-toggle-icon" aria-hidden="true">
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
          </span>
        </button>
        <nav
          id="primary-navigation"
          className={`primary-nav${isMenuOpen ? ' is-open' : ''}`}
          aria-label="Primary"
        >
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
          <div className="nav-meta">
            <a className="availability" href={profile.heroCTA.primaryHref}>
              {profile.availability}
            </a>
          </div>
        </nav>
        <div className="header-actions">
          <a className="availability" href={profile.heroCTA.primaryHref}>
            {profile.availability}
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
