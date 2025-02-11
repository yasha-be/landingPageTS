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

const Routing = () => {
  const [currentRoute, setCurrentRoute] = useState('home');

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
  };

  const renderContent = () => {
    switch (currentRoute) {
      case 'hall-of-fame':
        return (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000
          }}>
            <NavigationHeader onNavigate={handleNavigate} />
            <CursorEffect />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
              <HallOfFame image={ceo} name="Yasha Be" title="CEO" description="Yasha is the CEO of Yasha Be. He is responsible for the overall direction of the company." />
              <HallOfFame image={co_ceo} name="Chad Dylan Cooper" title="CO-CEO" description="Chad is the CO-CEO of Yasha Be. He is the best FE I know." />
              <HallOfFame image={spectro} name="Glasses Maximus a.k.a. Spectro" title="Seer of Multispectral Insights" description="Visionary leader who sees the past, present, and future all at once. Known for their uncanny ability to predict the past, they guide their company in a spiritual manner." />
            </div>
            <Background />
            <SnowEffect />
          </div>
        );
      default:
        return (
          <div style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000
          }}>
            <NavigationHeader onNavigate={handleNavigate} />
            <CursorEffect />
            <Logo src={yashaBeLogo} alt="logo" size={500} />
            <Background />
            <SnowEffect />
            <Footer />
          </div>
        );
    }
  };

  return (
    <div>
      {renderContent()}
      <Footer />
    </div>
  );
};

export default Routing;
