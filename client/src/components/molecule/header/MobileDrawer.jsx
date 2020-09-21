import React, { useEffect } from 'react';
import './MobileDrawer.scss';

export default function MobileDrawer(props) {
  return <div className="mobile-drawer">{props.children}</div>;
}
