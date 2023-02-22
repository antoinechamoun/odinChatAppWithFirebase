import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { auth } from "../firebase/firebase";
import { IUser, IUserContext, UserProviderProps } from "../types/types.user";

export const UserContext = React.createContext({} as IUserContext);

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useLocalStorage<IUser>("userInfo", {
    userName: "",
    profilePic: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          userName: user.displayName as string,
          profilePic: user.photoURL as string,
        });
      } else {
        setUser({ userName: "", profilePic: "" });
      }
    });
    return () => unsubscribe();
  }, []);

  const changeUser = (name: string, url: string) => {
    setUser({ userName: name, profilePic: url });
  };

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};
