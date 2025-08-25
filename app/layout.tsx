// import type { Metadata } from 'next';
import Link from "next/link";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "../components/Logo.png";
import logo2 from "../components/logo2.png";
import Script from "next/script";
// import photo from '../components/Photo.png';
// import About from '@/app/about/page';

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://js.paystack.co/v1/inline.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <header className="fixed top-0 w-full left-0 z-50 p-4 shadow-md flex items-center bg-pink-100">
          <div className="flex items-center justify-between w-full md:px-8 lg:px-15">
            <Image src={logo} alt="Drid Research Logo" width={54} height={54} />
            <div className="hidden md:flex md:items-center lg:text-xl text-black justify-between w-1/2">
              <a href="">Home</a>
              <a href="/pricing">Pricing</a>
              <Link href="/about">About Course</Link>
              <a href="">My Classroom</a>
            </div>
            <div className="hidden md:flex">
              <Image
                src={logo}
                alt="Drid Research Logo"
                width={54}
                height={54}
              />
            </div>
          </div>
        </header>
        <main className={`${montserrat.className} text-black`}>{children}</main>
      </body>
      <footer className="bg-purple-950 text-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Left Side: Logo + Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={logo2}
                alt="Drid Research Logo"
                width={54}
                height={54}
              />
              <h2 className="text-2xl font-bold">DRID</h2>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Gain future-ready skills with structured research and innovation
              training from DRID, University of Benin.
            </p>
            <p className="font-semibold mb-3">
              Stay updated on new DRID courses and opportunities.
            </p>

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
            Copyright © 2025 Directorate of Research, Innovation & Development
            (DRID), University of Benin. All rights reserved.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </footer>{" "}
    </html>
  );
}
