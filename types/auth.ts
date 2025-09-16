export interface User {
  id: string;
  email: string;
  fullname: string;
  username: string;
}

export interface SignupData {
  email: string;
  fullname: string;
  username: string;
  password: string;
  acceptedTermsOfUse: boolean;
}

export interface LoginData {
  identifier: string;
  password: string;
}

export interface ApiResponse {
  user: User;
  token: string;
  message: string;
}
