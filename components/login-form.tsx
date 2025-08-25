"use client"
import { useState, type ChangeEvent, type MouseEvent } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent } from "./ui/card"
import Link from "next/link"

interface LoginFormData {
  email: string
  password: string
}

type FormField = keyof LoginFormData

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  })

  const handleInputChange = (field: FormField, value: string): void => {
    setFormData((prev: LoginFormData) => ({ ...prev, [field]: value }))
  }

  const handlePasswordToggle = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    setShowPassword(!showPassword)
  }

  const handleFormSubmit = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    console.log("Login form submitted:", formData)
  }

  return (
    <Card className="w-full bg-white/95 backdrop-blur-sm shadow-2xl border-0">
      <CardContent className="p-8">
        {/* Tab Navigation */}
        <div className="flex mb-8">
          <Link
            href="/signup"
            className="flex-1 pb-3 text-center font-medium border-b-2 text-gray-500 border-transparent hover:text-gray-700 transition-colors"
          >
            Register
          </Link>
          <div className="flex-1 pb-3 text-center font-medium border-b-2 text-purple-600 border-purple-600">Login</div>
        </div>

        <div className="space-y-6">
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

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="#" className="text-sm text-purple-600 hover:underline">
              Forgot your password?
            </a>
          </div>

          {/* Login Button */}
          <Button
            onClick={handleFormSubmit}
            className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg"
          >
            Login
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

          {/* Signup Link */}
          <div className="text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <Link href="/signup" className="text-purple-600 hover:underline font-medium inline-flex items-center">
              Sign up
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
