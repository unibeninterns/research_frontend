"use client"

import { useState, type ChangeEvent, type MouseEvent } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation" 


interface SignupFormData {
  fullname: string
  username: string
  email: string
  password: string
  agreeToTerms: boolean
}

interface FormErrors {
  fullname?: string
  username?: string
  email?: string
  password?: string
  agreeToTerms?: string
  general?: string
}

type FormField = keyof SignupFormData

export function SignupForm() {
  const { signup, isLoading } = useAuth()
  const router = useRouter()  


  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [formData, setFormData] = useState<SignupFormData>({
    fullname: "",
    username: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullname) newErrors.fullname = "Full name is required"
    if (!formData.username) newErrors.username = "Username is required"
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: FormField, value: string | boolean): void => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handlePasswordToggle = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    setShowPassword(!showPassword)
  }

  const handleFormSubmit = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault()

    if (!validateForm()) return

    try {
      await signup({
        fullname: formData.fullname,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        acceptedTermsOfUse: formData.agreeToTerms,
      })
      router.push("/verify-email")
    } catch (error) {
      setErrors({
        general: error instanceof Error ? error.message : "Signup failed",
      })
    }
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
          {errors.general && (
            <div className="text-red-600 text-sm bg-red-50 border border-red-200 p-2 rounded-md">
              {errors.general}
            </div>
          )}

          <div className="relative">
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange("fullname", e.target.value)
              }
              className={`h-12 ${errors.fullname ? "border-red-300" : "border-gray-200"} focus:border-purple-600 focus:ring-purple-600`}
            />
            {errors.fullname && <p className="text-sm text-red-600 mt-1">{errors.fullname}</p>}
          </div>

          <div className="relative">
            <Input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange("username", e.target.value)
              }
              className={`h-12 ${errors.username ? "border-red-300" : "border-gray-200"} focus:border-purple-600 focus:ring-purple-600`}
            />
            {errors.username && <p className="text-sm text-red-600 mt-1">{errors.username}</p>}
          </div>

          <div className="relative">
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange("email", e.target.value)
              }
              className={`h-12 ${errors.email ? "border-red-300" : "border-gray-200"} focus:border-purple-600 focus:ring-purple-600`}
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange("password", e.target.value)
              }
              className={`pr-20 h-12 ${errors.password ? "border-red-300" : "border-gray-200"} focus:border-purple-600 focus:ring-purple-600`}
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked: boolean | "indeterminate") =>
                handleInputChange("agreeToTerms", checked === true)
              }
              className={`mt-1 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 ${errors.agreeToTerms ? "border-red-300" : ""}`}
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
              {errors.agreeToTerms && (
                <p className="text-sm text-red-600 mt-1">{errors.agreeToTerms}</p>
              )}
            </label>
          </div>

          {/* Register Button */}
          <Button
            onClick={handleFormSubmit}
            className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg"
            disabled={!formData.agreeToTerms || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Account...
              </>
            ) : (
              "Register"
            )}
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
