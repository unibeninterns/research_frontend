"use client"

import type React from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"

interface PublicRouteProps {
  children: React.ReactNode
  redirectTo?: string
  redirectIfAuthenticated?: boolean
}

export function PublicRoute({
  children,
  redirectTo = "/",
  redirectIfAuthenticated = true,
}: PublicRouteProps): React.JSX.Element {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && isAuthenticated && redirectIfAuthenticated) {
      router.push(redirectTo)
    }
  }, [isAuthenticated, isLoading, router, redirectTo, redirectIfAuthenticated])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
