import React from "react";
import "./Heading.css";

const Heading = ({ fontSize,color, children }) => {
  return (
    <div>
      <p style={{ fontSize: fontSize ,color:color}}>{children}</p>
    </div>
  );
};

export default Heading;
