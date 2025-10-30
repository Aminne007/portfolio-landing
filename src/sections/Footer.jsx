import { profile } from '../data/portfolioData.js';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
        <p className="footer-note">Designed and built with care. Update this note with your personal signature.</p>
      </div>
    </footer>
  );
}
