import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import logo from "./components/Logo.png"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 shadow-md flex items-center bg-background">
          <div className="flex items-center justify-between w-full md:px-8 lg:px-15">
            <Image src={logo} alt="Drid Research Logo" width={54} height={54} />
            <div className="hidden md:flex md:items-center lg:text-xl text-black justify-between w-1/2">
              <section>Home</section>
              <section>Pricing</section>
              <section>About Course</section>
              <section>My Classroom</section>
            </div>
            <div className="hidden md:flex">
              <Image src={logo} alt="Drid Research Logo" width={54} height={54} />
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
