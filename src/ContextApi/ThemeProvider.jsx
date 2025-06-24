import React, { createContext, useState, useContext, useEffect } from 'react';




const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [isDark, setisDark] = useState(() => {
    try {
      const storedTheme = localStorage.getItem('isDark');
      return storedTheme ? JSON.parse(storedTheme) : false;
    } catch {
      return false;
    }
  });

  const toggleTheme = () => {
    setisDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem('isDark', JSON.stringify(newTheme));
      return newTheme;
    });
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
