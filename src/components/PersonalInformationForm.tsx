import CustomTextInput from "./CustomTextInput";

const PersonalInformationForm = () => {
  return (
    <div>
      <h3>Tell us about yourself</h3>
      <div>
        <CustomTextInput
          label="First Name"
          type="text"
          name="firstName"
          id="firstName"
          value=""
          onChange={() => {}}
        />
        <CustomTextInput
          label="Last Name"
          type="text"
          name="lastName"
          id="lastName"
          value=""
          onChange={() => {}}
        />
        <CustomTextInput
          label="Email"
          type="email"
          name="email"
          id="email"
          value=""
          onChange={() => {}}
        />
        <CustomTextInput
          label="Telephone"
          type="tel"
          name="telephone"
          id="telephone"
          value=""
          onChange={() => {}}
        />
        <CustomTextInput
          label="Date of Birth"
          type="text"
          name="dateOfBirth"
          id="dateOfBirth"
          value=""
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default PersonalInformationForm;
