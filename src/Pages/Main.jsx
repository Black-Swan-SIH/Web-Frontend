import "../styles/Main.css";
import play from "../assets/play.png";
import Lottie from "lottie-react";
import home from "../assets/home.json";
import at from "../assets/at.png";

const Main = () => {
  return (
    <div id="main">
      <div id="content">
        <h1 id="head">Black Swan</h1>
        <h2 id="subhead">
          Connecting <i className="italics">experts</i> to talent with<br></br>
          <i className="italics">precision</i> and{" "}
          <i className="italics">insight</i>
        </h2>
        <div id="button">
          <img src={play} alt="" width={"22px"} />
          <h1>Get Started</h1>
        </div>
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
    </div>
  );
};

export default Main;
