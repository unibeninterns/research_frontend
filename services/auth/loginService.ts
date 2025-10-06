import { Token, User } from "@/interfaces/auth/user";
import { LoginSchema } from "@/schema/login";
import axiosClient from "@/services/axios/axios";

export const loginUser = async (loginInfo: LoginSchema) => {
  try {
    const response = await axiosClient.post("/auth/login", {
      ...loginInfo,
    });
    return response.data as { user: User; token: Token };
  } catch (e) {
    console.log(e);
  }
};

export const refreshUser = async (refreshToken: string) => {
  try {
    const response = await axiosClient.post("/auth/refresh", { refreshToken });
    return response.data as Token;
  } catch (e) {
    console.log(e);
  }
};

export const getUserInfo = async () => {
  try {
    const response = await axiosClient.get("/auth");
    return response.data as User;
  } catch (e) {
    console.log(e);
  }
};

export const requestEmail = async () => {
  try {
    const response = await axiosClient.get("/auth/verify-email/request");
    return response.status;
  } catch (e) {
    console.log(e);
  }
};

export const verifyEmail = async (token: string) => {
  try {
    const response = await axiosClient.post("/auth/email-verify", { token });
    return response.status;
  } catch (e) {
    console.log(e);
  }
};

export const logoutUser = async () => {
  try {} catch (e) {
    console.log(e)
  }
}