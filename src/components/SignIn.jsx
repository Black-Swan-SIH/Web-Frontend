import React, { useState } from "react";
import "./SignIn.css";
import Input from "./Input";
import Button from "./Button";
import Heading from "./Heading";

export default function Sign({ children }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert(`Welcome, ${formData.email}!`);
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="container">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="glass-form">
        <h2>{children}</h2>
        <form onSubmit={handleSubmit} action="#">
          <Heading fontSize="18px">Email</Heading>
          <Input name="email" value={formData.email} onChange={handleChange}>
            abc@gmail.com
          </Input>
          <Heading fontSize="18px">Password</Heading>
          <Input
            name="password"
            value={formData.password}
            onChange={handleChange}
          >
            password
          </Input>
          <div className="btn">
            <Button>Register</Button>
          </div>
        </form>
        <p className="footer-text">
          <Heading fontSize="15px">Don't have an account? </Heading>
          <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
}
