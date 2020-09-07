import { useState, useCallback, useEffect } from 'react';

export default function useThemeWithLocalStorage() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('user-preferred-theme');
    setTheme(storedTheme);
  }, []);

  const handleToggleTheme = useCallback(() => {
    setTheme(!theme);
    localStorage.setItem('user-preferred-theme', theme ? 'light' : 'dark');
  }, [theme]);

  return [theme, handleToggleTheme];
}
