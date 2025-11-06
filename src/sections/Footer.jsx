import { profile } from '../data/portfolioData.js';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
        <p className="footer-note">Portfolio curated to spotlight robotics, IoT, and secure network engineering initiatives delivered from {profile.location}.</p>
      </div>
    </footer>
  );
}
