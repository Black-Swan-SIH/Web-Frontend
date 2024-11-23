import React from "react";
import "./Heading.css";

const Heading = ({ fontSize, color, fontWeight, children }) => {
  return (
    <div>
      <p style={{ fontSize: fontSize, color: color, fontWeight: fontWeight }}>
        {children}
      </p>
    </div>
  );
};

export default Heading;
