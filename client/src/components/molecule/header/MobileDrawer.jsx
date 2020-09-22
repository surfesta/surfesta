import React, { useEffect } from 'react';
import './MobileDrawer.scss';

export default function MobileDrawer({
  className,
  children,
  handleDrawerClick,
}) {
  useEffect(() => {
    document.addEventListener('click', handleDrawerClick);
    return () => {
      document.removeEventListener('click', handleDrawerClick);
    };
  }, []);
  return <div className={className}>{children}</div>;
}
