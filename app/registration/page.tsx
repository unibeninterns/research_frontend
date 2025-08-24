import { RegistrationForm } from "@/components/registration-form"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VxaLLwTXPuP29VB1BBcplaDOn4HylL.png')`,
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-between px-8 lg:px-16">
        {/* Left Side Content */}
        <div className="flex-1 max-w-lg">
          {/* Logo */}
          <div className="mb-16">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Main Text */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Enter a World of
              <br />
              Knowledge
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 font-light">
              Join us in promoting education and
              <br />
              research
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="flex-shrink-0">
          <RegistrationForm />
        </div>
      </div>
    </div>
  )
}
