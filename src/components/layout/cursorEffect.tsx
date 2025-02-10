import { useEffect, useState } from 'react';

interface CursorTrail {
  id: number;
  x: number;
  y: number;
  opacity: number;
  hue: number;
}

const CursorEffect = () => {
  const [trails, setTrails] = useState<CursorTrail[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrails(prevTrails => {
        // Add new trail point with incrementing hue
        const lastHue = prevTrails[prevTrails.length - 1]?.hue ?? 0;
        const newTrail = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          hue: (lastHue + 15) % 360 // Increment hue by 15 degrees, wrap around at 360
        };

        // Keep last 20 trail points and fade them out
        const updatedTrails = [...prevTrails, newTrail]
          .slice(-20)
          .map(trail => ({
            ...trail,
            opacity: trail.id === newTrail.id ? 1 : trail.opacity * 0.9
          }))
          .filter(trail => trail.opacity > 0.1);

        return updatedTrails;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1000
      }}
    >
      {trails.map(trail => (
        <div
          key={trail.id}
          style={{
            position: 'absolute',
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            width: '8px',
            height: '8px',
            backgroundColor: `hsla(${trail.hue}, 100%, 50%, ${trail.opacity})`,
            borderRadius: '50%',
            opacity: trail.opacity,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 50ms linear'
          }}
        />
      ))}
    </div>
  );
};

export default CursorEffect;
