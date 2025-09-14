'use client';

import type React from 'react';

import Link from 'next/link';
import Logo from './icons/logo';
import { useState } from 'react';
import { Montserrat } from 'next/font/google';

interface NavigationItem {
  href: string;
  label: string;
  isExternal?: boolean;
  name: string;
}

const montserrat = Montserrat({
  subsets: ['latin'],
});
export default function Header({ ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);
  const closeMenu = (): void => setIsMenuOpen(false);

  const navigationItems: NavigationItem[] = [
    { name: 'home', href: '/', label: 'Home' },
    { name: 'about', href: '/about', label: 'About Course', isExternal: false },
    { name: 'pricing', href: '/pricing', label: 'Pricing' },
    { name: 'classroom', href: '/student/dashboard', label: 'My Classroom' },
  ];

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    closeMenu();
  };

  // const handleMenuItemClick = (
  //   e: React.MouseEvent<HTMLAnchorElement>
  // ): void => {
  //   components / icons;
  //   e.preventDefault();
  //   closeMenu();
  // };
  return (
    <div className={`${montserrat.className}`} {...props}>
      <header className='fixed top-0 w-full left-0 z-50 p-1 md:px-[100px] md:py-[14px] shadow-md flex items-center bg-[#FBEFFFB2] backdrop-blur-[2px]'>
        <div className='flex items-center justify-between w-full md:px-8 lg:px-15'>
          <Logo />

          <div className='hidden md:flex items-center lg:text-xl text-black justify-between w-1/2 lg:gap-5'>
            {navigationItems.map((item, index) => (
              <button
                className='tertiary-button text-black bg-inherit px-4 rounded-full text-nowrap text-[18px]'
                key={index}
              >
                <Link key={index} href={item.href}>
                  {item.label}
                </Link>
              </button>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className='lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1'
            aria-label='Toggle menu'
            type='button'
          >
            <span className='w-6 h-0.5 bg-black'></span>
            <span className='w-6 h-0.5 bg-black'></span>
            <span className='w-6 h-0.5 bg-black'></span>
          </button>

          <div className='hidden lg:flex'>
            <Logo />
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div
            className='fixed inset-0  bg-white/10 backdrop-blur-sm z-40 md:hidden'
            onClick={handleOverlayClick}
            role='button'
            tabIndex={0}
            aria-label='Close menu overlay'
          />

          <div className='fixed right-0 bg-pink-100 rounded-lg shadow-lg z-50 w-64 p-6 lg:hidden'>
            <button
              onClick={closeMenu}
              className='absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-gray-600 hover:text-black'
              aria-label='Close menu'
              type='button'
            >
              <span className='text-3xl border-4 font-bold border-black py-0.5 px-3 rounded-lg'>
                ×
              </span>
            </button>

            <nav className='mt-8 space-y-4'>
              {navigationItems.map((item: NavigationItem, index: number) =>
                item.href === '/about' ? (
                  <Link
                    key={index}
                    href={item.href}
                    className='block text-black hover:text-purple-600 transition-colors'
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    className='block text-black hover:text-purple-600 transition-colors'
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
