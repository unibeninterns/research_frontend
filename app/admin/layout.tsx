"use client";
import AdminHeader from "@/components/admin/AdminHeader";
import Logo from "@/components/icons/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ChartNoAxesCombined,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FileBadge,
  FolderOpen,
  GraduationCap,
  LayoutDashboard,
  LibraryBig,
  ListChecks,
  LogOut,
  Settings,
  UserPen,
  Video,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const navigationItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
    pageHeader: "Greetings, Caleb",
  },
  {
    name: "Courses",
    href: "/admin/courses",
    icon: LibraryBig,
    pageHeader: "Courses",
  },
  {
    name: "Students",
    href: "/admin/students",
    icon: GraduationCap,
    pageHeader: "Student Management",
  },
  {
    name: "Tutors",
    href: "/admin/tutors",
    icon: UserPen,
    pageHeader: "Tutor Management",
  },
  {
    name: "Live Sessions",
    href: "/admin/sessions",
    icon: Video,
    pageHeader: "Live Sessions",
  },
  {
    name: "Quizzes",
    href: "/admin/quizzes",
    icon: ListChecks,
    pageHeader: "Quizzes",
  },
  {
    name: "Payments",
    href: "/admin/payments",
    icon: CreditCard,
    pageHeader: "Payments",
  },
  {
    name: "Analytics & Reports",
    href: "/admin/analytics",
    icon: ChartNoAxesCombined,
    pageHeader: "Analytics and Reports",
  },
  {
    name: "Resources",
    href: "/admin/resources",
    icon: FolderOpen,
    pageHeader: "Resources",
  },
  {
    name: "Certificates",
    href: "/admin/certificates",
    icon: FileBadge,
    pageHeader: "Certificates",
  },
];

const bottomItems = [
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
    pageHeader: "Settings",
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
      const sidebar = document.getElementById("mobile-sidebar");
      const menuButton = document.getElementById("mobile-menu-button");
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
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="flex h-screen w-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="bg-opacity-75 fixed inset-0 z-40 bg-gray-600 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        id="mobile-sidebar"
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <div className="flex items-center gap-4">
            <Logo size={56} />
            <span className="pt-4 text-xl font-extrabold tracking-wide text-[#800080] md:text-3xl">
              DRID
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(false)}
            className="h-8 w-8 p-1"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-1 flex-col justify-between p-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                    isActive
                      ? "bg-[#F9DBFF3D] text-[#800080]"
                      : "text-gray-700 hover:bg-gray-100",
                  )}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setPageHeader(item.pageHeader);
                  }}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <nav className="space-y-2">
            {bottomItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                    isActive
                      ? "bg-[#F9DBFF3D] text-[#800080]"
                      : "text-gray-700 hover:bg-gray-100",
                  )}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setPageHeader(item.pageHeader);
                  }}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            {/* Mobile Logout Button */}
            <button
              className="flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
              disabled
              title="Logout (not implemented)"
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden flex-col border-r border-gray-200 bg-white transition-all duration-300 lg:flex",
          isCollapsed ? "w-16" : "w-64",
        )}
      >
        {/* Desktop Header with Logo and Toggle */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          {!isCollapsed && (
            <div className="flex items-center gap-4">
              <Logo size={56} />
              <span className="pt-4 text-xl font-extrabold tracking-wide text-[#800080] md:text-3xl">
                DRID
              </span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 p-1"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="flex flex-1 flex-col justify-between p-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                    isActive
                      ? "bg-[#F9DBFF3D] text-[#800080]"
                      : "text-gray-700 hover:bg-gray-100",
                    isCollapsed && "justify-center",
                  )}
                  title={isCollapsed ? item.name : undefined}
                  onClick={() => {
                    setPageHeader(item.pageHeader);
                  }}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>

          <nav className="space-y-2">
            {bottomItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                    isActive
                      ? "bg-[#F9DBFF3D] text-[#800080]"
                      : "text-gray-700 hover:bg-gray-100",
                    isCollapsed && "justify-center",
                  )}
                  title={isCollapsed ? item.name : undefined}
                  onClick={() => {
                    setPageHeader(item.pageHeader);
                  }}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
            {/* Desktop Logout Button */}
            <button
              className={cn(
                "flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-left text-xs font-medium transition-colors",
                "text-gray-700 hover:bg-gray-100",
                isCollapsed && "justify-center",
              )}
              disabled
              title="Logout (not implemented)"
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>Logout</span>}
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content Area - Add mobile header */}
      <div className="flex h-full flex-1 flex-col overflow-x-hidden bg-white">
        {/* Mobile Header Bar */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 lg:hidden">
          <button
            id="mobile-menu-button"
            type="button"
            className="-ml-2 p-2 text-gray-500 hover:text-gray-600 focus:ring-2 focus:ring-[#800080] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex items-center gap-4">
            <Logo size={56} />
            <span className="pt-4 text-xl font-extrabold tracking-wide text-[#800080] md:text-3xl">
              DRID
            </span>
          </div>
          <div className="flex h-8 w-10 items-center justify-end"></div>
        </div>

        {/* Main Content */}
        <div className="h-full w-full overflow-x-hidden bg-white px-4 py-2">
          <AdminHeader pageHeader={pageHeader} />
          <div className="h-full w-full flex-1 bg-white">{children}</div>
        </div>
      </div>
    </div>
  );
}
