"use client";
import Eye from "@/components/icons/Eye";
import EyeSlash from "@/components/icons/EyeSlash";
import Google from "@/components/icons/Google";
import Message from "@/components/icons/Message";
import PadlockSmall from "@/components/icons/PadlockSmall";
import User from "@/components/icons/User";
import Username from "@/components/icons/Username";
import { UserContext } from "@/context/UserContext";
import {
  registerSchema,
  registerUser,
  RegistrationSchema,
} from "@/schema/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const { register, formState, handleSubmit } = useForm({
    mode: "onTouched",
    resolver: zodResolver(registerSchema),
  });

  const { errors, isDirty, isValid, isSubmitting } = formState;

  const submitData = (data: RegistrationSchema) => {
    // console.log(data);
    registerMutation.mutate(data);
  };
  const handlePasswordToggle = (): void => {
    // event.preventDefault();
    setShowPassword(!showPassword);
  };
  const registerMutation = useMutation({
    mutationFn: (data: RegistrationSchema) => registerUser(data),
    onSuccess: (token) => {
      if (token) {
        setToken(token);
        localStorage.setItem("token", JSON.stringify(token));
        router.push("/verify-email");
      } else {
        throw new Error();
      }
    },
    onError: (e) => console.error(e.message),
  });
  const { setToken } = useContext(UserContext);

  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="flex w-full flex-col items-center gap-4 text-sm"
    >
      <div className="flex w-full flex-col items-center gap-5">
        <div className="flex w-full flex-col gap-6">
          <div
            className={`flex w-full flex-col items-start ${
              errors.fullname
                ? "text-error"
                : "text-[#848484] focus-within:text-[#800080]"
            }`}
          >
            <div
              className={`flex w-full items-center gap-2 rounded-[12px] border border-[#F5F5F5] bg-[#FBFBFB] p-2 shadow-xs ${
                errors.fullname
                  ? "border-error"
                  : "focus-within:border-[#800080]"
              }`}
            >
              <User />
              <input
                type="text"
                placeholder="Full Name"
                className="flex-1 text-sm outline-none"
                id="fullname"
                {...register("fullname")}
              />
            </div>
            {errors.fullname && (
              <p className="mt-1 text-xs">{errors.fullname.message}</p>
            )}
          </div>
          <div
            className={`flex w-full flex-col items-start ${
              errors.email
                ? "text-error"
                : "text-[#848484] focus-within:text-[#800080]"
            }`}
          >
            <div
              className={`flex w-full items-center gap-2 rounded-[12px] border border-[#F5F5F5] bg-[#FBFBFB] p-2 shadow-xs ${
                errors.email ? "border-error" : "focus-within:border-[#800080]"
              }`}
            >
              <Message />
              <input
                type="text"
                placeholder="Enter Email"
                className="flex-1 text-sm text-[#848484] outline-none"
                id="email"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="mt-2 ml-3 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div
            className={`flex w-full flex-col items-start ${
              errors.username
                ? "text-error"
                : "text-[#848484] focus-within:text-[#800080]"
            }`}
          >
            <div
              className={`flex w-full items-center gap-2 rounded-[12px] border border-[#F5F5F5] bg-[#FBFBFB] p-2 shadow-xs ${
                errors.username
                  ? "border-error"
                  : "focus-within:border-[#800080]"
              }`}
            >
              {/* <label htmlFor="username" className="ml-3 text-[10px] font-[500]">
              Username:
            </label> */}
              <Username />
              <input
                type="text"
                placeholder="Enter Username"
                className="flex-1 text-sm text-[#848484] outline-none"
                id="username"
                {...register("username")}
              />
            </div>
            {errors.username && (
              <p className="mt-2 ml-3 text-xs">{errors.username.message}</p>
            )}
          </div>
          <div
            className={`flex w-full flex-col items-start ${
              errors.password
                ? "text-error"
                : "text-[#848484] focus-within:text-[#800080]"
            }`}
          >
            <div
              className={`flex w-full items-center gap-2 rounded-[12px] border border-[#F5F5F5] bg-[#FBFBFB] p-2 shadow-xs ${
                errors.password
                  ? "border-error"
                  : "focus-within:border-[#800080]"
              }`}
            >
              <div className="flex w-full items-center gap-2">
                <PadlockSmall />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="flex-1 text-sm text-[#848484] outline-none"
                  id="password"
                  {...register("password")}
                />
                <div onClick={handlePasswordToggle} className="">
                  {showPassword ? <EyeSlash /> : <Eye />}
                </div>
              </div>
            </div>
            {errors.password && (
              <p className="mt-2 ml-3 text-xs">{errors.password.message}</p>
            )}
          </div>
          <div
            className={`flex w-full flex-col items-start ${
              errors.acceptedTermsOfUse
                ? "text-error"
                : "text-[#848484] focus-within:text-[#800080]"
            }`}
          >
            <div
              className={`flex w-full items-center gap-2 rounded-[12px] p-2 ${
                errors.acceptedTermsOfUse
                  ? "border-error"
                  : "focus-within:border-[#800080]"
              }`}
            >
              <input
                type="checkbox"
                // placeholder="Enter Password"
                className="flex-1 text-sm text-[#848484] outline-none"
                id="acceptedTermsOfUse"
                {...register("acceptedTermsOfUse")}
              />{" "}
              <p className="text-center text-sm text-[#848484]">
                I agree to the{" "}
                <a href="" className="text-primary">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="" className="text-primary">
                  Privacy Policy.
                </a>
              </p>
            </div>
            {errors.acceptedTermsOfUse && (
              <p className="mt-2 ml-3 text-xs">
                {errors.acceptedTermsOfUse.message}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit(submitData)}
          className="primary-button self-center rounded-[5px] px-6 py-2 text-sm font-[600] disabled:bg-[#84848480]"
          disabled={!isDirty || !isValid || isSubmitting}
        >
          Register
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-xs uppercase">OR</p>{" "}
        <div className="flex items-center justify-center p-2">
          <Google />
        </div>
      </div>
      <div className="flex w-full items-center">
        <p className="flex-1 text-center text-xs">
          Already have an
          <br />
          account?
        </p>
        <a href="#" className="tertiary-button">
          <button className="flex justify-between gap-4 self-center rounded-[4px] px-12 py-4 text-[#800080] lg:text-sm">
            <p>Login</p>
            <ArrowRight />
          </button>
        </a>
      </div>
    </form>
  );
}
