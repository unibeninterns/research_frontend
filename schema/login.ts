import { Token, User } from "@/interfaces/auth/user";
import axiosClient from "@/services/axios/axios";
import { z } from "zod";

export const loginSchema = z.object({
  identifier: z.string().min(1, "Please enter your email or username"),
  password: z.string().min(1, "Please enter your password"),
});
export type LoginSchema = z.infer<typeof loginSchema>;
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
