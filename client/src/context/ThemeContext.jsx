import React, { useState } from "react";

const ThemeContext = React.createContext(null);

function ThemeSwitcher(props) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export { ThemeSwitcher, ThemeContext };
