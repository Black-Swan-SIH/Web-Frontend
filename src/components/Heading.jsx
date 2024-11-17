import React from "react";
import "./Heading.css";

const Heading = ({ fontSize, children }) => {
  return (
    <div>
      <p style={{ fontSize: fontSize }}>{children}</p>
    </div>
  );
};

export default Heading;
