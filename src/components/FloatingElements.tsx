import React from 'react';
import { Brain, Cpu, Zap, Target, TrendingUp, Shield } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const icons = [
    { Icon: Brain, delay: '0s', position: 'top-1/4 left-1/12' },
    { Icon: Cpu, delay: '1s', position: 'top-1/3 right-1/12' },
    { Icon: Zap, delay: '2s', position: 'top-2/3 left-1/6' },
    { Icon: Target, delay: '3s', position: 'top-1/2 right-1/6' },
    { Icon: TrendingUp, delay: '4s', position: 'top-3/4 left-1/4' },
    { Icon: Shield, delay: '5s', position: 'top-5/6 right-1/4' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-float opacity-10 hidden lg:block`}
          style={{ animationDelay: delay }}
        >
          <Icon className="w-8 h-8 text-primary" />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;