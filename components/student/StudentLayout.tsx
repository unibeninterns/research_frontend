'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  BookOpen,
  Video,
  MessageSquare,
  FolderOpen,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';
import logo2 from '../logo2.png';


const navigationItems = [
  {
    name: 'Dashboard',
    href: '/student/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'My Classroom',
    href: '/student/classroom',
    icon: BookOpen,
  },
  {
    name: 'Live Sessions',
    href: '/student/sessions',
    icon: Video,
  },
  {
    name: "Student's Forum",
    href: '/student/forum',
    icon: MessageSquare,
  },
  {
    name: 'Resources',
    href: '/student/resources',
    icon: FolderOpen,
  },
];

const bottomItems = [
  {
    name: 'Settings',
    href: '/student/settings',
    icon: Settings,
  },
];

interface StudentLayoutProps {
  children: React.ReactNode;
}

export default function StudentLayout({ children }: StudentLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const sidebar = document.getElementById('mobile-sidebar');
      const menuButton = document.getElementById('mobile-menu-button');
      if (
        isMobileMenuOpen &&
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className='flex h-screen bg-gray-50'>
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden'
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden='true'
        />
      )}

      {/* Mobile Sidebar */}
      <div
        id='mobile-sidebar'
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out lg:hidden',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Mobile Header */}
        <div className='p-3 border-b border-gray-200 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Image
              src={logo2}
              width={56}
              height={56}
              alt='DRID logo'
              className='h-8 w-10'
            />
            <span className='text-lg text-[#800080] md:text-2xl font-extrabold pt-3 tracking-wide'>
              DRID
            </span>
          </div>
          <Button
            variant='ghost'
            size='sm'
            onClick={() => setIsMobileMenuOpen(false)}
            className='p-1 h-8 w-8'
          >
            <ChevronLeft className='h-4 w-4' />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className='flex-1 flex flex-col justify-between p-3'>
          <nav className='space-y-2'>
            {navigationItems.map((item) => {
              const isActive = item.name === 'My Classroom' 
              ? pathname.startsWith(item.href)
              : pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors',
                    isActive
                      ? 'bg-[#F9DBFF3D] text-[#800080]'
                      : 'text-[#1E1E1E] hover:bg-gray-100'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className='h-5 w-5 flex-shrink-0' />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <nav className='space-y-2'>
            {bottomItems.map((item) => {
              const isActive = item.name === 'My Classroom' 
              ? pathname.startsWith(item.href)
              : pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors',
                    isActive
                      ? 'bg-[#F9DBFF3D] text-[#800080]'
                      : 'text-[#1E1E1E] hover:bg-gray-100'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className='h-5 w-5 flex-shrink-0' />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            {/* Mobile Logout Button */}
            <button
              className='flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors w-full text-left text-[#1E1E1E] hover:bg-gray-100'
              disabled
              title='Logout (not implemented)'
            >
              <LogOut className='h-5 w-5 flex-shrink-0' />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          'hidden lg:flex bg-white border-r border-gray-200 flex-col transition-all duration-300',
          isCollapsed ? 'w-16' : 'w-48'
        )}
      >
        {/* Desktop Header with Logo and Toggle */}
        <div className='p-3 border-b border-gray-200 flex items-center justify-between'>
          {!isCollapsed && (
            <div className='flex items-center gap-3'>
              <Image
                src={logo2}
                width={56}
                height={56}
                alt='DRID logo'
                className='h-8 w-10'
              />
              <span className='text-lg text-[#800080] md:text-2xl font-extrabold pt-3 tracking-wide'>
                DRID
              </span>
            </div>
          )}
          <Button
            variant='ghost'
            size='sm'
            onClick={() => setIsCollapsed(!isCollapsed)}
            className='p-1 h-8 w-8'
          >
            {isCollapsed ? (
              <ChevronRight className='h-4 w-4' />
            ) : (
              <ChevronLeft className='h-4 w-4' />
            )}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className='flex-1 flex flex-col justify-between p-3'>
          <nav className='space-y-2'>
            {navigationItems.map((item) => {
              const isActive = item.name === 'My Classroom' 
              ? pathname.startsWith(item.href)
              : pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors',
                    isActive
                      ? 'bg-[#F9DBFF3D] text-[#800080]'
                      : 'text-[#1E1E1E] hover:bg-gray-100',
                    isCollapsed && 'justify-center'
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <item.icon className='h-5 w-5 flex-shrink-0' />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>

          <nav className='space-y-2'>
            {bottomItems.map((item) => {
              const isActive = item.name === 'My Classroom' 
              ? pathname.startsWith(item.href)
              : pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors',
                    isActive
                      ? 'bg-[#F9DBFF3D] text-[#800080]'
                      : 'text-[#1E1E1E] hover:bg-gray-100',
                    isCollapsed && 'justify-center'
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <item.icon className='h-5 w-5 flex-shrink-0' />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
            {/* Desktop Logout Button */}
            <button
              className={cn(
                'flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors w-full text-left',
                'text-[#1E1E1E] hover:bg-gray-100',
                isCollapsed && 'justify-center'
              )}
              disabled
              title='Logout (not implemented)'
            >
              <LogOut className='h-5 w-5 flex-shrink-0' />
              {!isCollapsed && <span>Logout</span>}
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content Area - Add mobile header */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        {/* Mobile Header Bar */}
        <div className='lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between'>
          <button
            id='mobile-menu-button'
            type='button'
            className='text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#800080] p-2 -ml-2'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle mobile menu'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          <div className='flex items-center gap-3'>
            <Image
              src={logo2}
              width={56}
              height={56}
              alt='DRID logo'
              className='h-8 w-10'
            />
            <span className='text-lg text-[#800080] md:text-2xl font-extrabold pt-3 tracking-wide'>
              DRID
            </span>
          </div>
          <div className='w-10 h-8 flex items-center justify-end'></div>
        </div>

        {/* Main Content */}
        <div className='flex-1 overflow-auto bg-white '>{children}</div>
      </div>
    </div>
  );
}