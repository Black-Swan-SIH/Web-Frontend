import React from "react";
import "./Button.css";

const Button = ({bgcolor,color,children,borderRadius}) => {
  return (
    <button className="bt" style={{backgroundColor:bgcolor,color:color,borderRadius:borderRadius}}>
      {children}
    </button>
  );
};

export default Button;
