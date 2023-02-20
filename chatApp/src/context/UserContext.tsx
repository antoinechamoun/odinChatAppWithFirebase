import React, { useContext, useEffect, useState } from "react";
import { IUser, IUserContext, UserProviderProps } from "../types/types.user";

export const UserContext = React.createContext({} as IUserContext);

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser>({ userName: "", profilePic: "" });

  const changeUser = (name: string, url: string) => {
    setUser({ userName: name, profilePic: url });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};
