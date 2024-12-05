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
        <Heading fontSize="20px" fontWeight="600" className="name" color="var(--text-color5)"        >
          {name}
        </Heading>
        <div className="age">
          <Heading fontSize="12px" fontWeight="500" color="var(--text-color19)">Age:</Heading>
          <Heading fontSize="12px" fontWeight="500" color="var(--text-color20)">{age}</Heading>
          <Heading fontSize="12px" fontWeight="500" color="var(--text-color20)">Years</Heading>
        </div>
        <Heading fontSize="10px" fontWeight="500" className="role" color="var(--text-color11)">
          {work}
        </Heading>
      </div>
      <div className="suffix">
        <ProgressBar value={value} color="var(--bar-color)" />
      </div>
    </div>
  );
};

export default Userlist;
