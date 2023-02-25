import { ReactNode } from "react";
import { IChat } from "./types.chat";

export interface IUserContext {
  showUserSearchModal: boolean;
  usersFound: IUser[] | undefined;
  setShowUserSearchModal: (isShow: boolean) => void;
  searchUser: string;
  userChats: IChat[] | undefined;
  setSearchUser: (name: string) => void;
  user: IUser;
  isLoading: boolean;
}

export interface IUser {
  uid: string;
  email: string;
  userName: string;
  profilePic: string;
}

export interface UserProviderProps {
  children: ReactNode;
}
