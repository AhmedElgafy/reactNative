export interface FormValues {
  name: string;
  email: string;
  phone: string;
  date: string | null; // or Date if using DatePicker
  gender: Gender | null; // or Gender enum if defined
}

export enum Gender {
  M = "M",
  F = "F",
}
