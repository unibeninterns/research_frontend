import Image from "next/image";
import image from "./components/LandingPageImage.png"

export default function Home() {
  return(
    <>
      <div className="bg-purple-800">
        <div className="max-w-7xl te mx-auto px-6 lg:px-12 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 col-span-1">
          <h1 className="text-big md:text-big font-bold leading-none">
            Connect. <br /> 
            Learn. Grow.
          </h1>
          <p className="text-lg text-gray-300 max-w-md">
            Advance your skills through structured research and innovation 
            courses curated by the Directorate of Research, Innovation and 
            Development (DRID), University of Benin.
          </p>
          <button className="bg-purple-500 hover:bg-pink-700 text-white px-15 py-3 rounded-md font-semibold transition">
            REGISTER NOW
          </button>
        </div>
        <div className="col-span-1">
          <Image src={image} alt="image" width={758} height={758} />
        </div>
        </div>
      </div>
    </>
  )
}
