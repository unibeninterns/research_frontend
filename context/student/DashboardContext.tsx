import { DashboardData } from "@/interfaces/student/dashboard";
import { getDashBoardData } from "@/services/student/dashboardService";
import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export const DashboardContext = createContext<{
  dashboardData: DashboardData | null;
  setDashboardData: Dispatch<SetStateAction<DashboardData | null>>;
}>({ dashboardData: null, setDashboardData: () => {} });

const DashboardInfoComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null,
  );
  const { data } = useQuery({
    queryKey: ["dashboaard"],
    queryFn: getDashBoardData,
  });

  useEffect(() => {
    if (data) setDashboardData(data);
  }, [data]);
  return (
    <DashboardContext.Provider value={{ dashboardData, setDashboardData }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardInfoComponent;
