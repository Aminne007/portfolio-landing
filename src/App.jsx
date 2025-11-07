import { useEffect, useMemo, useRef, useState } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import Footer from './sections/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { navLinks } from './data/navigation.js';

const screenComponents = {
  '/': HomePage,
  '/about': AboutPage,
  '/projects': ProjectsPage,
  '/experience': ExperiencePage,
  '/skills': SkillsPage,
  '/contact': ContactPage,
};

const legacyAnchorRoutes = {
  about: '/about',
  projects: '/projects',
  experience: '/experience',
  skills: '/skills',
  contact: '/contact',
};

function getPathFromHash() {
  if (typeof window === 'undefined') {
    return '/';
  }

  const rawHash = window.location.hash.replace(/^#/, '');
  const normalizedHash = rawHash.startsWith('/') ? rawHash : `/${rawHash}`;
  const normalized = normalizedHash.replace(/\/+$/, '') || '/';

  if (normalized === '/' || normalized === '/hero' || normalized === '') {
    return '/';
  }

  const anchorKey = normalized.startsWith('/') ? normalized.slice(1) : normalized;
  if (legacyAnchorRoutes[anchorKey]) {
    return legacyAnchorRoutes[anchorKey];
  }

  return normalized;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => getPathFromHash());
  const contentRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    const handleHashChange = () => {
      setCurrentPath(getPathFromHash());
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const element = contentRef.current;
    if (element && typeof element.focus === 'function') {
      try {
        element.focus({ preventScroll: true });
      } catch (error) {
        element.focus();
      }
    }
  }, [currentPath]);

  const CurrentScreen = useMemo(() => {
    return screenComponents[currentPath] ?? NotFoundPage;
  }, [currentPath]);

  return (
    <div className="app">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <SiteHeader currentPath={currentPath} navLinks={navLinks} />
      <main id="content" ref={contentRef} tabIndex="-1" className="site-main">
        <CurrentScreen />
      </main>
      <Footer />
    </div>
  );
}
