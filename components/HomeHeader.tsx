import Link from "next/link"
import Image from "next/image"
import logo from "./Logo.png"

export default function Header() {
  return (
    <header className="fixed top-0 w-full left-0 z-50 p-4 shadow-md flex items-center bg-pink-100">
      <div className="flex items-center justify-between w-full md:px-8 lg:px-15">
        <Image src={logo || "/placeholder.svg"} alt="Drid Research Logo" width={54} height={54} />
        <div className="hidden md:flex md:items-center lg:text-xl text-black justify-between w-1/2">
          <a href="">Home</a>
          <a href="/pricing">Pricing</a>
          <Link href="/about">About Course</Link>
          <a href="">My Classroom</a>
        </div>
        <div className="hidden md:flex">
          <Image src={logo || "/placeholder.svg"} alt="Drid Research Logo" width={54} height={54} />
        </div>
      </div>
    </header>
  )
}
