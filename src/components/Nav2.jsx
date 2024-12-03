import React, { useState } from "react";
import "./Nav2.css";
import Button from "./Button";
import proicon from "../assets/profile.png";
import { MdAddBox } from "react-icons/md";

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
     <div> 
      <Button fontSize="13px" bgcolor="transparent" color="black" fontWeight="600" hoverBorder={true}>Dashboard</Button>
      <Button fontSize="13px" bgcolor="transparent" color="black" fontWeight="600" hoverBorder={true}>About</Button>
      <Button fontSize="13px" bgcolor="transparent" color="black" fontWeight="600" hoverBorder={true}>Contact</Button>
      </div>
      <div className="nav">
      <img src={proicon} alt="Profile Icon" style={{borderRadius: "50%", width: "18px", height: "18px" }} />
      <MdAddBox style={{fontSize: "25px" }} />
        <Button bgcolor={darkMode?"#121212":"white"} color={darkMode?"white":"black"} fontWeight="600">हिन्दी</Button>
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
