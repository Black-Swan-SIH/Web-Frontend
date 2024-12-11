import React, { useState } from "react";
import "../styles/Experts.css";
import Input from "../components/Input";
import Button from "../components/Button";

const Experts = () => {
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
    <div className="box">
      <form onSubmit={handleSubmit} action="#">
        <div className="input-container">
          <div className="one">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              background={"var(--bg-color)"}
              borderRadius={"15px"}
              boxShadow={"none"}
            >
              Name*
            </Input>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              background={"var(--bg-color)"}
              borderRadius={"15px"}
              boxShadow={"none"}
            >
              Email*
            </Input>
          </div>
          <div className="two">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              background={"var(--bg-color)"}
              borderRadius={"15px"}
              boxShadow={"none"}
            >
              Phone Number*
            </Input>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              background={"var(--bg-color)"}
              borderRadius={"15px"}
              boxShadow={"none"}
            >
              Tech
            </Input>
            <div />
          </div>
          <div className="three">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              background={"var(--bg-color)"}
              borderRadius={"15px"}
              boxShadow={"none"}
            >
              Where do you see yourself in next 4 years?*
            </Input>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              background={"var(--bg-color)"}
              borderRadius={"15px"}
              boxShadow={"none"}
            >
              Paste your project links if any
            </Input>
          </div>
          <div className="four">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              background={"var(--bg-color)"}
              borderRadius={"15px"}
              boxShadow={"none"}
            >
              What would your special ability be as a video game character?*
            </Input>
            <Button borderColor="var(--text-color)" borderRadius={"25px"} padding={"0px 15px 0px 15px"} bgcolor={"var(--bg-color)"} color={"var(--text-color)"}>Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Experts;
