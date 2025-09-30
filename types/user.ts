export type User = {
  id: string;
  email: string;
  fullname: string;
  username: string;
  acceptedTermsOfUse: boolean;
  isEmailVerified: boolean;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
};
export type Token = { __access: string; __refresh: string };
