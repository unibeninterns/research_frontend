"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Email from '@/components/icons/email';


export default function VerifyEmailPage() {
  const [otp, setOtp] = useState(Array(6).fill(""))
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [timer, setTimer] = useState(60) // 60 seconds countdown
  const router = useRouter()

  // Handle OTP input
  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        if (nextInput) (nextInput as HTMLInputElement).focus()
      }
    }
  }

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000)
      return () => clearTimeout(countdown)
    }
  }, [timer])

  // Handle submit verification
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const token = otp.join("")
    if (token.length < 6) return

    setLoading(true)
    setMessage(null)

    try {
      const res = await fetch(
        "https://research-server-1.onrender.com/auth/email-verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      )

      if (!res.ok) {
        throw new Error("Verification failed. Please try again.")
      }

      setMessage("Email verified successfully!")
      setTimeout(() => {
        router.push("/login")
      }, 2000)
    } catch (err: any) {
      setMessage(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  // Handle resend code
  const handleResend = async () => {
    try {
      const res = await fetch(
        "https://research-server-1.onrender.com/auth/email-verify/request",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      )
      if (!res.ok) throw new Error("Failed to resend code")
      setMessage("📩 Code resent to your email!")
      setTimer(60)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage(err.message || "Something went wrong")
      } else {
        setMessage("Something went wrong")
      }
    }    
  }

  const isComplete = otp.every((digit) => digit !== "")

  return (
    <div className="flex items-center justify-center min-h-full bg-white px-4">
      <div className="w-full max-w-md text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-600">
         <Email/>
        </div>

        {/* Title */}
        <h2 className="mb-2 text-lg md:text-2xl font-semibold text-gray-900">
          Check your email
        </h2>
        <p className="mb-6 text-sm md:text-md text-gray-500 w-full">
        We’ve just sent a 6-digit code to your email. Please enter the code below to verify your account.
        </p>

        {/* OTP Inputs */}
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

          {/* Timer / Resend link */}
          <p className="mb-6 text-sm flex text-[#800080] text-start">
            {timer > 0 ? (
              <>Resend code in  <span className=" ml-1"> 00:{timer}</span></>
            ) : (
              <>
              <p className="text-[#1E1E1E]">Didn’t get a code?</p>
              <button
                type="button"
                onClick={handleResend}
                className="font-medium text-[#800080] ml-6 hover:underline"
              >
                Resend code
              </button>
              </>
            )}
          </p>

          {/* Verify Button */}
          <button
            type="submit"
            disabled={!isComplete || loading}
            className={`w-full rounded-lg px-4 py-3 font-medium text-white transition ${
              isComplete && !loading
                ? "bg-[#800080] hover:bg-fuchsia-700"
                : "bg-gray-200 cursor-not-allowed"
            }`}
          >
            {loading ? "Verifying..." : "Verify my account"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="mt-4 text-sm text-center text-gray-700">{message}</p>
        )}
      </div>
    </div>
  )
}
