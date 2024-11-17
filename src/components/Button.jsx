import React from "react";
import "./Button.css";

const Button = ({bgcolor,color,children}) => {
  return (
    <button className="bt" style={{backgroundColor:bgcolor,color:color}}>
      {children}
    </button>
  );
};

export default Button;
