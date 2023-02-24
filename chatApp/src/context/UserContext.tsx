import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import {
  auth,
  getUserChats,
  isUserDataAlreadySaved,
  searchForAUser,
  storeUserData,
} from "../firebase/firebase";
import { IChat } from "../types/types.chat";
import { IUser, IUserContext, UserProviderProps } from "../types/types.user";
import { capitalize } from "../utils/capitalize";

export const UserContext = React.createContext({} as IUserContext);

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useLocalStorage<IUser>("userInfo", {
    uid: "",
    email: "",
    userName: "",
    profilePic: "",
  });
  const [searchUser, setSearchUser] = useState("");
  const [showUserSearchModal, setShowUserSearchModal] = useState(false);
  const [usersFound, setUsersFound] = useState<IUser[]>();
  const [userChats, setUserChats] = useState<IChat[]>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        let userSnap: IUser = {
          uid: user.uid,
          email: user.email as string,
          userName: user.displayName as string,
          profilePic: user.photoURL as string,
        };
        setUser({
          uid: user.uid,
          email: user.email as string,
          userName: user.displayName as string,
          profilePic: user.photoURL as string,
        });
        isUserDataAlreadySaved(user.email as string).then((res) => {
          if (res) {
            storeUserData(userSnap);
          }
        });
        getUserChats(user.uid).then((res) => console.log(1, res));
      } else {
        setUser({ uid: "", email: "", userName: "", profilePic: "" });
      }
    });
    return () => unsubscribe();
  }, []);

  // search for user to start a chat with
  useEffect(() => {
    searchForAUser(capitalize(searchUser)).then((res) => {
      setUsersFound(res);
    });
  }, [searchUser]);

  return (
    <UserContext.Provider
      value={{
        user,
        usersFound,
        searchUser,
        setSearchUser,
        showUserSearchModal,
        setShowUserSearchModal,
      }}>
      {children}
    </UserContext.Provider>
  );
};
