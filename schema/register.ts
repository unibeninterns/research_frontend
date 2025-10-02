import axiosClient from "@/services/axios/axios";
import { Token } from "@/types/user";
import { z } from "zod";

// export interface RegistrationSchema {
//   email: string;
//   fullname: string;
//   username: string;
//   acceptedTermsOfUse: boolean;
//   password: string;
//   confirm_password: string;
// }

export const registerSchema = z.object({
  fullname: z
    .string()
    .min(3, {
      message: "Full name must be at least 3 characters long.",
    })
    .trim()
    .regex(/\s+/, {
      message: "Please enter both a first name and a last name.",
    }),
  email: z.email(),
  username: z.string(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  acceptedTermsOfUse: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms of service.",
  }),
});
export type RegistrationSchema = z.infer<typeof registerSchema>;
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

// .regex(/(?=.*[a-z])/, "Password must contain a small letter")
// .regex(/(?=.*[A-Z])/, "Password must contain a capital letter")
// .regex(/(?=.*[0-9])/, "Password must contain a number")
// .regex(/(?=.*[a-z])/, "Password must contain a small letter")
// .regex(/(?=.*[\W_])/, "Password must contain a special character")
