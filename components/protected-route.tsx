"use client"

import type React from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Loader2 } from "lucide-react"

interface ProtectedRouteProps {
    children: React.ReactNode
    fallback?: React.ReactElement
    redirectTo?: string
  }
  

export function ProtectedRoute({ children, fallback, redirectTo = "/login" }: ProtectedRouteProps): React.ReactElement | null {
    const { isAuthenticated, isLoading } = useAuth()
    const router = useRouter()
  
    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        router.push(redirectTo)
      }
    }, [isAuthenticated, isLoading, router, redirectTo])
  
    if (isLoading) {
      return (
        fallback || (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin text-purple-600 mx-auto mb-4" />
              <p className="text-gray-600">Loading...</p>
            </div>
          </div>
        )
      )
    }
  
    if (!isAuthenticated) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600">Redirecting to login...</p>
          </div>
        </div>
      )
    }
  
    return <>{children}</>
  }
  