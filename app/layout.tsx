import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Script from "next/script"
// import Header from "../../components/header"
// import Footer from "../../components/footer"

const montserrat = Montserrat({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/*Add Paystack inline script globally */}
        <Script src="https://js.paystack.co/v1/inline.js" strategy="beforeInteractive" />
      </head>
      <body className="w-full">
        <main className={`${montserrat.className} text-black`}>{children}</main>
      </body>
    </html>
  )
}
