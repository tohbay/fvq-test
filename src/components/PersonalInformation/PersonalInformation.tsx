import React, { useState } from "react";
import PersonalInformationForm from "./PersonalInformationForm";
import { onboardingSteps } from "../../constants";
import Steps from "../FormSteps/Steps";

export default function PersonalInformation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState({
    firstName: "Pietro",
    lastName: "Schirano",
    email: "pietro@gmail.com",
    telephone: "+1",
    dateOfBirth: "12 / 03 / 96",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (currentIndex === onboardingSteps.length - 1) {
      setCurrentIndex(0);
      return;
    }
    console.log(JSON.stringify(data));
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="main-container">
      <div className="content">
        <div className="form-header">
          <h1>Personal Information</h1>
          <Steps currentIndex={currentIndex} />
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <PersonalInformationForm data={data} handleChange={handleChange} />
          <div className="submit-button-container">
            <button className="submit-button">Continue</button>
          </div>
        </form>
        <p className="agreement">
          By clicking continue above, you have agreed to the{" "}
          <span className="terms">terms and policy</span> of the service.
        </p>
      </div>
    </div>
  );
}
