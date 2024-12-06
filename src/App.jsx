import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav";
import NavBar2 from "./components/Nav2";
import Sign from "./components/SignIn";
import Profile from "./components/profile";
import { green } from "@mui/material/colors";
import Experts from "./Pages/Experts";
import Job from "./components/Job";
import Itemcount from "./components/Itemcount";
import Candidatelist from "./Pages/Candidatelist";
import ProgressBar from "./components/progressBar";
import Dashboard from "./Pages/Dashboard";
import Userlist from "./components/Userlist";
// import Joblist from "./components/Joblist";
// import node from "./assets/node.jpg";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
       {isLoggedIn ? <NavBar2 /> : <NavBar />}
      <Routes>
        <Route path="/" element={<Sign but="Register" a="Login" text="Already have an account?">Sign Up</Sign>} />
        <Route path="/profile" element={<Profile value={80} color="green" userId={1}/>} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/job" element={<Job />} />
        <Route path="/itemcount" element={<Itemcount head="Total Experts" value="11.26K"/>} />     
        <Route path="/candidatelist" element={<Candidatelist head="Candidates" page="Userlist"/>}/>
        <Route path="/expertlist" element={<Candidatelist head="Experts"/>}/>
        <Route path="/bar" element={<ProgressBar value="80" color="green"/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        {/* <Route path="/joblist" element={<Joblist imageSrc={node} jobs={"Node.js Developer"} application={"Applications: 101"} open={"Opened 2 Days Ago"}/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;

