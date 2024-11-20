import { React } from "react";
import "./App.css";
import NavBar from "./components/nav";
import Sign from "./components/SignIn";

function App() {
  return (
    <>
      <NavBar/>
      <Sign but="Register" a="Login" text="Already have an account? ">Sign Up</Sign>
    </>
  );
}

export default App;
