import { PersonalInformationFormProps } from "../../types";
import CustomTextInput from "../CustomTextInput";

const PersonalInformationForm = ({
  data,
  handleChange,
}: PersonalInformationFormProps) => {
  return (
    <div>
      <h3>Tell us about yourself</h3>
      <div>
        <CustomTextInput
          label="First Name"
          type="text"
          name="firstName"
          id="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
        <CustomTextInput
          label="Last Name"
          type="text"
          name="lastName"
          id="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
        <CustomTextInput
          label="Email"
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={handleChange}
        />
        <CustomTextInput
          label="Telephone"
          type="tel"
          name="telephone"
          id="telephone"
          value={data.telephone}
          onChange={handleChange}
        />
        <CustomTextInput
          label="Date of Birth"
          type="text"
          name="dateOfBirth"
          id="dateOfBirth"
          value={data.dateOfBirth}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PersonalInformationForm;
