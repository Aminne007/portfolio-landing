import { useEffect, useState } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion.js';

export default function useTypewriter(text, speed = 80) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (prefersReducedMotion || text.length === 0) {
      setIndex(text.length);
      return undefined;
    }

    if (index >= text.length) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, prefersReducedMotion, speed, text]);

  return text.slice(0, index);
}
