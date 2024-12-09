import React, { useState } from "react";
import "../styles/Main.css";
import play from "../assets/play.png";
import Lottie from "lottie-react";
import home from "../assets/home.json";
import at from "../assets/at.png";
import Button from "../components/Button";

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Register</h1>
        <div id="form" style={{
          width: "33vw",
        }}>
          <div style={{width: "80%"}}>
            <h2>Username</h2>
            <input style={{width: "100%"}} type="text" placeholder="username" />
          </div>

          <div style={{width: "80%"}}>
            <h2>Password</h2>
            <input style={{width: "100%"}} type="text" placeholder="Password" />
          </div>
        </div>
        <br />
        <div style={{width: "100px"}}>
          <button style={{width: "100%"}} className="close-button" onClick={onClose}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="main">
      <div id="content">
        <h1 id="head">Black Swan</h1>
        <h2 id="subhead">
          Connecting <i className="italics">experts</i> to talent with<br></br>
          <i className="italics">precision</i> and{" "}
          <i className="italics">insight</i>
        </h2>
        <button id="button" onClick={handleGetStartedClick}>
          <img src={play} alt="" width={"22px"} />
          <h1>Get Started</h1>
        </button>
        <div id="sideborders"></div>
        <div id="topborders"></div>
        <div id="lottie">
          <Lottie
            autoplay
            animationData={home}
            style={{ height: "500px", width: "500px" }}
          />
        </div>
        <div id="atone">
          <img src={at} alt="" width={"60px"} />
        </div>
        <div id="attwo">
          <img src={at} alt="" width={"60px"} />
        </div>
      </div>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default Main;
