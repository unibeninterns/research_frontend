import { z, ZodType } from "zod";

export interface RegistrationSchema {
  email: string;
  fullname: string;
  username: string;
  acceptedTermsOfUse: boolean;
  password: string;
  confirm_password: string;
}

export interface LoginSschema {
  identifier: string;
  password: string;
}

export const registerSchema: ZodType<RegistrationSchema> = z
  .object({
    fullname: z
      .string()
      .min(3, {
        message: "Full name must be at least 3 characters long.",
      })
      .trim()
      .regex(/\s+/, {
        message: "Please enter both a first name and a last name.",
      }),
    email: z.string().email(),
    username: z.string(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirm_password: z
      .string()
      .min(8, "Password must be at least 8 characters"),
    acceptedTermsOfUse: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms of service.",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export const loginSchema: ZodType<LoginSschema> = z.object({
  identifier: z.string().min(1, "Please enter your email or username"),
  password: z.string().min(1, "Please enter your password"),
});
