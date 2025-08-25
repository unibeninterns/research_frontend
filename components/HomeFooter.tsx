import Image from "next/image"
import footerImg from "../components/Photo.png"
import footerLogo from "../components/logo2.png"

export default function Footer() {
  return (
    <footer>
      <div className="relative w-full">
       <Image src={footerImg} alt="image" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex flex-col items-center text-center px-4 justify-center lg:justify-end pb-0 lg:pb-16 bg-black/30">
          <h2 className="text-white text-2xl md:text-4xl lg:text-7xl font-bold mb-2">Learning never stops.</h2>
          <p className="text-white text-md md:text-2xl mb-2">Join the next DRID cohort.</p>
        </div>
      </div>

      <div className="bg-purple-950 text-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Left Side: Logo + Description */}
          <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src={footerLogo || "/placeholder.svg"} alt="Drid Research Logo" width={54} height={54} />
            <h2 className="text-2xl font-bold">DRID</h2>
          </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Gain future-ready skills with structured research and innovation training from DRID, University of Benin.
            </p>
            <p className="font-semibold mb-3">Stay updated on new DRID courses and opportunities.</p>

            {/* Email Subscription */}
            <form className="flex w-full max-w-md mr-auto border border-gray-500 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-2 bg-transparent text-white outline-none min-w-0"
              />
              <button
                type="submit"
                className="bg-purple-800 px-4 py-2 text-white font-medium hover:bg-pink-700 transition whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          </div>

          {/* Right Side: Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">DRID</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#">About DRID</a>
                </li>
                <li>
                  <a href="#">Mission & Vision</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Courses</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#">Course Overview</a>
                </li>
                <li>
                  <a href="#">Curriculum</a>
                </li>
                <li>
                  <a href="#">Faculty</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#">Reviews</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            Copyright © 2025 Directorate of Research, Innovation & Development (DRID), University of Benin. All rights
            reserved.
          </p>
          <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
