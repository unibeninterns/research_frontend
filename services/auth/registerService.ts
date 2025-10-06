import { Token } from "@/interfaces/auth/user";
import { RegistrationSchema } from "@/schema/register";
import axiosClient from "@/services/axios/axios";

export const registerUser = async (registrationInfo: RegistrationSchema) => {
  try {
    const response = await axiosClient.post("/auth/register", {
      ...registrationInfo,
    });
    return response.data as Token;
  } catch (e: unknown) {
    console.log(e);
  }
};
