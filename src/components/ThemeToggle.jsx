import { useEffect, useState } from 'react';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const storedPreference = window.localStorage.getItem('theme');
  if (storedPreference) {
    return storedPreference;
  }

  const prefersDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
  return prefersDark ? 'dark' : 'light';
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const hasStoredPreference = typeof window !== 'undefined' && Boolean(window.localStorage.getItem('theme'));

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined' || hasStoredPreference) {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const syncThemeWithSystem = (event) => {
      setTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', syncThemeWithSystem);

    return () => mediaQuery.removeEventListener('change', syncThemeWithSystem);
  }, [hasStoredPreference]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span aria-hidden="true">{isDark ? '🌙' : '☀️'}</span>
      <span className="sr-only">{isDark ? 'Dark theme active' : 'Light theme active'}</span>
    </button>
  );
}
