import Link from "next/link"
import Image from "next/image"
import logo from "./Logo.png"

export default function Header() {
  return (
    <header className="fixed top-0 w-full left-0 z-50 p-4 shadow-md flex items-center bg-pink-100">
      <div className="flex items-center justify-between w-full md:px-8 lg:px-15">
        <Image src={logo || "/placeholder.svg"} alt="Drid Research Logo" width={30} height={30} />
        <div className="hidden md:flex md:items-center text-[16px] uppercase text-black justify-between w-1/2">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About Course</Link>
          <Link href="">My Classroom</Link>
        </div>
        <div className="hidden md:flex">
          <Image src={logo || "/placeholder.svg"} alt="Drid Research Logo" width={30} height={30} />
        </div>
      </div>
    </header>
  )
}
