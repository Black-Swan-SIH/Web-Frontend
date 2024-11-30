import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav";
import Sign from "./components/SignIn";
import Profile from "./components/profile";
import { green } from "@mui/material/colors";
import Experts from "./Pages/Experts";
import Job from "./components/Job";
import Joblist from "./components/Joblist";
import node from "./assets/node.jpg";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Sign but="Register" a="Login" text="Already have an account?">Sign Up</Sign>} />
        <Route path="/profile" element={<Profile value={80} color="green" userId={1}/>} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/job" element={<Job />} />
        <Route path="/userlist" element={<Joblist imageSrc={node} jobs={"Node.js Developer"} application={"Applications: 101"} open={"Opened 2 Days Ago"}/>}/>
      </Routes>
    </Router>
  );
}

export default App;

