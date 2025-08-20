import Image from "next/image";
import image from "../components/LandingPageImage.png";
import image2 from "../components/image.png";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-600"></div>

        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#7E22CE"
            fillOpacity="1"
            d="M0,160L80,144C160,128,320,96,480,117.3C640,139,800,213,960,234.7C1120,256,1280,224,1360,208L1440,192V320H0Z"
          ></path>
        </svg>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-16 grid md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-3 w-full col-span-1 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-none">
              Connect. <br />
              Learn. Grow.
            </h1>
            <p className="text-3xl font-bold text-gray-300 max-w-lg">
              Advance your skills through structured research and innovation
              courses curated by the Directorate of Research, Innovation and
              Development (DRID), University of Benin.
            </p>
            <button className="bg-purple-500 hover:bg-pink-700 text-white md:px-15 py-3 rounded-md font-semibold transition text-sm px-4">
              REGISTER NOW
            </button>
          </div>
          <div className="hidden md:flex col-span-1">
            <Image src={image} alt="image" className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full flex justify-center items-center bg-background">
        <div className="grid items-center py-10 max-w-7xl px-10 grid-cols-2 text-black">
          <div className="col-span-1">
            <div className="text-2xl font-bold">
              <h1>About the DRID Course</h1>
            </div>
            <div className="text-sm">
              <p>
                Get cutting-edge research and innovation training through our
                online, expert-led course tailored for students, researchers, and
                professionals.
              </p>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          <div className="col-span-1">
            <Image src={image2} alt="image" width={548} height={463} />
          </div>
        </div>
      </div>
    </>
  );
}
