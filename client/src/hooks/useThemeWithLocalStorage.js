import { useState, useCallback, useEffect } from 'react';

export default function useThemeWithLocalStorage() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('user-preferred-theme') || 'light';
    setTheme(storedTheme);
    console.log('storedThemes', storedTheme);
  }, []);

  useEffect(() => {
    if (theme === 'light') document.body.className = 'light';
    if (theme === 'dark') document.body.className = 'dark';
  }, [theme]);

  const handleToggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('user-preferred-theme', theme ? 'light' : 'dark');
  }, [theme]);

  return [theme, handleToggleTheme];
}
