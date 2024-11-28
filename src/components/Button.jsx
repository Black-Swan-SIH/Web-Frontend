import React from "react";
import "./Button.css";

const Button = ({bgcolor,color,children,borderRadius,borderColor,padding}) => {
  return (
    <button className="bt" style={{backgroundColor:bgcolor,color:color,borderRadius:borderRadius,borderColor:borderColor,border: `1px solid ${borderColor}`,padding:padding}}>
      {children}
    </button>
  );
};

export default Button;
