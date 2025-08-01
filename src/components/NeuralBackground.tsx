import React, { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  size: number;
  opacity: number;
  pulsePhase: number;
}

interface Connection {
  from: Dot;
  to: Dot;
  opacity: number;
}

const NeuralBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    const initializeDots = () => {
      const numDots = Math.floor((canvas.width * canvas.height) / 50000);
      dotsRef.current = [];
      
      for (let i = 0; i < numDots; i++) {
        dotsRef.current.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }

      // Create connections between nearby dots
      connectionsRef.current = [];
      const maxDistance = 120;
      
      for (let i = 0; i < dotsRef.current.length; i++) {
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dot1 = dotsRef.current[i];
          const dot2 = dotsRef.current[j];
          const distance = Math.sqrt(
            Math.pow(dot1.x - dot2.x, 2) + Math.pow(dot1.y - dot2.y, 2)
          );
          
          if (distance < maxDistance) {
            connectionsRef.current.push({
              from: dot1,
              to: dot2,
              opacity: (maxDistance - distance) / maxDistance * 0.3
            });
          }
        }
      }
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Get CSS primary color
      const primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary')
        .trim();

      // Draw connections
      connectionsRef.current.forEach(connection => {
        const pulseOpacity = connection.opacity * 
          (0.5 + 0.5 * Math.sin(time * 0.001 + connection.from.pulsePhase));
        
        ctx.strokeStyle = `hsla(${primaryColor}, ${pulseOpacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(connection.from.x, connection.from.y);
        ctx.lineTo(connection.to.x, connection.to.y);
        ctx.stroke();
      });

      // Draw dots
      dotsRef.current.forEach(dot => {
        const pulseSize = dot.size * (0.8 + 0.4 * Math.sin(time * 0.002 + dot.pulsePhase));
        const pulseOpacity = dot.opacity * (0.6 + 0.4 * Math.sin(time * 0.003 + dot.pulsePhase));
        
        ctx.fillStyle = `hsla(${primaryColor}, ${pulseOpacity})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initializeDots();
    animate(0);

    const handleResize = () => {
      resizeCanvas();
      initializeDots();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
};

export default NeuralBackground;