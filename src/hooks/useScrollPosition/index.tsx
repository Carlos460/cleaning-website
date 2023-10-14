'use client';
import { useEffect, useState } from 'react';

export default function useScrollPosition() {
  // down is true, up is false
  const [isScrollDirectionDown, setIsScrollDirectionDown] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const resetScrollDirection = () => {
    setIsScrollDirectionDown(false);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    
    if (typeof window === 'undefined') return;
    window.scrollY > prevScrollPosition
      ? setIsScrollDirectionDown(true)
      : setIsScrollDirectionDown(false);
    setPrevScrollPosition(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  });

  return [isScrollDirectionDown, resetScrollDirection, scrollPosition] as const;
}
