
import React from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from './ui/toggle';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle 
      aria-label="Toggle theme" 
      onClick={toggleTheme}
      className="rounded-full p-2 hover:bg-primary/10 transition-colors"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-primary" />
      ) : (
        <Moon size={20} className="text-primary" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
