import React from 'react';
import { useTheme } from '../ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2 rounded-full transition-all duration-300 ease-in-out
        ${theme === 'dark' 
          ? 'bg-purple-300 text-charcoalBlack hover:bg-purple-200' 
          : 'bg-purple-700 text-white hover:bg-purple-600'}
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
        transform hover:scale-110
      `}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FaSun className="w-5 h-5" />
      ) : (
        <FaMoon className="w-5 h-5" />
      )}
    </button>
  );
}; 