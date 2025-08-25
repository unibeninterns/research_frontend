import type React from "react"
import Image from "next/image"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{
          backgroundImage: `url('/image.png')`,
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row h-[750px]">
            {/* Left Section - Text Content with clear background */}
            <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/image.png')`,
                }}
              />
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative z-10 flex items-center justify-center lg:justify-start p-8 lg:p-16 h-full">
                <div className="text-white max-w-md text-center lg:text-left">
                  {/* Logo/Icon */}
                  <Image src="/authLogo.png" alt="Drid Research Logo" width={54} height={54} />

                  {/* Main Text */}
                  <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">Enter a World of Knowledge</h1>
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                    Join us in promoting education and research
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Auth Forms */}
            <div className="w-full lg:w-1/2 h-full lg:h-full flex items-center justify-center p-8 bg-white">
              <div className="w-full h-full">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
