import React from "react";
import "./Button.css";

const Button = ({bgcolor,color,children,borderRadius,borderColor,padding,fontWeight}) => {
  return (
    <button className="bt" style={{backgroundColor:bgcolor,color:color,borderRadius:borderRadius,borderColor:borderColor,border: `1px solid ${borderColor}`,padding:padding,fontWeight:fontWeight}}>
      {children}
    </button>
  );
};

export default Button;
