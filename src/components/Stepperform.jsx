import React, { useState } from "react";
import Input from "./Input";
import "./Stepperform.css"; // Import the external CSS file
import Heading from "./Heading";

const StepperForm = () => {
  const [step, setStep] = useState(1);

  const [workExperiences, setWorkExperiences] = useState([
    { position: "", department: "", startDate: "", endDate: "", companyName: "" },
  ]);

  const [educations, setEducations] = useState([
    { degree: "", field: "", startDate: "", endDate: "", institute: "" },
  ]);
  
  const handleWorkChange = (index, field, value) => {
    const updatedWorkExperiences = [...workExperiences];
    updatedWorkExperiences[index][field] = value;
    setWorkExperiences(updatedWorkExperiences);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducations = [...educations];
    updatedEducations[index][field] = value;
    setEducations(updatedEducations);
  };

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, { position: "", department: "" }]);
  };

  const addEducation = () => {
    setEducations([...educations, { degree: "", institute: "" }]);
  };

  const [formData, setFormData] = useState({
    profilePicture: null,
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    skills: "",
    position: "",
    department: "",
    startDate: "",
    endDate: "",
    companyName: "",
    degree: "",
    field: "",
    educationStartDate: "",
    educationEndDate: "",
    institute: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="steppercontainer">
      <div className="flex justify-between">
        <Heading fontSize="20px">Personal</Heading>
        <Heading fontSize="20px">Experience</Heading>
        <Heading fontSize="20px">Education</Heading>
      </div>
      <div className="stepper">
        {[1, 2, 3].map((num) => (
          <React.Fragment key={num}>
            <div className={`step ${step >= num ? "active" : ""}`}>{num}</div>
            {num < 3 && (
              <div className={`step-line ${step > num ? "active" : ""}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="steppercontent">
        {step === 1 && (
          <>
            <Heading fontSize="19px">Profile Picture</Heading>
            <Input
              type="file"
              onChange={handleFileChange}
              className="stepperinput"
            />

            <Heading fontSize="19px">Name</Heading>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="19px">Email</Heading>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="19px">Phone</Heading>
            <Input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="19px">Gender</Heading>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="stepperselect"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <Heading fontSize="19px">Date of Birth</Heading>
            <Input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="19px">Skills</Heading>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="stepperinput"
            ></textarea>
          </>
        )}

        {step === 2 && (
          <>
            <Heading fontSize="19px">Position</Heading>
            <Input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="19px">Department</Heading>
            <Input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="19px">Start Date</Heading>
            <Input
              type="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="19px">End Date</Heading>
            <Input
              type="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="19px">Company Name</Heading>
            <Input
              type="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="stepperinput"
            />
          </>
        )}

        {step === 3 && (
          <>
            <Heading fontSize="19px">Degree</Heading>
            <Input
              type="degreee"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="19px">Field</Heading>
            <Input
              type="field"
              name="field"
              value={formData.field}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="19px">Start Date</Heading>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="19px">End Date</Heading>
            <Input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="19px">Institute</Heading>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="stepperselect"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <Heading fontSize="19px">LinkedIn</Heading>
            <Input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="stepperinput"
            />
          </>
        )}
      </div>

      <div className="stepperbuttons">
        <button
          onClick={prevStep}
          className="stepperbutton previous"
          disabled={step === 1}
        >
          Previous
        </button>
        <button onClick={nextStep} className="stepperbutton next">
          {step === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default StepperForm;
