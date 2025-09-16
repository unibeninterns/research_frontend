"use client";
import { useState, type ChangeEvent, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import { Eye, EyeOff, Loader2 } from "lucide-react";

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormErrors {
  email?: string;
  password?: string;
  general?: string;
}

type FormField = keyof LoginFormData;

export function LoginForm() {
  const router = useRouter();
  const { login, isLoading } = useAuth();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginFormErrors>({});

  const handleInputChange = (field: FormField, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: LoginFormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePasswordToggle = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      await login(formData.email, formData.password);
      router.push("/");
    } catch (error) {
      setErrors({
        general: error instanceof Error ? error.message : "Login failed",
      });
    }
  };

  return (
    <Card className="flex min-h-full w-full flex-col border-0 bg-white/95 shadow-2xl backdrop-blur-sm">
      <CardContent className="flex flex-1 flex-col p-8">
        {/* Tab Navigation */}
        <div className="mb-8 flex">
          <Link
            href="/signup"
            className="flex-1 border-b-2 border-transparent pb-3 text-center font-medium text-gray-500 transition-colors hover:text-gray-700"
          >
            Register
          </Link>
          <div className="flex-1 border-b-2 border-purple-600 pb-3 text-center font-medium text-purple-600">
            Login
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center space-y-6">
          {errors.general && (
            <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600">
              {errors.general}
            </div>
          )}

          <div className="relative">
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange("email", e.target.value)
              }
              className={`h-12 border-gray-200 focus:border-purple-600 focus:ring-purple-600 ${
                errors.email ? "border-red-300" : ""
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange("password", e.target.value)
              }
              className={`h-12 border-gray-200 pr-20 focus:border-purple-600 focus:ring-purple-600 ${
                errors.password ? "border-red-300" : ""
              }`}
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute top-1/2 right-3 -translate-y-1/2 transform text-sm text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-purple-600 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>

          <Button
            onClick={handleFormSubmit}
            className="h-12 w-full rounded-lg bg-purple-600 font-medium text-white hover:bg-purple-700"
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
              <span className="bg-white px-4 text-gray-500">OR</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="h-12 w-full border-gray-200 bg-transparent hover:bg-gray-50"
          >
            <span className="mr-3 font-semibold text-blue-600">G</span>
            Continue with Google
          </Button>

          <div className="text-center">
            <span className="text-gray-600">{`Don't have an account?`} </span>
            <Link
              href="/signup"
              className="inline-flex items-center font-medium text-purple-600 hover:underline"
            >
              Sign up
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
