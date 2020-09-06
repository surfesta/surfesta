import React, { useState } from 'react';

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  return width;
}
