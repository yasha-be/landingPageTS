import { ReactNode } from 'react';

const Footer = () => {
  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#38b6ff',
      padding: '1rem',
      textAlign: 'center',
      color: '#fff',
      fontSize: '0.9rem'
    }}>
      <p>© {new Date().getFullYear()} Yasha Be. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
