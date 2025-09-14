"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { apiClient } from "./api"

interface User {
  id: string
  email: string
  fullname: string
  username: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (identifier: string, password: string) => Promise<void>
  signup: (userData: SignupData) => Promise<void>
  logout: () => void
}

interface SignupData {
  email: string
  fullname: string
  username: string
  password: string
  acceptedTermsOfUse: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = !!user

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("auth_token")
      const userData = localStorage.getItem("user_data")

      if (token && userData) {
        try {
          setUser(JSON.parse(userData))
        } catch (error) {
          console.error("Error parsing user data:", error)
          localStorage.removeItem("auth_token")
          localStorage.removeItem("user_data")
        }
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const signup = async (userData: SignupData): Promise<void> => {
    setIsLoading(true)
    try {
      const response = await apiClient.register(userData)
  
      if (response.data?.token && response.data?.user) {
        const { token, user } = response.data
  
        localStorage.setItem("auth_token", token)
        localStorage.setItem("user_data", JSON.stringify(user))
  
        setUser(user)
      } else {
        throw new Error(response.data?.error || "Signup failed. Please try again.")
      }
    } catch (error: any) {
      console.error("Signup error:", error)
      throw new Error(
        error.response?.data?.error || "Signup failed. Please try again."
      )
    } finally {
      setIsLoading(false)
    }
  }
  
  
  const login = async (identifier: string, password: string): Promise<void> => {
    setIsLoading(true)
    try {
      const response = await apiClient.login({ identifier, password })
  
      const { token, user } = response.data
  
      localStorage.setItem("auth_token", token)
      localStorage.setItem("user_data", JSON.stringify(user))
  
      setUser(user)
    } catch (error) {
      console.error("Login error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }
  
  const logout = (): void => {
    apiClient.logout().catch(console.error)

    localStorage.removeItem("auth_token")
    localStorage.removeItem("user_data")
    setUser(null)
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    signup,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
