import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const initialSnowflakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1
    }));

    setSnowflakes(initialSnowflakes);

    const animateSnow = () => {
      setSnowflakes(prevSnowflakes =>
        prevSnowflakes.map(flake => ({
          ...flake,
          y: flake.y + flake.speed,
          x: flake.x + Math.sin(flake.y * 0.01) * 0.5,
          ...(flake.y > window.innerHeight && {
            y: -10,
            x: Math.random() * window.innerWidth
          })
        }))
      );
    };

    const animationFrame = setInterval(animateSnow, 30);

    return () => clearInterval(animationFrame);
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
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          style={{
            position: 'absolute',
            left: `${flake.x}px`,
            top: `${flake.y}px`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: 0.8
          }}
        />
      ))}
    </div>
  );
};

export default SnowEffect;
