export type TFormStep = 1 | 2 | 3 | 4;

export type TPersonalInfo = {
  fullName: string;
  email: string;
  phoneNumber: string;
};

export type TAddressDetails = {
  streetAddress: string;
  city: string;
  zipCode: string;
};

export type TAccountSetup = {
  username: string;
  password: string;
  confirmPassword: string;
};

export type TFormData = TPersonalInfo & TAddressDetails & TAccountSetup;
