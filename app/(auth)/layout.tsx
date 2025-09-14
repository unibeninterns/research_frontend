import type React from "react"
import Image from "next/image"
import { AuthProvider } from "@/auth-context"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat backdrop-blur-[2px]"
        style={{
          backgroundImage: `url('/image.png')`,
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row h-[90vh] lg:h-[80vh]">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 h-3/10 lg:h-full relative">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                style={{
                  backgroundImage: `url('/image.png')`,
                }}
              />
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative z-10 flex items-center justify-center lg:justify-start p-8 lg:p-16 h-full">
                <div className="text-white max-w-md text-center lg:text-left">
                <Image 
                src="/authLogo.png" 
                alt="Drid Research Logo" 
                width={54} 
                height={54}
                className="w-11 h-11 lg:w-[54px] lg:h-[54px]"
/>
                  <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">Enter a World of Knowledge</h1>
                  <p className="text-md lg:text-xl text-white/90 leading-relaxed">
                    Join us in promoting education and research
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 flex-1 lg:h-full flex items-center justify-center bg-white overflow-y-auto">
            <div className="w-full h-full">
  <AuthProvider>
    {children}
  </AuthProvider>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
