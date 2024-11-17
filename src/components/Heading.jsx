import React from "react";

const Heading = ({ fontSize, children }) => {
  return (
    <div>
      <p style={{ fontSize: fontSize }}>{children}</p>
    </div>
  );
};

export default Heading;
