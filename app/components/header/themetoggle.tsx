'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark'); 

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initial = saved || 'dark'; 
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
    >
      Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
}
