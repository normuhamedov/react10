import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("bg-black");
      document.body.classList.add("bg-black", "text-white", "transition-all", "duration-300");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("bg-black");
      document.body.classList.remove("bg-black", "text-white");
      document.body.classList.add("bg-white", "text-black", "transition-all", "duration-300");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
