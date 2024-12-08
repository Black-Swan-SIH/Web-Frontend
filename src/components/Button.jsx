import React from "react";
import "./Button.css";
import { border, height } from "@mui/system";

const Button = ({ width, bgcolor, color, children, borderRadius, borderColor, padding, fontWeight, fontSize, icon, hoverBorder, marginRight, border, marginTop,  height }) => {
  return (
    <button
      className={`bt ${hoverBorder ? 'hover-border' : ''}`}
      style={{
<<<<<<< HEAD
        width: width,
=======
        marginRight: marginRight,
        border: border,
>>>>>>> 0e94de38fcdbaf8528e0a681a0001b6d049c346b
        backgroundColor: bgcolor,
        color: color,
        borderRadius: borderRadius,
        borderColor: borderColor,
        padding: padding,
        fontWeight: fontWeight,
        fontSize: fontSize,
        marginTop: marginTop,
        width: width,
        height: height,
        
      }}
    >
      {children}
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

export default Button;