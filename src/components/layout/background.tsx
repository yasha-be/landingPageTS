import { ReactNode } from 'react';

interface BackgroundProps {
  children?: ReactNode;
  color?: string;
}

const Background = ({ children, color = '#38b6ff' }: BackgroundProps) => {
  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1
      }}
    >
      {children}
    </div>
  );
};

export default Background;
