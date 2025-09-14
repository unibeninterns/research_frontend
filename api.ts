interface ApiResponse<T = any> {
    data?: any
    message?: string
    error?: string
    success?: boolean
    
  }
  
  interface RequestConfig {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
    headers?: Record<string, string>
    body?: any
    requiresAuth?: boolean
  }
  
  class ApiClient {
    private baseUrl = "https://research-server-1.onrender.com"
  
    private getAuthToken(): string | null {
      if (typeof window === "undefined") return null
      return localStorage.getItem("auth_token")
    }
  
    private getDefaultHeaders(requiresAuth = false): Record<string, string> {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      }
  
      if (requiresAuth) {
        const token = this.getAuthToken()
        if (token) {
          headers.Authorization = `Bearer ${token}`
        }
      }
  
      return headers
    }
  
    private async handleResponse<T>(response: Response): Promise<T> {
      const contentType = response.headers.get("content-type")
      const isJson = contentType?.includes("application/json")
  
      let data: any
      if (isJson) {
        data = await response.json()
      } else {
        data = await response.text()
      }
  
      if (!response.ok) {
        const errorMessage = data?.message || data?.error || `HTTP ${response.status}: ${response.statusText}`
        throw new Error(errorMessage)
      }
  
      return data
    }
  
    async request<T = any>(endpoint: string, config: RequestConfig = {}): Promise<T> {
      const { method = "GET", headers = {}, body, requiresAuth = false } = config
  
      const url = `${this.baseUrl}${endpoint}`
      const defaultHeaders = this.getDefaultHeaders(requiresAuth)
  
      const requestConfig: RequestInit = {
        method,
        headers: { ...defaultHeaders, ...headers },
      }
  
      if (body && method !== "GET") {
        requestConfig.body = typeof body === "string" ? body : JSON.stringify(body)
      }
  
      try {
        const response = await fetch(url, requestConfig)
        return await this.handleResponse<T>(response)
      } catch (error) {
        console.error(`API request failed: ${method} ${url}`, error)
        throw error
      }
    }
  
    async register(userData: {
      email: string
      fullname: string
      username: string
      password: string
      acceptedTermsOfUse: boolean
    }): Promise<ApiResponse> {
      return this.request("/auth/register", {
        method: "POST",
        body: userData,
      })
    }
  
    async login(credentials: {
      identifier: string
      password: string
    }): Promise<ApiResponse> {
      return this.request("/auth/login", {
        method: "POST",
        body: credentials,
      })
    }
  
    async logout(): Promise<ApiResponse> {
      return this.request("/auth/logout", {
        method: "POST",
        requiresAuth: true,
      })
    }
  
    async refreshToken(): Promise<ApiResponse> {
      return this.request("/auth/refresh", {
        method: "POST",
        requiresAuth: true,
      })
    }
  
    async forgotPassword(email: string): Promise<ApiResponse> {
      return this.request("/auth/forgot-password", {
        method: "POST",
        body: { email },
      })
    }
  
    async resetPassword(token: string, password: string): Promise<ApiResponse> {
      return this.request("/auth/reset-password", {
        method: "POST",
        body: { token, password },
      })
    }
  
    // User profile endpoints
    async getProfile(): Promise<ApiResponse> {
      return this.request("/user/profile", {
        requiresAuth: true,
      })
    }
  
    async updateProfile(
      userData: Partial<{
        fullname: string
        username: string
        email: string
      }>,
    ): Promise<ApiResponse> {
      return this.request("/user/profile", {
        method: "PUT",
        body: userData,
        requiresAuth: true,
      })
    }
  
    async changePassword(passwordData: {
      currentPassword: string
      newPassword: string
    }): Promise<ApiResponse> {
      return this.request("/user/change-password", {
        method: "POST",
        body: passwordData,
        requiresAuth: true,
      })
    }
  
    // Dashboard data endpoints
    async getDashboardStats(): Promise<ApiResponse> {
      return this.request("/dashboard/stats", {
        requiresAuth: true,
      })
    }
  
    async getStudents(params?: {
      page?: number
      limit?: number
      search?: string
      status?: string
    }): Promise<ApiResponse> {
      const queryParams = new URLSearchParams()
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined) {
            queryParams.append(key, value.toString())
          }
        })
      }
  
      const endpoint = `/students${queryParams.toString() ? `?${queryParams.toString()}` : ""}`
      return this.request(endpoint, {
        requiresAuth: true,
      })
    }
  
    async getCourses(params?: {
      page?: number
      limit?: number
      search?: string
    }): Promise<ApiResponse> {
      const queryParams = new URLSearchParams()
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined) {
            queryParams.append(key, value.toString())
          }
        })
      }
  
      const endpoint = `/courses${queryParams.toString() ? `?${queryParams.toString()}` : ""}`
      return this.request(endpoint, {
        requiresAuth: true,
      })
    }
  
    async getTutors(params?: {
      page?: number
      limit?: number
      search?: string
      type?: string
    }): Promise<ApiResponse> {
      const queryParams = new URLSearchParams()
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined) {
            queryParams.append(key, value.toString())
          }
        })
      }
  
      const endpoint = `/tutors${queryParams.toString() ? `?${queryParams.toString()}` : ""}`
      return this.request(endpoint, {
        requiresAuth: true,
      })
    }
  
    // Certificate endpoints
    async getCertificateRequests(): Promise<ApiResponse> {
      return this.request("/certificates/requests", {
        requiresAuth: true,
      })
    }
  
    async approveCertificate(certificateId: string): Promise<ApiResponse> {
      return this.request(`/certificates/${certificateId}/approve`, {
        method: "POST",
        requiresAuth: true,
      })
    }
  
    async rejectCertificate(certificateId: string, reason?: string): Promise<ApiResponse> {
      return this.request(`/certificates/${certificateId}/reject`, {
        method: "POST",
        body: { reason },
        requiresAuth: true,
      })
    }
  }
  
  // Create and export a singleton instance
  export const apiClient = new ApiClient()
  
  // Export individual methods for convenience
  export const {
    register,
    login,
    logout,
    refreshToken,
    forgotPassword,
    resetPassword,
    getProfile,
    updateProfile,
    changePassword,
    getDashboardStats,
    getStudents,
    getCourses,
    getTutors,
    getCertificateRequests,
    approveCertificate,
    rejectCertificate,
  } = apiClient
  