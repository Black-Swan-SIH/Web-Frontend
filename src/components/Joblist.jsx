import React from "react";
import "./Joblist.css";
import Heading from "./Heading";

const Joblist = ({ imageSrc,jobs,application,open }) => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={imageSrc} alt="Job Image" className="image" />
      </div>
      <div className="text">
        <Heading fontSize="20px" fontWeight="600" className="job">{jobs}</Heading>
        <Heading fontSize="13px" fontWeight="400" className="application">{application}</Heading>
        <Heading fontSize="10px" fontWeight="400" className="open">{open}</Heading>
      </div>
      <div className="suffix">
        hey
      </div>
    </div>
  );
};

export default Joblist;
