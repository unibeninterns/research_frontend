"use client"
import { useState, type ChangeEvent, type MouseEvent } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import Link from "next/link"

interface SignupFormData {
  fullName: string
  username: string
  email: string
  password: string
  agreeToTerms: boolean
}

type FormField = keyof SignupFormData

export function SignupForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: "",
    username: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })

  const handleInputChange = (field: FormField, value: string | boolean): void => {
    setFormData((prev: SignupFormData) => ({ ...prev, [field]: value }))
  }

  const handlePasswordToggle = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    setShowPassword(!showPassword)
  }

  const handleFormSubmit = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    console.log("Signup form submitted:", formData)
  }

  return (
    <Card className="w-full bg-white/95 backdrop-blur-sm shadow-2xl border-0 min-h-full flex flex-col">
      <CardContent className="p-8 flex-1 flex flex-col">
        {/* Tab Navigation */}
        <div className="flex mb-8">
          <div className="flex-1 pb-3 text-center font-medium border-b-2 text-purple-600 border-purple-600">
            Register
          </div>
          <Link
            href="/login"
            className="flex-1 pb-3 text-center font-medium border-b-2 text-gray-500 border-transparent hover:text-gray-700 transition-colors"
          >
            Login
          </Link>
        </div>

        <div className="space-y-6 flex-1 flex flex-col justify-center">
          <div className="relative">
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("fullName", e.target.value)}
              className="h-12 border-gray-200 focus:border-purple-600 focus:ring-purple-600"
            />
          </div>

          <div className="relative">
            <Input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("username", e.target.value)}
              className="h-12 border-gray-200 focus:border-purple-600 focus:ring-purple-600"
            />
          </div>

          <div className="relative">
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
              className="h-12 border-gray-200 focus:border-purple-600 focus:ring-purple-600"
            />
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("password", e.target.value)}
              className="pr-20 h-12 border-gray-200 focus:border-purple-600 focus:ring-purple-600"
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked: boolean | "indeterminate") =>
                handleInputChange("agreeToTerms", checked === true)
              }
              className="mt-1 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
            />
            <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
              I agree to the{" "}
              <a href="#" className="text-purple-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-purple-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Register Button */}
          <Button
            onClick={handleFormSubmit}
            className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg"
            disabled={!formData.agreeToTerms}
          >
            Register
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <Button variant="outline" className="w-full h-12 border-gray-200 hover:bg-gray-50 bg-transparent">
            <span className="mr-3 text-blue-600 font-semibold">G</span>
            Continue with Google
          </Button>

          {/* Login Link */}
          <div className="text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link href="/login" className="text-purple-600 hover:underline font-medium inline-flex items-center">
              Login
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
