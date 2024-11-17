import { React } from "react";
import "./App.css";
import NavBar from "./components/nav";
import Sign from "./components/SignIn";

function App() {
  return (
    <>
      <NavBar/>
      <Sign>Sign Up</Sign>
    </>
  );
}

export default App;
