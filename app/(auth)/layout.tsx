"use client";
import Logo from "@/components/icons/Logo";
import UserInfoComponent from "@/context/UserContext";
import { Abhaya_Libre } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { useState } from "react";

const abhayaLibre = Abhaya_Libre({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-abhaya",
  subsets: ["latin"],
  display: "swap",
});
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [page, setPage] = useState(
    pathname.split("/")[1] as "signup" | "login",
  );
  return (
    <UserInfoComponent>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          className="bg-gray-200 bg-center bg-no-repeat object-cover blur-[2px]"
          src={"/auth/image.png"}
          alt={"library"}
          fill
          priority
        />
        {/* <div className="absolute inset-0 bg-black/30" /> */}

        <div className="relative flex h-[600px] w-[950px] flex-col justify-center rounded-3xl border border-[#00000040] bg-[#FFFFFF1A] shadow-xl backdrop-blur-xl lg:flex-row">
          <Image
            className="absolute inset-0 rounded-3xl bg-gray-200 bg-center bg-no-repeat object-cover"
            src={"/auth/image.png"}
            alt={"library"}
            fill
            priority
          />
          <div className="absolute inset-0 h-full w-full rounded-3xl bg-[#0000004D]" />
          {/* Left Section */}
          <div className="relative z-100 flex flex-1 flex-col items-center justify-center p-4 text-white">
            <div className="flex items-center gap-4">
              <Logo size={65} />
              <p className="text-left text-sm font-bold">
                DIRECTORATE OF
                <br />
                RESEARCH, INNOVATION
                <br />
                AND DEVELOPMENT
              </p>
            </div>

            <div className="flex max-w-md flex-col items-center gap-6 text-center">
              <h2
                className={`${abhayaLibre.variable} mt-10 text-2xl font-extrabold lg:text-5xl lg:leading-[52px]`}
              >
                Enter a World of
                <br />
                Knowledge
              </h2>
              <p className="text-md text-white lg:text-lg">
                Join us in promoting education and research
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="z-100 flex h-full w-full flex-1 flex-col items-center gap-10 overflow-y-auto rounded-r-3xl bg-white p-4">
            <div className="flex items-center justify-center gap-15">
              <Link
                onClick={() => setPage("signup")}
                href="/signup"
                className={`tertiary-button flex-1 p-1 text-center font-medium transition-colors ${page === "signup" ? "border-primary text-primary border-b" : ""}`}
              >
                Register
              </Link>
              <Link
                onClick={() => setPage("login")}
                href="/login"
                className={`tertiary-button flex-1 p-1 text-center font-medium transition-colors ${page === "login" ? "border-primary text-primary border-b" : ""}`}
              >
                Login
              </Link>
            </div>
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </div>
    </UserInfoComponent>
  );
}
