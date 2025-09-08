'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Video,
  FolderOpen,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  LibraryBig,
  GraduationCap,
  ListChecks,
  UserPen,
  ChartNoAxesCombined,
  CreditCard,
  FileBadge,
} from 'lucide-react';
import Image from 'next/image';
import logo2 from '../../components/logo2.png';
import AdminHeader from '@/components/admin/AdminHeader';

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
    pageHeader: 'Greetings, Caleb',
  },
  {
    name: 'Courses',
    href: '/admin/courses',
    icon: LibraryBig,
    pageHeader: 'Courses',
  },
  {
    name: 'Students',
    href: '/admin/students',
    icon: GraduationCap,
    pageHeader: 'Student Management',
  },
  {
    name: 'Tutors',
    href: '/admin/tutors',
    icon: UserPen,
    pageHeader: 'Tutor Management',
  },
  {
    name: 'Live Sessions',
    href: '/admin/sessions',
    icon: Video,
    pageHeader: 'Live Sessions',
  },
  {
    name: 'Quizzes',
    href: '/admin/quizzes',
    icon: ListChecks,
    pageHeader: 'Quizzes',
  },
  {
    name: 'Payments',
    href: '/admin/payments',
    icon: CreditCard,
    pageHeader: 'Payments',
  },
  {
    name: 'Analytics & Reports',
    href: '/admin/analytics',
    icon: ChartNoAxesCombined,
    pageHeader: 'Analytics and Reports',
  },
  {
    name: 'Resources',
    href: '/admin/resources',
    icon: FolderOpen,
    pageHeader: 'Resources',
  },
  {
    name: 'Certificates',
    href: '/admin/certificates',
    icon: FileBadge,
    pageHeader: 'Certificates',
  },
];

const bottomItems = [
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
    pageHeader: 'Settings',
  },
];

interface StudentLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: StudentLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pageHeader, setPageHeader] = useState(navigationItems[0].pageHeader);
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
    <div className='flex h-screen bg-gray-50 w-screen'>
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
        <div className='p-4 border-b border-gray-200 flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image
              src={logo2}
              width={56}
              height={56}
              alt='DRID logo'
              className='h-10 w-12'
            />
            <span className='text-xl text-[#800080] md:text-3xl font-extrabold pt-4 tracking-wide'>
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
        <div className='flex-1 flex flex-col justify-between p-4'>
          <nav className='space-y-2'>
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[#F9DBFF3D] text-[#800080]'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setPageHeader(item.pageHeader);
                  }}
                >
                  <item.icon className='h-5 w-5 flex-shrink-0' />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <nav className='space-y-2'>
            {bottomItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[#F9DBFF3D] text-[#800080]'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setPageHeader(item.pageHeader);
                  }}
                >
                  <item.icon className='h-5 w-5 flex-shrink-0' />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            {/* Mobile Logout Button */}
            <button
              className='flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full text-left text-gray-700 hover:bg-gray-100'
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
          isCollapsed ? 'w-16' : 'w-64'
        )}
      >
        {/* Desktop Header with Logo and Toggle */}
        <div className='p-4 border-b border-gray-200 flex items-center justify-between'>
          {!isCollapsed && (
            <div className='flex items-center gap-4'>
              <Image
                src={logo2}
                width={56}
                height={56}
                alt='DRID logo'
                className='h-10 w-12'
              />
              <span className='text-xl text-[#800080] md:text-3xl font-extrabold pt-4 tracking-wide'>
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
        <div className='flex-1 flex flex-col justify-between p-4'>
          <nav className='space-y-2'>
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[#F9DBFF3D] text-[#800080]'
                      : 'text-gray-700 hover:bg-gray-100',
                    isCollapsed && 'justify-center'
                  )}
                  title={isCollapsed ? item.name : undefined}
                  onClick={() => {
                    setPageHeader(item.pageHeader);
                  }}
                >
                  <item.icon className='h-5 w-5 flex-shrink-0' />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>

          <nav className='space-y-2'>
            {bottomItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[#F9DBFF3D] text-[#800080]'
                      : 'text-gray-700 hover:bg-gray-100',
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
                'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full text-left',
                'text-gray-700 hover:bg-gray-100',
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
      <div className='flex-1 flex flex-col overflow-x-hidden h-full bg-white'>
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
          <div className='flex items-center gap-4'>
            <Image
              src={logo2}
              width={56}
              height={56}
              alt='DRID logo'
              className='h-10 w-12'
            />
            <span className='text-xl text-[#800080] md:text-3xl font-extrabold pt-4 tracking-wide'>
              DRID
            </span>
          </div>
          <div className='w-10 h-8 flex items-center justify-end'></div>
        </div>

        {/* Main Content */}
        <div className='px-4 py-2 bg-white h-full overflow-x-hidden w-full'>
          <AdminHeader pageHeader={pageHeader} />
          <div className='flex-1 bg-white w-full h-full'>{children}</div>
        </div>
      </div>
    </div>
  );
}
