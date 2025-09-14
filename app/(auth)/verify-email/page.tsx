"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function VerifyEmailPage() {
  const [token, setToken] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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

      const data = await res.json()
      setMessage("✅ Email verified successfully!")

      setTimeout(() => {
        router.push("/login")
      }, 2000)
    } catch (err: any) {
      setMessage(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Verify Your Email
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4"
      >
        <Input
          type="text"
          placeholder="Enter verification token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required
        />

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify Email"}
        </Button>
      </form>

      {message && (
        <p className="mt-4 text-sm text-center text-gray-700">{message}</p>
      )}
    </div>
  )
}
