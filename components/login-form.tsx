"use client"
import { useState, type ChangeEvent, type MouseEvent } from "react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent } from "./ui/card"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { Checkbox } from "./ui/checkbox"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import GoogleIcon from "./icons/googleIcon"
import Profile from "./icons/profile"
import PadlockSignUp from "./icons/padlockSignUp"

interface LoginFormData {
  email: string
  password: string
}

interface LoginFormErrors {
  email?: string
  password?: string
  general?: string
}

type FormField = keyof LoginFormData

export function LoginForm() {
  const router = useRouter()
  const { login, isLoading } = useAuth()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<LoginFormErrors>({})

  const handleInputChange = (field: FormField, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: LoginFormErrors = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handlePasswordToggle = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    setShowPassword(!showPassword)
  }

  const handleFormSubmit = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault()

    if (!validateForm()) return

    try {
      await login(formData.email, formData.password)
      router.push("/")
    } catch (error) {
      setErrors({ general: error instanceof Error ? error.message : "Login failed" })
    }
  }

  return (
    <Card className="w-full bg-white/95 backdrop-blur-sm shadow-2xl border-0 min-h-full flex flex-col">
      <CardContent className="p-8 flex-1 flex flex-col">
        {/* Tab Navigation */}
        <div className="flex mb-8">
          <Link
            href="/signup"
            className="flex-1 pb-3 text-center font-medium border-b-2 text-gray-500 border-transparent hover:text-gray-700 transition-colors"
          >
            Register
          </Link>
          <div className="flex-1 pb-3 text-center font-medium border-b-2 text-[#800080] border-[#800080]">Login</div>
        </div>

        <div className="space-y-6 flex-1 flex flex-col justify-center">
          {errors.general && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md">
              {errors.general}
            </div>
          )}

<div className="mb-4">
  <div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Profile/>
              </div>
               <Input
              type="email"
              placeholder="Username or Email"
              value={formData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
              className={`h-12 pl-10 border-gray-200 focus:border-purple-600 focus:ring-purple-600 ${
                errors.email ? "border-red-300" : ""
              }`}
            />
          </div>
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
  <div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <PadlockSignUp/>
              </div>
                <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("password", e.target.value)}
              className={`pr-20 pl-10 h-12 border-gray-200 focus:border-purple-600 focus:ring-purple-600 ${
                errors.password ? "border-red-300" : ""
              }`}
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
            
          </div>
          {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between mb-4">
          <label className="flex items-center space-x-2">
    <Checkbox
      id="remember"
      className="text-[#800080] focus:ring-[#800080] h-4 w-4 rounded border-gray-300"
    />
    <span className="text-sm text-gray-700">Remember me</span>
  </label>
            <Link href="/forgot-password" className="text-sm text-[#800080] hover:underline">
              Forgot your password?
            </Link>
          </div>

          <Button
            onClick={handleFormSubmit}
            className="w-full h-12 bg-[#800080] hover:bg-[#AA47AA] text-white font-medium rounded-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing In...
              </>
            ) : (
              "Login"
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

           <div className="flex item-center justify-center">
                      <Button variant="outline" className="w-24 h-12 border-[#F5F5F5] hover:bg-gray-50 bg-transparent">
                      <GoogleIcon/>
                    </Button>
                    </div> 

          <div className="text-center">
            <span className="text-gray-600">{`Don't have an account?`} </span>
            <Link href="/signup" className="text-[#800080] hover:underline font-medium inline-flex items-center">
              Register
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
