export interface FormStepConfig {
  title: string;
  fields: string[];
}

export interface MultiStepFormData {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zip: string;
  username: string;
  password: string;
  confirmPassword: string;
}
