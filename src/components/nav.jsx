import React, { useState } from "react";
import "./nav.css";
import Button from "./Button";

function NavBar() {
  const [darkMode, setDarkMode] = useState(true);

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
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <Button>Login</Button>
      </div>
    </header>
  );
}

export default NavBar;
