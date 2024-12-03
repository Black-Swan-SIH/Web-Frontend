import React from "react";
import "./Joblist.css";
import Heading from "./Heading";
import Lottie from "lottie-react";
import clock from "../assets/clock.json";

const Joblist = ({ imageSrc, jobs, application, open, lottieSrc }) => {
  return (
    <div className="ccontainer">
      <div className="image-container">
        <img src={imageSrc} alt="Job Image" className="image" />
      </div>
      <div className="text">
        <Heading fontSize="20px" fontWeight="600" className="job">
          {jobs}
        </Heading>
        <Heading fontSize="13px" fontWeight="400" className="application">
          {application}
        </Heading>
        <Heading fontSize="10px" fontWeight="400" className="open">
          {open}
        </Heading>
      </div>
      <div className="suffix">
        <Lottie animationData={clock } />
      </div>
    </div>
  );
};

export default Joblist;
