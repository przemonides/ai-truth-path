import React from 'react';
import { useCursorGlow } from '@/hooks/useCursorGlow';

const CursorGlow: React.FC = () => {
  const { position, isOverInteractive } = useCursorGlow();

  return (
    <div
      className="cursor-glow hidden md:block"
      style={{
        left: position.x - 10,
        top: position.y - 10,
        transform: isOverInteractive ? 'scale(2)' : 'scale(1)',
        opacity: isOverInteractive ? 0.8 : 0.4,
      }}
    />
  );
};

export default CursorGlow;