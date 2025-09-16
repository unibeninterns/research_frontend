import type React from "react";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat backdrop-blur-[2px]"
        style={{
          backgroundImage: `url('/image.png')`,
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-white/10 shadow-2xl backdrop-blur-sm">
          <div className="flex h-[90vh] flex-col lg:h-[80vh] lg:flex-row">
            {/* Left Section */}
            <div className="relative h-3/10 w-full lg:h-full lg:w-1/2">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/image.png')`,
                }}
              />
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative z-10 flex h-full items-center justify-center p-8 lg:justify-start lg:p-16">
                <div className="max-w-md text-center text-white lg:text-left">
                  <div className="left-0 mb-4 flex">
                    <Image
                      src="/authLogo.png"
                      alt="Drid Research Logo"
                      width={54}
                      height={54}
                      className="h-11 w-11 lg:h-[64px] lg:w-[64px]"
                    />
                    <p className="ml-4 text-left text-sm font-bold lg:text-xl">
                      DIRECTORATE OF <br />
                      RESEARCH, INNOVATION
                      <br /> AND DEVELOPMENT
                    </p>
                  </div>

                  <h1 className="mb-4 text-2xl leading-tight font-bold lg:text-5xl">
                    Enter a World of Knowledge
                  </h1>
                  <p className="text-md leading-relaxed text-white/90 lg:text-xl">
                    Join us in promoting education and research
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex w-full flex-1 items-center justify-center overflow-y-auto bg-white lg:h-full lg:w-1/2">
              <div className="h-full w-full">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
