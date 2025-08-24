import { RegistrationForm } from "@/components/registration-form"
import Image from 'next/image'
import image from '../../../components/Image.png'
import type { NextPage } from 'next';


export default function SignupPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      >
        <Image
    src={image}
    alt="Library background"
    fill
    className="object-cover"
    priority
  />
    <div className="absolute inset-0 bg-black/20 z-10" />
      <div className="relative z-20 w-full max-w-6xl flex items-center justify-between">
        {/* Left side content */}
        <div className="hidden lg:flex flex-col text-white max-w-md">
          <div className="mb-8">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-white rounded"></div>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Enter a World of Knowledge</h1>
          <p className="text-lg opacity-90">Join us in promoting education and research</p>
        </div>

        {/* Right side form */}
        <div className="w-full lg:w-auto">
          <RegistrationForm />
        </div>
      </div>
    </div>
  )
}
