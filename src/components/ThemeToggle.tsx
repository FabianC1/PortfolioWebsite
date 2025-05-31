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
    : 'bg-pastelBlue text-white hover:bg-pastelBlue'}
  focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
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