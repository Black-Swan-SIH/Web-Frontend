import React from "react";
import "./Button.css";

const Button = ({ width, bgcolor, color, children, borderRadius, borderColor, padding, fontWeight, fontSize, icon, hoverBorder }) => {
  return (
    <button
      className={`bt ${hoverBorder ? 'hover-border' : ''}`}
      style={{
        backgroundColor: bgcolor,
        color: color,
        borderRadius: borderRadius,
        borderColor: borderColor,
        padding: padding,
        fontWeight: fontWeight,
        fontSize: fontSize,
      }}
    >
      {children}
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

export default Button;