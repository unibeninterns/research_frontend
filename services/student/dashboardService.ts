import { DashboardData } from "@/interfaces/student/dashboard";
import axiosClient from "../axios/axios";

export const getDashBoardData = async () => {
  try {
    const response = await axiosClient.get("/api/dashboard");
    return response.data as DashboardData;
  } catch (e) {
    console.log(e);
  }
};
