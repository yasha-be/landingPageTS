import { useState } from 'react';
import NavigationHeader from './navigationHeader';
import Footer from './footer';
import CursorEffect from './cursorEffect';
import Background from './background';
import SnowEffect from './snowEffect';
import Logo from './logo';
import yashaBeLogo from '../../assets/images/yasha-be-logo.gif';
import HallOfFame from './hallOfFame';
import ceo from '../../assets/images/ceo.png';
import co_ceo from '../../assets/images/co-ceo.png';
import spectro from '../../assets/images/spectro.png';
import thundercock from '../../assets/images/thundercock.png';

const Routing = () => {
  const [currentRoute, setCurrentRoute] = useState('home');

  const handleNavigate = (route: string) => {
    if (route === 'home') {
      window.location.href = '/'; // Force full page reload to reset layout
    } else {
      setCurrentRoute(route);
      // Scroll to the bottom of the page
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const renderContent = () => {
    switch (currentRoute) {
      case 'hall-of-fame':
        return (
          <div style={{
            position: 'relative',
            width: '100%',
            minHeight: '100vh',
            paddingBottom: '4rem' // Add padding to account for footer
          }}>
            <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
              <NavigationHeader onNavigate={handleNavigate} />
            </div>
            <CursorEffect />
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              marginTop: '2rem',
              gap: '2rem',
              padding: '0 2rem'
            }}>
              <HallOfFame image={ceo} name="Yasha Be" title="CEO" description="Yasha is the CEO of Yasha Be. He is responsible for the overall direction of the company." />
              <HallOfFame image={co_ceo} name="Chad Dylan Cooper" title="CO-CEO" description="Chad is the CO-CEO of Yasha Be. He is the best FE I know." />
              <HallOfFame image={spectro} name="Glasses Maximus a.k.a. Spectro" title="Seer of Multispectral Insights" description="Visionary leader who sees the past, present, and future all at once. Known for their uncanny ability to predict the past, they guide their company in a spiritual manner." />
              <HallOfFame image={thundercock} name="Diogenes Thundercock McSwagger" title="Supreme Architect of Unrelenting Excellence" description="The unstoppable force behind Yasha Be—a visionary disruptor whose sheer will, intellect, and swagger redefine success." />
            </div>
            <Background />
            <SnowEffect />
          </div>
        );
      default:
        return (
          <div style={{ 
            position: 'relative',
            width: '100%',
            minHeight: '100vh',
            paddingBottom: '4rem' // Add padding to account for footer
          }}>
            <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
              <NavigationHeader onNavigate={handleNavigate} />
            </div>
            <CursorEffect />
            <Logo src={yashaBeLogo} alt="logo" size={500} />
            <Background />
            <SnowEffect />
          </div>
        );
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      position: 'relative'
    }}>
      {renderContent()}
      <div style={{ 
        position: 'absolute',
        bottom: 0,
        width: '100%'
      }}>
        <Footer />
      </div>
    </div>
  );
};

export default Routing;
