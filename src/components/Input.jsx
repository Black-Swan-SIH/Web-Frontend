import React from "react";
import "./Input.css";

const Input = ({
  children,
  name,
  value,
  onChange,
  color,
  background,
  borderRadius,
  boxShadow,
  placeholderColor,
}) => {
  const placeholderClass = placeholderColor ? `placeholder-${placeholderColor}` : "";

  return (
    <div className="form-group">
      <input
        type={name}
        name={name}
        value={value}
        placeholder={children}
        onChange={onChange}
        style={{
          color: color,
          background: background,
          borderRadius: borderRadius,
          boxShadow: boxShadow,
        }}
        className={placeholderClass}
        required
      />
    </div>
  );
};

export default Input;
