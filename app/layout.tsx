import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import logo from "./components/Logo.png"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 shadow-md flex items-center bg-background">
          <div className="flex items-center justify-between w-full px-15">
            <Image src={logo} alt="Drid Research Logo" width={54} height={54} />
            <div className="flex items-center text-xl text-black justify-around w-1/2">
              <section>Home</section>
              <section>Pricing</section>
              <section>About Course</section>
              <section>My Classroom</section>
            </div>
            <Image src={logo} alt="Drid Research Logo" width={54} height={54} />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
