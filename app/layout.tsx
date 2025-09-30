"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import type React from "react";
import "./globals.css";
// import Header from "../../components/header"
// import Footer from "../../components/footer"

const montserrat = Montserrat({
  subsets: ["latin"],
});
const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*Add Paystack inline script globally */}
        <Script
          src="https://js.paystack.co/v1/inline.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="w-full">
        <main className={`${montserrat.className} text-black`}>
          <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </main>
      </body>
    </html>
  );
}
