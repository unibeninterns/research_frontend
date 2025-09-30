"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Email from "@/components/icons/Email";
export default function VerifyEmailPage() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [timer, setTimer] = useState(60); 
  const router = useRouter();

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) (nextInput as HTMLInputElement).focus();
      }
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = otp.join("");
    if (token.length < 6) return;

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch(
        "https://research-server-1.onrender.com/auth/email-verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        },
      );

      if (!res.ok) {
        throw new Error("Verification failed. Please try again.");
      }

      setMessage("Email verified successfully!");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage(err.message || "Something went wrong");
      } else {
        setMessage("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      const res = await fetch(
        "https://research-server-1.onrender.com/auth/email-verify/request",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        },
      );
      if (!res.ok) throw new Error("Failed to resend code");
      setMessage("📩 Code resent to your email!");
      setTimer(60);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage(err.message || "Something went wrong");
      } else {
        setMessage("Something went wrong");
      }
    }
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <div className="flex min-h-full items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-600">
          <Email />
        </div>

        <h2 className="mb-2 text-lg font-semibold text-gray-900 md:text-2xl">
          Check your email
        </h2>
        <p className="md:text-md mb-6 w-full text-sm text-gray-500">
          We’ve just sent a 6-digit code to your email. Please enter the code
          below to verify your account.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex justify-center gap-1 md:gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className={`h-12 w-12 rounded-lg border text-center text-lg font-semibold focus:ring-2 focus:ring-fuchsia-600 ${
                  digit
                    ? "border-[#800080] text-black"
                    : "border-gray-300 text-gray-900"
                }`}
              />
            ))}
          </div>

          <p className="mb-6 flex text-start text-sm text-[#800080]">
            {timer > 0 ? (
              <>
                Resend code in <span className="ml-1"> 00:{timer}</span>
              </>
            ) : (
              <>
                <p className="text-[#1E1E1E]">Didn’t get a code?</p>
                <button
                  type="button"
                  onClick={handleResend}
                  className="ml-6 font-medium text-[#800080] hover:underline"
                >
                  Resend code
                </button>
              </>
            )}
          </p>

          <button
            type="submit"
            disabled={!isComplete || loading}
            className={`w-full rounded-lg px-4 py-3 font-medium text-white transition ${
              isComplete && !loading
                ? "bg-[#800080] hover:bg-fuchsia-700"
                : "cursor-not-allowed bg-gray-200"
            }`}
          >
            {loading ? "Verifying..." : "Verify my account"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
}
