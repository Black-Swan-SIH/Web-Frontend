import React, { useState } from "react";
import Input from "./Input";
import "../styles/Stepperform.css";
import Heading from "./Heading";
import Button from "./Button";

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
        <Heading fontSize="18px" fontWeight="600">Personal</Heading>
        <Heading fontSize="18px" fontWeight="600">Experience</Heading>
        <Heading fontSize="18px" fontWeight="600">Education</Heading>
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
            <Heading fontSize="17px" fontWeight="500">Profile Picture</Heading>
            <Input
              type="file"
              name="profilePicture"
              value={formData.profilePicture}
              onChange={handleFileChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">Name</Heading>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">Email</Heading>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">Phone</Heading>
            <Input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">Gender</Heading>
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

            <Heading fontSize="17px" fontWeight="500">Date of Birth</Heading>
            <Input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">Skills</Heading>
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
            <Heading fontSize="17px" fontWeight="500">Position</Heading>
            <Input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">Department</Heading>
            <Input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">Start Date</Heading>
            <Input
              type="date"
              name="startDate1"
              value={formData.startDate}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">End Date</Heading>
            <Input
              type="date"
              name="endDate1"
              value={formData.endDate}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">Company Name</Heading>
            <Input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="stepperinput"
            />
          </>
        )}

        {step === 3 && (
          <>
            <Heading fontSize="17px" fontWeight="500">Degree</Heading>
            <Input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">Field</Heading>
            <Input
              type="text"
              name="field"
              value={formData.field}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">Start Date</Heading>
            <Input
              type="date"
              name="educationStartDate"
              value={formData.educationStartDate}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">End Date</Heading>
            <Input
              type="date"
              name="educationEndDate"
              value={formData.educationEndDate}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">Institute</Heading>
            <Input
              type="text"
              name="institute"
              value={formData.institute}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">LinkedIn</Heading>
            <Input
              type="text"
              name="linkedin"
              value={formData.linkedin}
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
        <Button onClick={nextStep} bgcolor="var(--bg-color2)" color="white" fontSize="18px" padding="8px 18px" borderRadius="8px">
          {step === 3 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default StepperForm;
