'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { useEffect, useState } from 'react';

export function Toggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span
        className="text-primary border-0 !bg-transparent"
      >
        <Sun size={18} className="rotate-0 scale-100 transition-all" />
      </span>
    );
  }

  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <span
      className="text-primary border-0 !bg-transparent"
      onClick={toggleTheme}
    >
      {isDark ? (
        <Sun size={18} className="rotate-0 scale-100 transition-all" />
      ) : (
        <Moon size={18} className="rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </span>
  );
}
