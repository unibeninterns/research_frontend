import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: process.env.BASE_URL || "https://research-server-1.onrender.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosClient: AxiosInstance = axios.create(config);

axiosClient.interceptors.request.use((config) => {
  const protectedPaths: string[] = ["auth/user"];
  const requireAuth = protectedPaths.some((path) => config.url?.includes(path));
  if (requireAuth) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
  },
);

export default axiosClient;
