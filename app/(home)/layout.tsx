"use client";
import Footer from "@/components/home/HomeFooter";
import Header from "@/components/home/HomeHeader";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header id="header" />
      {children}
      <Footer />
    </div>
  );
}
