export type PersonalInformationType = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  dateOfBirth: string;
};

export type PersonalInformationFormProps = {
  data: PersonalInformationType;
  handleChange: (args: React.FormEvent<HTMLInputElement>) => void;
};
