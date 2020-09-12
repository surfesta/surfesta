import React, { useContext } from 'react';
import NightButton from '../../atom/header/NightButton';
import DayButton from '../../atom/header/DayButton';
import { ThemeContext } from '../../../App';

function ThemeIndicator() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      {theme === 'dark' ? (
        <DayButton onChange={toggleTheme} />
      ) : (
        <NightButton onChange={toggleTheme} />
      )}
    </>
  );
}
export default React.memo(ThemeIndicator);
