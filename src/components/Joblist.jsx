import React from "react";
import "./Joblist.css";
import Heading from "./Heading";

const Joblist = ({ imageSrc, jobs, application, open,backgColor }) => {
  return (
<<<<<<< HEAD
    <div className="ccontainer" style={{backgroundColor:backgColor}}>
      <div className="image-ccontainer">
        <img src={imageSrc} alt="Job Image" className="cimage" />
=======
    <div className="ccontainer">
      <div className="image-container">
        <img src={imageSrc} alt="Job Image" className="image" />
>>>>>>> dea01c450a345b0ddb63964d63753c2dbdd2fbf0
      </div>
      <div className="ctext">
        <Heading fontSize="15px" fontWeight="600" color="rgba(32, 32, 32, 1)" className="job">
          {jobs}
        </Heading>
        <Heading fontSize="11px" fontWeight="500" color="rgba(43, 43, 43, 1)" className="application">
          {application}
        </Heading>
        <Heading fontSize="8px" fontWeight="500" color="rgba(61, 61, 61, 1)"className="open">
          {open}
        </Heading>
      </div>
    </div>
  );
};

export default Joblist;
