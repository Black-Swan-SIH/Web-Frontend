import React, { useState } from "react";
import "./nav.css";
import Button from "./Button";

function NavBar() {
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
      <b>RAC, DRDO</b>
      <div className="nav">
        <b className="hindi">हिन्दी</b>
        <div className="sun">
          <i class="fa-solid fa-sun"></i>
        </div>
        <div>
          <label class="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="moon">
          <i class="fa-solid fa-moon"></i>
        </div>
        <Button>Login</Button>
      </div>
    </header>
  );
}

export default NavBar;
