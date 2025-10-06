import axios, { AxiosRequestConfig } from "axios";
import { refreshUser } from "../auth/loginService";

const config: AxiosRequestConfig = {
  baseURL: process.env.BASE_URL || "https://research-server-1.onrender.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};
const getAccessToken = () => localStorage.getItem("__access");
const getRefreshToken = () => localStorage.getItem("__refresh");

const setAccessToken = (token: string) => {
  localStorage.setItem("__access", token);
};

const clearTokensAndRedirect = () => {
  localStorage.removeItem("__access");
  localStorage.removeItem("__refresh");
  window.location.href = "/login";
};

const axiosClient = axios.create(config);

axiosClient.interceptors.request.use((config) => {
  if (config.url?.startsWith("/api/")) {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();
        if (!refreshToken) throw new Error("No refresh token found");

        const newTokens = await refreshUser(refreshToken);

        if (newTokens && newTokens.__access) {
          setAccessToken(newTokens.__access);

          originalRequest.headers.Authorization = `Bearer ${newTokens.__access}`;
          return axiosClient(originalRequest);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        clearTokensAndRedirect();
      }
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
