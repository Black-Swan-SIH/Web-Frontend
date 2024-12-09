import React from "react";
import "./Button.css";
import { border, height } from "@mui/system";

const Button = ({
  width,
  bgcolor,
  color,
  children,
  borderRadius,
  borderColor,
  padding,
  fontWeight,
  fontSize,
  icon,
  hoverBorder,
  marginRight,
  border,
  marginTop,
  height,
}) => {
  return (
    <button
    type="submit"
      className={`bt ${hoverBorder ? "hover-border" : ""}`}
      style={{
        marginRight: marginRight,
        border: border,
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
