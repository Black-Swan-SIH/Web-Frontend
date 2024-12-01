import React, { useState } from "react";
import "./Nav2.css";
import Button from "./Button";

function NavBar2() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "light" : "dark"
    );
  };

  return (
    <header className="header">
      <b>RAC, DR</b>
      <div className="nav">
        <Button bgcolor={darkMode?"#121212":"white"} color={darkMode?"white":"black"} fontWeight="600">हिन्दी</Button>
        <div className={`sun ${darkMode ? 'dark' : 'light'}`}>
          <i class="fa-solid fa-sun"></i>
        </div>
        <div>
          <label class="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
            <span class="slider round"></span>
          </label>
        </div>
        <div className={`moon ${darkMode ? 'dark' : 'light'}`}>
          <i class="fa-solid fa-moon"></i>
        </div>
      </div>
    </header>
  );
}

export default NavBar2;
