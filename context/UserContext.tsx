"use client";
import { Token, User } from "@/types/user";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export const UserContext = createContext<{
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  token: Token | null;
  setToken: Dispatch<SetStateAction<Token | null>>;
}>({ user: null, setUser: () => {}, token: null, setToken: () => {} });
const UserInfoComponent = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<Token | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserInfoComponent;
