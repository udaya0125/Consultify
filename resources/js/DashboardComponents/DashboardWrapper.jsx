// DashboardWrapper.jsx
import React, { useState, useEffect } from 'react';
import DashboardNavbar from './DashboardNavbar';
import DashboardSideBar from './DashboardSideBar';

const DashboardWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved ? JSON.parse(saved) : prefersDark;
    setIsDarkMode(theme);
    if (theme) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  // Update theme and save
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <DashboardNavbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="flex">
        <DashboardSideBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="flex-1 p-6  transition-colors duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardWrapper;