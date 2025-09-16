"use client";

import type React from "react";

import { useState, type ChangeEvent, type MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface FormData {
  fullName: string;
  username: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}

type TabType = "register" | "login";

type FormField = keyof FormData;

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  field: FormField;
  showPasswordToggle?: boolean;
}

export function RegistrationForm() {
  const [activeTab, setActiveTab] = useState<TabType>("register");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    username: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleInputChange = (
    field: FormField,
    value: string | boolean,
  ): void => {
    setFormData((prev: FormData) => ({ ...prev, [field]: value }));
  };

  const handleTabClick =
    (tab: TabType) =>
    (event: MouseEvent<HTMLButtonElement>): void => {
      event.preventDefault();
      setActiveTab(tab);
    };

  const handlePasswordToggle = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const InputField: React.FC<InputFieldProps> = ({
    type,
    placeholder,
    value,
    field,
    showPasswordToggle = false,
  }) => (
    <div className="relative">
      <Input
        type={showPasswordToggle && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(field, e.target.value)
        }
        className={`${showPasswordToggle ? "pr-20" : ""} h-12 border-gray-200 focus:border-purple-600 focus:ring-purple-600`}
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={handlePasswordToggle}
          className="absolute top-1/2 right-3 -translate-y-1/2 transform text-sm text-gray-400 hover:text-gray-600"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );

  return (
    <Card className="w-[400px] border-0 bg-white/95 shadow-2xl backdrop-blur-sm">
      <CardContent className="p-8">
        {/* Tab Navigation */}
        <div className="mb-8 flex">
          <button
            onClick={handleTabClick("register")}
            className={`flex-1 border-b-2 pb-3 text-center font-medium transition-colors ${
              activeTab === "register"
                ? "border-purple-600 text-purple-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Register
          </button>
          <button
            onClick={handleTabClick("login")}
            className={`flex-1 border-b-2 pb-3 text-center font-medium transition-colors ${
              activeTab === "login"
                ? "border-purple-600 text-purple-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Login
          </button>
        </div>

        {activeTab === "register" && (
          <div className="space-y-6">
            <InputField
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              field="fullName"
            />

            <InputField
              type="text"
              placeholder="Username"
              value={formData.username}
              field="username"
            />

            <InputField
              type="email"
              placeholder="Email Address"
              value={formData.email}
              field="email"
            />

            <InputField
              type="password"
              placeholder="Password"
              value={formData.password}
              field="password"
              showPasswordToggle={true}
            />

            {/* Terms Checkbox */}
            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked: boolean | "indeterminate") =>
                  handleInputChange("agreeToTerms", checked === true)
                }
                className="mt-1 data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600"
              />
              <label
                htmlFor="terms"
                className="text-sm leading-relaxed text-gray-600"
              >
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
              className="h-12 w-full rounded-lg bg-purple-600 font-medium text-white hover:bg-purple-700"
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

            {/* Login Link */}
            <div className="text-center">
              <span className="text-gray-600">Already have an account? </span>
              <button
                onClick={handleTabClick("login")}
                className="inline-flex items-center font-medium text-purple-600 hover:underline"
              >
                Login
                <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "login" && (
          <div className="space-y-6">
            <div className="py-8 text-center">
              <p className="text-gray-500">Login form would go here</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
