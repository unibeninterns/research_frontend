export interface User {
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
export interface Token { __access: string; __refresh: string };
