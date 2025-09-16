"use client";
import Eye from "@/components/icons/eye";
import EyeSlash from "@/components/icons/eyeSlash";
import PadlockSmall from "@/components/icons/padlockSmall";
import { ArrowRight } from "lucide-react";
import { useState, MouseEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type PasswordSchema = z.infer<typeof passwordSchema>;

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShow = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };
  const { register, formState, handleSubmit } = useForm({
    mode: "onTouched",
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const { errors, isDirty, isValid, isSubmitting } = formState;

  const submitData = (data: PasswordSchema) => console.log(data);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col gap-6 rounded-[16px] border-1 px-6 py-8 shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <div>
            <h2 className="text-center text-[28px] font-bold">
              Create New Password
            </h2>
            <p className="text-center text-sm">
              {`Enter your email address and we'll send a`}
              <br />
              link to your email to reset your password.
            </p>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(submitData)}
            className="flex w-full flex-col items-center gap-6"
          >
            <div
              className={`flex w-full flex-col items-start ${
                errors.password
                  ? "text-error"
                  : "text-[#848484] focus-within:text-[#800080]"
              }`}
            >
              <div
                className={`mt-1 flex w-full flex-col gap-2 rounded-[20px] border border-[#F5F5F5] bg-[#FBFBFB] p-4 pt-1 shadow-xs ${
                  errors.password
                    ? "border-error"
                    : "focus-within:border-[#800080]"
                }`}
              >
                <label
                  htmlFor="password"
                  className="ml-3 text-[10px] font-[500]"
                >
                  New Password
                </label>
                <div className="flex w-full items-center gap-2">
                  <PadlockSmall />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="flex-1 text-sm text-[#848484] outline-none"
                    id="password"
                    {...register("password")}
                  />
                  <button onClick={toggleShow} className="">
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </button>
                </div>
              </div>
              {errors.password && (
                <p className="mt-2 ml-3 text-xs">{errors.password.message}</p>
              )}
            </div>
            <div
              className={`flex w-full flex-col items-start ${
                errors.confirmPassword
                  ? "text-error"
                  : "text-[#848484] focus-within:text-[#800080]"
              }`}
            >
              <div
                className={`mt-1 flex w-full flex-col gap-2 rounded-[20px] border border-[#F5F5F5] bg-[#FBFBFB] p-4 pt-1 shadow-xs ${
                  errors.confirmPassword
                    ? "border-error"
                    : "focus-within:border-[#800080]"
                }`}
              >
                <label
                  htmlFor="confirm_password"
                  className="ml-3 text-[10px] font-[500]"
                >
                  Confirm Password
                </label>
                <div className="flex w-full items-center gap-2">
                  <PadlockSmall />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="flex-1 text-sm text-[#848484] outline-none"
                    id="confirm_password"
                    {...register("confirmPassword")}
                  />
                  <button onClick={toggleShow} className="">
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </button>
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 ml-3 text-xs">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="primary-button rounded-[5px] px-12 py-4 text-sm font-[600]"
              disabled={!isDirty || !isValid || isSubmitting}
            >
              Reset Password
            </button>
            <div className="flex w-full items-center">
              <p className="flex-1 text-center text-sm">
                Remember your password?
              </p>
              <a href="#" className="tertiary-button">
                <button className="flex justify-between gap-4 self-center rounded-[4px] px-12 py-4 text-[#800080] lg:text-sm">
                  <p>Login</p>
                  <ArrowRight />
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
