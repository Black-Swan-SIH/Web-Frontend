import React from 'react'
import "./Input.css"

const Input = ({children,name,value,onChange}) => {
  return (
    <div className="form-group">
            <input
              type={name}
              name={name}
              value={value}
              placeholder={children}
              onChange={onChange}
              required
            />
          </div>
  )
}

export default Input
