import React, { useState } from "react";
import "./Nav2.css";
import Button from "./Button";
import proicon from "../assets/profile.png";
import addition from "../assets/addition.png";

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
      <b>RAC, DRDO</b>
     <div className="flex gap-3">
      <Button fontSize="14px" bgcolor="transparent" color="var(--text-color1)" fontWeight="600" hoverBorder={true} padding="0.3em 7px" borderRadius="9px">Dashboard</Button>
      <Button fontSize="14px" bgcolor="transparent" color="var(--text-color1)" fontWeight="600" hoverBorder={true} padding="0.3em 7px" borderRadius="9px">About</Button>
      <Button fontSize="14px" bgcolor="transparent" color="var(--text-color1)" fontWeight="600" hoverBorder={true} padding="0.3em 7px" borderRadius="9px">Contact</Button>
      </div>
      <div className="nav">
        <img src={proicon} alt="Profile Icon" style={{borderRadius: "20%", width: "16px", height: "16px"}} />
        <img src={addition} alt="Addition Icon" style={{borderRadius: "25%", width: "20px", height: "20px" }} />
        <Button bgcolor="transparent" color="var(--text-color10)" fontWeight="600" fontSize="14px">हिन्दी</Button>
        <div className="flex gap-2">
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
      </div>
    </header>
  );
}

export default NavBar2;
