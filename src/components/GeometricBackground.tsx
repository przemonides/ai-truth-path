import React from 'react';

const GeometricBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="geometric-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Diagonal lines */}
            <line x1="0" y1="0" x2="200" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.1" />
            <line x1="0" y1="100" x2="100" y2="0" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.15" />
            <line x1="100" y1="200" x2="200" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.15" />
            
            {/* Geometric shapes */}
            <polygon 
              points="50,50 100,25 150,50 125,100 75,100" 
              fill="none" 
              stroke="hsl(var(--primary))" 
              strokeWidth="0.5" 
              opacity="0.08"
            />
            <polygon 
              points="150,150 175,125 200,150 175,175" 
              fill="hsl(var(--primary))" 
              opacity="0.03"
            />
            
            {/* Additional lines */}
            <line x1="0" y1="50" x2="50" y2="0" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.12" />
            <line x1="150" y1="0" x2="200" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.12" />
            <line x1="0" y1="150" x2="50" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.12" />
            <line x1="150" y1="200" x2="200" y2="150" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.12" />
          </pattern>
          
          <linearGradient id="geometric-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--background))" stopOpacity="1" />
            <stop offset="50%" stopColor="hsl(var(--muted))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--background))" stopOpacity="1" />
          </linearGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
        <rect width="100%" height="100%" fill="url(#geometric-gradient)" opacity="0.3" />
      </svg>
    </div>
  );
};

export default GeometricBackground;