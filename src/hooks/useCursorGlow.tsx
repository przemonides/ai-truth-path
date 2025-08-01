import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export const useCursorGlow = (isEnabled: boolean = true) => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isOverInteractive, setIsOverInteractive] = useState(false);

  useEffect(() => {
    if (!isEnabled) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('button, a, [role="button"], .cursor-interactive');
      setIsOverInteractive(isInteractive);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isEnabled]);

  return { position, isOverInteractive };
};