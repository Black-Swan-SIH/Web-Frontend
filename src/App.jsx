import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav";
import Sign from "./components/SignIn";
//import Profile from "./components/profile"; // Assuming you create this component
import Profile from "./components/profile";
import { green } from "@mui/material/colors";
import Experts from "./Pages/Experts";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Sign but="Register" a="Login" text="Already have an account?">Sign Up</Sign>} />
        <Route path="/profile" element={<Profile value={80} color="green" userId={1}/>} />
        <Route path="/experts" element={<Experts />} />
      </Routes>
    </Router>
  );
}

export default App;

