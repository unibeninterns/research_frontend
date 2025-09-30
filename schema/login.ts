import { z, ZodType } from "zod";



export interface LoginSschema {
  identifier: string;
  password: string;
}


export const loginSchema: ZodType<LoginSschema> = z.object({
  identifier: z.string().min(1, "Please enter your email or username"),
  password: z.string().min(1, "Please enter your password"),
});
