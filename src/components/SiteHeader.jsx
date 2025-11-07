import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';
import Icon from './Icon.jsx';
import { profile } from '../data/portfolioData.js';

export default function SiteHeader({ currentPath, navLinks = [] }) {
  return (
    <header className="site-header">
      <div className="container">
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
