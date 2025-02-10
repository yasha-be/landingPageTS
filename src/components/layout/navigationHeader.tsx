import { Menu } from 'antd';
import { HomeOutlined, TrophyOutlined } from '@ant-design/icons';
import { useState } from 'react';

interface NavigationHeaderProps {
  onNavigate?: (key: string) => void;
}

const NavigationHeader = ({ onNavigate }: NavigationHeaderProps) => {
  const [current, setCurrent] = useState('home');

  const handleClick = (e: { key: string }) => {
    setCurrent(e.key);
    if (onNavigate) {
      onNavigate(e.key);
    }
  };

  const items = [
    {
      label: 'Home',
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: 'Hall of Fame',
      key: 'hall-of-fame',
      icon: <TrophyOutlined />,
    },
  ];

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ width: '100%' }}
    />
  );
};

export default NavigationHeader;
