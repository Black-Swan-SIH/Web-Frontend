import React from "react";
import "./Userlist.css";
import Heading from "./Heading";
import ProgressBar from "./progressBar";

const Userlist = ({ imageSrc, name, age, work, value }) => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={imageSrc} alt="Job Image" className="image" />
      </div>
      <div className="text">
        <Heading fontSize="20px" fontWeight="600" className="name" color="rgba(32, 32, 32, 1)"        >
          {name}
        </Heading>
        <div className="age">
          <Heading fontSize="12px" fontWeight="500" color="rgba(90, 90, 90, 1)">Age:</Heading>
          <Heading fontSize="12px" fontWeight="500">{age}</Heading>
          <Heading fontSize="12px" fontWeight="500">Years</Heading>
        </div>
        <Heading fontSize="10px" fontWeight="500" className="role" color="rgba(61, 61, 61, 1)">
          {work}
        </Heading>
      </div>
      <div className="suffix">
        <ProgressBar value={value} color="rgba(222, 143, 110, 1)" />
      </div>
    </div>
  );
};

export default Userlist;
