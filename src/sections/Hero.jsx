import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import useTypewriter from '../hooks/useTypewriter.js';
import { profile } from '../data/portfolioData.js';

export default function Hero() {
  const typedHeadline = useTypewriter(profile.headline, 50);
  const heroHighlights = [
    { label: 'Based in', value: profile.location },
    { label: 'Focus areas', value: profile.focusArea },
    { label: 'Response time', value: profile.responseTime },
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hello, I’m</p>
        <h1>{profile.name}</h1>
        <p className="hero-headline" aria-label={profile.headline} aria-live="polite">
          {typedHeadline || '\u00A0'}
        </p>
        <p className="hero-availability">{profile.availability}</p>
        <div className="hero-actions">
          <Button href={profile.heroCTA.primaryHref} className="cta-primary">
            {profile.heroCTA.primaryLabel}
          </Button>
          <Button href={profile.heroCTA.secondaryHref} variant="secondary" className="cta-secondary">
            {profile.heroCTA.secondaryLabel}
          </Button>
        </div>
        <ul className="hero-social" aria-label="Social media links">
          {profile.socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} aria-label={link.label} className="social-link">
                <Icon name={link.icon} label={link.label} />
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hero-highlight">
        {heroHighlights.map((item) => (
          <div key={item.label} className="hero-highlight-card">
            <span className="highlight-label">{item.label}</span>
            <span className="highlight-value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
