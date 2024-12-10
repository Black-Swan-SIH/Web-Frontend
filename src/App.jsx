import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav";
import NavBar2 from "./components/Nav2";
import Sign from "./components/SignIn";
import Profile from "./components/profile";
import { green } from "@mui/material/colors";
import Experts from "./Pages/Experts";
import Job from "./components/Job";
import Candidatelist from "./Pages/Candidatelist";
import ProgressBar from "./components/progressBar";
import Dashboard from "./Pages/Dashboard";
import Main from "./Pages/Main";
import CandidateHome from "./Pages/CandidateHome";
import Joblist from "./components/Joblist";

import JobCandidate from "./Pages/JobCandidate";



// import Joblist from "./components/Joblist";
import JobList from "./Pages/JobList";
import StepperForm from "./components/Stepperform";

// import node from "./assets/node.jpg";
import Navbar3 from "./components/Navbar3";
import { Tune } from "@mui/icons-material";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
 const [showNavbar, setShowNavbar] = useState(true);
 const show=()=>{
  setShowNavbar(false);
 }

  
  return (
    <Router>
       {showNavbar && (isLoggedIn ? <NavBar2 /> : <NavBar />)}
      <Routes>
        <Route path="/expert/signin" element={<Sign but="Register" a="Login" text="Already have an account?" apiUrl="https://api.mlsc.tech/expert/signin">Sign In</Sign>} />
        <Route path="/candidate/signin" element={<Sign but="Register" a="Login" text="Already have an account?" apiUrl="https://api.mlsc.tech/candidate/signin">Sign In</Sign>} />
        <Route path="/admin/signin" element={<Sign but="Register" a="Login" text="Already have an account?" apiUrl="https://api.mlsc.tech/admin/signin">Sign In</Sign>} />
        <Route path="/profile" element={<Profile value={80} color="green" userId={1}/>} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/job" element={<Job />} /> 
        <Route path="/candidatelist" element={<Candidatelist head="Candidates" page="Userlist"/>}/>
        <Route path="/expertlist" element={<Candidatelist head="Experts" page="Expertlist"/>}/>
        <Route path="/panel" element={<Candidatelist head="Select your panel" page="Panel"/>}/>
        <Route path="/bar" element={<ProgressBar value="80" color="green"/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/joblist" element={<JobList head="Jobs" page="Userlist"/>}/>
        <Route path="/stepperform" element={<StepperForm/>}/>
        {}
        <Route path="/candidateHome" element={<CandidateHome setShowNavbar={setShowNavbar}/>}/>
        <Route path="/jobcandidate" element={<JobCandidate setShowNavbar={setShowNavbar}/>}/>
        
        {/* <Route path="/joblist" element={<Joblist imageSrc={node} jobs={"Node.js Developer"} application={"Applications: 101"} open={"Opened 2 Days Ago"}/>}/> */}
      </Routes>

        
        
  </Router>
    
  );
}

export default App;

