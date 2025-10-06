"use client";
import { Token, User } from "@/interfaces/auth/user";
import { getUserInfo } from "@/services/auth/loginService";
import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export const UserContext = createContext<{
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  token: Token | null;
  setToken: Dispatch<SetStateAction<Token | null>>;
}>({ user: null, setUser: () => {}, token: null, setToken: () => {} });

const UserInfoComponent = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<Token | null>(null);
  const { data } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
  });
  useEffect(() => {
    if (data) setUser(data);
  }, [data]);
  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserInfoComponent;
