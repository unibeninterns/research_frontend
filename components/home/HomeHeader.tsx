"use client";
import Logo from "@/components/icons/Logo";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavigationItem {
  href: string;
  label: string;
  isExternal?: boolean;
  name: string;
}

const montserrat = Montserrat({
  subsets: ["latin"],
});
export default function Header({ ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);
  const closeMenu = (): void => setIsMenuOpen(false);

  const navigationItems: NavigationItem[] = [
    { name: "home", href: "/", label: "Home" },
    { name: "about", href: "/about", label: "About Course", isExternal: false },
    { name: "pricing", href: "/pricing", label: "Pricing" },
    { name: "classroom", href: "/student/dashboard", label: "My Classroom" },
  ];
  const linkPageToPath = (path: string) => {
    switch (path) {
      case "about":
        return "about";
      case "pricing":
        return "pricing";
      case "student":
        return "classroom";
      default:
        return "home";
    }
  };
  const pathname = usePathname();

  const [page, setPage] = useState<NavigationItem["name"]>(
    linkPageToPath(pathname.split("/")[1]),
  );

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    closeMenu();
  };

  return (
    <div className={`${montserrat.className}`} {...props}>
      <header className="fixed top-0 left-0 z-50 flex w-full items-center bg-[#FBEFFFB2] p-1 shadow-md backdrop-blur-[2px] md:px-[100px] md:py-[14px]">
        <div className="flex w-full items-center justify-between md:px-8 lg:px-15">
          <Logo />

          <div className="hidden w-1/2 items-center justify-between text-black md:flex lg:gap-5 lg:text-xl">
            {navigationItems.map((item, index) => (
              <button
                className={`tertiary-button rounded-full bg-inherit px-4 text-[18px] text-nowrap ${page === item.name ? "text-primary" : "text-black"}`}
                key={index}
                onClick={() => setPage(item.name)}
              >
                <Link key={index} href={item.href}>
                  {item.label}
                </Link>
              </button>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="flex h-8 w-8 flex-col items-center justify-center space-y-1 lg:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            <span className="h-0.5 w-6 bg-black"></span>
            <span className="h-0.5 w-6 bg-black"></span>
            <span className="h-0.5 w-6 bg-black"></span>
          </button>

          <div className="hidden lg:flex">
            <Logo />
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-white/10 backdrop-blur-sm md:hidden"
            onClick={handleOverlayClick}
            role="button"
            tabIndex={0}
            aria-label="Close menu overlay"
          />

          <div className="fixed right-0 z-50 w-64 rounded-lg bg-pink-100 p-6 shadow-lg lg:hidden">
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center text-gray-600 hover:text-black"
              aria-label="Close menu"
              type="button"
            >
              <span className="rounded-lg border-4 border-black px-3 py-0.5 text-3xl font-bold">
                ×
              </span>
            </button>

            <nav className="mt-8 space-y-4">
              {navigationItems.map((item: NavigationItem, index: number) =>
                item.href === "/about" ? (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-black transition-colors hover:text-purple-600"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    className="block text-black transition-colors hover:text-purple-600"
                  >
                    {item.label}
                  </a>
                ),
              )}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
